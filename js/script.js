// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

console.log('SNACK 1');

var bici = [
    {
        nome : 'senzafreni',
        peso : 7
    },
    {
        nome : 'piuma',
        peso : 6
    },
    {
        nome : 'graziella',
        peso : 7.5
    },
    {
        nome : 'mountain bike',
        peso : 8
    }
];

var pesoMinimo = 100;

for (var i =0; i < bici.length; i++) {
    if (bici[i].peso < pesoMinimo) {
        pesoMinimo = bici[i].peso;
        var leggera = bici[i];
    }
}

console.log(leggera);







// Snack 2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate inizialmente a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
// Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

console.log('SNACK 2');

var squadre = [
    {
        nome : 'Milan',
        'punti fatti' : 0,
        'falli subiti' : 0,
    },
    {
        nome : 'Inter',
        'punti fatti' : 0,
        'falli subiti' : 0,
    },
    {
        nome : 'Atalanta',
        'punti fatti' : 0,
        'falli subiti' : 0,
    },
    {
        nome : 'Juventus',
        'punti fatti' : 0,
        'falli subiti' : 0,
    },
];

var falliSquadre = [];

for (var i = 0; i < squadre.length; i++) {

    squadre[i]["punti fatti"] = randomNumber(0, 30);
    squadre[i]["falli subiti"] = randomNumber(0, 10);

    falliSquadre.push(squadre[i].nome + ' = ' + squadre[i]["falli subiti"]);
}

console.log(squadre);
console.log(falliSquadre);










function randomNumber (min, max) {
    num = Math.floor(Math.random() * (max - min + 1) + min );
    return num;
}





// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
// La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

console.log('SNACK 3');

function numeriCompresi (arr, min, max) {
    

    for (var i = min; i < max - 1; i++) {
        arr.push(i + 1);
    }
    
    return arr;
}

var numeri = [];

numeriCompresi (numeri, 5, 30);

console.log(numeri);


