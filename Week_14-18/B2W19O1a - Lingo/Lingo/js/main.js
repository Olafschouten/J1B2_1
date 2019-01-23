// Olaf Schouten //
// Davinci college //
// Lingo opdracht //

var input = document.createElement("INPUT");
var button = document.getElementById('checkButton');
var randomWordArray = words[Math.floor(Math.random() * words.length)];
var randomWordParts = randomWordArray.split("");
var activerow = 1;
var userInput;

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

//---- Als je op enter drukt word die in de blokjes geplaatst ----//
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
		if (activerow > 5) {
			alert("Dit was je laatse kans!");
			alert("Het woord was:  " + randomWordArray);
			location.reload();
		}

		if (randomWordArray == woord) {
			alert("Het is je gelukt!");
			location.reload();
		}

		console.log(userInput);
		check2();
	}
}

function check2() {

	var goed = [];
	var fout = [];
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

		//---- Doet anders niets ----//
		else {
			fout[i] = userInput[i];
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
}