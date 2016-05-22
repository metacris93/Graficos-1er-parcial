var gui_widget;

var Controlador = function(){
  this.color = [ 0 , 128 , 255 ];
};

var scene = new THREE.Scene();

var camara = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 100);

var renderer = new THREE.WebGLRenderer();

var plano;

var control_orbital;

var sunLight = new THREE.DirectionalLight( 'rgb(255,255,255)', 1 );

var lightPosition4D = new THREE.Vector4();

var arrowDirection = new THREE.Vector3();

var arrowPosition1 = new THREE.Vector3();

var arrowPosition2 = new THREE.Vector3();

var arrowPosition3 = new THREE.Vector3();

var TWO_PI = Math.PI * 2;

var frameTime = 0;

var clock = new THREE.Clock();

var verticalAngle = 0;

var horizontalAngle = 0;

var normalVector = new THREE.Vector3( 0, 1, 0 );

var planeConstant = 0.01;

var groundPlane = new THREE.Plane( normalVector, planeConstant );
