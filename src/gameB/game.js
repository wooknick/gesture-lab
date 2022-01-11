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
  Constraint,
  Mouse,
  MouseConstraint,
} from "matter-js";
import * as queryString from "query-string";

class Marionette {
  constructor(debug) {
    this.sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    this.isDebug = debug;
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
    Composite.add(this.world, [ground]);
    this.dollA = [];
    this.dollB = [];
    this.controlPointA = [];
    this.controlPointB = [];
    this.drawDoll(this.dollA);
    this.drawDoll(this.dollB);
    this.controlDoll(this.dollA, this.controlPointA);
    this.controlDoll(this.dollB, this.controlPointB);
    this.addMouse();
  }

  drawDoll(doll) {
    // 인형
    const bodyGroup = Body.nextGroup(true);

    // 인형 머리
    const head = Bodies.circle(this.sizes.width / 2, 100, 50, {
      collisionFilter: { group: bodyGroup },
    });
    // Composite.add(
    //   this.world,
    //   Constraint.create({
    //     bodyB: head,
    //     pointB: { x: 0, y: -50 },
    //     pointA: {
    //       x: head.position.x,
    //       y: 30,
    //     },
    //     stiffness: 0.5,
    //   })
    // );
    doll.push(head);

    // 인형 몸
    const body = Bodies.rectangle(this.sizes.width / 2 + 10, 300, 40, 200, {
      collisionFilter: { group: bodyGroup },
    });
    Composite.add(
      this.world,
      Constraint.create({
        bodyA: head,
        bodyB: body,
        pointA: {
          x: 0,
          y: 50,
        },
        pointB: { x: 0, y: -100 },
        stiffness: 0.02,
        length: 10,
      })
    );
    doll.push(body);

    // 인형 왼쪽 팔
    const leftArm = Composites.stack(
      this.sizes.width / 2 - 200,
      100,
      1,
      2,
      10,
      10,
      function (x, y) {
        return Bodies.rectangle(x, y, 20, 80, {
          collisionFilter: { group: bodyGroup },
        });
      }
    );
    Composites.chain(leftArm, 0, 0.5, 0, -0.5, {
      stiffness: 0.8,
      length: 10,
      render: { type: "line" },
    });
    Composite.add(
      leftArm,
      Constraint.create({
        bodyA: body,
        bodyB: leftArm.bodies[0],
        pointA: {
          x: -20,
          y: -100,
        },
        pointB: { x: 0, y: -40 },
        stiffness: 0.5,
        length: 2,
      })
    );
    doll.push(leftArm);

    // 인형 왼쪽 손
    const leftHand = Bodies.circle(this.sizes.width / 2 - 300, 500, 15, {
      collisionFilter: { group: bodyGroup },
    });
    Composite.add(
      this.world,
      Constraint.create({
        bodyA: leftHand,
        bodyB: leftArm.bodies[1],
        pointA: {
          x: 0,
          y: -15,
        },
        pointB: { x: 0, y: 40 },
        stiffness: 0.5,
        length: 2,
      })
    );
    doll.push(leftHand);

    // 인형 오른쪽 팔
    const rightArm = Composites.stack(
      this.sizes.width / 2 + 200,
      100,
      1,
      2,
      10,
      10,
      function (x, y) {
        return Bodies.rectangle(x, y, 20, 80, {
          collisionFilter: { group: bodyGroup },
        });
      }
    );
    Composites.chain(rightArm, 0, 0.5, 0, -0.5, {
      stiffness: 0.8,
      length: 10,
      render: { type: "line" },
    });
    Composite.add(
      rightArm,
      Constraint.create({
        bodyA: body,
        bodyB: rightArm.bodies[0],
        pointA: {
          x: 20,
          y: -100,
        },
        pointB: { x: 0, y: -40 },
        stiffness: 0.5,
        length: 2,
      })
    );
    doll.push(rightArm);

    // 인형 오른쪽 손
    const rightHand = Bodies.circle(this.sizes.width / 2 + 300, 500, 15, {
      collisionFilter: { group: bodyGroup },
    });
    Composite.add(
      this.world,
      Constraint.create({
        bodyA: rightHand,
        bodyB: rightArm.bodies[1],
        pointA: {
          x: 0,
          y: -15,
        },
        pointB: { x: 0, y: 40 },
        stiffness: 0.5,
        length: 2,
      })
    );
    doll.push(rightHand);

    // 인형 왼쪽 다리
    const leftLeg = Composites.stack(
      this.sizes.width / 2 - 200,
      300,
      1,
      2,
      10,
      10,
      function (x, y) {
        return Bodies.rectangle(x, y, 20, 80, {
          collisionFilter: { group: bodyGroup },
        });
      }
    );
    Composites.chain(leftLeg, 0, 0.5, 0, -0.5, {
      stiffness: 0.8,
      length: 10,
      render: { type: "line" },
    });
    Composite.add(
      leftLeg,
      Constraint.create({
        bodyA: body,
        bodyB: leftLeg.bodies[0],
        pointA: {
          x: -20,
          y: 100,
        },
        pointB: { x: 0, y: -40 },
        stiffness: 0.5,
        length: 2,
      })
    );
    doll.push(leftLeg);

    // 인형 왼쪽 발
    const leftFoot = Bodies.circle(this.sizes.width / 2 - 300, 600, 15, {
      collisionFilter: { group: bodyGroup },
    });
    Composite.add(
      this.world,
      Constraint.create({
        bodyA: leftFoot,
        bodyB: leftLeg.bodies[1],
        pointA: {
          x: 0,
          y: -15,
        },
        pointB: { x: 0, y: 40 },
        stiffness: 0.5,
        length: 2,
      })
    );
    doll.push(leftFoot);

    // 인형 오른쪽 다리
    const rightLeg = Composites.stack(
      this.sizes.width / 2 + 200,
      300,
      1,
      2,
      10,
      10,
      function (x, y) {
        return Bodies.rectangle(x, y, 20, 80, {
          collisionFilter: { group: bodyGroup },
        });
      }
    );
    Composites.chain(rightLeg, 0, 0.5, 0, -0.5, {
      stiffness: 0.8,
      length: 10,
      render: { type: "line" },
    });
    Composite.add(
      rightLeg,
      Constraint.create({
        bodyA: body,
        bodyB: rightLeg.bodies[0],
        pointA: {
          x: 20,
          y: 100,
        },
        pointB: { x: 0, y: -40 },
        stiffness: 0.5,
        length: 2,
      })
    );
    doll.push(rightLeg);

    // 인형 오른쪽 발
    const rightFoot = Bodies.circle(this.sizes.width / 2 + 300, 600, 15, {
      collisionFilter: { group: bodyGroup },
    });
    Composite.add(
      this.world,
      Constraint.create({
        bodyA: rightFoot,
        bodyB: rightLeg.bodies[1],
        pointA: {
          x: 0,
          y: -15,
        },
        pointB: { x: 0, y: 40 },
        stiffness: 0.5,
        length: 2,
      })
    );
    doll.push(rightFoot);

    Composite.add(this.world, doll);
  }

