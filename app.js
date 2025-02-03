
let numeroSecreto = 0;
let numeroIntentos = 0;
let numeroSorteado = [];
let numeroMaximo = 10;



function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = (texto) //Podemos definir un titulo al implementar js en un elemento de html
    return;
}


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('numeroIngresado').value);

    console.log(numeroIntentos)
    if ( numeroDeUsuario === numeroSecreto ) {
        asignarTextoElemento('p', `Acertaste el número en: ${numeroIntentos} ${numeroIntentos === 1 ? ' vez' : ' veces'} `); //Definimos el templateString como un operador ternario
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if ( numeroDeUsuario > numeroSecreto ) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        numeroIntentos++;
        limpiarTxt();
        
    }
    // console.log(`Número secreto: ${numeroSecreto}`, typeof(numeroSecreto))
    // console.log(`Número usuario: ${numeroDeUsuario}`, typeof(numeroDeUsuario))
    console.log(numeroDeUsuario === numeroSecreto);
    return;
}

function limpiarTxt() {
    document.querySelector('#numeroIngresado').value = '';
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;//Si el número generado esta en la lista 

    // console.log(numeroGenerado);
    // console.log(numeroSorteado);
    
    //Si se han sorteado todos los números
    if (numeroSorteado == numeroMaximo) {

        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles.')

    } else {
        if ( numeroSorteado.includes(numeroGenerado)){

            return generarNumeroSecreto();
        } else {
            numeroSorteado.push(numeroGenerado)
            
            return numeroGenerado;
        }
    }


}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto 🎮');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}:`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego( ) {
    //Limpiaremos la caja de texto
    limpiarTxt();
    //Indicar el mensaje de intervalo de números
    condicionesIniciales();
    //Generamos nuevamente un número aleatorio
    //Deshabilitar el botón de nuevo juego
    //Inicializar el número intentos
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')

}


condicionesIniciales();
