var camera;
var controls; // Declare global variables
var scene;
var cube;
var sphere;
var line;
var objNames = ["Earth_Orbit", "Mars_orbit", "Mercury_Orbit", "Venus_Orbit"];
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

        sphere.name = objNames[i];
        scene.add( sphere );
     
        j = j + 1 ;
    }
    
    camera.position.z = 5;
    
//	console.log(scene) ;

}

            //-------------------------------------------
            function render() {
                requestAnimationFrame( render );
                renderer.render( scene, camera );
                }  
            function animate() {
                    requestAnimationFrame( animate );
                    controls.update();
                    updatePosition() ;
                }

        function populate_table(rowNum,name,argP,meanA,ecc,inc,sma,raan,per) {
            console.log(rowNum + "  " + name + "," + argP + "," + meanA + "," + ecc);
            var cellID = "r" + rowNum + "c1"; console.log(cellID);
            cellID = "r" + rowNum + "c1"    ; document.getElementById(cellID).textContent = name;
            cellID = "r" + rowNum + "c2"    ; document.getElementById(cellID).textContent = argP;
            cellID = "r" + rowNum + "c3"    ; document.getElementById(cellID).textContent = meanA;
            cellID = "r" + rowNum + "c4"    ; document.getElementById(cellID).textContent = ecc;
            cellID = "r" + rowNum + "c5"    ; document.getElementById(cellID).textContent = inc;
            cellID = "r" + rowNum + "c6"    ; document.getElementById(cellID).textContent = sma;
            cellID = "r" + rowNum + "c7"    ; document.getElementById(cellID).textContent = raan;
            cellID = "r" + rowNum + "c8"    ; document.getElementById(cellID).textContent = per;
        
        }
        
    function get_datablock() {

        // Reference https://stackoverflow.com/questions/38602543/is-there-a-way-to-access-json-ld-via-javascript-if-it-doesnt-have-an-id
            // var jsonld = document.querySelectorAll('script[type="application/ld+json"]').innerText;
            var jsonld = document.querySelector('#OrbitOntology').innerText;
            var result = JSON.parse(jsonld);
        // console.log(result.graph[1].name.value);		
            
        //   $.each(result.graph, function(i, field){
            for(i = 1; i < result.graph.length; i++) {
            field = result.graph[i];
            if (i > 0 && i < 5) { // alert(field.name.value) ; 
            
            //smA,oI,aP,oE,aN,mAe,Sidereal
                celestialBody = new Trajectory(field.name.value,
                                        field.semiMajorAxis.value,
                                        field.inclination.value,
                                        field.argPerigee.value,
                                        field.eccentricity.value,
                                        field.raan.value,
                                        field.meanAnomoly.value,
                                        field.sidereal.value) ;
                
                heavenlyBodies.push(celestialBody) ;
                
                populate_table(i,field.name.value,
                                field.argPerigee.value, 
                                field.meanAnomoly.value,
                                field.eccentricity.value,
                                field.inclination.value,
                                field.semiMajorAxis.value,
                                field.raan.value,
                                field.sidereal.value) ;
        
            }		 

            }
    }

    //----------------------------------
                init() ;
                get_datablock() ;	
                traceOrbits() ;
                animate() ;