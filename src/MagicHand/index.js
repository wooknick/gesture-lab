import { Hands, HAND_CONNECTIONS } from "@mediapipe/hands";
import { Camera } from "@mediapipe/camera_utils";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import {
  isFist,
  isRockNRoll,
  isStand,
  isStretchBack,
  isVictory,
} from "./gestureValidation";
import "./style.scss";

class MagicHand {
  constructor(target) {
    // Elements
    this.videoElm = document.createElement("video");
    this.videoElm.id = "input";
    document.body.appendChild(this.videoElm);
    this.canvas = document.createElement("canvas");
    this.canvas.id = "debug";
    this.ctx = this.canvas.getContext("2d");
    this.target = target;
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
    this.availableGesture = [
      "stand",
      "stretchBack",
      "rockNRoll",
      "victory",
      "fist",
    ];
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
    this.target.appendChild(this.canvas);
  }

  getAvailableGesture() {
    return this.availableGesture;
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
      width: 1920,
      height: 1080,
    });
    this.camera.start();
  }

  debugResult(results) {
    this.ctx.save();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "transparent";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    // this.ctx.drawImage(
    //   results.image,
    //   0,
    //   0,
    //   this.canvas.width,
    //   this.canvas.height
    // );
    if (results.multiHandLandmarks) {
      const { multiHandLandmarks } = results;
      for (let i = 0; i < 2; i++) {
        const landmark = multiHandLandmarks[i];
        const hand = this.handIdx[i]; // left or right
        if (hand) {
          drawConnectors(this.ctx, landmark, HAND_CONNECTIONS, {
            color: hand === "left" ? "#006E7F" : "#112B3C",
            lineWidth: 5,
          });
          drawLandmarks(this.ctx, landmark, {
            color: hand === "left" ? "#73777B" : "#205375",
            lineWidth: 2,
          });
        }
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
          this.handPosition[hand] = this.findPosition({ landmark });
        } else {
          this.handPose[hand] = "unknown";
          this.handPosition[hand] = [];
        }
      }
    }
    // 보이지 않는 손 초기화
    if (!this.existHand.left) {
      this.handPose.left = "noexist";
      this.handPosition.left = [];
    }
    if (!this.existHand.right) {
      this.handPose.right = "noexist";
      this.handPosition.right = [];
    }
  }

  findGesture({ landmark, worldLandmark }) {
    if (isRockNRoll(landmark)) {
      return "rockNRoll";
    } else if (isVictory(landmark)) {
      return "victory";
    } else if (isFist(landmark)) {
      return "fist";
    } else if (isStretchBack(worldLandmark)) {
      return "stretchBack";
    } else if (isStand(landmark)) {
      return "stand";
    } else {
      return "unknown";
    }
  }

  findPosition({ landmark }) {
    const ret = [];
    [4, 8, 12, 16, 20].forEach((idx) => {
      const p = {
        x: landmark[idx].x,
        y: landmark[idx].y,
      };
      ret.push(p);
    });
    return ret;
  }

  onGesture(callback) {
    setInterval(callback.bind(this, this.handPose), 1000 / 24);
  }

  onPosition(callback) {
    setInterval(callback.bind(this, this.handPosition), 1000 / 24);
    // setInterval(callback.bind(this, this.handPosition), 5000);
  }

  handleEventListener() {
    window.addEventListener("resize", this.resize.bind(this));
  }

  resize() {
    this.size = {
      width: this.target.clientWidth,
      height: this.target.clientHeight,
    };
    this.canvas.width = this.size.width;
    this.canvas.height = this.size.height;
  }

  /**
   * Utils
   */
  distance(a1, b1, c1, a2, b2, c2) {
    var x_dist = a2 - a1;
    var y_dist = b2 - b1;
    var z_dist = c2 - c1;
    return Math.sqrt(
      Math.pow(Math.abs(x_dist), 2) +
        Math.pow(Math.abs(y_dist), 2) +
        Math.pow(Math.abs(z_dist), 2)
    );
  }

  distance2(from, to) {
    return Math.sqrt(
      Math.pow(Math.abs(from.x - to.x), 2) +
        Math.pow(Math.abs(from.y - to.y), 2) +
        Math.pow(Math.abs(from.z - to.z), 2)
    );
  }
}

export default MagicHand;
