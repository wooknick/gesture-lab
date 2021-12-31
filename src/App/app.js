import { Hands, HAND_CONNECTIONS } from "@mediapipe/hands";
import { Camera } from "@mediapipe/camera_utils";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import * as THREE from "three";
import Game from "./game";

class App {
  constructor() {
    // Elements
    this.videoElm = document.createElement("video");
    document.body.appendChild(this.videoElm);
    this.canvas = document.createElement("canvas");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    // Detection
    this.ready = false;
    this.passHalf = false;
    this.passHalfTime = 0;
    this.do = false;
    this.doPoint = { x: 0, y: 0 };
    // Game
    this.game = new Game();
  }

  init() {
    this.initHands();
    this.initCamera();
    this.hands.onResults(this.onResults.bind(this));
    this.animate();
  }

  initHands() {
    this.hands = new Hands({
      locateFile: (file) => {
        // return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
      },
    });
    this.hands.setOptions({
      maxNumHands: 1,
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
    this.ctx.drawImage(
      results.image,
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );
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
    const { multiHandLandmarks: data } = results;
    this.calculate(data);
  }

  calculate(landmarksData) {
    if (landmarksData.length === 0) {
      return;
    }
    const points = landmarksData[0]
      .filter((data, idx) => [4, 8, 12, 16, 20].includes(idx))
      .map((data) => new THREE.Vector3(data.x, data.y, data.z));
    // console.log(points);

    const distances = [];
    for (let i = 0; i < points.length - 1; i++) {
      for (let j = i + 1; j < points.length; j++) {
        distances.push(points[i].distanceTo(points[j]));
      }
    }
    const maxDistance = Math.max(...distances);
    const minDistance = Math.min(...distances);
    if (!this.ready && maxDistance < 0.1) {
      this.ready = true;
      this.do = false;
      this.passHalf = false;
      this.passHalfTime = 0;

      //   this.doPoint = { x: data[0][0]["x"], y: data[0][0]["y"] };
    }
    if (
      this.ready &&
      !this.passHalf &&
      maxDistance > 0.07 &&
      minDistance > 0.05
    ) {
      this.passHalf = true;
      this.doPoint = points.reduce(
        (acc, cur, idx) => {
          return {
            x: (acc.x * idx + cur.x) / (idx + 1),
            y: (acc.y * idx + cur.y) / (idx + 1),
          };
        },
        { x: 0, y: 0 }
      );
    }
    if (this.ready && maxDistance > 0.15 && minDistance > 0.075) {
      this.ready = false;
      this.do = true;
    }
  }

  animate(t) {
    if (this.passHalf && this.passHalfTime === 0) {
      this.passHalfTime = t;
    }
    if (this.do && t - this.passHalfTime < 30) {
      console.log("boom");
      this.game.boom(
        this.doPoint.x * window.innerWidth,
        this.doPoint.y * window.innerHeight
      );
      this.passHalf = false;
      this.do = false;
    }
    window.requestAnimationFrame(this.animate.bind(this));
  }
}

document.body.onload = () => {
  const app = new App();
  app.init();
};
