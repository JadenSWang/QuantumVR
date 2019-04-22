document.addEventListener("keydown", function (e) {
    var keyCode = e.keyCode;
    var toExecute = true;

    switch (keyCode) {
        // Movement
        // THE NUMBERS PASSED IN ARE NOT TRUE INTEGER VALUES, 0112 becomes 74
        case 87: // w
            topGlyph.addGlyph(0110);
            break;
        case 65: // a
            topGlyph.addGlyph(0111);
            break;
        case 83: // s
            topGlyph.addGlyph(0112);
            break;
        case 68: // d
            topGlyph.addGlyph(0113);
            break;
        case 69: // e
            topGlyph.addGlyph(0114);
            break;
        case 81: // q
            topGlyph.addGlyph(0115);
            break;
        case 82: // r
            topGlyph.addGlyph(0116);
            break;
        case 84: // t
            topGlyph.addGlyph(0117);
            break;
        case 70: // f
            topGlyph.addGlyph(0118);
            break;
        case 71: // g
            topGlyph.addGlyph(0119);
            break;

            // Draw items
        case 90: // z
            canvasBlocks.drawCube(currentColor);
            break;
        case 88: // x
            canvasBlocks.drawSphere(currentColor);
            break;
        case 67: // c
            canvasBlocks.drawCylinder(currentColor);
            break;
        default:
            toExecute = false;
            break;
    }

    if (toExecute)
        topGlyph.execute();
});