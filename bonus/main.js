let scelta = prompt("scegli pari o dispari");
let sceltaGiocatore = prompt('inserisci un numero compreso tra 1 e 9');
let scelta1= parseInt(sceltaGiocatore);
console.log(scelta1);
let sceltacomputer = Math.floor(Math.random()*10);
let scelta2 = parseInt(sceltacomputer);
let totale=scelta1+scelta2;
console.log(somma);

if((scelta  == "pari") && (totale % 2 == 0)){
    alert('Hai vinto questo round');
} else if((scelta == "pari") && (totale % 2 != 0)){
    alert('Hai perso questo round');
} else if((scelta == "dispari") && (totale % 2 == 0)){
    alert('Hai perso questo round');
} else if((scelta == "dispari") && (totale % 2 != 0)){
    alert('Hai vinto questo round');
}