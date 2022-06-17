# Homework: Introducción a Javascript

---

## Instrucciones

1. En un archivo de texto separado que debes crear, escribe explicaciones de los siguientes conceptos como si se lo estuvieras explicando a un niño de 12 años. Hacer esto te ayudará a descubrir rápidamente cualquier agujero en tu comprensión.

 * Variables
 * Strings
 * Funciones (argumentos, `return`)
 * Declaraciones `if`
 * Valores booleanos (`true`, `false`)

2. Instalar Node y NPM. NPM se incluye con Node. <https://nodejs.org/en/download/>

3. Desde la carpeta `Curso.Prep.Henry` en la carpeta donde clonaste el repo: ingresa el comando `npm install`, una vez que termine ingresa el comando `npm test JSI.test.js` para correr los tests automatizados. Al principio, todos los tests estarán fallados/rotos. Encontrarás las funciones para hacer pasar los tests en el archivo `homework.js`.

>> Deberás ir escribiendo código en `homework.js` y corriendo de nuevo los tests hasta que TODOS hayan pasado.

4. Una vez que termines cada homework, súbela a tu repositorio `Curso.Prep.Henry`, con los comandos que ya aprendiste a usar en la primera lección de git.

### Aca tendras acceso a las [Soluciones](https://github.com/atralice/Curso.Prep.Henry/blob/solution/02-JS-I/homework/homework.js)

RESPUESTA 1: LAS VARIABLES SON COMO CAJAS (O CARPETAS) DONDE SE PUEDEN ALMACENAR LOS 7 TIPOS DE DATOS EXISTENTES (NUMEROS, STRINGS, BOOLEANOS, NULL, UNDEFINED, BIGINT, SYMBOL), TAMBIEN SE PUEDE ALMACENAR EN ELLAS OBJETOS, ARRAYS O FUNCIONES, ESTOS DATOS AL ESTAR ALMACENADOS EN UNA VARIABLE HACE QUE SEAN MAS FACILES DE MANEJAR/MANIPULAR (SI QUIERO USAR UN OBJETO COMO PARAMETRO DE UNA FUNCION ES MAS FACIL SI ALMACENO EL OBJETO EN UNA VARIABLE Y DESPUES EN LOS PARAMETROS DE LA FUNCION LLAMO A ESA VARIABLE)

LOS STRINGS SON UN TIPO DE DATO QUE CONSISTE EN CADENAS DE TEXTO COMO "hola"

LAS FUNCIONES SON FORMULAS MATEMATICAS QUE RECIBEN UNOS VALORES DE ENTRADA(ARGUMENTOS) Y A ESOS VALORES SE LE APLICAN UNA SERIE DE MODIFICACIONES PARA CONVERTIRLOS EN OTRA COSA, AL FINAL SE RETORNAN ESTOS VALORES CAMBIADOS CON return EJEMPLO:
function pesoideal (estatura){//EN ESTA FUNCION EL ARGUMENTO ES estatura
    var estaturaAlCuadrado = estatura * estatura;//MODIFICANDO EL ARGUMENTO
    var pesoMaximo = estaturaAlCuadrado * 25;//PASO 2 DE LA MODIFICACION
    var pesoMinimo =estaturaAlCuadrado * 19;//PASO 3 Y FINAL DE LA MODIFICACION
    return "Usted debe pesar menos de " + pesoMaximo + " y mas de " + pesoMinimo;//LA FUNCION RETORNA EL RESULTADO FINAL
}
console.log(pesoideal(1.8));//introducir estatura en metros

LAS DECLARACIONES IF SON AQUELLAS QUE ANALIZAN SI UNA CONDICION ES CIERTA O FALSA Y EN BASE A ESO EJECUTAN UN CODIGO EJEMPLO:
IF(5 === 5){
    //ESTE CODIGO VA A EJECUTARSE POR QUE LA CONDICION ES CIERTA, 5 ES IGUAL A 5, EL PRIMER BLOQUE SE EJECUTA
    //SI LA CONDICION ES CIERTA
} ELSE{
    //ESTE BLOQUE NO SE EJECUTARA POR QUE SOLO SE EJECUTA CON LAS CONDICIONES FALSAS Y 5 ES IGUAL A 5 ES UNA 
    //AFIRMACION VERDADERA
}

LOS VALORES BOLEANOS SON UN TIPO DE DATO QUE INDICA SI ALGO ES VERDADERO(TRUE) O FALSO(FALSE), SI ES USADO COMO CONDICION SIRVE PARA EJECUTAR BLOQUES DE CODIGO QUE REALIZAN TAL TAREA SI ES TRUE Y TAL OTRA SI ES FALSE