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

function randomizeWinScore() {
	winScore = Math.ceil(Math.random() * scoreGoalMax - scoreGoalMin) + scoreGoalMin;
	$("#win-score").html("WINNING NUMBER: " + "<br/>" + winScore);
}

function checkWin(winScore, score) {
	
	if (score == winScore) {
		return "win";

	} else if (score > winScore) {
		return "loss";

	} else if (score < winScore) {
		return "continue";
	}
}

function clearNumber() {
	console.log($(".crystal-cells__number"))
	$(".crystal-cells__number").removeClass("crystal-cells__number--revealed");
}

function initializeGame() {
	randomizeWinScore();
	randomizeCells();
	clearNumber();
}