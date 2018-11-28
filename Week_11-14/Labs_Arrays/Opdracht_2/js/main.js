
document.write('<h1>' + 'Opdracht 2: array met namen' + '</h1>');


var namen = []

for (i=0; i<3; i++){
    namen.push(prompt('Hoeveel namen wilt u in de array stoppen? (minimaal 3)'));
}

document.write(namen);