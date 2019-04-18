function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

/**
 * Performs basic animations (called by requestAnimationFrame())
 * 
 * @override
 * @param time
 * @returns
 */
function animate(time) {
	time *= 0.001; // seconds

	// moveLeft(guideBlock);

	render();
	requestAnimationFrame(animate);
}

// basic "cursor" movement
function moveLeft(blockMesh) {
	blockMesh.position.set(blockMesh.position.x - 10, blockMesh.position.y, blockMesh.position.z);
}

function moveRight(blockMesh) {
	blockMesh.position.set(blockMesh.position.x + 10, blockMesh.position.y,
		blockMesh.position.z);
}

function moveDown(blockMesh) {
	blockMesh.position.set(blockMesh.position.x, blockMesh.position.y - 10,
		blockMesh.position.z);
}

function moveUp(blockMesh) {
	blockMesh.position.set(blockMesh.position.x, blockMesh.position.y + 10,
		blockMesh.position.z);
}

function moveOut(blockMesh) {
	blockMesh.position.set(blockMesh.position.x, blockMesh.position.y,
		blockMesh.position.z + 10);
}

function moveIn(blockMesh) {
	blockMesh.position.set(blockMesh.position.x, blockMesh.position.y,
		blockMesh.position.z - 10);
}

// block resizing
function resizeBlockUp(block) {
	block.size.set(block.width, block.height, block.depth);
}

function resizeBlockDown(block) {
	block.size.set(block.width, block.height, block.depth);
}

// drawing shapes
function drawCube(color) {
	var block = new THREE.BoxGeometry(guideBlock.width, guideBlock.height, guideBlock.depth);
	var material = new THREE.MeshPhongMaterial({
		color: color,
		specular: 0xffffff,
		shininess: 1000,
		shading: THREE.SmoothShading
	});

	addObject(block, material);
}

function drawSphere(color) {
	var block = new THREE.SphereGeometry(guideBlock.width);
	var material = new THREE.MeshPhongMaterial({
		color: color,
		specular: 0xffffff,
		shininess: 1000,
		shading: THREE.SmoothShading
	});

	addObject(block, material);
}

function drawCylindar() {
	//fix
	var block = new THREE.CylinderGeometry(guideBlock.width, guideBlock.width, guideBlock.height);
	var material = new THREE.MeshPhongMaterial({
		color: color,
		specular: 0xffffff,
		shininess: 1000,
		shading: THREE.SmoothShading
	});

	addObject(block, material);
}

function addObject(block, material) {
	addObject(block, material, guideBlock.xloc, guideBlock.yloc, guideBlock.zloc)
}

function addObject(block, material, xloc, yloc, zloc) {
	// creates the "cursor"
	var blockMesh = new THREE.Mesh(block, material);

	// set the location of the block
	blockMesh.xloc = xloc;
	blockMesh.yloc = yloc;
	blockMesh.zloc = zloc;

	// add final mesh to the scene
	scene.add(blockMesh);
}

// rendering
function render() {
	renderer.render(scene, camera);
}