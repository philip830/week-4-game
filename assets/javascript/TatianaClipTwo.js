//INITIAL FUNCTION FOR UPDATING SCORE
function updateScore(score, amount){
	return score + amount;
}

//THE CLICK EVENTS THAT STORE THE VARIABLE 'AMOUNT', WHICH IS EQUAL TO THE VALUE OF THE CRYSTAL.
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

 	// RUN UPDATESCORE WITH VALUE OF CELL CLICKED (AMOUNT), AND SET THE NEW VALUE OF 'SCORE' TO BE THE OLD VALUE OF 'SCORE' PLUS 'AMOUNT', WHICH IS TIED TO THE VALUE OF AN INDIVIDUAL CRYSTAL
 	score = updateScore(score, amount);