// Benedikt Groß
// Example is based on examples from: http://brm.io/matter-js/, https://github.com/shiffman/p5-matter
let informant;
let importance;
let myFont;


var Engine = Matter.Engine;
var Render = Matter.Render;
var World = Matter.World;
var Bodies = Matter.Bodies;

var engine;

var boxA;
var boxB;
var boxC;
var ground;

function preload() {
    myFont = loadFont('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/SangSangFlowerRoad.woff');
}

function setup() {

  createCanvas(1920, 1080);
  background(255);
//  create an engine
  engine = Engine.create();

  // create two boxes and a ground
  boxA = Bodies.rectangle(500,0, 10, 80);
  boxB = Bodies.circle(270, 50, 10);
  boxC = Bodies.rectangle(500,50,50,10);
  ground = Bodies.rectangle(0, height, width, 20,
     {isStatic: true}
   );

  // add all of the bodies to the world
  World.add(engine.world, [boxA, boxB,boxC, ground]);

  // run the engine
  Engine.run(engine);
}

function draw() {
  background(0);

  fill(255);
  drawVertices(boxA.vertices);
  drawVertices(boxB.vertices);
  drawVertices(boxC.vertices);

  fill(128);
  drawVertices(ground.vertices);


}

function drawVertices(vertices) {
  beginShape();
  for (var i = 0; i < vertices.length; i++) {
    vertex(vertices[i].x, vertices[i].y);
  }
  endShape(CLOSE);
}
