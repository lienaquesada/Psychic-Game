
	var wins = document.getElementById("wins");
	var losses = document.getElementById("losses");
	var guessesRemaining = document.getElementById("guessesRemaining");
	var guessesSoFar = document.getElementById("guessesSoFar");
	var allLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var winsCount = 0;
	var lossesCount = 0;
	var defaultGuessesRemaining = 9;
	var guessesRemainingCount = defaultGuessesRemaining;
	var guessesArray = [];
	var getRandomLetter = function () {
		randomLetter = allLetters[Math.floor(Math.random()*allLetters.length)]
		console.log(randomLetter);
		return randomLetter
	}	
	var displayStats = function () {
		wins.innerHTML = "Wins: " + winsCount
		losses.innerHTML = "Losses: " + lossesCount
		guessesRemaining.innerHTML = "Guesses Left: " + guessesRemainingCount
		guessesSoFar.innerHTML = "Your Guesses So Far: " + guessesArray
	}
	var resetGame = function () {
		guessesArray = [];
		guessesRemainingCount = defaultGuessesRemaining;
		currentLetter = getRandomLetter();
	}
	var userWon = function (userLetter) {
		return userLetter === currentLetter 
	}
	var userLost = function () {
		return guessesRemainingCount === 0;
	}
	var currentLetter = getRandomLetter();
	displayStats();
	document.onkeyup = function (event) {
		var userLetter = event.key;
		guessesRemainingCount--
		guessesArray.push(userLetter)
		if (userWon(userLetter)) {
			winsCount++;
			resetGame();
		} 
		if (userLost()) {
			lossesCount++;
			resetGame();
		}
		displayStats();
	}

