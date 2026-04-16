// Chiedo i numeri all'utente
let num1 = Number(prompt("inserisci il primo numero:"));
let num2 = Number(prompt("inserisci il primo numero:"));

//creo variabili 
let somma = num1 + num2;
let sottrazione = num1 - num2;
let moltiplicazione = num1 * num2;
let divisione = num1 / num2;
let potenza = num1 ** num2;

// mmostro i risultati all'utente
console.log(`Risultati per i numeri ${num1} e ${num2}:`);
console.log("Somma:", somma);
console.log("Sottrazione:", sottrazione);
console.log("Moltiplicazione:", moltiplicazione);
console.log("Divisione:", divisione);
console.log("Potenza:", potenza);
