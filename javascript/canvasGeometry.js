/**
 * Performs basic animations (called by requestAnimationFrame())
 * 
 * @override
 * @param time
 * @returns
 */
function animate(time) {
	time *= 0.001; // seconds

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

// // block resizing
// function resizeBlockUp(block) {
// 	block.size.set(block.width, block.height, block.depth);
// }

// function resizeBlockDown(block) {
// 	block.size.set(block.width, block.height, block.depth);
// }

// drawing shapes
function drawCube(color) {
	const box = new THREE.Box3().setFromObject(cursorMesh);
	var block = new THREE.BoxGeometry(box.getSize().x, box.getSize().y, box.getSize().z);
	var material = new THREE.MeshPhongMaterial({
		color: color,
		specular: 0xffffff,
		shininess: 1000
	});

	addObject(block, material, box.getCenter());
}

function drawSphere(color) {
	const box = new THREE.Box3().setFromObject(cursorMesh);
	var block = new THREE.SphereGeometry(box.getSize().x);
	var material = new THREE.MeshPhongMaterial({
		color: color,
		specular: 0xffffff,
		shininess: 1000
	});

	addObject(block, material, box.getCenter());
}

function drawCylindar() {
	const box = new THREE.Box3().setFromObject(cursorMesh);
	var block = new THREE.CylindarGeometry(box.getSize().x, box.getSize().y, box.getSize().z);
	var material = new THREE.MeshPhongMaterial({
		color: color,
		specular: 0xffffff,
		shininess: 1000
	});

	addObject(block, material, box.getCenter());
}

function addObject(block, material, location) {
	// creates the "cursor"
	var blockMesh = new THREE.Mesh(block, material);

	// set the location of the block
	blockMesh.position.set(location.x, location.y, location.z);
	blockMesh.rotation.set(cursorMesh.rotation.x, cursorMesh.rotation.y, cursorMesh.rotation.z);

	// add final mesh to the scene
	scene.add(blockMesh);
}

// rendering
function render() {
	renderer.render(scene, camera);
}