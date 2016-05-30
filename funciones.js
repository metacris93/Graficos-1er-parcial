/*
* En esta funcion se crea el plano, enviando como parametros el alto, ancho y la imagen.
* En caso de que la ruta de la imagen este vacio, se va crear un plano idéntico a un tablero de ajedrez
*/
function crear_plano(ancho , alto , imagen){
		if(imagen.length != 0){//si no se envia la ruta de la imagen

		}else {
			//Se crea plano simple
			var geometriasimple = new THREE.PlaneBufferGeometry(ancho, alto,1,1);
			var materialsimple = new THREE.MeshBasicMaterial({color: 'rgb(0,130,0)'});
			planosimple = new THREE.Mesh( geometriasimple, materialsimple );
			planosimple.receiveShadow = true;
			//se crea plano ajedrez
			var x = document.createElement( "canvas" );
			var xc = x.getContext("2d");
			x.width = x.height = 100;
			xc.fillStyle = "#fff";
			xc.fillRect(0, 0, 100, 100);
			xc.fillStyle = "#000";
			xc.fillRect(0, 0, 50, 50);
			xc.fillStyle = "#000";
			xc.fillRect(25, 25, 25, 25);
			xc.fillStyle = "#000";
			xc.fillRect(50, 50, 50, 50);
			xc.fillStyle = "#000";
			xc.fillRect(75, 75, 25, 25);

			var texture = new THREE.CanvasTexture( x );
			texture.repeat.set( 10, 10 );
			texture.wrapS = THREE.RepeatWrapping;
			texture.wrapT = THREE.RepeatWrapping;

			var material = new THREE.MeshBasicMaterial( { map: texture } );

			geometria = new THREE.PlaneBufferGeometry( ancho, alto, 1, 1 );

			plano = new THREE.Mesh( geometria, material );
			plano.receiveShadow=true;
			plano.visible=false;
		}

}

function renderizar(){
	requestAnimationFrame( renderizar );
	renderer.render(scene, camara);
}

function agregar_piramide(){
  // Piramide
	var pyramidGeometry = new THREE.CylinderGeometry( 0, 1, 2, 3); //(desconocido,radio,altura,numero de caras laterales)
  var pyramidMaterial = new THREE.MeshPhongMaterial( { color: 'rgb(0,267,100)', emissive: 0x440000, shading: THREE.FlatShading, 					shininess: 0 } );
	//sombra piramide
	pyramid = new THREE.Mesh( pyramidGeometry, pyramidMaterial );
	pyramid.position.set( - 4, 1.5, 2 );
	scene.add( pyramid );
	pyramidShadow = new THREE.ShadowMesh( pyramid );
	scene.add( pyramidShadow );
}

function agregar_esfera(){
  // Esfera
  var sphereGeometry = new THREE.SphereGeometry( 0.5, 20, 10 );
  var sphereMaterial = new THREE.MeshPhongMaterial( { color: 'rgb(255,255,55)', emissive: 0x222222 } );
  sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
  sphere.position.set( 2, 2, -3 );
  scene.add( sphere );
	//sombra esfera
  sphereShadow = new THREE.ShadowMesh( sphere );
  scene.add( sphereShadow );
}

function agregar_toroide(){
  //Toroide
  var torusGeometry = new THREE.TorusGeometry( 1, 0.2, 10, 16, TWO_PI );
  var torusMaterial = new THREE.MeshPhongMaterial( { color: 'rgb(0,0,255)', emissive: 0x200020 } );
  torus = new THREE.Mesh( torusGeometry, torusMaterial );
  torus.position.set(2, 2, 2);
  scene.add( torus );
	//sombra toroide
  torusShadow = new THREE.ShadowMesh( torus );
  scene.add( torusShadow );
}

