var cnt = document.getElementById('container');
var body = document.getElementsByTagName('BODY')[0];
var kleuren = ['red', 'purple', 'blue', 'black'];
var aantalButtons = 30;

for (i = 1; i <= aantalButtons; i++) {
    var btn1 = document.createElement('BUTTON');
    btn1.setAttribute('id', 'buttons' + i);
    btn1.innerText = i;
    cnt.appendChild(btn1);
    btn1.classList.add('button1');
    btn1.onclick = veranderKleur;
}

function veranderKleur(){
    var clicked = event.target;
    clicked.style.backgroundColor = 'red';
    clicked.onclick = veranderKleur2;
}

function veranderKleur2() {
    var clicked = event.target;
    clicked.style.backgroundColor = 'purple';
    clicked.onclick = veranderKleur3;
}

function veranderKleur3() {
    var clicked = event.target;
    clicked.style.backgroundColor = 'blue';
    clicked.onclick = veranderKleur4;
}

function veranderKleur4() {
    var clicked = event.target;
    clicked.style.backgroundColor = 'black';
    clicked.onclick = veranderKleur5;
}

function veranderKleur5() {
    var clicked = event.target;
    clicked.remove();
}