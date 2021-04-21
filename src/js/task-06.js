const input = document.querySelector('#validation-input');
input.addEventListener('blur', () => {
    const inputlength = input.value.length;
    const datalength = Number(input.dataset.length);

    if (inputlength === datalength) {
        if (input.classList.contains('invalid')) {
         input.classList.replace('invalid', 'valid');   
        } else {input.classList.add('valid')}
        return;
    } else {
        if (input.classList.contains('valid')) {
            input.classList.replace('valid', 'invalid');
        } else {input.classList.add('invalid')}
    }
})