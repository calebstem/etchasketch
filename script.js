const toAdd = document.createDocumentFragment();
const container = document.getElementById('container');
const box = document.getElementsByClassName('box');

let boxSize = 16;
//let gridNum = 'repeat(boxSize, 26px)';

container.style.gridTemplateRows = 'repeat(boxSize, 26px)';
container.style.gridTemplateColumns = 'repeat(16, 26px)';



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