
let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = (texto) //Podemos definir un titulo al implementar js en un elemento de html
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('numeroIngresado').value);
    console.log(`Número secreto: ${numeroSecreto}`, typeof(numeroSecreto))
    console.log(`Número usuario: ${numeroDeUsuario}`, typeof(numeroDeUsuario))
    console.log(numeroDeUsuario === numeroSecreto);
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}

asignarTextoElemento('h1', 'Juego del número secreto 🎮');
asignarTextoElemento('p', 'Indica un número del 1 al 10:');
