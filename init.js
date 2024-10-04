var camera ;
var controls ;         // Declare global variables
var scene ;
var cube ;
var sphere ;
var line ;
var objNames = ["Earth_Orbit", "Mars_orbit", "Mercury_Orbit", "Venus_Orbit"] ;
var objSizes = [0.2, 0.17, 0.07, 0.2] ;
var objColors = [0x0066FF, 0xCC3333, 0xFF0000, 0xFFFFFF] ;
var curObj = new THREE.Object3D();
var celestialBody ;
var heavenlyBodies = [] ;

function init() {
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    controls = new THREE.TrackballControls( camera );
        controls.rotateSpeed = 1.0;
        controls.zoomSpeed = 1.2;
        controls.panSpeed = 0.8;
        controls.noZoom = false;
        controls.noPan = false;
        controls.staticMoving = true;
        controls.dynamicDampingFactor = 0.3;
        controls.keys = [ 65, 83, 68 ];
        controls.addEventListener( 'change', render );
        
    scene = new THREE.Scene();
                        
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth/2, window.innerHeight/2);
    document.body.appendChild( renderer.domElement );
    

    var j = 0 ;
//  Here comes the Sun!
    var geometry = new THREE.SphereGeometry( 0.6, 16, 16 );
    var material = new THREE.MeshBasicMaterial( {color: 0xFFFF00, wireframe: false} );
    sphere = new THREE.Mesh( geometry, material );
    scene.add( sphere );
    
    var light = new THREE.PointLight( 0xff0000, 1, 100 );
    light.position.set( 0, 0, 0 );           
    scene.add( light );                       // currently no effect
    
    for (i = 0; i < 4; i++) { // Add the inner planets.

     geometry = new THREE.SphereGeometry( objSizes[j], 16, 16 );
     material = new THREE.MeshBasicMaterial( {color: objColors[j], wireframe: false} );
     sphere = new THREE.Mesh( geometry, material );
     
     sphere.name = objNames[i] ;
     scene.add( sphere );
     
      j = j + 1 ;
    } 
    camera.position.z = 5;
    
//	console.log(scene) ;

}
