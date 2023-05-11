
// SCRIPT JS

let studente = prompt("Inserisci il tuo Nome");
let cognome = prompt("Inserisci il tuo Cognome");
let colorePreferito = prompt("Qual'è il tuo colore preferito?");
let numero = parseInt(prompt("Inserisci il tuo numero preferito"));

document.getElementById("titolo").innerHTML = studente + cognome + colorePreferito + numero;

console.log(studente);
console.log(cognome);
console.log(colorePreferito);
console.log(numero);