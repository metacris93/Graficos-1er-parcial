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
  this.radioEsfera = 1;
  this.Piso="Simple";
  this.Luz="On";
  this.Texturaesfera="Off";
  this.Texturacubo="Off";
  this.TexturaToroide="Off";
  this.TexturaPiramide="Off";
  this.TexturaCilindro="Off";
  this.Rotacion="Off";

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
/*
var colorTextura = function(){
  this.colorTextura = loader.loadTexture('flaretest.jpg');
};*/


var scene = new THREE.Scene();

var camara = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 100);

var renderer = new THREE.WebGLRenderer({antialias:true});

var plano;

var planosimple;

var control_orbital;

var FuenteDeLuz = new THREE.DirectionalLight( 'rgb(255,255,255)', 1 ); //SpotLight

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

//var sphereTexture = new colorTextura();

var pyramidColor = new colorPiramide();

var torusColor = new colorToroide();

var cubeColor = new colorCubo();

var cylinderColor = new colorCilindro();

var radio_esfera = 0.5;

var raycaster; // para hacer el picking

var mouse = new THREE.Vector2(), INTERSECTED, SELECTED;

var offset = new THREE.Vector3();

var intersection = new THREE.Vector3();

var controls;

var plane = new THREE.Plane();

var objects = [];//contiene los objetos del plano los cuales son, la piramide, cilindro, etc.

//var parent = new THREE.Object3D(); //padre q servira de "centro para la rotacion"

//var RotaSce=false; //Boolean q controla rotacion de la escena, debe ir false al inicio.

var CuboRota=false;

var ToroideRota=false;

var PiramideRota=false;

var CilindroRota=false;

var EsferaRota=false;

var objeto_seleccionado = null;

var pivote_cubo = new THREE.Object3D();
pivote_cubo.rotation.y = 0;
var pivote_cilindro = new THREE.Object3D();
pivote_cilindro.rotation.y = 0;
var pivote_piramide = new THREE.Object3D();
pivote_piramide.rotation.y = 0;
var pivote_esfera = new THREE.Object3D();
pivote_esfera.rotation.y = 0;
var pivote_toroide = new THREE.Object3D();
pivote_toroide.rotation.y = 0;

var rotacion_cubo = false;

var rotacion_cilindro = false;

var rotacion_piramide = false;

var rotacion_esfera = false;

var rotacion_toroide = false;

var parent_cubo = new THREE.Object3D();

var parent_piramide= new THREE.Object3D();

var parent_cilindro = new THREE.Object3D();

var parent_esfera = new THREE.Object3D();

var parent_toroide = new THREE.Object3D();

parent_cubo.add(pivote_cubo);

parent_piramide.add(pivote_piramide);

parent_esfera.add(pivote_esfera);

parent_cilindro.add(pivote_cilindro);

parent_toroide.add(pivote_toroide);

scene.add(parent_cubo);

scene.add(parent_esfera);

scene.add(parent_cilindro);

scene.add(parent_toroide);

scene.add(parent_piramide);
