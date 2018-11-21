    //var's are how your page will first load
    var guessesLeft = 9;
    var wins = 0;
    var losses = 0;
    var letters = ['a','b','c','d','e','f','g','h','i','j','k','l',
        'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var guessedLetters = [];
    var compGuess = letters[Math.floor(Math.random() * letters.length)];

    document.onkeyup = function(event) {
    var userGuess = event.key;
    var options = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    console.log(compGuess);

    if (options.indexOf(userGuess) > -1) {

        if (userGuess === compGuess) {
            wins++;
            numGuesses = 9;
            guessedLetters = [];
            compGuess = letters[Math.floor(Math.random() * letters.length)];
        }

        //what will happen if user does NOT win//
        else {
            guessesLeft --;
            guessedLetters.push(userGuess)
        //conditional if user runs out of guesses or losses//
            if  (guessesLeft === 0) {
                guessesLeft = 9;
                losses ++;
                guessedLetters = [];
                compGuess = letters[Math.floor(Math.random() * letters.length)];
            }
        }
        
        var html =
        "<h1> The Psychic Game </h1>" +
        "<p>Guess what letter I'm thinking of</p>" + 
        "<p>Wins: " + wins + "</p><br>" +
        "<p>Losses: " + losses + "</p><br>" +
        "<p>Guesses Left: " + guessesLeft + "</p><br>" +
        "<p>Your Guesses so far: " + guessedLetters.join(",") + "</p>";

        console.log(document.querySelector("#game"))
        document.querySelector("#game").innerHTML = html;
        

    }
};

