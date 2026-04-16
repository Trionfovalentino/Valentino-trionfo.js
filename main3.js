//creo le variabili anni
let nome ='Marco';
let anno_nascita = 1970;
let anno_corrente = 2026;

//calcolo l'età attuale
let eta = anno_corrente - anno_nascita;

//calcolo quanto mi manca ai 100anni 

let anni_mancanti = 100 - eta;

//stampo il messaggio finale 

console.log(`${nome} ha ${eta} anni e gli mancano ${anni_mancanti} per compierne 100`);
