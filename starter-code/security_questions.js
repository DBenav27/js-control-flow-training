console.log("security_questions.js loaded");

var securityQuestions = [
  {
    question: "What is your pet's name?",
    expectedAnswer: "Tebow"
  },
  {
    question: "What is your favorite NBA team?",
    expectedAnswer: "Spurs"
  },
  {
    question: "What state were you born in?",
    expectedAnswer: "California"
  }
  ]

var userAnswer = "";
var hacker = false;

for (var i=0; i < securityQuestions.length; i++){
	userAnswer = prompt(securityQuestions[i].question);
	if (userAnswer !== securityQuestions[i].expectedAnswer){
		alert("Incorrect answer!");
    hacker = true;
		break;
	}
}

if (hacker) {
  console.log("Stop!");
}
