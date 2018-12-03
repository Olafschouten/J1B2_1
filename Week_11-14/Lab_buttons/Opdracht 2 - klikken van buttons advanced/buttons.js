var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');

button1.onclick = onclickButton1;
button2.onclick = onclickButton2;
button3.onclick = onclickButton3;

var teller = [0, 0, 0];

function onclickButton1() {
    document.getElementById('container').className = 'backgroundcontainer1';
    button1.innerHTML = ++teller[0];
    document.getElementById('f0').src = 'images/1.jpg';

    document.getElementById("button1").disabled = true;
    // document.getElementById('button2').style.backgroundColor('green');
    // document.getElementById('button3').style.backgroundColor('green');
    document.getElementById("button2").disabled = false;
    document.getElementById("button3").disabled = false;

    
}

function onclickButton2() {
    document.getElementById('container').className = 'backgroundcontainer2';
    button2.innerHTML = ++teller[1];
    document.getElementById('f0').src = 'images/2.jpg';
    document.getElementById("button1").disabled = false;
    document.getElementById("button2").disabled = true;
    document.getElementById("button3").disabled = false;
}

function onclickButton3() {
    document.getElementById('container').className = 'backgroundcontainer3';
    button3.innerHTML = ++teller[2];
    document.getElementById('f0').src = 'images/3.jpg';
    document.getElementById("button1").disabled = false;
    document.getElementById("button2").disabled = false;
    document.getElementById("button3").disabled = true;
}
