const input = document.querySelector('#font-size-control');
// let volume = input.value;
const output = document.querySelector('#text');
input.addEventListener('input', () => {
    let volume = input.value;
    output.style.fontSize = (volume / 50) + "em";
}
);

