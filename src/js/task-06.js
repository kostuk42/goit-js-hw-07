const input = document.querySelector('#validation-input');
input.addEventListener('blur', () => {
    const inputlength = input.value.length;
    const datalength = Number(input.dataset.length);
    return inputlength === datalength ? input.className = 'valid' : input.className = 'invalid'
    
})