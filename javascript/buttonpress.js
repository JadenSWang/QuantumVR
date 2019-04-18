document.onkeypress = function(e){
    if(e.keyCode == 97){
        moveLeft(guideBlockMesh);
    } else if(e.keyCode == 100){
        moveRight(guideBlockMesh)
    } else if(e.keyCode == 119){
        moveUp(guideBlockMesh)
    } else if(e.keyCode == 115){
        moveDown(guideBlockMesh)
    } else if(e.keyCode == 113){
        moveOut(guideBlockMesh)
    } else if(e.keyCode == 101){
        moveIn(guideBlockMesh)
    }
}