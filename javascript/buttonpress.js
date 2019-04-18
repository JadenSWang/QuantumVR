document.onkeypress = function(e){
    // Movement
    if(e.keyCode == 97){
        moveLeft(cursorMesh);
    } else if(e.keyCode == 100){
        moveRight(cursorMesh)
    } else if(e.keyCode == 119){
        moveUp(cursorMesh)
    } else if(e.keyCode == 115){
        moveDown(cursorMesh)
    } else if(e.keyCode == 113){
        moveOut(cursorMesh)
    } else if(e.keyCode == 101){
        moveIn(cursorMesh)
    }

    // Draw items
    if(e.keyCode == 122){
        drawCube(currentColor);
    } else if(e.keycode == 120){

    } else if(e.keycode == 99){

    }
}