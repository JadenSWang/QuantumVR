document.addEventListener("keydown", function (e) {
    var keyCode = e.keyCode;
    switch (keyCode) {
        // Movement
        case 65: // a
            canvasBlocks._cursor.moveLeft();
            break;
        case 68: // d
            canvasBlocks._cursor.moveRight();
            break;
        case 87: // w
            canvasBlocks._cursor.moveUp();
            break;
        case 83: // s
            canvasBlocks._cursor.moveDown();
            break;
        case 81: // q
            canvasBlocks._cursor.moveOut();
            break;
        case 69: // e
            canvasBlocks._cursor.moveIn();
            break;
        case 82: // r
            canvasBlocks._cursor.rotate();
            break;
        case 84: // t
            canvasBlocks._cursor.tilt();
            break;
        case 70: // f
            canvasBlocks._cursor.resizeUp();
            break;
        case 71: // g
            canvasBlocks._cursor.resizeDown();
            break;

            // Delete Block
        case 8:
            canvasBlocks.delete();
            break;

            // Draw items
        case 90: // z
            canvasBlocks.drawCube(currentColor);
            break;
        case 88: // x
            canvasBlocks.drawCylinder(currentColor);
            break;
        case 67: // c
            canvasBlocks.drawSphere(currentColor);
            break;
    }
});
document.onkeypress = function (e) {

}