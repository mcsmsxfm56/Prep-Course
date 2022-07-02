// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var arrayConKeys = Object.keys(objeto);//array con keys ["D", "B", "C"]
  var arrayRetorno = [];
  for(var i = 0; i < arrayConKeys.length; i++){
    var arrayIterado = new Array(arrayConKeys[i], objeto[arrayConKeys[i]]);
    arrayRetorno.push(arrayIterado);
  }
  return arrayRetorno;
  //return arrayConKeys.length;//FUNCIONO!!! RETORNA 3
  //new Array()
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  //pasar el string a minusculas
  //eliminar espacios en blanco
  //crear objeto retorno (vacio)
  //hacer un if para ver si la key existe, si existe sumar 1 al valor, si no crearla
  //retornar objeto
  var stringMinusculas = string.toLowerCase().split('');//pasar el string a minusculas y sin espacios
  var objetoRetorno = {};
  for(var i = 0; i < stringMinusculas.length; i++){
    if(stringMinusculas[i] in objetoRetorno){
      objetoRetorno[stringMinusculas[i]] = objetoRetorno[stringMinusculas[i]] + 1;
    } else {
      objetoRetorno[stringMinusculas[i]] = 1;
    }
  }
  return objetoRetorno;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayusculas = s.match(/[A-Z]/g);//SE CAPTURAN LAS mayusculas Y LAS RETORNA EN ARRAY ["H", "E", "N", "R", "Y"]
  var minusculas = s.match(/[a-z]/g);//CAPTURA MINUSCULAS UNA POR UNA
  var palabramayuscula = "";
  var palabraminuscula = "";
  for(var i = 0; i < mayusculas.length; i++){
    palabramayuscula = palabramayuscula + mayusculas[i];
  }
  for(var i = 0; i < minusculas.length; i++){
    palabraminuscula = palabraminuscula + minusculas[i];
  }
  return palabramayuscula + palabraminuscula;//HENRY
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var arrayPalabras = str.split(' ');//['The', 'Henry', 'Challenge', 'is', 'close!']
  var arrayRetorno = [];
  for(var i = 0; i < arrayPalabras.length; i++){
    arrayRetorno[i] = arrayPalabras[i].split('').reverse().join(''); //['ehT', ]
  }
  arrayRetorno = arrayRetorno.toString().replaceAll(',', ' ');
  return arrayRetorno;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  //solo se considera capicua si tiene 2 o mas digitos
  //return numero.length;//puedo aplicarle length a un numero???, NO NO SE PUEDE!!
  //var arrayParametro = [numero];//Y SI LO CONVIERTO EN ARRAY?
  //return arrayParametro[0].length;//TAMPOCO FUNCIONA!!!
  var numeroString = numero.toString();//FUNCIONA SI LO CONVIERTO A STRING PRIMERO
  var cantidadDigitos = numeroString.length;//YA SE LA CANTIDAD DE DIGITOS
  var ultimoDigito = cantidadDigitos - 1;//INDEX ULTIMO DIGITO
  var acumulador = 0;
  for(var i = 0; i < cantidadDigitos; i++){
    if(numeroString[i] == numeroString[ultimoDigito]){
      acumulador++;
      ultimoDigito--;
    }
  }
  if(acumulador == cantidadDigitos){
    return 'Es capicua';
  } else {
    return 'No es capicua';
  }
  //return 'Es capicua';
  //return 'No es capicua';
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  return cadena.replaceAll(/[a-c]/g, '');
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var retorno = arr.sort((a,b) => a.length - b.length);
  return retorno;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arrayElementosEnComun = [];
  for(var i = 0; i < arreglo1.length; i++){
    for(var j = 0; j < arreglo2.length; j++){
      if(arreglo1[i] == arreglo2[j]){
        arrayElementosEnComun.push(arreglo1[i]);
        i++;
        j = -1;
      }
    }
  }
  return arrayElementosEnComun;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

