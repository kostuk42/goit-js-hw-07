const categories = document.querySelector('#categories').children;
console.log(`в списке ${categories.length} категории:`);
let items = document.querySelectorAll('.item');
[...items].forEach(item => {
    console.log(`категория: '${item.firstElementChild.textContent}'
количество элементов: ${item.lastElementChild.children.length}`)
});
