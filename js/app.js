var question1 = {
	question: "This is a new aircraft that promises you’ll arrive at your destination more rested because its cabin has better air quality.",
	clue: "img/b787.png",
	answer1: "787",
	answer2: "A380",
	answer3: "747-800",
	answer: "answer1",
	selected: "user selection",
	evaluate: function () {
		return this.answer==this.selected 	
		//return "The correct answer is "+this.answer+". You selected "+this.selected 
	}
}

var question2 = {
	question: "This is the first aircraft to make flying on the upper deck possible.",
	clue: "img/b747.jpg",
	answer1: "A380",
	answer2: "777",
	answer3: "747",
	answer: "answer3",
	selected: "user selection",
	evaluate: function () {
		return this.answer==this.selected 	
		//return "The correct answer is "+this.answer+". You selected "+this.selected 
	}
}

var question3 = {
	question: "This twin engine jet can travel long distances and some might say has a lucky designation.",
	clue: "img/b777.jpg",
	answer1: "787",
	answer2: "777",
	answer3: "A340",
	answer: "answer2",
	selected: "user selection",
	evaluate: function () {
		return this.answer==this.selected 	
		//return "The correct answer is "+this.answer+". You selected "+this.selected 
	}
}

var question4 = {
	question: "This is the largest jet in the world and can fly more than 500 passengers.",
	clue: "img/a380.jpg",
	answer1: "A380",
	answer2: "747-800",
	answer3: "777",
	answer: "answer1",
	selected: "user selection",
	evaluate: function () {
		return this.answer==this.selected 	
		//return "The correct answer is "+this.answer+". You selected "+this.selected 
	}
}

var question5 = {
	question: "You might take one of these on a short journey within a continent.",
	clue: "img/b737.jpg",
	answer1: "727",
	answer2: "737",
	answer3: "A320",
	answer: "answer2",
	selected: "user selection",
	evaluate: function () {
		return this.answer==this.selected 	
		//return "The correct answer is "+this.answer+". You selected "+this.selected 
	}
}

var questions = [question1, question2, question3, question4, question5];

var count = {
	answered: 0,
	correct: 0,
	reset:function() {
    	
    	for (var prop in count) {
    		if (prop !== 'reset') {
    		count[prop]=0;
    		}
    	}
    }
}


$(document).ready(function(){

	$('#lets-go, #start-over').click(function(){
	
		$('#intro-content').hide();
		$('#final-content').hide();
	    $('#question-content').show();
	    $('.clue-answer-container').show();
	    $('.feedback').hide();
	    $('#next-answer').hide();
		count.reset();
		updateQuestionContent();
		});


	$('.answer-choices').on( "click", "li", function (clicked) {
		console.log(clicked.target.id);
		questions[count.answered].selected=clicked.target.id
		console.log(questions[count.answered].evaluate());
			
		if (questions[count.answered].evaluate()) {
			$('#correct-incorrect').text("Correct!");
			++count.correct
		}
		else {
			$('#correct-incorrect').text("Incorrect");
		}
			

		$('.feedback').fadeIn(300);
    	$('#next-answer').fadeIn(300);
    	//$('.answer-choices').off( "click", "li");
		
		});

	
	$('#next-answer').click(function(){
		++count.answered;
		console.log(count.answered)
		console.log(count.correct)
		$('.feedback').hide();
		$('#next-answer').hide();

		if (count.answered<5) {
			updateQuestionContent();
		}

		else {
			$('#question-content').hide();
	    	$('.clue-answer-container').hide();
	    	$('#final-content').show();
	    	$('#number-correct').text(count.correct);
		}
		
		
		});

});

function updateQuestionContent () {
	$('#answer1').text(questions[count.answered].answer1);
    $('#answer2').text(questions[count.answered].answer2);
    $('#answer3').text(questions[count.answered].answer3);
    $('#question').text(questions[count.answered].question);
    $('#clue-image1').attr("src",questions[count.answered].clue);
    $('#questions-remaining').text(5-count.answered)

}