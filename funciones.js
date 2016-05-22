function agregar_piramide(){
  // YELLOW PYRAMID and PYRAMID'S SHADOW
	var pyramidGeometry = new THREE.CylinderGeometry( 0, 2, 2, 3 ); //(niidea,radio,altura,numero de caras laterales)
	var pyramidMaterial = new THREE.MeshPhongMaterial( { color: 'rgb(255,255,0)', emissive: 0x440000, shading: THREE.FlatShading, 					shininess: 0 } );

	pyramid = new THREE.Mesh( pyramidGeometry, pyramidMaterial );
	pyramid.position.set( - 4, 1.5, 2 );
	scene.add( pyramid );
	pyramidShadow = new THREE.ShadowMesh( pyramid );
	scene.add( pyramidShadow );
}

function agregar_esfera(){
  // WHITE SPHERE and SPHERE'S SHADOW
  var sphereGeometry = new THREE.SphereGeometry( 0.5, 20, 10 );
  var sphereMaterial = new THREE.MeshPhongMaterial( { color: 'rgb(255,255,255)', emissive: 0x222222 } );
  sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
  sphere.position.set( 2, 2, -3 );
  scene.add( sphere );

  sphereShadow = new THREE.ShadowMesh( sphere );
  scene.add( sphereShadow );
}

function agregar_toroide(){
  // MAGENTA TORUS and TORUS' SHADOW
  var torusGeometry = new THREE.TorusGeometry( 1, 0.2, 10, 16, TWO_PI );
  var torusMaterial = new THREE.MeshPhongMaterial( { color: 'rgb(255,0,255)', emissive: 0x200020 } );
  torus = new THREE.Mesh( torusGeometry, torusMaterial );
  torus.position.set(2, 2, 2);
  scene.add( torus );

  torusShadow = new THREE.ShadowMesh( torus );
  scene.add( torusShadow );
}

function agregar_cilindro(){
  // BLUE CYLINDER and CYLINDER's SHADOW
  var cylinderGeometry = new THREE.CylinderGeometry( 0.3, 0.3, 2 );
  var cylinderMaterial = new THREE.MeshPhongMaterial( { color: 'rgb(0,0,255)', emissive: 0x000020 } );
  cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
  cylinder.position.set(-4, 2, -4);
  scene.add( cylinder );

  cylinderShadow = new THREE.ShadowMesh( cylinder );
  scene.add( cylinderShadow );
}

function agregar_cubo(){
  // RED CUBE and CUBE's SHADOW
  var cubeGeometry = new THREE.BoxGeometry( 1, 1, 1 );
  var cubeMaterial = new THREE.MeshLambertMaterial( { color: 'rgb(255,0,0)', emissive: 0x200000 } );
  cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
  cube.position.z = 0;
  scene.add( cube );

  cubeShadow = new THREE.ShadowMesh( cube );
  scene.add( cubeShadow );
}

function agregar_plano(){
  // GROUND
  var groundGeometry = new THREE.BoxGeometry( 30, 0.01, 40 );
  var groundMaterial = new THREE.MeshLambertMaterial( { color: 'rgb(0,130,0)' } );//color del piso con luces diercc
  groundMesh = new THREE.Mesh( groundGeometry, groundMaterial );
  groundMesh.position.y = 0.0; //this value must be slightly lower than the planeConstant (0.01) parameter above
  scene.add( groundMesh );
}

function animacion() {

  requestAnimationFrame( animacion );

  frameTime = clock.getDelta();

  cube.rotation.x += 1.0 * frameTime;
  cube.rotation.y += 1.0 * frameTime;

  cylinder.rotation.y += 1.0 * frameTime;
  cylinder.rotation.z -= 1.0 * frameTime;

  torus.rotation.x -= 1.0 * frameTime;
  torus.rotation.y -= 1.0 * frameTime;

  pyramid.rotation.y += 0.9 * frameTime;

  horizontalAngle += 0.5 * frameTime;

  cube.position.x=0.5;
  cube.position.y=4;

  cylinder.position.x=-3;
  cylinder.position.y=2;

  torus.position.x=5;
  torus.position.y=3;

  cubeShadow.update( groundPlane, lightPosition4D );
  cylinderShadow.update( groundPlane, lightPosition4D );
  torusShadow.update( groundPlane, lightPosition4D );
  sphereShadow.update( groundPlane, lightPosition4D );
  pyramidShadow.update( groundPlane, lightPosition4D );

  renderer.render( scene, camara );
}
