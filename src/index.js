//  A THREE.JS ENVIROMENT IS MADE UP OF 5 THINGS{

// RENDERER(WHAT THE USER SEES
// SCENE(THE DATA))
// CAMERA (THE PERSPECTIVE)
// MESHES - OBJECTS IN THE 3D WORLD
// LIGHTS

//}

const THREE = require("three");

function createRenderer() {
  let renderer = new THREE.WebGL1Renderer({
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor("#16161d");
  renderer.setPixelRatio(window.devicePixelRatio);
  let output = document.querySelector("#output");
  output.appendChild(renderer.domElement);
  return renderer; // to use in other part
}

function createScene() {
  return new THREE.Scene();
}

// camera persepective
// first is field of view
// wide angle view
// narrow angle view
// in three js is measure as degree
// aspect ration (ratio image 4:3 etc shit) relationship between width and height of the image
// the near value when something geting to close to camera and u will not knowing what the item
function createCamera() {
  let camera = new THREE.PerspectiveCamera(
    45, // degree
    window.innerWidth / window.innerHeight, //image ratio
    0.1, // near value
    1000 // far value
  );
  camera.position.set(-30, 40, 30); // value of x,y,z
  camera.lookAt(0, 0, 0);
  return camera;
}

function createAxesHelper() {
  let axesHelper = new THREE.AxesHelper(40); // x is left and right y is up and down // z axes is close to far
  return axesHelper;
}

function getRandomColor() {
  let colors = [
    "dodgerblue",
    "tomato",
    "limegreen",
    "rebeccapurple",
    "gold",
    "lavender",
    "lightcoral",
    "papayawhip",
  ];
  let randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function createCube() {
  let geometry = new THREE.BoxGeometry(4, 4, 4);
  let material = new THREE.MeshLambertMaterial({
    color: getRandomColor(),
  });
  let mesh = new THREE.Mesh(geometry, material);
  return mesh;
}

function createSphere() {
  // geometry
  let geo = new THREE.SphereGeometry(4, 30, 30);
  //material
  let mat = new THREE.MeshLambertMaterial({
    color: getRandomColor(),
  });
  // mesh to combine
  let mesh = new THREE.Mesh(geo, mat);
  return mesh;
}

function createLight() {
  let light = new THREE.PointLight("white", 1.25);
  return light;
}

function createLightHelper(light) {
  let helper = new THREE.PointLightHelper(light);
  return helper;
}

let renderer = createRenderer(); // to store the variables create in function above into single value
let scene = createScene();
let camera = createCamera();
let axesHelper = createAxesHelper();
let cube = createCube();
let sphere = createSphere();
let light = createLight();
let lightHelper = createLightHelper(light);

light.position.x = 10;
light.position.y = 10;
light.position.z = 10;

sphere.position.x = 20;

scene.add(axesHelper); // add to add everything to scene like shape or shit
scene.add(cube, sphere, light, lightHelper);

renderer.render(scene, camera);

function animate() {
  //   cube.rotation.x += 0.05;
  //   cube.rotation.y += 0.05;
  //   cube.position.z += 0.01;
  light.position.x = 10;
  renderer.render(scene, camera);
  requestAnimationFrame(animate); // call the animation again and again
}

animate();
