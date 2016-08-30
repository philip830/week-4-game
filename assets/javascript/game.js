//Global Variables

var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

// Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

var randomNumb = 0;
var gemOneValue = 0;
var gemTwoValue = 0;
var gemThreeValue = 0;
var gemFourValue = 0;
var totalScore = 0;

// Game Counters
var winCount = 0;
var lossCount = 0;

//Functions

$(document).ready(function(){

    // Generate a random number
    var random = Math.floor(Math.random() * 100) + 1;  

    // Then dump the random number into our randomNumber div. 
    $('#randomNumber').html(random);
    
    });

$(document).ready(function(){

	$("#gem1").on("click", function(){

    // Generate a random number
    var random = Math.floor(Math.random() * 10) + 1;  

    // Then dump the random number into our randomNumber div. 
    $('#gemUnoNum').html(random);
    console.log(gemUnoNum)
    
    })

});







	