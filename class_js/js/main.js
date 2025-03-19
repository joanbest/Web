// alert('cuadro de dialogo para mostrar un mensaje en ventana emergente');
// let varaiable = prompt('cuadro de dialogo para ingresar un valor');
// console.log('main.js loaded');

// let variable = parseInt('Hola mundo');
// let variable2 = 4;
// let variable3 = 4.5;
// let variable4 = true;

// console.log(typeof(variable)+variable);
// console.log(typeof(variable2)+variable2);
// console.log(typeof(variable3)+variable3);
// console.log(typeof(variable4)+variable4);

// let comillas = "'Hola mundo'";
// let comillas2 = '"Hola mundo"';

// console.log(comillas);
// console.log(comillas2);

// let nombre ='Sebastian';
// let x = 10;

// console.log(`Hola ${nombre} bienvenido`);
// console.log(`Operacion Embebida: ${x+x}`);

// let x=5;
// let y="5";

/*console.log(x==y);//compara solo el valor
console.log(x===y);//compara el valor y el tipo de dato
*/

// for(let i=0; i<10; i++){
//     console.log(i);
// }



// for(let i=0; i<10; i++){
//     let x= prompt('Ingrese un numero');
// if(x < 10){
//     console.log('es un digito');
// }else{
//     console.log('No es un digito');
// }
// }

// const arreglo = [1,2,3,true,false,'hola',4.5,{nombre:"Sebastian",edad:25},[1,2,3]];
// console.log(arreglo);

// const objects = {nombre:"Sebastian", apellido:"Pastrana", edad:25};
// console.log(objects);
// console.log("------For of para recorrer un arreglo---------");    
// for (const element of arreglo) {
//     console.log(element);   
// }

// console.log("---------For in para recorrer un objecto---------");

// for (const key in objects) {
//     console.log(key,objects[key]);
// }

//Preguntar al usuario si desea agregar una nota, al leer una nueva nota se debe recalcular y mostrar el promedio repetir la accion hasta que se indique que no se ingresaran mas notas
// let suma = 0;
// let contador = 0;
// let promedio = 0;
// let continuar = true;

// while (continuar) {
//     let nota = parseFloat(prompt('Ingrese una nota:'));
    
//     if (!isNaN(nota)) {
//         suma += nota;
//         contador++;
//         promedio = suma / contador;
//         console.log(`El promedio de las notas es ${promedio}`);
//     } else {
//         alert('Por favor, ingrese un número válido.');
//     }if(contador >5){
    
//     let respuesta = prompt('¿Desea ingresar más notas? (si/no)');
//     if (respuesta.toLowerCase() !== 'si') {
//         continuar = false;
//     }
// }
// }

// console.log(`Promedio final de las notas ingresadas: ${promedio}`);

/*FUNCIONES

function suma(x,y) {
return x+y;
}

console.log(suma(4,5));*/

/*FUNCION ANONIMA

const resta = function(x,y){
    return x-y;
}

console.log(resta(5,4))
*/

/*FUNCIONES FLECHA

const multi1= (a,b)=>{return a*b};
const multi2= (a,b)=>a*b;
const multi3= a=>a*5;
const multi4= (a)=>{return a*5};
const mutliplicacionTabla7=(a)=>{
let res=0;
for (let i = 1; i <=a; i++) {
    res+=7;
}
return res;
}

const mutliplicacionTabla3=()=>{
    for (let i = 1; i < 11; i++) {
        console.log(3+" x "+i+" = "+3*i);        
    }
}

console.log(multi1(5,6))
console.log(multi2(5,6))
console.log(multi3(5))
console.log(multi4(5))
console.log(mutliplicacionTabla7(5))
console.log(mutliplicacionTabla3())
*/

const promedio = (notas) => {
    let suma = 0;
    for (const nota of notas) {
        suma += nota;
    }
    return suma / notas.length;
}

console.log(promedio(2,3,4,5))