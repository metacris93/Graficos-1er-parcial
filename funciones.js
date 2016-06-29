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
			plano.name="planoajedrez";
			planosimple.name="planosimple";
		}

}

function rotacionEscena(){
	scene.add( parent );

	var pivot1 = new THREE.Object3D();
	var pivot2 = new THREE.Object3D();
	var pivot3 = new THREE.Object3D();
        var pivot4 = new THREE.Object3D();
	var pivot5 = new THREE.Object3D();
	var pivot6 = new THREE.Object3D();
	var pivot7 = new THREE.Object3D();

	pivot1.rotation.y = 0;
	pivot2.rotation.y = 0;
	pivot3.rotation.y = 0;
	pivot4.rotation.y = 0;
	pivot5.rotation.y = 0;
	pivot6.rotation.y = 0;
	pivot7.rotation.y = 0;

	parent.add( pivot1 );
	parent.add( pivot2 );
	parent.add( pivot3 );
	parent.add( pivot4 );
	parent.add( pivot5 );
	parent.add( pivot6 );
	parent.add( pivot7 );

	var geometry = new THREE.SphereGeometry( radio_esfera, 20, 10 );
	var material = new THREE.MeshPhongMaterial( { color: 'rgb(255,255,55)', emissive: 0x222222 } );

	var mesh1 = scene.getObjectByName("cilindro");
	var mesh2 = scene.getObjectByName("toroide");
	var mesh3 = scene.getObjectByName("esfera");
	var mesh4 = scene.getObjectByName("piramide");
	var mesh5 = scene.getObjectByName("planoajedrez");
	var mesh6 = scene.getObjectByName("planosimple");
	var mesh7 = scene.getObjectByName("cubo");

	//mesh1.position.x = 5;
	//mesh2.position.x = 5;
	//mesh3.position.x = 5;

	pivot1.add( mesh1 );
	pivot2.add( mesh2 );
	pivot3.add( mesh3 );
	pivot4.add( mesh4 );
	pivot4.add( mesh5 );
	pivot6.add( mesh6 );
	pivot7.add( mesh7 );

}

function agregar_piramide(){
  // Piramide
	var pyramidGeometry = new THREE.CylinderGeometry( 0, 1.2, 2, 4); //(desconocido,radio,altura,numero de caras laterales)
  var pyramidMaterial = new THREE.MeshPhongMaterial( { color: 'rgb(0,267,100)', emissive: 0x440000, shading: THREE.FlatShading, 					shininess: 0 } );
	//sombra piramide
	pyramid = new THREE.Mesh( pyramidGeometry, pyramidMaterial );
	pyramid.position.set( -4, 1.5, 2 );
	scene.add( pyramid );
	pyramidShadow = new THREE.ShadowMesh( pyramid );
	scene.add( pyramidShadow );
	pyramid.name="piramide";
}

function agregar_texture_piramide(){
  // Piramide
  scene.remove(pyramid);
  scene.remove(pyramidShadow);
  var pyramidGeometry = new THREE.CylinderGeometry( 0, 1.2, 2, 4); //(desconocido,radio,altura,numero de caras laterales)
  var texture1 = THREE.ImageUtils.loadTexture( 'image/arena.jpg' );
  var pyramidMaterial = new THREE.MeshPhongMaterial( { map: texture1 } );
  //sombra piramide
  pyramid = new THREE.Mesh( pyramidGeometry, pyramidMaterial );
  pyramid.position.set( -4, 1.5, 2 );
  scene.add( pyramid );
  pyramidShadow = new THREE.ShadowMesh( pyramid );
  scene.add( pyramidShadow );
}

function agregar_esfera(){
  // Esfera
  var sphereGeometry = new THREE.SphereGeometry( radio_esfera, 20, 10 );
  var sphereMaterial = new THREE.MeshPhongMaterial( { color: 'rgb(255,255,55)', emissive: 0x222222 } );
  sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
  sphere.position.set( 2, 2, -3 );
  scene.add( sphere );
	//sombra esfera
  sphereShadow = new THREE.ShadowMesh( sphere );
  scene.add( sphereShadow );
  sphere.name="esfera";
}

function agregar_Texture_esfera(){
  // Texture de Esfera
        scene.remove(sphere);
        scene.remove(sphereShadow);
        var texture1 = THREE.ImageUtils.loadTexture( 'image/tierra.jpg' );
        var sphereMaterial = new THREE.MeshPhongMaterial( { map: texture1 } );
        var sphereGeometry = new THREE.SphereGeometry( radio_esfera, 20, 10 );
        //var geometry = new THREE.BoxGeometry( radio_esfera, 20, 10 );
        sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
        //sphere.position.z=0;
        sphere.position.set( 2, 2, -3 );

        scene.add( sphere );
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
  torus.name="toroide";
}

