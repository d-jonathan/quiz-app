//create an object for each question

var answerkey = {
	question1: "answer1",
}

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
	answered: 1,
	correct: 0,
}

//store the question objects in an array; access the question objects with question[number]

//create object for number of questions answered, number correct, with a reset method


$(document).ready(function(){ 

$('#lets-go').click(function(){
	

//for loop - x 5

	$('#intro-content').hide();
    $('#question-content').show();
    $('.clue-answer-container').show();
    $('.feedback').hide();
    $('#next-answer').hide();
    
    updateQuestionContent();
    
    
	
	});


	//listen for the clicks on the answers

		$('.answer-choices').on( "click", "li", function (clicked) {
			console.log(clicked.target.id);
			question1.selected=clicked.target.id
			console.log(questions[count.answered].evaluate());
			//if (question)
			$('.feedback').show();
    		$('#next-answer').show();
    		$('.answer-choices').off( "click", "li");
		});

		$('#next-answer').click(function(){
			console.log('proceed to next question');
			++count.answered;
			$('.feedback').hide();
		});

		//evaluate user answer using object method

		//display feedback (correct/incorrect)

		//update variable correct count + question answered count

		//display "next question" icon

	//listen for click event on "next question"

		//update question content with next question

		//update possible answers

		//update image clue

		//hide feedback again

		//hide next question

		//listen for clicks on answers again...

//once for loop completes, then display the complete/reset page

		//show count of questions correct

		//listen for event on reset

			//reset question count & number correct

			//re-display first question and enter the for loop

});

function updateQuestionContent () {
	$('#answer1').text(questions[count.answered].answer1);
    $('#answer2').text(questions[count.answered].answer2);
    $('#answer2').text(questions[count.answered].answer3);
    $('#question').text(questions[count.answered].question);
    $('#clue-image1').attr("src",questions[count.answered].clue);

}