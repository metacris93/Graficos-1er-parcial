var gui_widget;

var Controlador = function(){
  this.color = "#008200";
  this.rotacionToroide = 0.5;
  this.rotacionPiramide = 0.5;
  this.rotacionCubo = 0.5;
  this.rotacionCilindro = 0.5;
  this.rotacionEsfera = 0.5;

  this.traslacionToroide = 0;
  this.traslacionPiramide = 0;
  this.traslacionCubo = 0;
  this.traslacionCilindro = 0;
  this.traslacionEsfera = 0;

  this.Piso="Simple";
  this.Luz="On";
};
var colorEsfera = function(){
  this.colorEsfera = "#ACB40D";
};
var colorPiramide = function(){
  this.colorPiramide = "#3A3707";
};
var colorToroide = function(){
  this.colorToroide = "#BDB425";
};
var colorCubo = function(){
  this.colorCubo = "#071637";
};
var colorCilindro = function(){
  this.colorCilindro = "#B40D1C";
};
/*var ControladorColorObjeto = function(){
   this.colorCilindro = "#B40D1C";
   this.colorCubo = "#071637";
   this.colorToroide = "#BDB425";
   this.colorPiramide = "#3A3707";
   this.colorEsfera = "#008200";
};*/

var scene = new THREE.Scene();

var camara = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 100);

var renderer = new THREE.WebGLRenderer();

var plano;

var planosimple;

var control_orbital;

var FuenteDeLuz = new THREE.DirectionalLight( 'rgb(255,255,255)', 1 );

var PosicionLuz = new THREE.Vector4();

var TWO_PI = Math.PI * 2;

var frameTime = 0;

var clock = new THREE.Clock();

var AnguloEnVertical = 0;

var AnguloEnHorizontal = 0;

var normalVector = new THREE.Vector3( 0, 1, 0 );

var planeConstant = 0.01;

var groundPlane = new THREE.Plane( normalVector, planeConstant );

var controlador = new Controlador();

var sphereColor = new colorEsfera();

var pyramidColor = new colorPiramide();

var torusColor = new colorToroide();

var cubeColor = new colorCubo();

var cylinderColor = new colorCilindro();
