//Ramona's Firebase
// var config = {
//       apiKey: "AIzaSyCoMO4JICSt88ZIMpok7Jvv7bhyVIMYErw",
//       authDomain: "datingproj-44fa5.firebaseapp.com",
//       databaseURL: "https://datingproj-44fa5.firebaseio.com",
//       projectId: "datingproj-44fa5",
//       storageBucket: "datingproj-44fa5.appspot.com",
//       messagingSenderId: "834628368468"
//       };
//       firebase.initializeApp(config);


var config = {
  apiKey: "AIzaSyCsk5WGqR1YlbaJiCnYbs1lgPgEQZAopr8",
  authDomain: "hate-date.firebaseapp.com",
  databaseURL: "https://hate-date.firebaseio.com",
  projectId: "hate-date",
  storageBucket: "hate-date.appspot.com",
  messagingSenderId: "509489897704"
};
firebase.initializeApp(config);


var database = firebase.database();
var storage = firebase.storage().ref();

database.ref().on("child_added", function(childsnapshot) {

  var profileAge = childsnapshot.val().profileAge;
  var profileEmail = childsnapshot.val().profileEmail;
  var profileFirstName = childsnapshot.val().profileFirstName;
  var profileLastName = childsnapshot.val().profileLastName;
  var profileGender = childsnapshot.val().profileGender;
  var profileCity = childsnapshot.val().profileCity;
  var profileState = childsnapshot.val().profileState;
  var Q0 = childsnapshot.val().Q0;
  var Q1 = childsnapshot.val().Q1;
  var Q2 = childsnapshot.val().Q2;
  var Q3 = childsnapshot.val().Q3;
  var Q4 = childsnapshot.val().Q4;
  var Q5 = childsnapshot.val().Q5;
  var Q6 = childsnapshot.val().Q6;
  var Q7 = childsnapshot.val().Q7;
  var Q8 = childsnapshot.val().Q8;
  var Q9 = childsnapshot.val().Q9;
  var Q10 = childsnapshot.val().Q10;
  var Q11 = childsnapshot.val().Q11;
  var Q12 = childsnapshot.val().Q12;
  var Q13 = childsnapshot.val().Q13;
  var Q14 = childsnapshot.val().Q14;
  var Q15 = childsnapshot.val().Q15;
  var Q16 = childsnapshot.val().Q16;
  var Q17 = childsnapshot.val().Q17;
  var Q18 = childsnapshot.val().Q18;
  var Q19 = childsnapshot.val().Q19;
  var Q20 = childsnapshot.val().Q20;
  var Q21 = childsnapshot.val().Q21;
  var Q22 = childsnapshot.val().Q22;
  var Q23 = childsnapshot.val().Q23;
             
});

$("#add-profile").on("click", function() {
  
  var questionVal = false;
  var profileAge = $("#profile-age").val().trim().toUpperCase();
  var profileEmail = $("#profile-email").val().trim();
  var profileFirstName = $("#profile-first-name").val().trim().toUpperCase();
  var profileLastName = $("#profile-last-name").val().trim().toUpperCase();
  var profileGender = $("#profile-gender").val().trim().toUpperCase();
  var profileCity = $("#profile-city").val().trim().toUpperCase();
  var profileState = $("#profile-state").val().trim().toUpperCase();
  
  var newProfile = {
    profileEmail: profileEmail,
    profileAge: profileAge,
    profileFirstName: profileFirstName,
    profileLastName: profileLastName,
    profileGender: profileGender,
    profileCity: profileCity,
    profileState: profileState,
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
  }

      // Hide the input form once it is submitted
  $("#profile-info").hide();
  //  push captured info to divs
  $("#age").html("Age: " + profileAge);
  $("#location").html("Location: " + profileCity + ", " + profileState);
  $("#gender").html("Gender: " + profileGender);
  $("#name").html(profileFirstName + " " + profileLastName)

    // var updateProfile = {

    //     profileEmail: profileEmail,
    //     profileAge: profileAge,
    //     profileFirstName: profileFirstName,
    //     profileLastName: profileLastName,
    //     profileGender: profileGender,
    //     profileCity: profileCity,
    //     profileState: profileState,
    //     Q0: qAnswers[0],
    //     Q1: qAnswers[1],
    //     Q2: qAnswers[2],
    //     Q3: qAnswers[3],
    //     Q4: qAnswers[4],
    //     Q5: qAnswers[5],
    //     Q6: qAnswers[6],
    //     Q7: qAnswers[7],
    //     Q8: qAnswers[8],
    //     Q9: qAnswers[9],
    //     Q10: qAnswers[10],
    //     Q11: qAnswers[11],
    //     Q12: qAnswers[12],
    //     Q13: qAnswers[13],
    //     Q14: qAnswers[14],
    //     Q15: qAnswers[15],
    //     Q16: qAnswers[16],
    //     Q17: qAnswers[17],
    //     Q18: qAnswers[18],
    //     Q19: qAnswers[19],
    //     Q20: qAnswers[20],
    //     Q21: qAnswers[21],
    //     Q22: qAnswers[22],
    //     Q23: qAnswers[23],
    //    

    // }

    //console.log(newProfile);
    database.ref().push(newProfile);

    return false;
});

var selectedFile;

$("#imgFile").on("change", function(event){
    selectedFile = event.target.files[0];
});

function uploadFile(){
  var filename = selectedFile.name;
  var storageRef = firebase.storage().ref("profile-images/" + filename);
  var uploadTask = storageRef.put(selectedFile);

  uploadTask.on("state-changed", function(snapshot){

  }, function(error){

  }, function(){

    var downloadURL = uploadTask.snapshot.downloadURL;
    consolelog(downloadURL);
  });
}

$("#add-location").on("click", function(event) {

event.preventDefault();

// This line will grab the text from the input box
var restaurant = $("#location-input").val().trim();
// The movie from the textbox is then added to our array
var queryURL = "https://developers.zomato.com/api/v2.1/search?entity_id="+restaurant+"&apikey=b79214ee05ebf45e51ded6595e897f8d";

// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
    url: queryURL,
    method: "GET"
  })
// We store all of the retrieved data inside of an object called "response"
.done(function(response) {

console.log(response);

console.log(response.restaurants[Math.floor((Math.random() * 20) + 1)].restaurant.name);

var restaurantResults = response.restaurants[Math.floor((Math.random() * 20) + 1)].restaurant.name;

$("#restaurantDisplay").html(restaurantResults);

});
});