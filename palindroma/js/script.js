// 1 - Palindroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// richiedere all'utente una parola
var word = prompt("Inserisci qui una parola a tua scelta");
console.log(word);

// creare funzione
function palindroma() {
    var splitString = word.split("");

    var reverseString = splitString.reverse();

    var joinString = reverseString.join();

    return joinString;
}

var result = palindroma(word);
console.log(result);

var splitted = word.split("");
console.log(splitted);

// la parola inserita è palindroma?
if (splitted == result) {
    console.log("La parola inserita è palindroma");
    document.getElementById("title").innerHTML = "La parola inserita è palindroma";
} else {
    console.log("La parola insertita non è palindroma");
    document.getElementById("title").innerHTML = "La parola inserita non è palindroma";
}
