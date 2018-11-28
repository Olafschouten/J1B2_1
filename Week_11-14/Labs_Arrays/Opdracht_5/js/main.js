

document.write('<h1>' + 'Opdracht 5: piramide oplopend' + '</h1>');

var vraag = prompt('Voer een getal in:');
var getallen = [];

document.write('<h2>' + 'Piramide oplopend' + '</h2>');
document.write('<h2>' + 'Array:' + getallen + '</h2>');

for (i = 0; i <= vraag; i++) {
    getallen.push(i);
    document.write(getallen.join('') + '<br>');
}