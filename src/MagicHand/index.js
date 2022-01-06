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
  }

  start() {
    this.resize();
    this.initHands();
    this.initCamera();
    this.hands.onResults(this.onResults.bind(this));
    this.handleEventListener();
  }

  debug() {
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

  onResults(results) {
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
        if (landmarks[0]) {
          console.log(landmarks[0]["x"], landmarks[0]["y"], landmarks[0]["z"]);
        }
      }
    }
    this.ctx.restore();
    // const { multiHandLandmarks: data } = results;
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
