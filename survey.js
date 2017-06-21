
var config = {
  apiKey: "AIzaSyCsk5WGqR1YlbaJiCnYbs1lgPgEQZAopr8",
  authDomain: "hate-date.firebaseapp.com",
  databaseURL: "https://hate-date.firebaseio.com",
  projectId: "hate-date",
  storageBucket: "hate-date.appspot.com",
  messagingSenderId: "509489897704"
};
firebase.initializeApp(config);


//when the document is ready, execute the start screen and start button
$(document).ready(function(){

  function initialScreen(){
    startScreen= "<img class='center-block' src='redheart.jpg'>"
    + "<p class='text-center main-button-container'><a class= 'btn btn-primary btn-lg btn-block start-button'>Start</a></p>";
    $(".mainArea").html(startScreen);
  }
  initialScreen();



//function to generate questions triggered by clicking start button
$('body').on('click', '.start-button', function(){

  event.preventDefault();
  displayButtons();

});

function displayButtons(){

  $('.mainArea').empty();

	var questions = [

	"Useless noises like chewing, humming, whistling",
	 "The phrase, 'everything happens for a reason'",
	"Parents who don't discipline their children",
	"People who are on their phones all the time",
	"People who don't believe in climate change",
	 "People who don't use indicator lights",
	"Couples that wear matching outfits",
	"People who text during movies",
	 "Too much cologne or perfume",
	"Pharmaceutical companies",
	//10 mark
	"Bad listeners",
	"Flakey people",
	"Selfie sticks",
	"Slow walkers",
	 "Justin Bieber",
	"Donald Trump",
	"Picky Eaters",
	"Hot weather",
	"Mean girls",
	"Paying extra for almond milk",
	//20 mark
	"404 errors",
	"Side hugs",
	"Rudeness",
	"Hipsters",
	"GMO food"
	];
	//Ramna added - array to hold answers to questions, values in this array will be written to the
	//database to update the user profile later on
	var qAnswers = [
 	false, false, false, false, false, false, false, false, false, false,
 	false, false, false, false, false, false, false, false, false, false,
 	false, false, false, false, false 
	];

  for(var i = 0; i < questions.length; i++){
    var button = $("<button>");
    button.attr("value", i);
    //console.log(button.attr());
    button.addClass("btn btn-danger");
    button.text( questions[i]);
    button.attr("data-name", questions[i]);
    button.attr	("id", "btn-"+ i);	//Ramona added - add a dynamic ID to each button
    $('#buttons-view').append(button);
  	}


	// Ramona  added - on click of a button get assign value assign to button to each question
 

	$(".btn-danger").click(function(){


    var arrayIndex = $(this).attr('value');// the value is 0 so arrayIndex = 0
    
    qAnswers.splice(arrayIndex, 0, true); //this will replace the 1st element in the array with true
    console.log(arrayIndex);
    console.log(qAnswers);
   
	});
	}

	function writeNewPost(uid, username, picture, title, body) {
	  // A post entry.
	  var postData = {
	    Q0: questionVal,
	    Q1: questionVal,
	    Q2: questionVal,
	    Q3: questionVal,
	    Q4: questionVal,
	    Q5: questionVal,
	    Q6: questionVal,
	    Q7: questionVal,
	    Q8: questionVal,
	    Q9: questionVal,
	    Q10: questionVal,
	    Q11: questionVal,
	    Q12: questionVal,
	    Q13: questionVal,
	    Q14: questionVal,
	    Q15: questionVal,
	    Q16: questionVal,
	    Q17: questionVal,
	    Q18: questionVal,
	    Q19: questionVal,
	    Q20: questionVal,
	    Q21: questionVal,
	    Q22: questionVal,
	    Q23: questionVal
	  };

	  // Get a key for a new Post.
	  var newPostKey = firebase.database().ref().child('posts').push().key;

	  // Write the new post's data simultaneously in the posts list and the user's post list.
	  var updates = {};
	  updates['/posts/' + newPostKey] = postData;
	  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

	  return firebase.database().ref().update(updates);
}
	$("#saved-hates").writeNewPost();

});

