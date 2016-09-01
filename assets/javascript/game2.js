
//Functions

//$(document).ready(function(){



function startGame() {

    //Global Variables
    var randomGem1 = 0;
    var randomGem2 = 0;
    var randomGem3 = 0;
    var randomGem4 = 0;

    //var firstTimeIn = true;

    // Game Counters
    var winCount = 0;
    var lossCount = 0;  

    // Generate a random number
    var random = Math.floor(Math.random() * 100) + 1;  

    // Then dump the random number into our randomNumber div. 
    $('#randomNumber').html(random);

    $("#gem1").on("click", function(){
       var randomGem1 = Math.floor(Math.random() * 10) + 1; 

       var holdTotal = randomGem1 + 7;
        $('#currTotal').html(randomGem1);
        console.log(randomGem1);
        console.log(holdTotal);
       
    })
    }    
//}    

function playTheGame() {

    var holdTotal = 

    //$("#gem1").on("click", function(){
      // var randomGem1 = Math.floor(Math.random() * 10) + 1; 

       // var holdTotal = randomGem1 + 7;
        //$('#currTotal').html(randomGem1);
        //console.log(randomGem1);
        //console.log(holdTotal);

    //$("#gem1").on("click", function(){
    //this.holdTotal = this.holdTotal + (randomGem1);
    //console.log(this.holdTotal)
  //  randomGem1 = randomGem1 + 7;
    //$('#currTotal').html(randomGem1);
    //console.log(randomGem1)
        
    //})        
    }
    //}
    
    // Then dump the random number into our randomNumber div. 
    //$('#gem1save').html(randomGem1);
    //$('#CurrTotal').html(#CurrTotal + randomGem1);
   // $('holdTotal').html(holdTotal + randomGem1);
   // holdTotal = randomGem1
   // $('holdTotal').html(randomGem1);
   // $('#currTotal').html(randomGem1);
    //console.log(randomGem1);
    //console.log(holdTotal)
    //console.log(holdTotal);

    //})
    

    

// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================================================

// Starts the Game by running the startGame() function
startGame();
playTheGame();
//playTheGame();

	