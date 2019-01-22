var input = document.createElement("INPUT");
var button = document.getElementById('checkButton');
var randomWordArray = words[Math.floor(Math.random() * words.length)];
var randomWordParts = randomWordArray.split("");
var activerow = 1;
var goed = [];
var fout = [];

//---- Maken van de div container ----//
var container = document.createElement("DIV");
document.body.appendChild(container);
container.classList.add("container");

console.log(randomWordArray);

//---- Maken van blokjes ----//
for (b = 1; b <= 5; b++) {
	var row = document.createElement("DIV");
	row.id = "row" + b;
	row.classList.add("row");
	container.appendChild(row);
	container.appendChild(input);
	input.classList.add("input");
	input.setAttribute('placeholder', 'voer je antwoord in');
	input.setAttribute('maxLength', '5');

	//---- Divjes aanmaken met een class en een id ----//
	for (var i = 0; i < 5; i++) {
		var miniBox = document.createElement("DIV");
		miniBox.classList.add("miniBox");
		row.appendChild(miniBox);
		miniBox.id = row.id + "box" + i;
	}
}

//---- Plaatsen van de eerste letter in het eerst blokje ----//
document.getElementById("row1").firstElementChild.innerHTML = randomWordArray[0];

var userInput;

//---- Voor deze function uit ----//
input.onkeypress = function (event) {
	if (event.key == "Enter" || event.keyCode == 13) {
		var woord = input.value;
		userInput = woord.split("");

		//---- Het ingevoerde woord printen in de blokjes ----//
		for (var i = 0; i < userInput.length; i++) {
			document.getElementById("row" + activerow + "box" + i).innerHTML = userInput[i];
			console.log(woord);
		}

		activerow++;

		//---- Je kan niet meer dan 5 keer proberen ----//
		if (activerow >= 6) {
			alert('Verloren ' + ' Juiste woord: ' + randomWordArray);
		}

		console.log(userInput);
		check2();
	}
}

function check2() {

	if (input.value.length != 5) {
		return alert('Minimaal 5 letters invoeren');
	}
	else {
		var randomWordPartsCopy = randomWordArray.split("");

		//---- Controleren van het ingevoerde woord (5 letters) ----//
		for (var i = 0; i < 5; i++) {
			document.getElementById("row" + (activerow - 1) + "box" + i).classList.add("red");

			//---- Maakt de letters op de goede plek null ----//
			if (randomWordParts[i] == userInput[i]) {
				goed[i] = randomWordParts[i];
				document.getElementById("row" + (activerow - 1) + "box" + i).style.backgroundColor = "green";
				randomWordPartsCopy[i] = null;
			}
		}
		i++;

		//---- Loop voor het controleren of dat de letter in het woord zitten ----//
		for (j = 0; j < fout.length; j++) {

			//---- Als de letter in het woord zit dat je invoerd word hij geel ----//
			if (fout[j] != null && randomWordPartsCopy.indexOf(fout[j]) > -1) {
				document.getElementById("row" + (activerow - 1) + "box" + j).style.backgroundColor = "yellow";
			}
		}
		j++;
	}

	if (randomWordParts[i] == userInput[i]) {
		alert('Je hebt gewonnen');
	}

}