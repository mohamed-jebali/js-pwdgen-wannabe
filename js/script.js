
// SCRIPT JS

let studente = prompt("Inserisci il tuo Nome"),
 cognome = prompt("Inserisci il tuo cognome"),
 colorePreferito = prompt("Qual'è il tuo colore preferito?"),
 numero = prompt("Inserisci il tuo numero preferito");


`

${studente} ${cognome} ${colorePreferito} ${numero}

`

document.getElementById("titolo").innerHTML = studente + cognome + colorePreferito + numero;


console.log(studente);
console.log(cognome);
console.log(colorePreferito);
console.log(numero);