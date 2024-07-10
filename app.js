let numeroSecreto = 0;
let intentos = 0;
let rango = 10;
let listaNumerosAcertados = [];


function asignarElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("inputNumeroUsuario").value);
    
    if (numeroUsuario === numeroSecreto){
        asignarElemento('p',`Has acertado el numero en ${intentos} ${(intentos === 1) ? 'intento':'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (numeroUsuario > numeroSecreto){
            asignarElemento('p', 'El numero es menor');
        } else {
            asignarElemento('p', 'El numero es mayor');
        }
        intentos++;
        limpiarInput()
    }
    return;
}

function limpiarInput(){
    document.getElementById("inputNumeroUsuario").value = "";
}


function numeroRandom() {
    let numeroGenerado = Math.floor((Math.random()*rango)+1);

    console.log(numeroGenerado);
    console.log(listaNumerosAcertados)
    if (listaNumerosAcertados.length == rango){
        asignarElemento('p','Ya has acertado todos los numeros posibles')
    } else {
        //si numero generado ya fue acertado:
        if (listaNumerosAcertados.includes(numeroGenerado)){
            return numeroRandom();
            
        } else {
            listaNumerosAcertados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesInciales(){
    asignarElemento('h1','Adivina el numero secreto');
    asignarElemento('p',`Ingresa un numero del 1 al ${rango}`);    
    numeroSecreto = numeroRandom();
    intentos = 1;
    console.log(`Numero secreto: ${numeroSecreto}`)
}
function reiniciarJuego(){
    limpiarInput();
    condicionesInciales();
    document.getElementById('reiniciar').setAttribute("disabled", 'true');

    return;
}

condicionesInciales();









//=====================================  Desafios de los cursos =================================//

// Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir 
//de su altura en metros y peso en kilogramos, que se recibirán como parámetros. peso/estaura al cuadrado

// function imc(peso, estaura){
//     let imc = peso/estaura**2
//     return `tu indice de masa coporal es: ${imc}`
// }

// peso = 50;
// estaura = 1.70;

// indiceDeMasaCorporal = imc(peso,estaura)

// console.log(indiceDeMasaCorporal)

// Crea una función que calcule el valor del factorial de un número pasado como parámetro.

// function vector(numero){
//     let factorial = 1;
//     for(let i=1; i <= numero; i++){
//         factorial = i*i;
//     }
//     return factorial;
// }
// let numero = parseInt(89)
// let prueba = vector(numero);
// console.log(prueba)

// Crea una función que convierta un valor en dólares, pasado como parámetro, 
//y devuelva el valor equivalente en cop. Para esto, considera la cotización del dólar igual a 4.050.

// function conversor(dolares){
//     let dolarACop = dolares*4050;
//     return dolarACop;
// }

// let dolares = 10;
// let resultado = conversor(dolares);
// console.log(resultado);

// Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular,
// utilizando la altura y la anchura que se proporcionarán como parámetros.
//Area = A*b
//Perimetro 2(a*b) 

// function calcularArea(alto, ancho){
//     let Area = alto*ancho;
//     return Area;
// }

// function calcularPerimetro(alto, ancho){
//     let perimetro = 2*(ancho+alto);
//     return perimetro;
// }

// let alto = 10;
// let ancho = 10;

// let resultadoArea = calcularArea(alto,ancho)

// let resultadoPerimetro = calcularPerimetro(alto,ancho)

// console.log(`Area: ${resultadoArea} Perimetro ${resultadoPerimetro}`)
    
// Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
//utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
// area = pi * r**2
//2*pi*r

// const pi = 3.1416

// function calcularArea(radio){
//     let Area = pi*(radio**2);
//     return Area;
// }

// function calcularPerimetro(radio){
//     let perimetro = 2*pi*radio;
//     return perimetro;
// }

// let radio = 55;

// let resultadoArea = calcularArea(radio)

// let resultadoPerimetro = calcularPerimetro(radio)

// console.log(`Area: ${resultadoArea} Perimetro ${resultadoPerimetro}`)

// Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

// function tablaDeMultiplicar(numero){
//     let Tabla = 1;
//     for(let i=1; i <= 10; i++){
//         Tabla = numero*i;
//         console.log(Tabla);
//     }
// }
// let numero = 7;
// let resultado = tablaDeMultiplicar(numero);
// console.log(resultado);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Crea una lista vacía llamada "listaGenerica".
// let listaGenerica = [];
// Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

// let lenguagesDeProgramacion = ["JavaScript","C","C++","Kotlin","Python"];

// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

// lenguagesDeProgramacion.push("Java","Ruby","Golang")

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
// function mostrarLista(){
    
//     console.log(lenguagesDeProgramacion);
//     for (let i=0; i < lenguagesDeProgramacion.length;i++){
//         console.log(lenguagesDeProgramacion[i]);
//     }
// }
// mostrarLista()
// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

// function mostrarListaReversa(){
//     lenguagesDeProgramacion = lenguagesDeProgramacion.reverse();
//     console.log(lenguagesDeProgramacion);
//     for (let i=0; i < lenguagesDeProgramacion.length;i++){
//         console.log(lenguagesDeProgramacion[i]);
//     }
// }
// mostrarListaReversa()

// Crea una función que calcule el promedio de los elementos en una lista de números.

// function promedio(){
//     let numeros = [5,6,9,8,1,3,6,7,4];
//     let i;
//     let suma = 0;
//     for (i=0; i < numeros.length;i++){
//         suma += numeros[i];
//     }
//     prom = suma/numeros.length;
//     console.log(prom)
// }
// promedio()

// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

// function mayorYMenor(){

//     let numeros = [5,6,9,8,1,3,6,7,4,100,-50,5];

//     mayor = Math.max(...numeros);
//     menor = Math.min(...numeros);

//     console.log(`El numero mayor es ${mayor} y el menor el ${menor}`)
// }
// mayorYMenor()

// Crea una función que devuelva la suma de todos los elementos en una lista.

// function sumaNumeros(){
//     let numeros = [5,6,9,8,1,3,6,7,4,100,5];
//     let i;
//     let suma = 0;
//     for(i=0;i < numeros.length; i++){
//         suma += numeros[i];
//     }
//     console.log(`La suma es ${suma}`)
// }
// sumaNumeros()

// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

// function buscar(parametro){
//     let numeros = [5,6,9,8,1,3,6,7,4,100,5];
    
//     if (numeros.includes(parametro)){
//         lugar = numeros.indexOf(parametro)
//         console.log(lugar)
//     } else {
//         console.log('-1')
//     }
// }
// buscar(100)

// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

// function sumaListas(){
//     let lista1 = [1,1,1]; //3
//     let lista2 = [2,2,2]; //6
//     let sumaListas = [];
//     let i;
//     let suma = 0;

//     for(i=0;i<lista1.length;i++){
//         suma += lista1[i];
//         sumaListas.push(suma)
//     }
//     for(i=0;i<lista2.length;i++){
//         suma += lista2[i];
//         sumaListas.push(suma)
//     }
//     console.log(`La suma de ambas listas dio ${suma}`)
    
//     for(i=0;i<sumaListas.length;i++){
//         console.log(`Suma numero ${[i]} dio: ${sumaListas[i]}`)
//     }
//     // console.log(sumaListas)
// }
// sumaListas();


// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.


// let lista = [1,2,3,4,5];
// let operacion ;

// function cuadrado(listas){
    
//     for(i=0;i<listas.length;i++){
//         operacion = lista[i]**2;
//         console.log(`${operacion}`)
//     }
// }
// cuadrado(lista);