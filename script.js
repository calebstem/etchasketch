const toAdd = document.createDocumentFragment();
const container = document.getElementById('container');

for (let i = 1; i <= 256; i++){
    console.log('working');
    const newDiv = document.createElement('div');
    newDiv.id = 'r'+i;
    newDiv.className = 'box';
    toAdd.appendChild(newDiv);
}

container.appendChild(toAdd);