
//Functions

//$(document).ready(function(){



//function startGame() {

    //Global Variables
    var randomGem1 = 0;
    var randomGem2 = 0;
    var randomGem3 = 0;
    var randomGem4 = 0;
    var holdTotal = 0;
    //var firstTimeIn = true;

    //var firstTimeIn = true;

    // Game Counters
    var winCount = 0;
    var lossCount = 0;  

    
 function randomizeCells() {

      // Generate a random number
    var random = Math.floor(Math.random() * 100) + 1;  

    // Then dump the random number into our randomNumber div. 
    $('#randomNumber').html(random);


    randomGem1 = Math.ceil(Math.random() * 12); 
    randomGem2 = Math.ceil(Math.random() * 12);
    randomGem3 = Math.ceil(Math.random() * 12);
    randomGem4 = Math.ceil(Math.random() * 12);
   // $("#crystal-cells__number1").html(cell1);
  //  $("#crystal-cells__number2").html(cell2);
  //  $("#crystal-cells__number3").html(cell3);
   // $("#crystal-cells__number4").html(cell4);
    console.log(randomGem1, randomGem2, randomGem3, randomGem4);
}

          
function playTheGame() {
    

     $("#gem1").on("click", function(){

        holdTotal = holdTotal + randomGem1;

    
    // Then dump the random number into our randomNumber div. 
    //$('#gem2save').html(randomGem2);
    $('#currTotal').html(randomGem1);
    console.log(randomGem1)
   

    })
    

    $("#gem2").on("click", function(){

     holdTotal = holdTotal + randomGem2;

    // Then dump the random number into our randomNumber div. 
    //$('#gem2save').html(randomGem2);
    $('#currTotal').html(randomGem2);
    console.log(randomGem2)
    
    })


    $("#gem3").on("click", function(){

     holdTotal = holdTotal + randomGem3;

    // Then dump the random number into our randomNumber div. 
    //$('#gem1save').html(randomGem1);
    $('#currTotal').html(randomGem3);
    console.log(randomGem3);
   
    })


    $("#gem4").on("click", function(){

         holdTotal = holdTotal + randomGem4;

    // Then dump the random number into our randomNumber div. 
    //$('#gem2save').html(randomGem2);
    $('#currTotal').html(randomGem4);
    console.log(randomGem4)
    
    })
}

function checkWin(winScore, score) {
    
    if (holdTotal == winScore) {
        return "win";

    } else if (holdTotal > winScore) {
        return "loss";

    } else if (holdTotal < winScore) {
        return "continue";
    }
}

    
    

// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================================================

// Starts the Game by running the startGame() function
  randomizeCells();
   playTheGame();
   functionCheckWin();
//playTheGame();

	