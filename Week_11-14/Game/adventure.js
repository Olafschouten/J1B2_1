var gamecontainer = document.getElementById('game-container');
var title = document.getElementById('title');
var description = document.getElementById('description');
var gamebuttons = document.getElementById("game-buttons");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

var inventoryItem = document.getElementById('inventoryItem');

var inventory = { 'Sleutel': false, 'Crowbar': false }



function itemSleutel() {
    inventory['Sleutel'] = true;
    document.getElementById('inventoryItem').style.display = 'none';
}

function itemCrowbar() {
    inventory['Crowbar'] = true;
    document.getElementById('inventoryItem').style.display = 'none';
}


//---------------startMenu---------------//

function startMenu() {
    description.classList.remove('endDescription');
    title.classList.add('title_Postion');
    title.style.display = '';
    title.innerHTML = 'Zoek de shcat';
    console.log(title);
    description.style.display = '';
    description.innerHTML = 'Klik op start om de game te staren';
    button1.innerHTML = "Start";
    button1.classList.add('button1_Postion');
    button2.style.display = 'none';
    button3.style.display = 'none';
    inventoryItem.style.display = 'none';
    button1.onclick = level1;
    gamecontainer.classList.add('backgroundStartMenu');
    gamecontainer.style.backgroundImage = "url('images/bg_startmenu.jpg')";
    inventoryItem.style.display = 'none';
}

function level1() {
    gamecontainer.classList.add('backgroundLevel1');
    title.style.display = 'none';
    description.style.display = 'none';
    console.log(title);
    button1.innerHTML = 'Links';
    button2.style.display = 'inline-block';
    button3.style.display = 'inline-block';
    button2.innerHTML = 'Vooruit';
    button3.innerHTML = 'Rechts';
    gamecontainer.style.backgroundImage = "url('images/bg_lv1.jpg')";
    button2.onclick = dood;
    button1.onclick = level2;
    button3.onclick = level3;
    inventoryItem.style.display = 'none';

}

function dood() {
    gamecontainer.classList.add('backgroundYoudied');
    description.style.display = '';
    description.innerHTML = 'Je bent vermoord door het moster';
    gamecontainer.classList.add('youdied');
    gamecontainer.style.backgroundImage = "url('images/bg_youdied1.jpg')";
    button1.innerHTML = 'Restart';
    button2.style.display = 'none';
    button3.style.display = 'none';
    button1.onclick = startMenu;
    inventoryItem.style.display = 'none';
}

function level2() {
    gamecontainer.classList.add('backgroundLevel2');
    inventoryItem.classList.add('itemEen');
    inventoryItem.src = "images/sleutel.png";
    inventoryItem.style.display = 'inline-block';
    description.style.display = 'none';
    gamecontainer.style.backgroundImage = "url('images/bg_lv2.jpg')";
    button1.innerHTML = 'Terug';
    button1.onclick = level1;
    button2.style.display = 'none';
    button3.style.display = 'none';
    inventoryItem.style.display = '';

    inventoryItem.onclick = itemSleutel;
}

function level3() {
    gamecontainer.classList.add('backgroundLevel3');
    description.style.display = 'none';
    gamecontainer.style.backgroundImage = "url('images/bg_lv3.jpg')";
    button1.innerHTML = 'Links';
    button1.onclick = level1;
    button2.style.display = 'inline-block';
    button2.onclick = level6;
    button2.innerHTML = 'Vooruit';
    button3.style.display = 'inline-block';
    button3.innerHTML = 'Rechts';
    button3.onclick = level4;
    inventoryItem.style.display = 'none';
}

function level4() {
    gamecontainer.classList.add('backgroundLevel4');
    description.style.display = 'none';
    gamecontainer.style.backgroundImage = "url('images/bg_lv4.jpg')";
    button1.onclick = level3;
    button1.innerHTML = 'Links';
    button2.innerHTML = 'Vooruit';
    button2.onclick = level5;
    button2.style.display = 'inline-block';
    button3.style.display = 'none';
    inventoryItem.style.display = 'none';
}

