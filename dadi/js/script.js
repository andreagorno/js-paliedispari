// 2 - Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// utente sceglie pari o dispari
var firstChoice = prompt("Scegli tra pari o dispari");

while (firstChoice != "pari" || firstChoice != "dispari") {
    firstChoice = prompt("Selezione sbagliata, per favore inserisci una a scelta tra pari o dispari");
    console.log(firstChoice);
}
console.log("Hai scelto " + firstChoice);
// if (firstChoice != "pari" || firstChoice != "dispari") {
//     alert("Inserimento errato, per favore riprovare");
//     firstChoice = prompt("Scegli tra pari o dispari");
// }

// utente inserisce un numero da 1 a 5
var secondChoice = parseInt(prompt("Inserisci un numero da 1 a 5"));

while (secondChoice > 5 || secondChoice < 1) {
    secondChoice = parseInt(prompt("Selezione sbagliata, per favore inserisci un numero compreso tra 1 e 5"));

    secondChoice >= 5 || secondChoice <= 1;
}
console.log("Hai scelto il numero " + secondChoice);
// if (secondChoice < 1 || secondChoice > 5) {
//     alert("Inserimento errato, per favore riprovare");
//     secondChoice = parseInt(prompt("Inserisci un numero da 1 a 5"));
// } else if (isNaN(secondChoice)) {
//     alert("Inserimento errato, per favore riprovare");
//     secondChoice = parseInt(prompt("Inserisci un numero da 1 a 5"));
// } else if (secondChoice == "") {
//     alert("Inserimento errato, per favore riprovare");
//     secondChoice = parseInt(prompt("Inserisci un numero da 1 a 5"));
// }
// console.log("Hai inserito il numero " + secondChoice);

// generare un numero random
function generateNumber(min, max) {
    var random = Math.floor((Math.random() * (5 - 1 + 1) ) + 1);

    return random;

}

var generateRandom = generateNumber();
console.log(generateRandom + " è il numero generato casualmente dal computer");

// sommare i due numeri
var somma = secondChoice + generateRandom;
console.log(somma + " è la somma dei due numeri");

function isEven (somma) {
    if (somma % 2 == 0) {
        return true;
    } else {
       return false; 
    }
}

var result = isEven(somma);

if (firstChoice == "pari" && result == true) {
    console.log("L'utente ha vinto");
} else if (firstChoice == "dispari"  && result == false) {
    console.log("L'utente ha vinto");
} else {
    console.log("L'utente ha perso");
}