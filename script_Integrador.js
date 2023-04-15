const inputCorreo = document.getElementById("form-correo")
const inputContraseña = document.getElementById("form-contraseña")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
const button = document.getElementById("buton-form")


form.addEventListener("submit", e=> {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
parrafo.innerHTML = ""
    if(!regexEmail.test(inputCorreo.value)){
warnings += "El email no es valido <br>"
entrar = true
}
if(inputContraseña.value.length < 8){
    warnings += "La contraseña debe contener como mínimo 8 caracteres <br>"
    entrar = true
}
if(entrar){
    parrafo.innerHTML = warnings
} else {
    parrafo.innerHTML = "Logeado con exito"
    form.reset();
}
    })

   
   








