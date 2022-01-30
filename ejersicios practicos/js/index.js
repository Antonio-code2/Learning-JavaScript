/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10. */

function myFuncion(a){
    console.log(a.length);
}

myFuncion("hola mundo ejersicio resuelto");


/*2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".*/

let cadena1 = "hola mundo";
let cadena2 = cadena1.slice(0, -5)
console.log(cadena2)

function recortFuncion(a, b) {
   b = a.slice(0, b)
   console.log(b)
}
recortFuncion("hola mundo", 5)


/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/

function stringArray(a, b) {
 const myArray = a.split(b)
 console.log(myArray)
}

stringArray("hola mundo ejersicio cumplido", " ")




/*  4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/

function repeatText(a, b) {
    c = a.repeat(b)
    console.log(c)
}
repeatText("hola mundo ", 4)

