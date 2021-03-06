const toAdd = document.createDocumentFragment();
const container = document.getElementById('container');
const box = document.getElementsByClassName('box');

let boxSize = 0;

createBox(16);

function createBox(boxSize){
    let ratioDim = 500 / boxSize;
    container.style.visibility = 'visible';
    container.style.gridTemplateColumns = `repeat(${boxSize}, ${ratioDim}px)`;
    for (let i = 1; i <= (boxSize * boxSize); i++){
        const newDiv = document.createElement('div');
        newDiv.id = 'r'+i;
        newDiv.className = 'box';
        newDiv.style.height = `${ratioDim}px`
        newDiv.style.width = `${ratioDim}px`  
        newDiv.addEventListener('mouseenter', function(){
            document.getElementById('r'+i).style.background = 'black' 
        }, false);
        toAdd.appendChild(newDiv);
    }
    container.appendChild(toAdd);
}

function removeBox(){
    container.style.visibility = 'hidden';
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

function newBox(){
    removeBox();
    boxSize = prompt('Box Size');
    if (boxSize > 100){
        boxSize = 100;
    } else if (boxSize == null){
        boxSize=8;
    }
    createBox(boxSize);
}