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


var loader = new THREE.JSONLoader();
loader.load( 'tools3D/gazebo.js', function( geometry) {
mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
mesh.scale.set( 50, 30, 50);
mesh.position.z = -100;
mesh.position.y = 0;
mesh.position.x = -300;
scene.add( mesh );
});

loader.load( 'tools3D/pai.js', function( geometry) {
mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
mesh.scale.set( 30, 30, 30);
mesh.position.z = -150;
mesh.position.y = 0;
mesh.position.x = 350;
scene.add( mesh );
});

loader.load( 'tools3D/takeang.js', function( geometry) {
mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
mesh.scale.set( 10, 10, 10);
mesh.position.z = 320;
mesh.position.y = 0;
mesh.position.x = -300;
scene.add( mesh );
});

loader.load( 'tools3D/takeang.js', function( geometry) {
mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
mesh.scale.set( 10, 10, 10);
mesh.position.z = 320;
mesh.position.y = 0;
mesh.position.x = -400;
scene.add( mesh );
});

loader.load( 'tools3D/takeang.js', function( geometry) {
mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
mesh.scale.set( 10, 10, 10);
mesh.position.z = 320;
mesh.position.y = 0;
mesh.position.x = 300;
scene.add( mesh );
});

loader.load( 'tools3D/takeang.js', function( geometry) {
mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
mesh.scale.set( 10, 10, 10);
mesh.position.z = 320;
mesh.position.y = 0;
mesh.position.x = 400;
scene.add( mesh );
});

loader.load( 'tools3D/kampu.js', function( geometry) {
mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
mesh.scale.set( 20, 20, 20);
mesh.position.z = 380;
mesh.position.y = 0;
mesh.position.x = 450;
scene.add( mesh );
});

loader.load( 'tools3D/kampu.js', function( geometry) {
mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
mesh.scale.set( 20, 20, 20);
mesh.position.z = 380;
mesh.position.y = 0;
mesh.position.x = -350;
scene.add( mesh );
});

loader.load( 'tools3D/kampu.js', function( geometry) {
mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
mesh.scale.set( 20, 20, 20);
mesh.position.z = 380;
mesh.position.y = 0;
mesh.position.x = -250;
scene.add( mesh );
});

loader.load( 'tools3D/kampu.js', function( geometry) {
mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
mesh.scale.set( 20, 20, 20);
mesh.position.z = 380;
mesh.position.y = 0;
mesh.position.x = -150;
scene.add( mesh );
});

loader.load( 'tools3D/kampu.js', function( geometry) {
mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
mesh.scale.set( 20, 20, 20);
mesh.position.z = 380;
mesh.position.y = 0;
mesh.position.x = 450;
scene.add( mesh );
});

loader.load( 'tools3D/kampu.js', function( geometry) {
mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
mesh.scale.set( 20, 20, 20);
mesh.position.z = 380;
mesh.position.y = 0;
mesh.position.x = 350;
scene.add( mesh );
});

loader.load( 'tools3D/kampu.js', function( geometry) {
mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
mesh.scale.set( 20, 20, 20);
mesh.position.z = 380;
mesh.position.y = 0;
mesh.position.x = 250;
scene.add( mesh );
});

loader.load( 'tools3D/kampu.js', function( geometry) {
mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
mesh.scale.set( 20, 20, 20);
mesh.position.z = 380;
mesh.position.y = 0;
mesh.position.x = 150;
scene.add( mesh );
});

loader.load( 'tools3D/palm.js', function( geometry) {
mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
mesh.scale.set( 0.20, 0.20, 0.20);
mesh.position.z = -380;
mesh.position.y = 0;
mesh.position.x = -580;
scene.add( mesh );
});

loader.load( 'tools3D/palm.js', function( geometry) {
mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
mesh.scale.set( 0.20, 0.20, 0.20);
mesh.position.z = 380;
mesh.position.y = 0;
mesh.position.x = -580;
scene.add( mesh );
});

loader.load( 'tools3D/palm.js', function( geometry) {
mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
mesh.scale.set( 0.20, 0.20, 0.20);
mesh.position.z = 380;
mesh.position.y = 0;
mesh.position.x = 580;
scene.add( mesh );
});

loader.load( 'tools3D/palm.js', function( geometry) {
mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
mesh.scale.set( 0.20, 0.20, 0.20);
mesh.position.z = -380;
mesh.position.y = 0;
mesh.position.x = 580;
scene.add( mesh );
});
    
var groundTexture = THREE.ImageUtils.loadTexture( "grasslight-big.jpg" );
groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
groundTexture.repeat.set( 10, 10 );
groundTexture.anisotropy = 5;
var groundMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, map: groundTexture } );
var mesh = new THREE.Mesh( new THREE.PlaneBufferGeometry( 1200, 800 ), groundMaterial );
mesh.position.y = 0;
mesh.rotation.x = -Math.PI / 2;
mesh.receiveShadow = true;
scene.add( mesh );
camera.position.set(0,400,800);
camera.up = new THREE.Vector3(0,0,0);
camera.lookAt(new THREE.Vector3(0,0,0));
function render() {
   requestAnimationFrame(render);
   renderer.render(scene, camera);
}
render();