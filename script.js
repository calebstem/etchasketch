const toAdd = document.createDocumentFragment();
const container = document.getElementById('container');
const box = document.getElementsByClassName('box');

let boxSize = 0;


function createBox(boxSize){
    container.style.gridTemplateColumns = `repeat(${boxSize}, 26px)`;
    for (let i = 1; i <= (boxSize * boxSize); i++){
        const newDiv = document.createElement('div');
        newDiv.id = 'r'+i;
        newDiv.className = 'box';
        newDiv.addEventListener('mouseenter', function(){
            document.getElementById('r'+i).style.background = 'black' 
        }, false);
        toAdd.appendChild(newDiv);
    }
    container.appendChild(toAdd);
}

function removeBox(){
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

function newBox(){
    removeBox();
    boxSize = prompt('Box Size');
    createBox(boxSize);
}