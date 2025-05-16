const inputs = document.querySelectorAll('.verification');
const buttonSend = document.querySelector('.buttonEnviar');



buttonSend.addEventListener('click', enviarForm);

function enviarForm() {
    inputs.forEach(input => {
        let uncheck = input.nextElementSibling
        if (input.value.trim() !== '') {
            input.classList.remove('uncheck')
            uncheck.classList.remove('mostrar')
            input.classList.add('check')
            
        } else {
            input.classList.add('uncheck')
            uncheck.classList.add('mostrar')
        }
        
    })
}
