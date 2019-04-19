document.onkeypress = function (e) {
        // Movement
        if (e.keyCode == 97) { // a
            canvasBlocks._cursor.moveLeft();
        } else if (e.keyCode == 100) { // d
            canvasBlocks._cursor.moveRight();
        } else if (e.keyCode == 119) { // w
            canvasBlocks._cursor.moveUp();
        } else if (e.keyCode == 115) { // s
            canvasBlocks._cursor.moveDown();
        } else if (e.keyCode == 113) { // q
            canvasBlocks._cursor.moveOut();
        } else if (e.keyCode == 101) { // e
            canvasBlocks._cursor.moveIn();
        } else if (e.keyCode == 114) { // r
            canvasBlocks._cursor.rotate();
        } else if (e.keyCode == 116) { // t
            canvasBlocks._cursor.tilt();
        } else if (e.keyCode == 102) { // f
            canvasBlocks._cursor.resizeUp();
        } else if (e.keyCode == 103) { // g
            canvasBlocks._cursor.resizeDown();
        }

        // Delete Block
        if(e.keyCode == 52){
            cursor.delete();
        }

        // Draw items
        if (e.keyCode == 122) { // z
            canvasBlocks.drawCube(currentColor);
        } else if (e.keyCode == 120) { // x
            canvasBlocks.drawCylinder(currentColor);
        } else if (e.keyCode == 99) { //c
            canvasBlocks.drawSphere(currentColor);
        }
    }