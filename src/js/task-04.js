let counterValue = 0;
function increment () {
    return counterValue += 1;
}
function decrement() {
    return counterValue -= 1;
}
const incBtn = document.querySelector('button[data-action="increment"]');
const decBtn = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector('#value');
incBtn.addEventListener('click', () => {
    value.textContent = increment();   
});
decBtn.addEventListener('click', () => {
    value.textContent = decrement();  
});
