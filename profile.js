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
var profileImageURL;//*****Added
var selectedFile; //****Added 
var user = firebase.auth().currentUser;

var ref = database.ref('user');
ref.on('value',gotData,errData)

function gotData(data) {
  console.log(data.val())
  var scores = data.val();
  var keys = Object.keys(scores);
  console.log(keys);  

  console.log(scores[keys[0]].user)
}
function errData(err) {
  console.log('Error!')
  console.log(err);
}


// database.ref().on("child_added", function(childsnapshot) {

//   var user = childsnapshot.val().user;
//   var profileAge = childsnapshot.val().profileAge;
//   var profileEmail = childsnapshot.val().profileEmail;
//   var profileFirstName = childsnapshot.val().profileFirstName;
//   var profileLastName = childsnapshot.val().profileLastName;
//   var profileGender = childsnapshot.val().profileGender;
//   var profileCity = childsnapshot.val().profileCity;
//   var profileState = childsnapshot.val().profileState;
  
//   $("#age").html("Age: " + profileAge);
//   $("#location").html("Location: " + profileCity + ", " + profileState);
//   $("#gender").html("Gender: " + profileGender);
//   $("#name").html("Name: " + profileFirstName + " " + profileLastName)

//   if (firebase.auth().currentUser.uid !== user) {
//     $("#hate-content").append(
//     "<tr><td class='box'>" + profileFirstName + "</td>"
//     +"<td>" + profileLastName + "</td>"
//     +"<td class='box'>" + profileGender + "</td>"
//     +"<td>" + profileAge + "</td>"
//     +"<td class='box'>" + "<button type='button' class='btn btn-info btn-lg' data-toggle='modal' data-target='#myModal'></button>" + "</td></tr>");

//       // profileFirstName +" "+ profileLastName +"<br>" + profileGender + ", " + profileAge)
//   }


// });

$("#add-profile").on("click", function() {
  var questionVal = false;
  
  var profileAge = $("#profile-age").val().trim().toUpperCase();
  var profileEmail = $("#profile-email").val().trim();
  var profileFirstName = $("#profile-first-name").val().trim().toUpperCase();
  var profileLastName = $("#profile-last-name").val().trim().toUpperCase();
  var profileGender = $("#profile-gender").val().trim().toUpperCase();
  var profileCity = $("#profile-city").val().trim().toUpperCase();
  var profileState = $("#profile-state").val().trim().toUpperCase();
  var user = firebase.auth().currentUser.uid;
  var pushedAnswers = [];

  var newProfile = {
    user: user,
    profileEmail: profileEmail,
    profileAge: profileAge,
    profileFirstName: profileFirstName,
    profileLastName: profileLastName,
    profileGender: profileGender,
    profileCity: profileCity,
    profileState: profileState,
    profileImageURL: profileImageURL,                             //Added Profile Image -RH
    hates: pushedAnswers
  }

  database.ref().child('user').push(newProfile);
});


var ref = firebase.database().ref('user');
ref.on("child_added", function(childsnapshot) {
  var user = childsnapshot.val().user;
  var profileAge = childsnapshot.val().profileAge;
  var profileEmail = childsnapshot.val().profileEmail;
  var profileFirstName = childsnapshot.val().profileFirstName;
  var profileLastName = childsnapshot.val().profileLastName;
  var profileGender = childsnapshot.val().profileGender;
  var profileCity = childsnapshot.val().profileCity;
  var profileState = childsnapshot.val().profileState;
  
  if ( firebase.auth().currentUser.uid === user ) {
    // Hide the input form and upload buttons once they are submitted
      $("#profile-info").hide();
      //  push captured info to divs
      $("#age").html("Age: " + profileAge);
      $("#location").html("Location: " + profileCity + ", " + profileState);
      $("#gender").html("Gender: " + profileGender);
      $("#prof-name").html(profileFirstName + " " + profileLastName);



    
      database.ref().push(newProfile); //add new record to Firebase Database

        return false;
});
    
    
    //$("#age").html("Age: " + profileAge);
    //$("#location").html("Location: " + profileCity + ", " + profileState);
    //$("#gender").html("Gender: " + profileGender);
    //$("#name").html("Name: " + profileFirstName + " " + profileLastName)
    //console.log(user)
    //console.log(profileFirstName);
    //$("#profile-info").hide();
  }

 if (firebase.auth().currentUser.uid !== user) {
    $("#hate-content").append(
    "<tr><td class='box'>" + profileFirstName +" "+profileLastName + "</td>"
    +"<td class='box'>" + profileGender + "</td>"
    +"<td>" + profileAge + "</td>"
    +"<td class='box'>" + "<button type='button' class='btn btn-info' data-toggle='modal' data-target='#myModal'>"+"Hates"+"</button>" + "</td></tr>");

    // profileFirstName +" "+ profileLastName +"<br>" + profileGender + ", " + profileAge)
  }

});


var ref = database.ref('hates');
ref.on('value',gotData)

function gotData(data) {
  console.log(data.val())
  var scores = data.val();
  var keys = Object.keys(scores);
  console.log(keys);  
  console.log(scores[keys[0]].hates)
  
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      var score = scores[k].hates;
      var displayHate = $("<div>")
      displayHate.text(score)
      displayHate.addClass("hateStyle")
      console.log(scores[keys[i]].user)

    if (firebase.auth().currentUser.uid === scores[keys[i]].user) {
      $("#modal-body").append(displayHate);
    }
  }
}

// var ref = firebase.database().ref('hates');
// ref.on("child_added", function(childsnapshot) {
//   var user = childsnapshot.val().user;
//   var hates = childsnapshot.val().hates;

//   if (firebase.auth().currentUser.uid !== user) {
//     for (var i = 0; i < keys.length; i++) {
//       var k = keys[i];

//       $(".modal-body").append(hates)
//     }
//     }
// });


//Add profile image to Firebase Storage

 $("#imgFile").on("change", function(event){
   
    selectedFile = event.target.files[0];
   });

   function uploadFile(){
      var filename = selectedFile.name;
      console.log(selectedFile);
      var storageRef = firebase.storage().ref("profile-images/" + filename);
      var uploadTask = storageRef.put(selectedFile);
 
  //On change get the URL for the image that was saved to the Firebase Storage Bucket
    uploadTask.on("state_changed", function(snapshot){

      }, function(error){

      }, 

     function(){

      storageRef.getDownloadURL().then(function(url) {
      console.log(profileImageURL);
      profileImageURL = url;                                  //save url to global variable
      $("#profile-pic").attr("src", profileImageURL);         //apply the url src to the profile-pic image tag

      //Hide the submit Buttons.
      $(".hide-after-submit").hide();

  });


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


