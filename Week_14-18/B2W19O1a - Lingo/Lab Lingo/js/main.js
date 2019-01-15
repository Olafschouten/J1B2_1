var cnt = document.getElementById('container');
var body = document.getElementsByTagName('BODY')[0];

// button1 
var btn1 = document.createElement('BUTTON');
var tBtn1 = document.createTextNode('BUTTON 1');
cnt.appendChild(btn1);
btn1.appendChild(tBtn1);
btn1.classList.add('button1');
btn1.onclick = button1;

// button 2
var btn2 = document.createElement('BUTTON');
var tBtn2 = document.createTextNode('BUTTON 2');
cnt.appendChild(btn2);
btn2.appendChild(tBtn2);
btn2.classList.add('button2');
btn2.onclick = button2;

// button 3
var btn3 = document.createElement('BUTTON');
var tBtn3 = document.createTextNode('BUTTON 3');
cnt.appendChild(btn3);
btn3.appendChild(tBtn3);
btn3.classList.add('button3');
btn3.onclick = button3;


function button1() {
    body.style.background = 'blue';
}

function button2() {
    body.style.background = 'red';
}

function button3() {
    body.style.background = 'green';
}