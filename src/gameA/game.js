import MagicHand from "../MagicHand";
import {
  Engine,
  Render,
  Runner,
  Bodies,
  Body,
  Composite,
  World,
  Composites,
  Common,
  Mouse,
  MouseConstraint,
} from "matter-js";

class PunchGame {
  constructor(debug) {
    this.sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  init() {
    this.engine = Engine.create();
    this.world = this.engine.world;
    this.render = Render.create({
      element: document.body,
      engine: this.engine,
      options: {
        width: this.sizes.width,
        height: this.sizes.height,
        // showAngleIndicator: true,
        // showCollisions: true,
        // showVelocity: true,
        wireframes: false,
      },
    });
    this.canvas = this.render.canvas;
    this.runner = Runner.create();
  }

  start() {
    this.init();
    Render.run(this.render);
    Runner.run(this.runner, this.engine);
    this.drawWorld();
    this.addMouse();
    this.handleEventListener();
  }

  drawWorld() {
    // 바닥
    const ground = Bodies.rectangle(
      this.sizes.width / 2,
      this.sizes.height,
      this.sizes.width,
      100,
      { isStatic: true }
    );
    const wall = [
      Bodies.rectangle(0, this.sizes.height / 2, 100, this.sizes.height, {
        isStatic: true,
      }),
      Bodies.rectangle(
        this.sizes.width,
        this.sizes.height / 2,
        100,
        this.sizes.height,
        {
          isStatic: true,
        }
      ),
    ];

    this.balls = Composites.stack(
      this.sizes.width / 3,
      -3000,
      12,
      40,
      10,
      10,
      function (x, y) {
        return Bodies.circle(x, y, Common.random(15, 60), {
          restitution: 0.6,
          friction: 0.1,
        });
      }
    );

    Composite.add(this.world, [ground, ...wall, this.balls]);
  }

  cleanWorld() {
    World.clear(this.world, false);
  }

  addMouse() {
    this.mouse = Mouse.create(this.render.canvas);
    this.mouseConstraint = MouseConstraint.create(this.engine, {
      mouse: this.mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    Composite.add(this.world, this.mouseConstraint);

    // keep the mouse in sync with rendering
    this.render.mouse = this.mouse;
  }

  impact(point) {
    console.log(point);
    const ballsInArea = this.balls.bodies.filter((ball) => {
      if (this.distance(point, ball.position) < 300) {
        return true;
      } else {
        return false;
      }
    });
    ballsInArea.forEach((ball) => {
      Body.applyForce(ball, point, this.calculateForce(ball.position, point));
    });
  }

  calculateForce(from, to, factor = 0.01) {
    const force = {
      x: (from.x - to.x) * factor,
      y: (from.y - to.y) * factor,
    };

    return force;
  }

  distance(from, to) {
    return Math.sqrt(Math.pow(from.x - to.x, 2) + Math.pow(from.y - to.y, 2));
  }

  handleEventListener() {
    window.addEventListener("resize", () => {
      if (this.resizeT) {
        clearTimeout(this.resizeT);
      }
      this.resizeT = setTimeout(this.resize.bind(this), 300);
    });
    window.addEventListener("click", (e) => {
      const { clientX, clientY } = e;
      this.impact({ x: clientX, y: clientY });
    });
  }

  resize() {
    // Update sizes
    this.sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    this.canvas.width = this.sizes.width;
    this.canvas.height = this.sizes.height;
    this.cleanWorld();
    this.drawWorld();
  }
}

document.body.onload = () => {
  const punch = new PunchGame();
  punch.start();
  const magicHand = new MagicHand(document.body);
  magicHand.start();
  magicHand.debug();
  magicHand.onGesture(handleGesture);
  magicHand.onPosition(handlePosition);

  const state = {
    left: {
      gesture: "",
      ready: false,
    },
    right: {
      gesture: "",
      ready: false,
    },
  };

  function handleGesture({ left, right }) {
    state.left.gesture = left;
    state.right.gesture = right;
    // console.log(`Left is ${gesture.left}`);
    // console.log(`Right is ${gesture.right}`);
  }

  function handlePosition({ left, right }) {
    // console.log(left[0], right[0]);
    // console.log(left, right);

    const PUNCH_FIST_SIZE = 17;

    if (state.right.gesture === "") {
      if (state.right.ready) {
        state.right.ready = false;
      }
    } else if (right.length > 0) {
      if (getFistSize(...right) < PUNCH_FIST_SIZE) {
        state.right.ready = true;
      } else {
        if (state.right.ready) {
          punch.impact(getFistCenter(...right));
          state.right.ready = false;
        }
      }
    }
    if (state.left.gesture === "") {
      if (state.left.ready) {
        state.left.ready = false;
      }
    } else if (left.length > 0) {
      if (getFistSize(...left) < PUNCH_FIST_SIZE) {
        state.left.ready = true;
      } else {
        if (state.left.ready) {
          punch.impact(getFistCenter(...left));
          state.left.ready = false;
        }
      }
    }
    // console.log(state.left, state.right);
  }

  function getFistSize(A, B, C, D) {
    const size = distance2d(A, C) * distance2d(B, D);
    return Math.floor(size * 1000);
  }

  function getFistCenter(A, B, C, D) {
    const xs = [A.x, B.x, C.x, D.x].sort();
    const ys = [A.y, B.y, C.y, D.y].sort();

    return {
      x: window.innerWidth * ((xs[3] + xs[0]) / 2),
      y: window.innerHeight * ((ys[3] + ys[0]) / 2),
    };
  }

  function getRadius(A, B, C) {
    const yDelta_a = B.y - A.y;
    const xDelta_a = B.x - A.x;
    const yDelta_b = C.y - B.y;
    const xDelta_b = C.x - B.x;

    const center = {};

    const aSlope = yDelta_a / xDelta_a;
    const bSlope = yDelta_b / xDelta_b;

    center.x =
      (aSlope * bSlope * (A.y - C.y) +
        bSlope * (A.x + B.x) -
        aSlope * (B.x + C.x)) /
      (2 * (bSlope - aSlope));
    center.y = (-1 * (center.x - (A.x + B.x) / 2)) / aSlope + (A.y + B.y) / 2;

    const radius = Math.sqrt(
      Math.pow(A.x - center.x, 2) + Math.pow(A.y - center.y, 2)
    );
    return Math.floor(radius * 100);
  }

  function distance2d(from, to) {
    return Math.sqrt(Math.pow(from.x - to.x, 2) + Math.pow(from.y - to.y, 2));
  }
};
