//para mostrar info
// console.log ("Un texto")
// console.log (3*2)
// console.log ("Mañana es", 21+1, "de septiembre")
// console.info (3)
// console.warn ("texto de alerta")
// console.error("texto de eror")

//Pop-up
//alert("Hola mundo")
document.write("Hola desde JS")

//Otras alternativas
console.log("Este es el número 3:", 3)
console.log("Este es el resultado de 3-4:", 3-4)
console.log("Este es el resultado de 3+4:", 3+4)

//VARIABLES
let alumno = "Damian"
console.log(alumno)
let nota= 9



//CONSTANTES
const entidad = "Buenos Aires Ciudad"
// entidad= "Nación"

console.log(entidad)
console.log("El nombre del alumno es" + "alumno"+ "y su nota es" +  nota)


//Identificando los tipos de datos
let dato = 36
console.log(typeof dato)
dato = "Pepe"
console.log(typeof dato)
dato = true
console.log(typeof dato)
dato = "Pepe"(36+4)*2
console.log(typeof dato)

//Buenas practicas para crear variables
let nombreApellido = "Juan Carlos" //Camelcase
let User = "Juan Carlos" //Mayuscula
let _usuario 
let $usuario
let nombre_apellido = "Snake case"
let NombreApellido = "Pascal case"

//Las variables que no pueden usarse
// let 1ernombre
// let nombre-apellido 
// let var 
// let super
// let break
// let this 


//Tipos de STRING
let str1 = "String entre comillas dobles"
let str2 = 'String entre comillas simples'
let str3 = backtiks

console.log(str1+ "y" + str2)
let str4 = str1+ "y" + str2
console.log(str4)

//Operaciones básicas
let num1 = parseInt(prompt("Ingrese el primer número"))
let num2 = parseInt(prompt ("Ingrese el segundo número"))
//numero entero
let num3 = parseFloat(prompt("Ingrese el primer número"))
//número con decimal

console.log(num1 + num2)

let suma = num1 + num2
console.log(suma)


let resta = num1 - num2
console.log(resta)


let multi = num1 * num2
console.log(multi)


let division = num1 / num2
console.log(division)






