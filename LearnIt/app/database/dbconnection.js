var database = firebase.database();
var currentTime = Date.now();

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateListId(){
  var ran = getRandomInt(0, 100000000);
  return ran;
}

function writeUserData(username, password, email) {
  database.ref('users/' + username).set({
      password: password,
      email: email
  });
}


//Gets the user information based on the username provided*********************
// function getUserByUsername(username){
//   database.ref('users/' + username).on('value', function(snapshot){
//     var user = snapshot.val();
//     console.log(user.email);
//     console.log(user.password);
//   });
// }

//Loops through lists of the specified creator*****************
// function getListsByUser(username){
//   var listRef = database.ref('lists');
//   database.ref('lists').orderByChild('creator').equalTo(username)
//   .on('value',function(snapshot){
//     var lists = snapshot.val();
//     $.each(lists, function(k, v) {
//       console.log(v.creator);
//       console.log(v.description);
//       console.log(v.favvalue);
//       console.log(v.timestamp);
//     });
//   });
// }

//Loops through lists ordered by favvalue***************************
// function getListsByFav(){
//   var listRef = database.ref('lists');
//   database.ref('lists').orderByChild('favvalue').on('value',function(snapshot){
//     var lists = snapshot.val();
//     $.each(lists, function(k, v) {
//       console.log(v.creator);
//       console.log(v.description);
//       console.log(v.favvalue);
//       console.log(v.timestamp);
//     });
//   });
// }

//Loops through tasks of a list**************************************
// function getTasksByList(listid){
//   var listRef = database.ref('lists/' + listid + "/tasks");
//   listRef.on('value', function(snapshot){
//     var tasks = snapshot.val();
//     $.each(tasks, function(k, v) {
//       console.log(v);
//     });
// })};



function writeListData(creator, description, taskarray, tagarray){
  database.ref('lists/' + generateListId).set({
    creator: creator,
    description: description,
    favvalue: 0,
    tasks: taskarray,
    tags: tagarray,
    timestamp: currentTime
  });
}

getTasksByList("47193735");

/////////////////////////////////////////////////////IN PROGRESS//////////////////////////////////////////////////////////////
// var userBase = $firebaseObject(new Firebase('https://readyread.firebaseio.com/users/'+angularAuth.getAuth.uid))
// var users = new Firebase('https://readyread.firebaseio.com/users/'+angularAuth.getAuth.uid)
// function addToFavValue(listid){
//   var listbase = $firebaseObject(new Firebase("https://learnit-6c416.firebaseio.com/lists/" + listid));
//   var listref = database.ref('lists/' + listid);
//   listbase.$loaded().then(function(snapshot){
//     var faval = data.favvalue;
//     listref.update({
//       favvalue: faval+10
//     })
// })}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


