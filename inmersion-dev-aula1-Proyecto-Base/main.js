let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contraseña = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar() {

    let numeroDigitado = parseInt (cantidad.value);
    
    if (numeroDigitado < 8) {
        alert("La cantidad de caracteres tiene que ser mayor a 8");
    } else {    
        let password = '';
        for (let i= 0; i < numeroDigitado; i++) {
        
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        
        password+=caracterAleatorio;
        }
        
        contraseña.value = password;

        validarContraseña(password);
    }
    
}

function limpiar() {
    contraseña.value = '';
    seguridad.value = '';
}

function validarContraseña(contraseña) {
    let expresion = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
    
    if ((expresion.test(contraseña))) {
        seguridad.value = 'Fuerte';
    } else {
        seguridad.value = 'Debil';
    }
}










