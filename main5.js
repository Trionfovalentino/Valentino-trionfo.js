// creo le variabili 
let totaleGatti = 44;
let gattiInfila = 6;

//calcolo del numero di file 
let numeroFile = Math.floor(totaleGatti / gattiInfila);

//calcolo di quanti gatti rimangono fuori 
let gattiFuori = totaleGatti % gattiInfila;

//calcolo dei gatti mancanti per completare una nuova fila
let gattiMancanti = gattiFuori === 0 ? 0 : gattiInfila - gattiFuori;

//stampo il risultato

console.log(`Ci sono ${numeroFile} file di gatti e ne mancano ${gattiMancanti} per una nuova fila, con un avanzo di ${gattiFuori}`);