function level5() {
    gamecontainer.classList.add('backgroundLevel5');
    description.style.display = ('Zoek een sleutel om binnen te komen.');
    gamecontainer.style.backgroundImage = "url('images/bg_lv5.jpg')";
    button1.innerHTML = 'Links';
    button1.onclick = level4;
    button2.style.display = 'inline-block';
    button2.onclick = level5;
    button2.innerHTML = 'Naar binnen';
    button3.style.display = 'inline-block';
    button3.innerHTML = 'Om het huis heen';
    button3.onclick = level7_1;
    inventoryItem.style.display = 'none';

    if (inventory['Sleutel'] == true) {
        button2.onclick = level7;
        description.sryle.display = 'none';
    }
    else {
        button2.onclick = level5;
        description.style.display = 'block';
        description.innerHTML = 'Je hebt een sleutel nodig om binnen te komen';
    }
}

function level6() {
    gamecontainer.classList.add('backgroundLevel6');
    inventoryItem.classList.add('itemCrowbar');
    inventoryItem.src = "images/crowbar.png";
    inventoryItem.style.display = 'inline-block';
    description.style.display = 'none';
    gamecontainer.style.backgroundImage = "url('images/bg_lv6.jpg')";
    button1.innerHTML = 'Terug';
    button1.onclick = level3;
    button2.style.display = 'none';
    button3.style.display = 'none';
    inventoryItem.style.display = 'none';

    inventoryItem.style.display = '';

    inventoryItem.onclick = itemCrowbar;

}

function level7_1() {
    description.style.display = 'none';
    gamecontainer.classList.add('backgroundLevel7_1');
    description.style.display = 'none';
    gamecontainer.style.backgroundImage = "url('images/bg_lv6_1.jpg')";
    button1.innerHTML = 'Terug';
    button1.onclick = level5;
    button2.style.display = '';
    button2.innerHTML = 'Naar binnen met de Crowbar';
    button3.style.display = 'none';
    inventoryItem.style.display = 'none';

    if (inventory['Crowbar'] == true) {
        button2.onclick = level7;
        description.style.display = 'none';
    }
    else {
        button2.onclick = level7_1;
        description.style.display = 'block';
        description.innerHTML = 'Je hebt een crowbar nodig om binnen te komen';
    }
}

function level7() {
    gamecontainer.classList.add('backgroundLevel7');
    description.style.display = 'none';
    gamecontainer.style.backgroundImage = "url('images/bg_lv7.jpg')";
    button1.innerHTML = 'Links';
    button1.onclick = level8;
    button2.style.display = 'inline-block';
    button2.innerHTML = 'Om hoog';
    button2.onclick = dood3;
    button3.style.display = 'inline-block';
    button3.innerHTML = 'Rechts';
    button3.onclick = level8_1;
    inventoryItem.style.display = 'none';
}

function dood3() {
    gamecontainer.classList.add('backgrounddood3');
    description.style.display = '';
    description.innerHTML = 'Het spook heeft je vermoord';
    gamecontainer.style.backgroundImage = "url('images/bg_youdied2.png')";
    button1.innerHTML = 'Restart';
    button1.onclick = startMenu;
    button2.style.display = 'none';
    button3.style.display = 'none';
    inventoryItem.style.display = 'none';
}

function level8() {
    gamecontainer.classList.add('backgroundLevel8');
    description.style.display = 'none';
    gamecontainer.style.backgroundImage = "url('images/bg_lv8_1.jpg')";
    button1.innerHTML = 'Terug';
    button1.onclick = level7;
    button2.style.display = 'inline-block';
    button2.innerHTML = 'Vooruit';
    button2.onclick = levelEnd;
    button3.style.display = 'none';
    inventoryItem.style.display = 'none';
}

function level8_1() {
    gamecontainer.classList.add('backgroundLevel8_1');
    description.style.display = 'none';
    gamecontainer.style.backgroundImage = "url('images/bg_lv8.jpg')";
    button1.innerHTML = 'Terug';
    button1.onclick = level7;
    button2.style.display = 'inline-block';
    button2.innerHTML = 'Vooruit';
    button2.onclick = levelEnd;
    button3.style.display = 'none';
    inventoryItem.style.display = 'none';
}

function levelEnd() {
    gamecontainer.classList.add('backgroundLevelEnd');
    description.classList.add('endDescription');
    description.style.display = '';
    description.innerHTML = 'Je hebt de schat gevonden!';
    gamecontainer.style.backgroundImage = "url('images/end.jpg')";
    button1.innerHTML = 'Restart';
    button1.onclick = startMenu;
    button2.style.display = 'none';
    button3.style.display = 'none';
    inventoryItem.style.display = 'none';
}

startMenu();