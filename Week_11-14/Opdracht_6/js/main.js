
document.write('<h1>' + 'Opdracht 6: piramide aflopend' + '</h1>');

var a = prompt('hoe groot moet de piramide worden');

var piramide = [];


for (var i = 0; i <= a; i++) {
    piramide.push(i);
}
console.log(piramide);
document.write('array: ' + piramide.join('') + '<br>' + '<br>');

for (var o = 0; o <= a; o++) {
    document.write(piramide.join('') + '<br>');
    piramide.pop();
}