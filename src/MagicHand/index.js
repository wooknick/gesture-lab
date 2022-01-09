import { Hands, HAND_CONNECTIONS } from "@mediapipe/hands";
import { Camera } from "@mediapipe/camera_utils";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";

import "./style.scss";

class MagicHand {
  constructor() {
    // Elements
    this.videoElm = document.createElement("video");
    this.videoElm.id = "input";
    document.body.appendChild(this.videoElm);
    this.canvas = document.createElement("canvas");
    this.canvas.id = "debug";
    this.ctx = this.canvas.getContext("2d");
    // LifeCycle
    this.isDebug = false;
    // Detection Data
    this.handIdx = {
      0: undefined,
      1: undefined,
    };
    this.existHand = {
      left: false,
      right: false,
    };
    this.handPose = {
      left: "noexist",
      right: "noexist",
    };
    this.handPosition = {
      left: [],
      right: [],
    };
  }

  start() {
    this.resize();
    this.initHands();
    this.initCamera();
    this.hands.onResults(this.onResults.bind(this));
    this.handleEventListener();
  }

  debug() {
    this.isDebug = true;
    document.body.appendChild(this.canvas);
  }

  initHands() {
    this.hands = new Hands({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
      },
    });
    this.hands.setOptions({
      maxNumHands: 2,
      modelComplexity: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
      selfieMode: true,
    });
  }

  initCamera() {
    this.camera = new Camera(this.videoElm, {
      onFrame: async () => {
        await this.hands.send({ image: this.videoElm });
      },
      width: 1280,
      height: 720,
    });
    this.camera.start();
  }

  debugResult(results) {
    this.ctx.save();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "#3a3d45";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    // this.ctx.drawImage(
    //   results.image,
    //   0,
    //   0,
    //   this.canvas.width,
    //   this.canvas.height
    // );
    if (results.multiHandLandmarks) {
      for (const landmarks of results.multiHandLandmarks) {
        drawConnectors(this.ctx, landmarks, HAND_CONNECTIONS, {
          color: "#00FF00",
          lineWidth: 5,
        });
        drawLandmarks(this.ctx, landmarks, { color: "#FF0000", lineWidth: 2 });
      }
    }
    this.ctx.restore();
  }

  onResults(results) {
    if (this.isDebug) {
      this.debugResult(results);
    }

    this.existHand = {
      left: false,
      right: false,
    };

    const { multiHandLandmarks, multiHandWorldLandmarks, multiHandedness } =
      results;

    // Left or Right
    for (let i = 0; i < 2; i++) {
      const hand = multiHandedness[i];
      if (hand) {
        this.handIdx[i] = `${hand.label}`.toLowerCase();
      } else {
        this.handIdx[i] = undefined;
      }
    }
    for (let i = 0; i < 2; i++) {
      const hand = this.handIdx[i]; // left or right
      if (hand) {
        this.existHand[hand] = true;
        const landmark = multiHandLandmarks[i];
        const worldLandmark = multiHandWorldLandmarks[i];
        if (landmark) {
          this.handPose[hand] = this.findGesture({ landmark, worldLandmark });
        } else {
          this.handPose[hand] = "unknown";
        }
      }
    }
    // 보이지 않는 손 초기화
    if (!this.existHand.left) {
      this.handPose.left = "noexist";
    }
    if (!this.existHand.right) {
      this.handPose.right = "noexist";
    }
  }

  findGesture({ landmark, worldLandmark }) {
    if (isStretchBack(worldLandmark)) {
      return "stretchBack";
    } else if (isStand(landmark)) {
      return "stand";
    } else {
      return "unknown";
    }

    function isStand(landmark) {
      // 평범하게 손을 들고 있는 상태 트리거
      let ret = true;
      if (
        landmark[7].y < landmark[8].y ||
        landmark[11].y < landmark[12].y ||
        landmark[15].y < landmark[16].y ||
        landmark[19].y < landmark[20].y
      ) {
        ret = false;
      }
      return ret;
    }

    function isStretchBack(landmark) {
      // 농구공을 들듯 손을 당기는 제스쳐
      let ret = false;
      // console.log(
      //   Math.floor(landmark[0].z * 10000) - Math.floor(landmark[9].z * 10000)
      // );
      if (
        Math.floor(landmark[0].z * 10000) - Math.floor(landmark[9].z * 10000) <
        -100
      ) {
        ret = true;
      }

      return ret;
    }
  }

  onGesture(callback) {
    setInterval(callback.bind(this, this.handPose), 1000 / 24);
  }

  onPosition(callback) {
    setInterval(callback.bind(this, this.handPosition), 1000 / 24);
  }

  handleEventListener() {
    window.addEventListener("resize", this.resize.bind(this));
  }

  resize() {
    this.size = { width: window.innerWidth, height: window.innerHeight };
    this.canvas.width = this.size.width;
    this.canvas.height = this.size.height;
  }
}

export default MagicHand;
