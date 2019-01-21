var quicklist = ['TRUTH', 'TOOLS', 'TWIST', 'TOPAZ', 'TRICK', 'TRIES', 'TRACK', 'TRIPS', 'TWINS', 'TOUCH', 'TRUCK', 'TRUST', 'TELLS', 'TARTS', 'THINK', 'TROPE', 'TIPSY', 'TOWER']; // word list
var input = document.getElementById('guess'); // the input box
var button = document.getElementById('button'); // the button
var guess;

// change css class
var changeClass = function (cng, old, newClass) {
  cng.className = cng.className.replace(old, newClass);
}

// game loop
var gameloop = function () {
  // pick a random word
  var rand = quicklist[Math.floor(Math.random() * quicklist.length)];
  var hasDuplicates = (/([a-zA-Z]).*?\1/).test(rand); // if multiple insances of a letter in the word

  var pressn = 1; // turn number

  // get all indexes of a given value in an array
  var getAllIndexes = function (arr, val) {
    var indexes = [], i;
    for (i = 0; i < arr.length; i++)
      if (arr[i] === val)
        indexes.push(i);
    return indexes;
  }

  // give first letter
  document.getElementById("row1").firstElementChild.innerHTML = rand[0];

  // guess event
  input.onkeypress = function (event) {
    if (event.key == "Enter" || event.keyCode == 13) {
      document.getElementById('smallMsg').innerHTML = "Green = correct letter, Yellow = wrong place"; // reset message
      guess = input.value.toUpperCase();

      var current = "row" + pressn;
      // current row
      var childDivs = document.getElementById(current).getElementsByTagName('div');
      var c = 0; // correct count

      // If not right number of letters
      if (guess.length !== 5) {
        document.getElementById('smallMsg').innerHTML = "Guesses must be 5 letters!";
        if (pressn === 5) {
          end("Sorry, you lost.", "Correct word: " + rand);
        }
        pressn++;
        document.getElementById(current).firstElementChild.innerHTML = rand[0];
        return; // move down
      }

      // check for correctness
      for (var i = 0; i < childDivs.length; i++) {
        childDivs[i].innerHTML = guess[i];

        // if letter match in right place
        if (guess[i] == rand[i]) {
          changeClass(childDivs[i], 'default', 'correct');
          c++;
        }
        // if exists but is in the wrong place
        else if (rand.indexOf(guess[i]) != -1) {
          if (hasDuplicates === false && childDivs[rand.indexOf(guess[i])].className != "square correct") {
            changeClass(childDivs[i], 'default', 'wrongplace');
          } //if
          // if there are duplicate letters
          else if (hasDuplicates === true) {
            var ind = getAllIndexes(rand, guess[i]);
            if (ind.length > 1) {
              for (var j = 0; j < ind.length; j++) {
                if (childDivs[ind[j]].className != "square correct" && childDivs[i].className != "square wrongplace") {
                  changeClass(childDivs[i], 'default', 'wrongplace');
                } //if
              } //for
            } //if
            else if (childDivs[rand.indexOf(guess[i])].className != "square correct") {
              changeClass(childDivs[i], 'default', 'wrongplace');
            } //else if
          } //else if(hasDuplicates === true)
        } //else if

        input.value = ""; // clear input box

        if (c === 5) { // if they have all the correct letters
          end("Congrats, you won!", "Play Again?");
        } //if
        else if (pressn === 5) { // if they're out of tries
          end("Sorry, you lost.", "Correct word: " + rand);
        } //else if
      } //for (check for correctness loop)
      pressn++; // inc number of guesses
    } //if (key = 'enter')
  } //input 
} //gameloop

// endgame
var end = function (msg, smallmsg) {
  document.getElementById('msgBox').innerHTML = msg;
  document.getElementById('smallMsg').innerHTML = smallmsg;
  changeClass(button, "invisible", "visible");
  document.getElementById('guess').readOnly = true;
}

// reset
var playagain = function () {
  document.getElementById('msgBox').innerHTML = "Guess the Word!"; // main message
  document.getElementById('smallMsg').innerHTML = "Green = correct letter, Yellow = wrong place"; // small message
  document.getElementById('guess').readOnly = false;
  changeClass(button, "visible", "invisible");

  // clean boxes
  for (var i = 1; i < 6; i++) {
    var resets = document.getElementById('row' + i).getElementsByTagName('div');
    for (var j = 0; j < 5; j++) {
      resets[j].innerHTML = "";
      if (resets[j].className == "square correct" || resets[j].className == "square wrongplace") {
        changeClass(resets[j], "correct", "default");
        changeClass(resets[j], "wrongplace", "default");
      } //if
    } //for
  } //for
  // restart the loop
  gameloop();
};

// start loop
gameloop();
