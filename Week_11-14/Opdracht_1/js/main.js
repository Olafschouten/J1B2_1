var dagen = ['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'zondag'];

document.write('<h1>' + 'Opdracht 1: array met dagen' + '</h1>');

document.write('<h2>' + 'Alle dagen van de week zijn:' + '</h2>' + '<br>');
for(i=0; i<dagen.length; i++){
    document.write(dagen[i] + ', ');
}

document.write('<h2>' + 'De werkdagen zijn:' + '</h2>' + '<br>');
for(i=0; i<5; i++){
    document.write(dagen[i] + ', ');
}

document.write('<h2>' + 'De weekenddagen zijn:' + '</h2>' + '<br>');
for(i=5; i<7; i++){
    document.write(dagen[i] + ', ');
}

document.write('<h2>' + 'Alle dagen van de week in omgekeerde volgorde zijn:' + '</h2>' + '<br>');
for(i=6; i>-1; i--){
    document.write(dagen[i] + ', ');
}

document.write('<h2>' + 'De werkdagen in omgekeerde volgorde zijn:' + '</h2>' + '<br>');
for(i=4; i>-1; i--){
    document.write(dagen[i] + ', ');
}

document.write('<h2>' + 'De weekenddagen in omgekeerde volgorde zijn:' + '</h2>' + '<br>');
for(i=6; i>4; i--){
    document.write(dagen[i] + ', ');
}