function agregar_textura_toroide(){
  //Toroide

   scene.remove(torus);
  scene.remove(torusShadow);

  var torusGeometry = new THREE.TorusGeometry( 1, 0.2, 10, 16, TWO_PI );
var texture1 = THREE.ImageUtils.loadTexture( 'image/flaretest.jpg' );
  var torusMaterial = new THREE.MeshPhongMaterial( { map: texture1 } );
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
  cylinder.position.set(-3, 2, 4);
  scene.add( cylinder );
//sombra del cilindro
  cylinderShadow = new THREE.ShadowMesh( cylinder );
  scene.add( cylinderShadow );
  cylinder.name="cilindro";
}

function agregar_textura_cilindro(){
  // Cilindro
  scene.remove(cylinder);
  scene.remove(cylinderShadow);
  var cylinderGeometry = new THREE.CylinderGeometry( 0.3, 0.3, 2 );
  var texture2 = THREE.ImageUtils.loadTexture( 'image/solido.jpg' );
  var cylinderMaterial = new THREE.MeshPhongMaterial( { map: texture2 } );
  cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
  cylinder.position.set(-4, -4, -4);
  scene.add( cylinder );
//sombra del cilindro
  cylinderShadow = new THREE.ShadowMesh( cylinder );
  scene.add( cylinderShadow );
}

function agregar_cubo(){
  // cubo
  var cubeGeometry = new THREE.BoxGeometry( 1, 1, 1 );
  var cubeMaterial = new THREE.MeshLambertMaterial( { color: 'rgb(23,233,219)', emissive: 0x200000 } );
  cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
  cube.position.set(0,4,-4);
  scene.add( cube );
	//sombra del cubo
  cubeShadow = new THREE.ShadowMesh( cube );
  scene.add( cubeShadow );
  cube.name="cubo";
}

