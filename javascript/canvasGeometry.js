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

class Block {
	_blockMesh;

	constructor(block, material, center, rotation) {
		// creates the "cursor"
		this._blockMesh = new THREE.Mesh(block, material);
		scene.add(this._blockMesh);

		// set the location of the block
		this._blockMesh.position.set(center.x, center.y, center.z);
		this._blockMesh.rotation.set(rotation.x, rotation.y, rotation.z);
	}

	/**
	 * TO-DO
	 */
	delete = function () {
		scene.remove(this._blockMesh);
	}

	getMesh = function () {
		return this._blockMesh;
	}

	getRotation = function () {
		return this._blockMesh.rotation;
	}

	getLocation = function () {
		return new THREE.Box3().setFromObject(this._blockMesh).getCenter();
	}
}

class CursorBlock extends Block {
	constructor(block, material) {
		super(block, material, new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0));
	}

	// basic cursor movement
	moveLeft = function () {
		this._blockMesh.position.set(this._blockMesh.position.x - 10, this._blockMesh.position.y, this._blockMesh.position.z);
	}

	moveRight = function () {
		this._blockMesh.position.set(this._blockMesh.position.x + 10, this._blockMesh.position.y, this._blockMesh.position.z);
	}

	moveDown = function () {
		this._blockMesh.position.set(this._blockMesh.position.x, this._blockMesh.position.y - 10, this._blockMesh.position.z);
	}

	moveUp = function () {
		this._blockMesh.position.set(this._blockMesh.position.x, this._blockMesh.position.y + 10, this._blockMesh.position.z);
	}

	moveOut = function () {
		this._blockMesh.position.set(this._blockMesh.position.x, this._blockMesh.position.y, this._blockMesh.position.z + 10);
	}

	moveIn = function () {
		this._blockMesh.position.set(this._blockMesh.position.x, this._blockMesh.position.y, this._blockMesh.position.z - 10);
	}
}

class GeometricObjects {
	_placedObjectMeshes;
	_cursor;

	constructor() {
		this._cursor = new CursorBlock(
			new THREE.BoxGeometry(10, 10, 10),
			new THREE.MeshPhongMaterial({
				color: 0xFFFFFF,
				opacity: 0.3,
				shininess: 1000,
				transparent: true
			}),
		);

		this._placedObjectMeshes = [];
	}

	// drawing shapes
	drawCube = function (color) {
		if (this.contains())
			return;

		const box = new THREE.Box3().setFromObject(this._cursor.getMesh());
		var block = new Block(
			new THREE.BoxGeometry(box.getSize().x, box.getSize().y, box.getSize().z),
			new THREE.MeshPhongMaterial({
				color: color,
				specular: 0xffffff,
				shininess: 1000
			}),
			box.getCenter(),
			this._cursor.getRotation());

		// Add to the array of all the objects
		this._placedObjectMeshes.push(block);
	}

	drawSphere = function (color) {
		if (this.contains())
			return;

		const box = new THREE.Box3().setFromObject(this._cursor.getMesh());
		var block = new Block(
			new THREE.SphereGeometry(box.getSize().x / 2, 10, 10),
			new THREE.MeshPhongMaterial({
				color: color,
				specular: 0xffffff,
				shininess: 1000
			}),
			box.getCenter(),
			this._cursor.getRotation()
		);

		// Add to the array of all the objects
		this._placedObjectMeshes.push(block);
	}

	drawCylinder = function (color) {
		if (this.contains())
			return;

		const box = new THREE.Box3().setFromObject(this._cursor.getMesh());
		var block = new Block(
			new THREE.CylinderGeometry(box.getSize().z / 2, box.getSize().z / 2, box.getSize().y),
			new THREE.MeshPhongMaterial({
				color: color,
				specular: 0xffffff,
				shininess: 1000
			}),
			box.getCenter(),
			this._cursor.getRotation()
		);

		// Add to the array of all the objects
		this._placedObjectMeshes.push(block);
	}

	// Checks if the object already exists in the canvas
	contains = function () {
		return this.findMesh(this._cursor.getLocation()) != -1;
	}

	delete = function () {
		var index = this.findMesh(this._cursor.getLocation());
		if (index == -1)
			return;

		this._placedObjectMeshes[index].delete();
	}

	findMesh = function (location) {
		for (var i = 0; i < this._placedObjectMeshes.length; i++) {
			if (this._placedObjectMeshes[i].getLocation().equals(location))
				return i;
		}

		return -1;
	}
}

// // block resizing
// function resizeBlockUp(block) {
// 	block.size.set(block.width, block.height, block.depth);
// }

// function resizeBlockDown(block) {
// 	block.size.set(block.width, block.height, block.depth);
// }

// rendering
function render() {
	renderer.render(scene, camera);
}