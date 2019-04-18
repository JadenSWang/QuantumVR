document.onkeypress = function (e) {
        // Movement
        if (e.keyCode == 97) { // a
            moveLeft(cursorMesh);
        } else if (e.keyCode == 100) { // d
            moveRight(cursorMesh)
        } else if (e.keyCode == 119) { // w
            moveUp(cursorMesh)
        } else if (e.keyCode == 115) { // s
            moveDown(cursorMesh)
        } else if (e.keyCode == 113) { // q
            moveOut(cursorMesh)
        } else if (e.keyCode == 101) { // e
            moveIn(cursorMesh)
        } else if (e.keyCode == 114) { // r
            rotate(cursorMesh);
        } else if (e.keyCode == 116) { // t
            tilt(cursorMesh);
        }

        // Draw items
        if (e.keyCode == 122) { // z
            drawCube(currentColor);
        } else if (e.keyCode == 120) { // x
            drawCylinder(currentColor);
        } else if (e.keyCode == 99) { //c
            drawSphere(currentColor);
        }
    }