function agregar_textura_cubo()
{
              scene.remove(cube);
              scene.remove(cubeShadow);
             //var texture1 = THREE.ImageUtils.loadTexture( 'image/tierra.jpg' );
             var cubeGeometry = new THREE.BoxGeometry( 1, 1, 1 );
              texture2 = THREE.ImageUtils.loadTexture( 'image/cubo.jpg' );
                var cubeMaterial = new THREE.MeshLambertMaterial( { map: texture2 } );
              cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
              cube.position.z = 0;
            scene.add( cube );
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

function onDocumentMouseMove( event ) {
				event.preventDefault();
				mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
				mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
				raycaster.setFromCamera(mouse , camara);
				if ( SELECTED ) {
					if ( raycaster.ray.intersectPlane( plane, intersection ) )
							SELECTED.position.copy( intersection.sub( offset ) );
					return;
				}
				var intersects = raycaster.intersectObjects( objects );
				if ( intersects.length > 0 ) {
					if ( INTERSECTED != intersects[ 0 ].object ) {
						switch ( intersects[ 0 ].object.geometry.type ){
								case 'PlaneBufferGeometry'://el plano no tiene que cambiar de color
								break;
								default:
										if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
										INTERSECTED = intersects[ 0 ].object;
										INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
										INTERSECTED.material.color.setHex( 0xff0000 );
										plane.setFromNormalAndCoplanarPoint(
											camara.getWorldDirection( plane.normal ),
											INTERSECTED.position );
								break;
						}
					}
					$("body").css("cursor","pointer");
				} else {
					if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
					INTERSECTED = null;
					$("body").css({'cursor':'auto'});
				}
}

function onDocumentMouseDown(event){
				event.preventDefault();
				raycaster.setFromCamera( mouse, camara );
				var intersects = raycaster.intersectObjects( objects );
				//Desde aqui agregué	**********************************************************************			
				if(event.button==2){//si el click es derecho
				
				for( var i = 0; i < intersects.length; i++ ) {
    				var intersection = intersects[ i ];
    				var obj = intersection.object;
    				switch(obj.name){
				
				case "toroide":
				if(!ToroideRota){
				controlador.rotacionToroide=4;
				ToroideRota=true;
				}
				else{
				controlador.rotacionToroide=0;
				ToroideRota=false;
				}
				break;

				case "cubo":
				if(!CuboRota){
				controlador.rotacionCubo=4;
				CuboRota=true;
				}
				else{
				controlador.rotacionCubo=0;
				CuboRota=false;
				}
				break;	

				case "piramide":
				if(!PiramideRota){
				controlador.rotacionPiramide=4;
				PiramideRota=true;
				}
				else{
				controlador.rotacionPiramide=0;
				PiramideRota=false;
				}
				break;

				case "cilindro":
				if(!CilindroRota){
				controlador.rotacionCilindro=4;
				CilindroRota=true;
				}
				else{
				controlador.rotacionCilindro=0;
				CilindroRota=false;
				}
				break;	

				case "esfera":
				if(!EsferaRota){
				controlador.rotacionEsfera=4;
				EsferaRota=true;
				}
				else{
				controlador.rotacionEsfera=0;
				EsferaRota=false;
				}
				break;
				default:
				break;		
				
				}
				
  				}
							
				}//hasta aqui llega la agregacion **************************************************
				
				if ( intersects.length > 0 ) {
					controls.enabled = false;
					SELECTED = intersects[ 0 ].object;
					if ( raycaster.ray.intersectPlane( plane, intersection ) ) {
						offset.copy( intersection ).sub( SELECTED.position );
					}
					$("body").css("cursor","move");
				}
}

function onDocumentMouseUp(event){
				event.preventDefault();
				controls.enabled = true;
				if ( INTERSECTED ) {
					SELECTED = null;
				}
				$("body").css({'cursor':'auto'});
}

function render() {
				controls.update();
				renderer.render( scene, camara );
}

function animacion() {
	var interseccion;

  requestAnimationFrame( animacion );
  //Rota elementos, subir el valor para ir mas 
	if(RotaSce)
	parent.rotation.y += 0.1;

  frameTime = clock.getDelta();
	var radio = controlador.radioEsfera;
	var scala = radio / radio_esfera;
	/*la escala de la esfera sera el radio deseado dividido por el radio inicial
	  Por ejemplo se selecciona radio 12, entonces la escala sera 12/4 = 3
	  al realizar escalamiento, las dimensiones son multiplicadas por 3, dando como resltado 12, el radio deseado
	*/
	//Se realiza el escalamiento
	sphere.scale.x =scala;
	sphere.scale.y =scala;
	sphere.scale.z= scala;
  //cube.rotation.x += 1.0 * frameTime;
  cube.rotation.y += controlador.rotacionCubo * frameTime;

  cylinder.rotation.y += controlador.rotacionCilindro * frameTime;
  cylinder.rotation.z -= controlador.rotacionCilindro * frameTime;

  //torus.rotation.x -= 1.0 * frameTime;
  torus.rotation.y -= controlador.rotacionToroide * frameTime;

  pyramid.rotation.y += controlador.rotacionPiramide * frameTime;

  AnguloEnHorizontal += 0.5 * frameTime;

  /*cube.position.x=0.5;
  cube.position.y=4;

  cylinder.position.x=-3;
  cylinder.position.y=2;

  torus.position.x=5;
  torus.position.y=3;*/


if ( AnguloEnHorizontal > TWO_PI )
	AnguloEnHorizontal -= TWO_PI;

  /*cube.position.x     = Math.cos( AnguloEnHorizontal ) * controlador.traslacionCubo/2;
	cylinder.position.x = Math.sin( AnguloEnHorizontal ) * -controlador.traslacionCilindro/2;
	torus.position.x    = Math.cos( AnguloEnHorizontal ) * controlador.traslacionToroide/2;
	pyramid.position.x  = Math.sin(AnguloEnHorizontal)* controlador.traslacionPiramide/2-3;
	sphere.position.x   = Math.cos(AnguloEnHorizontal)*controlador.traslacionEsfera/2+3;*/

AnguloEnVertical += 1.5 * frameTime;

if ( AnguloEnVertical > TWO_PI )
     AnguloEnVertical -= TWO_PI;

/*cube.position.y = Math.sin( AnguloEnVertical ) * controlador.traslacionCubo/2+4;
cylinder.position.y = Math.sin( AnguloEnVertical ) * controlador.traslacionCilindro/4+2;
torus.position.y = Math.cos( AnguloEnVertical ) * controlador.traslacionToroide/4 + 3.1;
pyramid.position.y=Math.sin(AnguloEnVertical)* controlador.traslacionPiramide/4+3.7;
sphere.position.y=Math.cos(AnguloEnHorizontal)*controlador.traslacionEsfera/4+3;*/


  cubeShadow.update( groundPlane, PosicionLuz );
  cylinderShadow.update( groundPlane, PosicionLuz );
  torusShadow.update( groundPlane, PosicionLuz );
  sphereShadow.update( groundPlane, PosicionLuz );
  pyramidShadow.update( groundPlane, PosicionLuz);

  render();
}
