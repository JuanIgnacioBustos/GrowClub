const validacionDelUsuario = "Bienvenido userUno"
let usuarioConEmail = "userUno"
let password = "passUno"
const nombre = "Juan"
const usuarioConArroba = "userUno@growclub.com"
const passwordNumerica = "pass123"

const nombreDelUser = prompt ("Ingrese su nombre")
const usuarioLoguear = prompt ("Ingrese su usuario")
const passwordUsuario = prompt ("Ingrese su contraseña") 
const validacionContrasenia = prompt ("Ingrese nueva contraseña que incluya numeros")
const validacionUsuario = prompt ("Ingrese nuevo mail con arroba")
const validacionUser = alert ("Bienvenido userUno@growclub.com")

const comprobarNombre = ( nombreDelUser, nombre) => {

if ( nombreDelUser == nombre){
    console.log(nombre)
} else {
    alert ("Nombre erroneo")
    }
}
comprobarNombre(nombre, nombreDelUser)


const comprobarUsuario = ( usuarioLoguear, usuarioConEmail) =>{
if ( usuarioLoguear == usuarioConEmail){
    console.log(usuarioConEmail)
} else {
    alert ("Usuario erroneo")
    }
}
comprobarUsuario(usuarioConEmail, usuarioLoguear)

const comprobarContrasenia = (passwordUsuario, password) =>{
if ( passwordUsuario == password){
    console.log(password)
} else {
    alert ("Contraseña erronea")
    }
}
comprobarContrasenia(password, passwordUsuario)

const comprobarUsuarioyContrasenia = (usuarioConEmail, password) =>{
if ( usuarioLoguear == usuarioConEmail && passwordUsuario == password){
    alert (validacionDelUsuario)
} else {
    alert ("Usuario y Contraseña erroneos")
    }
}
comprobarUsuarioyContrasenia(usuarioConEmail, password)

const comprobarCaracteres = (password) =>{

if ( 8 > password.length){
    alert("Su contraseña es insegura")
} else {
    alert("Su contraseña es segura")
    }
}
comprobarCaracteres(password)

const comprobarElArroba = (usuarioConEmail) =>{

    for ( let i = 0; i < usuarioConEmail; i++) {

    if (usuarioConEmail[i].match(/[@]/)){
        console.log(usuarioConEmail[i])
    } else {
        validacionUsuario
        }
    }
}
comprobarElArroba(usuarioConEmail)

const comprobarNumericamente = (password) =>{

for ( let i = 0; i < password; i++) {

    if (password[i].match(/[0-9]/)){
        console.log(password[i])
    } else {
        validacionContrasenia
        }
    }
}
comprobarNumericamente(password)

const comprobarNuevoUserYpass = function (usuarioConArroba, passwordNumerica) {

    if ( passwordUsuario == passwordNumerica && usuarioLoguear == usuarioConArroba ){
    alert (validacionUser)
}   else {
    alert ("Su usuario o contraseña es incorrecto")
    }
}

