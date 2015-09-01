

var question1 = {
	question: "This is a new aircraft that promises you’ll arrive at your destination more rested because its cabin has better air quality.",
	clue: "https://raw.githubusercontent.com/d-jonathan/quiz-app/master/img/b787.png",
    answers:["787","A380","747-800","SU-27"],
	answer: 0, 
}

var question2 = {
	question: "This is the first aircraft to make flying on the upper deck possible.",
	clue: "https://raw.githubusercontent.com/d-jonathan/quiz-app/master/img/b747.jpg",
	answers: ["A380", "777", "747"],
	answer: 2,
}

var question3 = {
	question: "This twin engine jet can travel long distances and some might say has a lucky designation.",
	clue: "https://raw.githubusercontent.com/d-jonathan/quiz-app/master/img/b777.jpg",
	answers: ["787", "777", "A340"],
	answer: 1,
}

var question4 = {
	question: "This is the largest jet in the world and can fly more than 500 passengers.",
	clue: "https://raw.githubusercontent.com/d-jonathan/quiz-app/master/img/a380.jpg",
	answers: ["A380", "747-800", "777"],
	answer: 0,
}

var question5 = {
	question: "You might take one of these on a short journey within a continent.",
	clue: "https://raw.githubusercontent.com/d-jonathan/quiz-app/master/img/b737.jpg",
	answers: ["727", "737", "A320"],
	answer: 1,
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
		console.log($(event.target).text());
		selected=$(event.target).text();
		console.log(evaluate(selected));
			
		if (evaluate(selected)) {
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

//function updateQuestionContent () {
//	$('#answer1').text(questions[count.answered].answer1);
  //  $('#answer2').text(questions[count.answered].answer2);
  //  $('#answer3').text(questions[count.answered].answer3);
  //  $('#question').text(questions[count.answered].question);
  //  $('#clue-image1').attr("src",questions[count.answered].clue);
  //  $('#questions-remaining').text(5-count.answered)

//}

function updateQuestionContent () {
    $('.answer-choices').empty();
    for (i=0;i<questions[count.answered].answers.length;i++){
    	$('.answer-choices').append('<li><button class="answer">'+questions[count.answered].answers[i]+'</button></li>');
    }
    $('#question').text(questions[count.answered].question);
    $('#clue-image1').attr("src",questions[count.answered].clue);
    $('#questions-remaining').text(5-count.answered);

}

function evaluate(selected) {
    console.log(questions[count.answered].answers[questions[count.answered].answer]);
    return questions[count.answered].answers[questions[count.answered].answer]==selected;
}