function agregar_cilindro(){
  // Cilindro
  var cylinderGeometry = new THREE.CylinderGeometry( 0.3, 0.3, 2 );
  var cylinderMaterial = new THREE.MeshPhongMaterial( { color: 'rgb(0,200,255)', emissive: 0x000020 } );
  cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
  cylinder.position.set(-4, 2, -4);
  scene.add( cylinder );
//sombra del cilindro
  cylinderShadow = new THREE.ShadowMesh( cylinder );
  scene.add( cylinderShadow );
}

function agregar_cubo(){
  // cubo
  var cubeGeometry = new THREE.BoxGeometry( 1, 1, 1 );
  var cubeMaterial = new THREE.MeshLambertMaterial( { color: 'rgb(255,0,0)', emissive: 0x200000 } );
  cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
  cube.position.z = 0;
  scene.add( cube );
	//sombra del cubo
  cubeShadow = new THREE.ShadowMesh( cube );
  scene.add( cubeShadow );
}

function agregar_plano(){
  // Plano
  var groundGeometry = new THREE.BoxGeometry( 30, 0.01, 40 );
  var groundMaterial = new THREE.MeshLambertMaterial( { color: 'rgb(0,130,0)' } );
  groundMesh = new THREE.Mesh( groundGeometry, groundMaterial );
  groundMesh.position.y = 0.0; //value must be slightly lower than the planeConstant (0.01) parameter above
  scene.add( groundMesh );
}

function animacion() {

  requestAnimationFrame( animacion );

  frameTime = clock.getDelta();

  //cube.rotation.x += 1.0 * frameTime;
  cube.rotation.y += controlador.rotacionCubo * frameTime;

  cylinder.rotation.y += controlador.rotacionCilindro * frameTime;
  cylinder.rotation.z -= controlador.rotacionCilindro * frameTime;

  //torus.rotation.x -= 1.0 * frameTime;
  torus.rotation.y -= controlador.rotacionToroide * frameTime;

  pyramid.rotation.y += controlador.rotacionPiramide * frameTime;

  AnguloEnHorizontal += 0.5 * frameTime;

  cube.position.x=0.5;
  cube.position.y=4;

  cylinder.position.x=-3;
  cylinder.position.y=2;

  torus.position.x=5;
  torus.position.y=3;


if ( AnguloEnHorizontal > TWO_PI )
	AnguloEnHorizontal -= TWO_PI;

        cube.position.x = Math.cos( AnguloEnHorizontal ) * controlador.traslacionCubo/2;
	cylinder.position.x = Math.sin( AnguloEnHorizontal ) * -controlador.traslacionCilindro/2;
	torus.position.x = Math.cos( AnguloEnHorizontal ) * controlador.traslacionToroide/2;
	pyramid.position.x=Math.sin(AnguloEnHorizontal)* controlador.traslacionPiramide/2-3;
	sphere.position.x=Math.cos(AnguloEnHorizontal)*controlador.traslacionEsfera/2+3;

AnguloEnVertical += 1.5 * frameTime;

if ( AnguloEnVertical > TWO_PI )
     AnguloEnVertical -= TWO_PI;

cube.position.y = Math.sin( AnguloEnVertical ) * controlador.traslacionCubo/2+4;
cylinder.position.y = Math.sin( AnguloEnVertical ) * controlador.traslacionCilindro/4+2;
torus.position.y = Math.cos( AnguloEnVertical ) * controlador.traslacionToroide/4 + 3.1;
pyramid.position.y=Math.sin(AnguloEnVertical)* controlador.traslacionPiramide/4+3.7;
sphere.position.y=Math.cos(AnguloEnHorizontal)*controlador.traslacionEsfera/4+3;


  cubeShadow.update( groundPlane, PosicionLuz );
  cylinderShadow.update( groundPlane, PosicionLuz );
  torusShadow.update( groundPlane, PosicionLuz );
  sphereShadow.update( groundPlane, PosicionLuz );
  pyramidShadow.update( groundPlane, PosicionLuz);

  renderer.render( scene, camara );
}
