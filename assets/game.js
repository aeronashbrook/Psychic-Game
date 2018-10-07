window.onload = function () {

    var wins = 0;
    var losses = 0;
    var guesses = 9;
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    var letters = []; 

    var showGuesses = document.getElementById('myGuesses');
    
    document.onkeydown = function(event) {
    
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
        var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        
        if (/^[a-zA-Z]+$/.test(userGuess) && letters.indexOf(userGuess) == -1) {
            letters.push(userGuess);
            
            if (userGuess === computerGuess) {
                wins++;
                guesses = 9; 
                letters.length = 0; 
            }
            else if (guesses === 1) {
                losses++;
                guesses = 9;
                letters.length = 0;
            }
            else if (userGuess !== computerGuess) {
                guesses--; 
            }
    
            var displayLetters = letters.join(', ');
            var html =
                "<p>Wins: " + wins + "</p>" +
                "<p>Losses: " + losses + "</p>" +
                "<p>Guesses left: " + guesses + "</p>" +
                "<p>You chose: </p>" + 
                "<p>" + displayLetters + "</p>"
            document.querySelector("#info").innerHTML = html;
        }   
        
    }
    };
    