  controlDoll(doll, point) {
    point.push(
      Bodies.circle(this.sizes.width / 2, 10, 10, {
        // isStatic: true,
        render: {
          strokeStyle: "transparent",
          fillStyle: "transparent",
        },
      })
    );
    point.push(
      Bodies.circle(this.sizes.width / 2, 10, 10, {
        // isStatic: true,
        render: {
          strokeStyle: "transparent",
          fillStyle: "transparent",
        },
      })
    );
    point.push(
      Bodies.circle(this.sizes.width / 2, 10, 10, {
        // isStatic: true,
        render: {
          strokeStyle: "transparent",
          fillStyle: "transparent",
        },
      })
    );
    point.push(
      Bodies.circle(this.sizes.width / 2, 10, 10, {
        // isStatic: true,
        render: {
          strokeStyle: "transparent",
          fillStyle: "transparent",
        },
      })
    );
    point.push(
      Bodies.circle(this.sizes.width / 2, 10, 10, {
        // isStatic: true,
        render: {
          strokeStyle: "transparent",
          fillStyle: "transparent",
        },
      })
    );

    const basicLength = 150;
    const handLength = 300;
    const footLength = 400;
    const stiffness = 0.02;

    Composite.add(
      this.world,
      Constraint.create({
        bodyA: point[0],
        bodyB: doll[7],
        pointA: {
          x: 0,
          y: 0,
        },
        pointB: { x: 0, y: 0 },
        stiffness: stiffness,
        length: basicLength + footLength,
        render: {
          strokeStyle: this.isDebug ? "white" : "transparent",
        },
      })
    );

    Composite.add(
      this.world,
      Constraint.create({
        bodyA: point[1],
        bodyB: doll[3],
        pointA: {
          x: 0,
          y: 0,
        },
        pointB: { x: 0, y: 0 },
        stiffness: stiffness,
        length: basicLength + handLength,
        render: {
          // strokeStyle: "white",
          strokeStyle: this.isDebug ? "white" : "transparent",
        },
      })
    );

    Composite.add(
      this.world,
      Constraint.create({
        bodyA: point[2],
        bodyB: doll[0],
        pointA: {
          x: 0,
          y: 0,
        },
        pointB: { x: 0, y: 0 },
        stiffness: stiffness,
        length: basicLength,
        render: {
          strokeStyle: this.isDebug ? "white" : "transparent",
        },
      })
    );

    Composite.add(
      this.world,
      Constraint.create({
        bodyA: point[3],
        bodyB: doll[5],
        pointA: {
          x: 0,
          y: 0,
        },
        pointB: { x: 0, y: 0 },
        stiffness: stiffness,
        length: basicLength + handLength,
        render: {
          strokeStyle: this.isDebug ? "white" : "transparent",
        },
      })
    );

    Composite.add(
      this.world,
      Constraint.create({
        bodyA: point[4],
        bodyB: doll[9],
        pointA: {
          x: 0,
          y: 0,
        },
        pointB: { x: 0, y: 0 },
        stiffness: stiffness,
        length: basicLength + footLength,
        render: {
          strokeStyle: this.isDebug ? "white" : "transparent",
        },
      })
    );

    Composite.add(this.world, [...point]);
  }

