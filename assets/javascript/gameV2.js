
//Functions

//$(document).ready(function(){

     // Game Counters
    var winCount = 0;
    var lossCount = 0;  
    var score = 0;
    var amount = 0;
    var cell1 = 0;
    var cell2 = 0;
    var cell3 = 0
    var cell4 = 0;


function randomizeWinScore() {

    //Global Variables
    //var randomGem1 = 0;
    //var randomGem2 = 0;
    //var randomGem3 = 0;
    //var randomGem4 = 0;

    //var firstTimeIn = true;

    // Generate a random number
    var random = Math.floor(Math.random() * 100) + 1;  

    // Then dump the random number into our randomNumber div. 
    $('#randomNumber').html(random);
}

 function randomizeCells() {

    cell1 = Math.ceil(Math.random() * 12); 
    cell2 = Math.ceil(Math.random() * 12);
    cell3 = Math.ceil(Math.random() * 12);
    cell4 = Math.ceil(Math.random() * 12);
    $("#crystal-cells__number1").html(cell1);
    $("#crystal-cells__number2").html(cell2);
    $("#crystal-cells__number3").html(cell3);
    $("#crystal-cells__number4").html(cell4);
    console.log(cell1, cell2, cell3, cell4);
}
    
//INITIAL FUNCTION FOR UPDATING SCORE
function updateScore(score, amount){
    console.log("inside updateScore1" + score + amount)
    return score + amount;

        
}


function captureScore(){
//THE CLICK EVENTS THAT STORE THE VARIABLE 'AMOUNT', WHICH IS EQUAL TO THE VALUE OF THE CRYSTAL.

console.log("captureScore")
$(".crystals-cells").on("click", function(event) {

    var id = event.currentTarget.id;
    
    var amount = 0;

    switch(id) {

        case "crystals-cell-1": 
            amount = cell1;
            $("#crystal-cells__number1").addClass("crystal-cells__number--revealed");
            break;

        case "crystals-cell-2": 
            amount = cell2;
            $("#crystal-cells__number2").addClass("crystal-cells__number--revealed");
            break;

        case "crystals-cell-3":
            amount = cell3;
            $("#crystal-cells__number3").addClass("crystal-cells__number--revealed");
            break;

        case "crystals-cell-4": 
            $("#crystal-cells__number4").addClass("crystal-cells__number--revealed");
            amount = cell4;
            break;

        default: 
            amount = 0;
            break;
            
    }
    })
 // RUN UPDATESCORE WITH VALUE OF CELL CLICKED (AMOUNT), AND SET THE NEW VALUE OF 'SCORE' TO BE THE OLD VALUE OF 'SCORE' PLUS 'AMOUNT', WHICH IS TIED TO THE VALUE OF AN INDIVIDUAL CRYSTAL
    score = updateScore(score, amount);
    console.log("In score " + score + amount)
    $('#currTotal').html(score)
    }
// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================================================

// Starts the Game by running the startGame() function
    randomizeWinScore();
    randomizeCells();
    updateScore();
    captureScore();
    
	