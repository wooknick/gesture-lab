class Boid {
  constructor(x, y, angle, gen, boids) {
    // 초기값 설정
    // x, y : 그리기 시작점
    // angle, dx, dy : 랜덤 설정된 각도에 따라 거리 1만큼 이동시키기 위한 x, y 델타값
    // stride : 한 틱당 그릴 선분의 길이를 정하기 위한 보폭.
    //        값이 클 수록 한 번에 길게 그리므로, 더 적은 틱으로 수행 가능하다.
    // life, gen : 나중에 추가되는 자식일수록 gen이 높고, gen이 life보다 높으면 바로 kill()한다.
    //            프랙탈 구조가 너무 좁게 들어가는 걸 방지함.
    // dead : 계속 그릴지, 삭제할지를 판단하는 플래그
    // dist : 시작점과 캔버스 중심과의 거리
    // hue : 색상 관련

    this.x = x;
    this.y = y;
    this.angle = Math.pow(Math.random(), 10) + angle;
    this.dx = Math.cos(this.angle);
    this.dy = Math.sin(this.angle);
    this.stride = 4;
    this.life = Math.random() * 30 + 10;
    this.gen = gen;
    this.dead = false;
    this.dist = this.getDistance(
      this.x,
      this.y,
      window.innerWidth / 2,
      window.innerHeight / 2
    );
    this.hue = Math.random() * 120;
    this.boids = boids;
  }

  // update함수가 실행되면서 선이 그려진다.

  update(roadsCtx, watercolorCtx, data) {
    roadsCtx.strokeStyle = "#808080";
    roadsCtx.beginPath();
    roadsCtx.moveTo(this.x, this.y);

    this.x += this.dx * this.stride;
    this.y += this.dy * this.stride;

    this.dist = this.getDistance(
      this.x,
      this.y,
      window.innerWidth / 2,
      window.innerHeight / 2
    );

    roadsCtx.lineTo(this.x, this.y);
    roadsCtx.stroke();

    // trail : 음영 색 길이
    // var trail = Math.random() * ((50 - 10) * ((this.dist / width) * 2)) + 10;
    var trail = (Math.random() * Math.random() * 20 + 10) / 5;
    var color = { h: this.hue, s: "60%", l: "50%" };
    watercolorCtx.strokeStyle =
      "hsla(" + color.h + "," + color.s + "," + color.l + ",0.1)";
    watercolorCtx.lineWidth = 2;
    // trail은 한 번 그릴 때 5개씩 생기도록 함
    for (var i = 0; i < 5; i++) {
      watercolorCtx.beginPath();
      watercolorCtx.moveTo(this.x, this.y);
      var px = this.x + Math.cos(this.angle + 90) * (i * trail);
      var py = this.y + Math.sin(this.angle + 90) * (i * trail);
      watercolorCtx.lineTo(px, py);
      watercolorCtx.stroke();
    }

    // index : 한 획을 그렸을 때, 펜이 떨어지는 위치의 좌표 값.
    // ctx.getImageData.data 를 통해 얻어지는 1차원 행렬에 저장되어 있는 픽셀정보와 매핑됨
    // 바로 직전의 drawing() 결과와 비교함.
    // 픽셀정보 행렬에는 4개의 값이 하나의 픽셀을 표현함.
    var index =
      (Math.floor(this.x) + window.innerWidth * Math.floor(this.y)) * 4;

    // kill 조건
    // 너무 세부적인 반복인 경우
    if (this.gen >= this.life) this.kill();

    // 펜을 뗀 픽셀의 알파가 0이 아닌 경우
    if (data[index + 3] > 0) {
      this.kill();
    }

    // 벽에 부딪힐 경우
    if (this.x < 0 || this.x > window.innerWidth) this.kill();
    if (this.y < 0 || this.y > window.innerHeight) this.kill();
  }

  // 배열에서 제거
  kill() {
    this.boids.splice(this.boids.indexOf(this), 1);
    this.dead = true;
  }

  // functions
  getDistance(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
  }
}

class Game {
  constructor() {
    // Elements
    this.canvas = document.createElement("canvas");
    this.canvas.id = "drawing";
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    //
    this.roadsCanvas = document.createElement("canvas");
    this.roadsCanvas.width = window.innerWidth;
    this.roadsCanvas.height = window.innerHeight;
    this.roadsCtx = this.roadsCanvas.getContext("2d");
    //
    this.watercolorCanvas = document.createElement("canvas");
    this.watercolorCanvas.width = window.innerWidth;
    this.watercolorCanvas.height = window.innerHeight;
    this.watercolorCtx = this.watercolorCanvas.getContext("2d");
    //
    this.image;
    this.data;
    this.drawingId = -1;
    this.boids = [];
  }

  boom(x, y) {
    this.boids.push(
      new Boid(x, y, (Math.random() * 180 * Math.PI) / 180, 0, this.boids)
    );
    if (this.drawingId === -1) {
      this.drawingId = setInterval(() => {
        this.drawing(0.015, 400);
      }, 1000 / 60);
    }
  }

  drawing(bubbleFrequency = 0.01, boidsLength = 400) {
    // 직전 틱의 canvas 상태를 가져온다.
    this.image = this.roadsCtx.getImageData(
      0,
      0,
      window.innerWidth,
      window.innerHeight
    );
    this.data = this.image.data;
    for (var i = 0; i < this.boids.length; i++) {
      const boid = this.boids[i];
      boid.update(this.roadsCtx, this.watercolorCtx, this.data);
      // 매 틱마다 2% 확률로 새로운 직선을 추가함.
      // 완성된 직선에서 추가하는게 아니고 조금씩 그려가는 와중에 추가하는 것.
      if (
        !boid.dead &&
        Math.random() < bubbleFrequency &&
        this.boids.length < boidsLength
      ) {
        this.boids.push(
          new Boid(
            boid.x,
            boid.y,
            ((Math.random() > 0.5 ? 90 : -90) * Math.PI) / 180 + boid.angle,
            boid.gen + 1,
            this.boids
          )
        );
      }
    }
    // 메인 캔버스에 그림을 그린다.
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    this.ctx.globalAlpha = 0.5;
    this.ctx.drawImage(this.watercolorCanvas, 0, 0);
    this.ctx.globalAlpha = 1;
    this.ctx.drawImage(this.roadsCanvas, 0, 0);

    if (this.boids.length == 0) {
      clearInterval(this.drawingId);
      this.drawingId = -1;
      console.log("done");
    }
  }
}

export default Game;