  setControlPosition(left, right) {
    left.forEach((p, idx) => {
      Body.setPosition(this.controlPointA[4 - idx], {
        x: p.x.toFixed(2) * this.sizes.width,
        y: p.y.toFixed(2) * this.sizes.height,
        z: 0,
      });
      Body.setVelocity(this.controlPointA[4 - idx], {
        x: 0,
        y: 0,
        z: 0,
      });
    });
    right.forEach((p, idx) => {
      Body.setPosition(this.controlPointB[4 - idx], {
        x: p.x.toFixed(2) * this.sizes.width,
        y: p.y.toFixed(2) * this.sizes.height,
        z: 0,
      });
      Body.setVelocity(this.controlPointB[4 - idx], {
        x: 0,
        y: 0,
        z: 0,
      });
    });
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

  handleEventListener() {
    window.addEventListener("resize", () => {
      if (this.resizeT) {
        clearTimeout(this.resizeT);
      }
      this.resizeT = setTimeout(this.resize.bind(this), 300);
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
  const parsed = queryString.parse(location.search);
  let debugMarionette = false;
  let debugHand = false;
  if (parsed.debugA) {
    debugMarionette = !!Number(parsed.debugA);
  }
  if (parsed.debugB) {
    debugHand = !!Number(parsed.debugB);
  }

  const marionette = new Marionette(debugMarionette);
  marionette.start();

  const magicHand = new MagicHand();
  magicHand.start();
  if (debugHand) {
    magicHand.debug();
  }
  // magicHand.onGesture(handleGesture);
  magicHand.onPosition(handlePosition);

  function handlePosition({ left, right }) {
    marionette.setControlPosition(left, right);
  }

  function handleGesture({ left, right }) {
    console.log(`Left is ${left}`);
    console.log(`Right is ${right}`);
  }
};
