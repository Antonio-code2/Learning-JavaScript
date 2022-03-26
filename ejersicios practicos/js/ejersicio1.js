/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10. */

function myFuncion(a) {
    console.log(a.length);
}

myFuncion("hola mundo ejersicio resuelto");


// solucion de jon mircha 
function contarCaracter(cadena = "") {
    if (!cadena) {
        console.log("No ingresaste ninguna cadena")
    } else {
        console.info(`la cadena "${cadena}" tiene ${cadena.length} caracteres`)
    }
}
contarCaracter()

// con funcion expresada
const contarCaracter2 = (cadena = "") => (!cadena)
    ? console.log("No ingresaste ninguna cadena")
    : console.info(`la cadena "${cadena}" tiene ${cadena.length} caracteres`)

contarCaracter2("hola mundo expresado");


/*2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".*/

let cadena1 = "hola mundo";
let cadena2 = cadena1.slice(0, -5)
console.log(cadena2)

function recortFuncion(a, b) {
    b = a.slice(0, b)
    console.log(b)
}
recortFuncion("hola mundo", 5)


// solucion de jon mircha 
const recortarTexto = (cadena = "", longitud = undefined) => (!cadena)
    ? console.warn("no ingresaste ninguna cadena")
    : (longitud === undefined)
        ? console.warn("no ingresaste la longitud para recortar el texto")
        : console.info(cadena.slice(0, longitud));

recortarTexto("hola mundo", 5);


/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/

function stringArray(a, b) {
    const myArray = a.split(b)
    console.log(myArray)
}

stringArray("hola mundo ejersicio cumplido", " ")

// solucion de jon mircha 
const cadenaAArreglo = (cadena = "", separador = undefined) =>
    (!cadena)
        ? console.warn("no ingresaste ninguna cadena de texto")
        : (separador === undefined)
            ? console.warn("no ingresaste el caracter de longitud")
            : console.info(cadena.split(separador));

cadenaAArreglo("lorem inpsu lare impsu de", " ")





/*  4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/

function repeatText(a, b) {
    c = a.repeat(b)
    console.log(c)
}
repeatText("hola mundo ", 4)


// solucion de jon mircha 





/*5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/
const invertirCadena = (cadena = "") => (!cadena)
    ? console.warn("no ingresaste ninguna cadena")
    : console.info(cadena.split('').reverse().join(''));

invertirCadena("hola mundo");


/* solucion de jon mircha */



/*
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/

const palabrasRepetidas = (cadena, repetidor) => {
    for (let i = 0; i < cadena.length; i++) {
        if (cadena === repetidor);
    }
    console.info(repetidor)

}

palabrasRepetidas("hola mundo mundo mundo", "mundo")

/* solucion de jon mircha */

const textoCadena = (cadena = "", texto = "") => {
    if (!cadena) return console.warn("no ingresaste una cadena");
    if (!texto) return console.warn("no ingresaste una cadena")

    i = 0;
    contador = 0;
    while (i !== -1) {
        i = cadena.indexOf(texto, i);
        if (i !== -1) {

            i++;
            contador++;
        }
    }
    return console.info(`la palabra ${texto} se repeite ${contador} veces`)
}

textoCadena("hola mundo mundo mundo", "mundo");

/*b 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.*/

function palindromismo(cadena) {

    return cadena === cadena.split("").reverse().join('');
}

palindromismo("salas");





/*8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */

function eliminarPatron(cadena = "", patron) {
    const recort = cadena.filter(cut => cut.length === patron)
}

/* solucion de jon mircha */

const elminarCaracteres = (texto = "", patron = "") =>
    (!texto)
        ? console.warn("no ingresaste ningun texto")
        : (!patron)
            ? console.warn("no ingresaste ningun patron")
            : console.info(texto.replace(new RegExp(patron, "ig"), ""));

elminarCaracteres("xyz2, xyz3, xyz4", "xy");


// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.


const aleatorio = (min, max) => {
    if (min.random < 501 && max.random > 600) {
        console.info("rangos incorrectos ")
    } else {
        return (Math.floor(Math.random() * (max - min)) + min);
    }

}

aleatorio(500, 600);


//solucion de jon mircha
const aleatoriodos = () => console.info(Math.round(Math.random() * 100));

aleatoriodos();

// otros algoritmos utilizando la funcion matematica random

//programa una funcion que enliste cierta camtidad de numeros aleatorios dadas por un usuario pe. myFuncion(10) devolvera (10 numeros aleatorio)

const listAleatorio = (cantidad) => {
    if (!cantidad) return console.warn("no ingresaste un numero");
    for (let i = 0; i < cantidad; i++) {
        console.info(Math.round(Math.random() * 100));
    }
}

listAleatorio(10);


// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

function capicua(numero) {
    return numero === numero.split('').reverse().join('');
}
capicua('200');

//solucion de jon mircha
const capicua = (numero = 0) => {
if(!numero) return console.warn("no ingresaste un numero");

if (typeof numero !== "number") return console.error(`el valor ${numero} ingresado, No es un numero`);

numero = numero.toString();
let alReves = numero.split.reverse().join("");

return(numero === alReves)
? console.info(`si es capicua, Numero original ${numero}, numero al reves ${alReves}`)
:console.info(`no es capicua, Numero original ${numero}, numero al reves ${alReves}`)
}

capicua(2002);




// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.


function factorial(numero) {
    // funcion para calcular el factorial de un numero
    factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

factorial(5)

// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
function numeroPrimo(numero)
{
    if (numero == undefined) {
        console.info("no ingresaste ningun numero");
    }
    if (typeof numero !== "number") {
        console.info("eso no es un numero");
    }
    for(let i = 1; i <= numero; i++){
         numero = numero  + 2;
    }

}

numeroPrimo()


//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.