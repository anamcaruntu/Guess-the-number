'use strict';

//1. Generador de número aleatorio

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const random = getRandomNumber(100);
//console.log(`Mi número aleatorio es: ${random}`);  

//Declaración de constantes globales

const inputNumber = document.querySelector (".js-input-number");
const submitBtn = document.querySelector (".js-submit-button");
const clueEl = document.querySelector (".js-clue");
const attemptsEl = document.querySelector (".js-attempts");


//2. Generador de pistas 

function writeClue(message){
  clueEl.innerHTML = message;
};


function updateClick () {

  let inputNumberValue = parseInt(inputNumber.value);
/* CORRECCIÓN: aquí tengo que poner parseInt para que lo entienda como número y no como cadena de caracteres */
  //console.log(`El número introducido en el formulario es: ${inputNumberValue}`); 
  if (inputNumberValue >= 1 && inputNumberValue <= 100){
    if (inputNumberValue < random) {writeClue("Demasiado bajo");}
    else if (inputNumberValue > random) {writeClue("Demasiado alto");}
    else if (inputNumberValue === random) {writeClue("Has ganado campeona!!");}
  }  
  else {
    writeClue("El número debe estar entre 1 y 100. Prueba otra vez");
    }
  counter();
  //console.log (`Mi número aleatorio es: ${random} y mi número introducido es: ${inputNumberValue}`);
}
//3. Generador de intentos

let attemptsNumber = 0; //no puedo definirlo dentro de la función porque sino se pondría el contador en 0 cada vez que la invoque

function counter(){

attemptsNumber= attemptsNumber +1; 
 /*opción 2: attemptsNumber++ 
   opción 3: attemptsNumber+=1 */
attemptsEl.innerHTML = attemptsNumber;
  //console.log(`Mi número de intentos hasta el momento es: ${attemptsNumber}`);
}  
//Listener
submitBtn.addEventListener ("click", updateClick);


