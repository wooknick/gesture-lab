import MagicHand from "../MagicHand";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import CANNON from "cannon";

class Basketball {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.canvas.id = "basketball";
    this.sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    this.objectsToUpdate = [];
  }

  init() {
    // Scene
    this.scene = new THREE.Scene();

    /**
     * Physics
     */
    // World
    this.world = new CANNON.World();
    this.world.broadphase = new CANNON.SAPBroadphase(this.world);
    this.world.allowSleep = true;
    this.world.gravity.set(0, -9.82, 0);
    // Materials
    const defaultMaterial = new CANNON.Material("default");
    const defaultContactMaterial = new CANNON.ContactMaterial(
      defaultMaterial,
      defaultMaterial,
      {
        friction: 0.1,
        restitution: 0.9,
      }
    );
    // world.addContactMaterial(defaultContactMaterial);
    this.world.defaultContactMaterial = defaultContactMaterial;

    // Floor
    const floorShape = new CANNON.Plane();
    const floorBody = new CANNON.Body();
    floorBody.mass = 0;
    floorBody.addShape(floorShape);
    floorBody.quaternion.setFromAxisAngle(
      new CANNON.Vec3(-1, 0, 0),
      Math.PI * 0.5
    );
    this.world.addBody(floorBody);
    /**
     * Physics End
     */

    /**
     * Floor
     */
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(100, 100),
      new THREE.MeshStandardMaterial({
        color: "#e3e3e3",
        metalness: 0.3,
        roughness: 0.4,
        // envMap: environmentMapTexture,
      })
    );
    floor.receiveShadow = true;
    floor.rotation.x = -Math.PI * 0.5;
    this.scene.add(floor);

    /**
     * Lights
     */
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.2);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.set(1024, 1024);
    directionalLight.shadow.camera.far = 15;
    directionalLight.shadow.camera.left = -7;
    directionalLight.shadow.camera.top = 7;
    directionalLight.shadow.camera.right = 7;
    directionalLight.shadow.camera.bottom = -7;
    directionalLight.position.set(5, 5, 5);
    this.scene.add(directionalLight);

    /**
     * Camera
     */
    // Base camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.sizes.width / this.sizes.height,
      0.1,
      100
    );
    this.camera.position.set(0, 3, 4);
    this.scene.add(this.camera);

    // Controls
    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enableDamping = true;
    this.controls.target = new THREE.Vector3(0, 3, 0);

    /**
     * Renderer
     */
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
    });
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    /**
     * Animate
     */
    this.clock = new THREE.Clock();
    this.oldElapsedTime = 0;
  }

  animate() {
    const elapsedTime = this.clock.getElapsedTime();
    const deltaTime = elapsedTime - this.oldElapsedTime;
    this.oldElapsedTime = elapsedTime;
    //   console.log(deltaTime);

    // Update physics world
    this.world.step(1 / 60, deltaTime, 3);

    for (const object of this.objectsToUpdate) {
      object.mesh.position.copy(object.body.position);
      object.mesh.quaternion.copy(object.body.quaternion);
    }

    // Update controls
    this.controls.update();

    // Render
    this.renderer.render(this.scene, this.camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(this.animate.bind(this));
  }

  start() {
    document.body.appendChild(this.canvas);
    this.init();
    this.handleEventListener();
    this.animate();
  }

  shoot() {
    console.log("shoot!");
    this.createSphere(0.5, { x: 0, y: 3, z: 0 });
  }

  createSphere(radius, position) {
    const sphereGeometry = new THREE.SphereBufferGeometry(1, 20, 20);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      metalness: 0.3,
      roughness: 0.4,
      // envMap: environmentMapTexture,
    });
    // Three.js mesh
    const mesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    mesh.scale.set(radius, radius, radius);
    mesh.castShadow = true;
    mesh.position.copy(position);
    this.scene.add(mesh);

    // Cannon.js body
    const defaultMaterial = new CANNON.Material("default");
    const shape = new CANNON.Sphere(radius);
    const body = new CANNON.Body({
      mass: 1,
      position: new CANNON.Vec3(0, 3, 0),
      shape,
      material: defaultMaterial,
    });
    body.applyForce(new CANNON.Vec3(0, 700, -400), body.position);
    body.position.copy(position);
    this.world.addBody(body);

    // Save in objects to update
    this.objectsToUpdate.push({
      mesh,
      body,
    });
  }

  handleEventListener() {
    window.addEventListener("resize", this.resize.bind(this));
  }

  resize() {
    // Update sizes
    this.sizes.width = window.innerWidth;
    this.sizes.height = window.innerHeight;

    // Update camera
    this.camera.aspect = this.sizes.width / this.sizes.height;
    this.camera.updateProjectionMatrix();

    // Update renderer
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }
}

document.body.onload = () => {
  const magicHand = new MagicHand();
  magicHand.start();
  magicHand.debug();
  magicHand.onGesture(handleGesture);

  // const bb = new Basketball();
  // bb.start();

  let ready = false;
  function handleGesture({ left, right }) {
    console.log(`Left is ${left}`);
    console.log(`Right is ${right}`);
    if (left !== "stand") {
      ready = false;
    } else {
      if (!ready && right === "stretchBack") {
        ready = true;
      }
      if (ready && right === "unknown") {
        bb.shoot();
        ready = false;
      }
    }
  }
};
