var cnt = document.getElementById('container');
var body = document.getElementsByTagName('BODY')[0];
var kleuren = ["red", "purple", "darkgreen", "cyan", "blue", "yellow", "black"];
var aantalButtons = 30;
var teller = {};


for (i = 1; i <= 30; i++) {
    var btn = document.createElement('BUTTON');
    btn.innerText = i;
    btn.id = "button" + i;
    teller[btn.id] = 0;
    cnt.appendChild(btn);
    btn.classList.add('button1');
    btn.onclick = veranderKleur;
}

function veranderKleur(event) {
    event.target.style.backgroundColor = kleuren[teller[event.target.id]];
    teller[event.target.id] = teller[event.target.id] + 1;

    if ( teller[event.target.id] > kleuren.length) {
       cnt.removeChild(event.target);
    }
}




// for (i = 1; i <= aantalButtons; i++) {
//     var btn1 = document.createElement('BUTTON');
//     btn1.setAttribute('id', 'buttons' + i);
//     btn1.innerText = i;
//     cnt.appendChild(btn1);
//     btn1.classList.add('button1');
//     btn1.onclick = veranderKleur;
// }

// function veranderKleur() {
//     var clicked = event.target;
//     clicked.style.backgroundColor = 'red';
//     clicked.onclick = veranderKleur2;
// }