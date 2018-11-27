document.write('<h1>' + 'Opdracht 4: array met tafels' + '</h1>');


var arrayEen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayTwee = [2, 4, 6, 8];

document.write('<h2>' + 'Tafel van 2:' + '</h2>');

for (i = 0; i < 10; i++) {
    var uitkomst = arrayEen[i] * arrayTwee[0];
    document.write(arrayEen[i] + ' * ' + arrayTwee[0] + ' = ' + uitkomst + '<br>');
}


document.write('<h2>' + 'Tafel van 4:' + '</h2>');

for (i = 0; i < 10; i++) {
    var uitkomst = arrayEen[i] * arrayTwee[1];  
    document.write(arrayEen[i] + ' * ' + arrayTwee[1] + ' = ' + uitkomst + '<br>');
}

document.write('<h2>' + 'Tafel van 6:' + '</h2>');

for (i = 0; i < 10; i++) {
    var uitkomst = arrayEen[i] * arrayTwee[2];
    document.write(arrayEen[i] + ' * ' + arrayTwee[2] + ' = ' + uitkomst + '<br>');
}

document.write('<h2>' + 'Tafel van 8:' + '</h2>');

for (i = 0; i < 10; i++) {
    var uitkomst = arrayEen[i] * arrayTwee[3];
    document.write(arrayEen[i] + ' * ' + arrayTwee[3] + ' = ' + uitkomst + '<br>');
}