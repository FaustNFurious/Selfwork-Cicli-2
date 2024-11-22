// Dichiarazione Variabili
let sommaNumDispari = 0;
let mediaNumDsipari = 0;
let cntNumDispari = 0;

console.log("I numeri pari da 1 a 20 sono:");

// Ciclo per stampare la tabellina
for (let num = 1; num <= 20; num = num + 1) {

    // Stampa a schermo solo i numeri pari
    if (num % 2 == 0) {
        console.log(num);
    }
    else {
        sommaNumDispari = sommaNumDispari + num;
        cntNumDispari = cntNumDispari + 1;
    }

}

// Media dei numeri dispari
mediaNumDsipari = sommaNumDispari / cntNumDispari;
console.log(`La media dei numeri dispari è ${mediaNumDsipari}`);