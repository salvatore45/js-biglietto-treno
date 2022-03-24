let anni=prompt("inserire l'età");
anni=parseInt(anni);
console.log(anni);

let chilometri = prompt("inserire quanti chilometri devi percorrere");
chilometri=parseFloat(chilometri);
console.log(chilometri);
let prezzointero=chilometri*0.21;
console.log(prezzointero);
let prezzofinale;

if (anni<18){
    alert("Non sei maggiorenne hai diritto a uno sconto");
    let scontominori=prezzointero*0.2;
    console.log(scontominori);
    prezzofinale=prezzointero-scontominori;
} else if (anni>=65){
    scontoanziani=prezzointero*0.4;
    console.log(scontoanziani);
    prezzofinale=prezzointero-scontoanziani;
} else {
    alert("non hai uno sconto");
    prezzofinale=prezzointero;
}
let prezzoFinaleDueDecimale=prezzofinale.toFixed(2);
console.log(prezzoFinaleDueDecimale + "Questo è il prezzo");