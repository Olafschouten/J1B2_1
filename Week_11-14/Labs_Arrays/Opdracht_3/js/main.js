document.write('<h1>' + 'Opdracht 3: rekenen met 2 arrays' + '</h1>');



document.write('<h2>' + 'Optellenvan van de twee arrays zijn:' + '</h2>');

var arrayEen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayTwee = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

function optellenvan() {
    for (i = 0; i < 10; i++) {
        var uitkomst = arrayTwee[i] + arrayEen[i];
        document.write(arrayEen[i] + ' + ' + arrayTwee[i] + ' = ' + uitkomst + '<br>');
    }
}
optellenvan();


document.write('<h2>' + 'Aftrekken van de twee arrays zijn:' + '</h2>');

function aftrekken1() {
    for (i = 0; i < 10; i++) {
        var uitkomst = arrayTwee[i] - arrayEen[i];
        document.write(arrayTwee[i] + ' - ' + arrayEen[i] + ' = ' + uitkomst + '<br>');
    }
}
aftrekken1();


document.write('<h2>' + 'Vermenigvuldigen van de twee arrays zijn:' + '</h2>');

function aftrekken2() {
    for (i = 0; i < 10; i++) {
        var uitkomst = arrayTwee[i] * arrayEen[i];
        document.write(arrayEen[i] + ' * ' + arrayTwee[i] + ' = ' + uitkomst + '<br>');
    }
}
aftrekken2();


document.write('<h2>' + 'Delen van de twee arrays zijn:' + '</h2>');

function aftrekken3() {
    for (i = 0; i < 10; i++) {
        var uitkomst = arrayTwee[i] / arrayEen[i];
        document.write(arrayTwee[i] + ' / ' + arrayEen[i] + ' = ' + uitkomst + '<br>');
    }
}
aftrekken3();