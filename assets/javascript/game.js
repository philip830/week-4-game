//Global Variables

var randomNumb = 0;
var randomGem1 = 0;
var randomGem2 = 0;
var randomGem3 = 0;
var randomGem4 = 0;

var firstTimeIn = true;

// Game Counters
var winCount = 0;
var lossCount = 0;

//Functions

//$(document).ready(function(){

    //Checking - is this the first gem-click?

    var firstTimeIn = true

    if(firstTimeIn) {
        var firstTimeIn = false
        
        // Generate a random number
        var random = Math.floor(Math.random() * 100) + 1;  

        // Then dump the random number into our randomNumber div. 
        $('#randomNumber').html(random);
        
        
    	$("#gem1").on("click", function(){

        // Generate a random number for Gem1
        var randomGem1 = Math.floor(Math.random() * 10) + 1;  

        // Then dump the random number into our randomNumber div. 
        //$('#gem1save').html(randomGem1);
         $('#CurrTotal').html(randomGem1);
        console.log(randomGem1);
        
        })

        

        $("#gem2").on("click", function(){

        // Generate a random number
        var randomGem2 = Math.floor(Math.random() * 10) + 1;  

        // Then dump the random number into our randomNumber div. 
        //$('#gem2save').html(randomGem2);
        $('#CurrTotal').html(randomGem2);
        console.log(randomGem2)
            
        })


        $("#gem3").on("click", function(){

        // Generate a random number for Gem1
        var randomGem3 = Math.floor(Math.random() * 10) + 1;  

        // Then dump the random number into our randomNumber div. 
        //$('#gem1save').html(randomGem1);
        $('#CurrTotal').html(randomGem3);
        console.log(randomGem3);
        })

        $("#gem4").on("click", function(){

        // Generate a random number
        var randomGem4 = Math.floor(Math.random() * 10) + 1;  

        // Then dump the random number into our randomNumber div. 
        //$('#gem2save').html(randomGem2);
        $('#CurrTotal').html(randomGem4);
        console.log(randomGem4)
        })

    } else {

    }

    //})
    











	