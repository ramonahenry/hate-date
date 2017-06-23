var config = {
  apiKey: "AIzaSyCsk5WGqR1YlbaJiCnYbs1lgPgEQZAopr8",
  authDomain: "hate-date.firebaseapp.com",
  databaseURL: "https://hate-date.firebaseio.com",
  projectId: "hate-date",
  storageBucket: "hate-date.appspot.com",
  messagingSenderId: "509489897704"
};
firebase.initializeApp(config);


$(document).ready(function(){

  function initialScreen(){
    startScreen= "<img class='center-block' src='redheart.jpg'>"
    + "<p class='text-center main-button-container'><a class= 'btn btn-primary btn-lg btn-block start-button'>Start</a></p>";
    $(".mainArea").html(startScreen);
  }
  initialScreen();

//function to generate questions triggered by clicking start button
$('body').on('click', '.start-button', function(event){
  event.preventDefault();
  displayButtons();

});

function displayButtons(){
  $('.mainArea').empty(); //this empties the mainArea so buttons can go there
  for(var i = 0; i < questions.length; i++){
    var button = $("<div>");
    button.attr("value", 1);
    button.addClass("btn btn-danger");
    button.text( questions[i]);
    button.attr("data-name", questions[i]);
    $('.mainArea').append(button);
  }
  // $(".mainArea").append("<br><div class='btn btn-primary' id='submit-hates'></div>")
}

// Initialize Firebase
  
var database = firebase.database();

$(".mainArea").on('click', '.btn-danger', function(event){
    // event.preventDefault();
    $(this).toggleClass("btn btn-primary btn-danger");
    console.log("You clicked: " + $(this).attr("data-name"));
    
  var buttonText = $(this).attr("data-name");
  pushedAnswers.push(buttonText)
  console.log(pushedAnswers)
  var user = firebase.auth().currentUser.uid;

  var pushed = {
    hates : buttonText,
    user:user,
    email:email
  }

  database.ref().child('hates').push(pushed);

  //push clicked-button text into firebase
  // // database.ref().push(buttonText);
  // $("#submit-hates").on('click',function(){
  //   // database.ref().push(pushedAnswers);
  //   console.log(pushedAnswers)
    
  // var user = firebase.auth().currentUser.uid;
  // var pushedAnswers = [];

  // var newProfile = {
  //   user: user,
  //   hates: pushedAnswers
  // }


  // database.ref().child('user').push(newProfile);

  // function addStore(){
  //   var rootRef = firebase.database().ref();
  //   var storesRef = rootRef;
  //   // var newStoreRef = storesRef.push();
  //   storesRef.update({
  //     hates: pushedAnswers,
  //     user : firebase.auth().currentUser.uid
  //   });
  // }
  // addStore();



    // var user = firebase.auth().currentUser.uid;
    // database.ref().update({
    //  user:user,
    //  profileFirstName: profileFirstName,
    //     hates: pushedAnswers
  //     });

  // })
})

})

var pushedAnswers =[];

//global variabls go here

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
]
