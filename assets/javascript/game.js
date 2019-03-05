$(document).ready(function(){
	//Random number at beginning between 19 and 120
	var Random=Math.floor(Math.random()*101+19)
	$('#randomNumber').text(Random);

	//Random numbers for crystals between 1 and 12
	var num1=Math.floor(Math.random()*11+1)
	var num2=Math.floor(Math.random()*11+1)
	var num3=Math.floor(Math.random()*11+1)
	var num4=Math.floor(Math.random()*11+1)

	//Score variables
	var score=0;
	var wins=0;
	var losses=0;

	$('#wins').text(wins);
	$('#losses').text(losses);

	//Crystal clicks
	$('#red').on('click', function(){
		score=score + num1;
		console.log("score:" + score);
		$('#yourScore').text(score);
			if(score === Random){
				winGame();
			}
			else if(score > Random){
				loser();
			}
	})

	$('#blue').on('click', function(){
		score=score + num2;
		console.log("score:" + score);
		$('#yourScore').text(score);
			if(score === Random){
				winGame();
			}
			else if(score > Random){
				loser();
			}
	})

	$('#white').on('click', function(){
		score=score + num3;
		console.log("score:" + score);
		$('#yourScore').text(score);
			if(score === Random){
				winGame();
			}
			else if(score > Random){
				loser();
			}
	})

	$('#green').on('click', function(){
		score=score + num4;
		console.log("score:" + score);
		$('#yourScore').text(score);
			if(score === Random){
				winGame();
			}
			else if(score > Random){
				loser();
			}
	})

	//Function and alert for wins
	function winGame(){
		alert("You won!");
	 	wins++; 
	  	$('#wins').text(wins);
	  	reset();
	}

	//Function and alert for losses
	function loser(){
		alert("You Lose!");
		losses++;
		$('#losses').text(losses);
		reset();
	}

	//Function for game reset
	function reset(){
		Random=Math.floor(Math.random()*101+19);
		console.log(Random)
		$('#randomNumber').text(Random);
		num1=Math.floor(Math.random()*11+1);
		num2=Math.floor(Math.random()*11+1);
		num3=Math.floor(Math.random()*11+1);
		num4=Math.floor(Math.random()*11+1);
		score=0;
		$('#yourScore').text(score);
	}

});