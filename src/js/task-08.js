const input = document.querySelector('#controls input');
const render = document.querySelector('button[data-action="render"]');
const destroy = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector('#boxes');
render.addEventListener('click', createBoxes);
destroy.addEventListener('click', destroyBoxes);

function createBoxes() {
    const amount = input.value;
    let divSize = 30;
    for (let i = 0; i < amount; i += 1){
        const newBox = document.createElement('div');
        newBox.style.width = newBox.style.height = divSize + "px";
        let color = Math.round(Math.random()*65025).toString(16);
        newBox.style.backgroundColor = '#' + color;
        boxes.appendChild(newBox);
        divSize += 10;
    }       
}
function destroyBoxes() {
    const newBoxes = boxes.children;
    const boxesQuantity = boxes.children.length;
    for (let i = 0; i < boxesQuantity; i += 1){
        newBoxes[0].remove();
    }
}


