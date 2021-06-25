const toAdd = document.createDocumentFragment();
const container = document.getElementById('container');
const box = document.getElementsByClassName('box');

for (let i = 1; i <= 256; i++){
    const newDiv = document.createElement('div');
    newDiv.id = 'r'+i;
    newDiv.className = 'box';
    newDiv.addEventListener('mouseenter', function(){
        document.getElementById('r'+i).style.background = 'black' 
    }, false);
    toAdd.appendChild(newDiv);
}

function changeColor(){
    document.getElementById('r'+i).style.background = 'black';
}

//box.addEventListener('mouseenter', console.log('test'));

container.appendChild(toAdd);