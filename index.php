<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Geometron 3D ThreeJS</title>
</head>

<table id="linktable">
	<tr>
		<td><a href="editor.php"> <img src="mapicons/editor.svg" />
			</a></td>
		<td><a href="shapetableeditor.php"> <img src="mapicons/hypercube.svg" />
			</a></td>
	</tr>
</table>
<textarea id="textio"></textarea>
<div id="gobutton"></div>
<input id="actioninput" />
<input id="addressinput" />

<table id="softkeypad">
</table>

<?php echo file_get_contents("canvas.html"); ?>

<!--Canvas/Scene-->
<script id="canvasGeometry">
function canvasGeometry(){
    <?php echo file_get_contents("javascript/canvasGeometry.js"); ?>
}
</script>

<script id="init">
function init(){
    <?php echo file_get_contents("javascript/init.js"); ?>
}
</script>

<script src="javascript/buttonpress.js"></script>

<style>
	#spellbox {
		position: absolute;
		left: 0px;
		right: 0px;
		bottom: 0px;
		height: 100px;
		overflow: scroll;
	}

	#actioninput {
		position: absolute;
		left: 17em;
		top: 1%;
		border: solid;
		width: 1em;
		border-radius: 5px;
		border-color: green;
	}

	#addressinput {
		position: absolute;
		left: 19em;
		top: 1%;
		border: solid;
		width: 3em;
		border-radius: 5px;
		border-color: blue;
	}

	#spellcanvas {
		position: absolute;
		bottom: 0px;
		left: 0px;
		border: solid;
	}

	#mainCanvas {
		position: absolute;
		left: 12em;
		top: 1%;
		height: 20px;
		width: 20px;
		border: solid;
		background-color: white;
	}

	#softkeypad {
		position: absolute;
		right: 0px;
		bottom: 11%;
		z-index: 50;
		height: 10%;
		width: 20%;
	}

	#softkeypad td {
		cursor: pointer;
	}

	#softkeypad td:hover {
		background-color: green;
	}

	#softkeypad td:active {
		background-color: yellow;
	}

	#linktable {
		position: absolute;
		left: 0px;
		top: 0px;
		z-index: -100;
	}

	#linktable img {
		width: 50px;
	}

	#textio {
		position: absolute;
		right: 0.1%;
		top: 2%;
		height: 41%;
		width: 19.3%;
		border: solid;
		z-index: 100;
		resize: none;
	}

	#gobutton {
		position: absolute;
		top: 1%;
		left: 7em;
		width: 4em;
		height: 2em;
		background-color: green;
		cursor: pointer;
		border: solid;
		border-color: black;
		border-width: 5px;
		border-radius: 2em;
		z-index: 5;
	}

	#gobutton:active {
		background-color: blue;
	}

	#gobutton:hover {
		background-color: #80ff80;
	}
</style>

</body>
</html>