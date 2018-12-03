var gamecontainer = document.getElementById('game-container');
var title = document.getElementById('title')
var description = document.getElementById('description')
var gamebuttons = document.getElementById("game-buttons");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

var inventoryItem = document.getElementById('inventoryItem')


//---------------startMenu---------------//

function startMenu() {
    title.classList.add('title_Postion');
    button1.innerHTML = "StartGame";
    button1.classList.add('button1_Postion');
    button2.style.display = 'none';
    button3.style.display = 'none';
    gamecontainer.classList.add('backgroundStartMenu')
    inventoryItem.style.display = 'none';
    button1.onclick = level1;
    gamecontainer.style.backgroundImage = "url('images/bg_startmenu.jpg')";

}

function level1() {
    gamecontainer.classList.remove('backgroundStartMenu');
    gamecontainer.classList.add('backgroundLevel1');
    title.style.display = 'none';
    description.innerHTML = 'Kies welke kan je op wilt'
    button1.innerHTML = 'Links';
    button2.style.display = 'inline-block';
    button3.style.display = 'inline-block';
    button2.innerHTML = 'Vooruit';
    button3.innerHTML = 'Rechts';
    gamecontainer.style.backgroundImage = "url('images/bg_lv1.jpg')";
    button2.onclick = dood;
    button1.onclick = level2;
    button3.onclick = level3;

}

function dood() {
    gamecontainer.classList.remove('backgroundLevel1');
    gamecontainer.classList.add('backgroundYoudied');
    description.style.display = 'none';
    gamecontainer.classList.add('youdied');
    gamecontainer.style.backgroundImage = "url('images/bg_youdied1.jpg')";
    button1.innerHTML = 'Restart';
    button2.style.display = 'none';
    button3.style.display = 'none';
    button1.onclick = startMenu;
}

function level2() {
    gamecontainer.classList.remove('backgroundStartMenu');
    gamecontainer.classList.add('backgroundLevel2');
    description.style.display = 'none';
    gamecontainer.style.backgroundImage = "url('images/bg_lv2.jpg')";
    button1.innerHTML = 'Terug';
    button1.onclick = level1;
    button2.style.display = 'none';
    button3.style.display = 'none';
}

function level3() {
    gamecontainer.classList.remove('backgroundLevel2');
    gamecontainer.classList.add('backgroundLevel3');
    description.style.display = 'none';
    gamecontainer.style.backgroundImage = "url('images/bg_lv3.jpg')";
    button1.innerHTML = 'Links';
    button1.onclick = level1;
    button2.style.display = 'inline-block';
    button3.style.display = 'none';
    button2.innerHTML = 'Rechts';
    button2.onclick = level4;

}

function level4() {
    gamecontainer.classList.remove('backgroundLevel3');
    gamecontainer.classList.add('backgroundLevel4');
    description.style.display = 'none';
    gamecontainer.style.backgroundImage = "url('images/bg_lv4.jpg')";
    button1.innerHTML = 'Vooruit';
    button1.onclick = level5;
    button2.style.display = 'none';
    button3.style.display = 'none';
}

function level5() {
    gamecontainer.classList.remove('backgroundLevel4');
    gamecontainer.classList.add('backgroundLevel5');
    description.style.display = 'none';
    gamecontainer.style.backgroundImage = "url('images/bg_lv5.jpg')";
    button1.innerHTML = 'Vooruit';
    // button1.onclick = level5;
    button2.style.display = 'none';
    button3.style.display = 'none';
}


startMenu();