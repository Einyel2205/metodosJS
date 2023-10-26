// 6. Realiza en el DOM un software que compare si dos campos de password son iguales.

const btnCompare=document.getElementById('btnCompare');
btnCompare.addEventListener('click', comparePasswords);
document.getElementById('results').textContent = '';

function comparePasswords() {
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;

    if (password1===password2) {
        document.getElementById('results').textContent = 'equals passwords';
    }else{
        document.getElementById('results').textContent = 'different passwords';
    }

}
comparePasswords();