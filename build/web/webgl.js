var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 1,5000);
var renderer = new THREE.WebGLRenderer();
var light,ambient;
ambient = new THREE.AmbientLight(0x404040);
scene.add( ambient );
var Lx = 0,Ly = 0, Lz = 0;
var Lcolor;
function Light(Lx,Ly,Lz,Lcolor){
    light = new THREE.DirectionalLight( Lcolor );
    light.position.set( Lx, Ly, Lz);
    scene.add( light );
}

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var LampX = 0;
var LampZ = 0;
function rockLamp(LampX){
    var geometry = new THREE.BoxGeometry(80, 15, 80);
    var material = new THREE.MeshLambertMaterial();
    var cube = new THREE.Mesh(geometry, material);
    cube.material.color.setHex( 0xaaaaaa );
    cube.position.set(LampX,-200,LampZ);
    scene.add(cube);

    var geometry = new THREE.BoxGeometry(40, 130, 40);
    var material = new THREE.MeshLambertMaterial();
    var cube = new THREE.Mesh(geometry, material);
    cube.material.color.setHex( 0x999999 );
    cube.position.set(LampX,-150,LampZ);
    scene.add(cube);

    var geometry = new THREE.BoxGeometry(75, 6,75);
    var material = new THREE.MeshLambertMaterial();
    var cube = new THREE.Mesh(geometry, material);
    cube.material.color.setHex( 0xaaaaaa );
    cube.position.set(LampX,-80,LampZ);
    scene.add(cube);

    var geometry = new THREE.BoxGeometry(60, 40,60);
    var material = new THREE.MeshLambertMaterial();
    var cube = new THREE.Mesh(geometry, material);
    cube.material.color.setHex( 0x999999 );
    cube.position.set(LampX,-65,LampZ);
    scene.add(cube);

    var geometry = new THREE.CylinderGeometry(55, 55,5,8);
    var material = new THREE.MeshLambertMaterial();
    var cube = new THREE.Mesh(geometry, material);
    cube.material.color.setHex( 0xaaaaaa );
    cube.position.set(LampX,-45,LampZ);
    scene.add(cube);

    var geometry = new THREE.SphereBufferGeometry(20, 20,5);
    var material = new THREE.MeshLambertMaterial();
    var cube = new THREE.Mesh(geometry, material);
    cube.material.color.setHex( 0xaaaaaa );
    cube.position.set(LampX,-35,LampZ);
    scene.add(cube);
}

Light(500,1000,0,0xffffff);
Light(-500,1000,0,0xffffff);
Light(0,500,1000,0x222222);
rockLamp(0,0);
rockLamp(120,0);
rockLamp(-120,0);
rockLamp(240,0);
rockLamp(-240,0);
rockLamp(360,0);
rockLamp(-360,0);
rockLamp(480,0);
rockLamp(-480,0);

var groundTexture = THREE.ImageUtils.loadTexture( "grasslight-big.jpg" );
groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
groundTexture.repeat.set( 25, 25 );
groundTexture.anisotropy = 16;
var groundMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, map: groundTexture } );
var mesh = new THREE.Mesh( new THREE.PlaneBufferGeometry( 10000, 10000 ), groundMaterial );
mesh.position.y = -250;
mesh.rotation.x = - Math.PI / 2;
mesh.receiveShadow = true;
scene.add( mesh );

camera.position.set(0,100,700);
camera.up = new THREE.Vector3(0,0,-1);
camera.lookAt(new THREE.Vector3(0,0,0));
function render() {
   requestAnimationFrame(render);
   renderer.render(scene, camera);
}
render();