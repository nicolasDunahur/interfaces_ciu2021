// index
// export const usuario = document.forms["myForm"]["usuario"].value;

function validarUsuario() {
    var usu = document.forms["myForm"]["usuario"].value;
    if (! /^\d+$/.test(usu)){
        alert("El usuario debe ser un numero");
        return false;
    }
    else {
        return true
    }
}    

function validarPassword() {
    var contra = document.forms["myForm"]["password"].value;
    if ( contra.length < 4){
        alert("La contraseña debe tener mas de 4 numeros");
        return false;
    }
    else {
        return true
    }    
}

function validaciones(){
    if (validarUsuario() && validarPassword()){
        window.location.replace("principal.html")
    }
}
