export default function validation(input) {
    const error = {};
    const regexEmail= /\S+@\S+\.\s+/;
    const regexPassword= new RegExp("[0-9]");

    if(!regexEmail.test(input.email)) {
        error.email = "Debe ingresar un email válido!"
    }
    if(!input.email) {
        error.email = "Debe ingresar un email!"
    }
    if(input.email.length > 35) {
        error.email = "Debe ingresar menos de 35 caracteres!"
    }
    if(!regexPassword.test(input.password)) {
        error.password = "Pasword debe tener al menos un numero"
    }
    if(input.password.length <6 ||  input.password.length > 35) {
        error.password = "Contraseña entre 6 y 10 caracteres!"
    }
    return error;
}


// error= { email: "No es un email"}