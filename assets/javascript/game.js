

    //Global Variables set to zero at start of game//

    //Totals
    var randomGem1 = 0;
    var randomGem2 = 0;
    var randomGem3 = 0;
    var randomGem4 = 0;
    var holdTotal = 0;
    var random = 0;
    
    // Game Counters
    var winCount = 0;
    var lossCount = 0;  

    
 function randomizeCells() {

      // Generate a random number//
    random = Math.floor(Math.random() * 100) + 1;  

    // Then dump the random number into our randomNumber div.//
    $('#randomNumber').html(random);


    //Generate random numbers "behind" each jewel icon//
    randomGem1 = Math.ceil(Math.random() * 12); 
    randomGem2 = Math.ceil(Math.random() * 12);
    randomGem3 = Math.ceil(Math.random() * 12);
    randomGem4 = Math.ceil(Math.random() * 12);
 
    console.log(randomGem1, randomGem2, randomGem3, randomGem4);
}

          
function playTheGame() {
    
    //Accrue holdTotal amount for each gem as user attempts to match the game-generated number//
   
    $("#gem1").on("click", function(){

    holdTotal = holdTotal + randomGem1;
        
    $('#currTotal').html(holdTotal);
        
    checkWin(random, holdTotal);

    })
    

    $("#gem2").on("click", function(){

     holdTotal = holdTotal + randomGem2;

    $('#currTotal').html(holdTotal);
   
    checkWin(random, holdTotal);

    })


    $("#gem3").on("click", function(){

     holdTotal = holdTotal + randomGem3;

    $('#currTotal').html(holdTotal);
     
    checkWin(random, holdTotal);
  
    })


    $("#gem4").on("click", function(){

    holdTotal = holdTotal + randomGem4;

    $('#currTotal').html(holdTotal);
    
    checkWin(random, holdTotal);

        })
}

function checkWin(winScore, score) {

    //Determine win or lose//
    
    if(winScore == score) {
        alert("YOU WIN");
        winCount = winCount + 1;
        $('#winCounter').html(winCount);
        holdTotal = 0;
         $('#currTotal').html(holdTotal);
        randomizeCells();
    }
    
    else if(winScore < score){
        alert("YOU LOSE");
        lossCount = lossCount +1;
        $('#lossCounter').html(lossCount);
        holdTotal = 0;
         $('#currTotal').html(holdTotal);
        randomizeCells();
    }
 }    
    

// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================================================

// Starts the Game by running the startGame() function
  randomizeCells();
   playTheGame();
//playTheGame();

	