var database = firebase.database();
var currentTime = Date.now();

var latestSnapshot = null;
database.ref().on('value', function(snap) { latestSnapshot = snap; });

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

//Gets the user information based on the username provided
function getUserByUsername(username){
  database.ref('users/' + username).on('value', function(snapshot){
    var user = snapshot.val();
    console.log(user.email);
    console.log(user.password);
  });
}

//Updates user email based on username provided
function updateUserEmail(username, newemail){
  database.ref('users/' + username).update({email: newemail});
}

//updates user password based on username provided
function updateUserPassword(username, newpassword){
  database.ref('users/' + username).update({password: newpassword});
}

//Deletes user based on username provided
function deleteUser(username){
    database.ref('users/' + username).remove();
}

//Loops through lists of the specified creator
function getListsByUser(username){
  var listRef = database.ref('lists');
  database.ref('lists').orderByChild('creator').equalTo(username)
  .on('value',function(snapshot){
    var lists = snapshot.val();
    $.each(lists, function(k, v) {
      console.log(v.creator);
      console.log(v.description);
      console.log(v.favvalue);
      console.log(v.timestamp);
    });
  });
}

//Loops through lists ordered by favvalue
function getListsByFav(){
  var listRef = database.ref('lists');
  database.ref('lists').orderByChild('favvalue').on('value',function(snapshot){
    var lists = snapshot.val();
    $.each(lists, function(k, v) {
      console.log(v.creator);
      console.log(v.description);
      console.log(v.favvalue);
      console.log(v.timestamp);
    });
  });
}

//Loops through tasks of a list
function getTasksByList(listid){
  var listRef = database.ref('lists/' + listid + "/tasks");
  listRef.on('value', function(snapshot){
    var tasks = snapshot.val();
    $.each(tasks, function(k, v) {
      console.log(v);
    });
})};

//Writes a new list/cerebra based on information provided
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

//updates the description of a list with the provided listid
function updateListDescription(listid, newdescription){
  database.ref('lists/' + listid).update({description: newdescription});
}

//updates the creator of a list with the provided listid
function updateListCreator(listid, newcreator){
  database.ref('lists/' + listid).update({creator: newcreator});
}

//adds task with the provided description, to the list based on listid
function addTask(listid, taskdescription){
  var newkey = database.ref().push().key;
  database.ref('lists/' + listid + '/tasks').update({[newkey]: taskdescription });
}

//adds a tag to the specified list
function addTag(listid, tagname){
  var newkey = database.ref().push().key;
  database.ref('lists/' + listid + '/tags').update({[newkey]: tagname });
}


//Adds 1 to a favorite value and updates the DB//
function addFavVal(snapshot){
  var fav = snapshot.val().favvalue;
  return fav + 1;
}

function getFavValueThenAdd(listid){
  return database.ref('lists/' + listid).once('value').then(addVal);
}

//YOU CALL THIS BELOW :3
function addToFavValue(listid){w
  getFavValueThenAdd(listid).then(function(val) { 
    database.ref('lists/' + listid).update({favvalue: val });
  });
}
/////////////////////////////////////////////////


//returns a user object
function readUser(username){
  return latestSnapshot.val().users[username];
}

//returns a list object
function readList(listid){
  return latestSnapshot.val().lists[listid];
}

//return an object containing the lists the user has liked
function readFavorites(username){
  return latestSnapshot.val().favorites[username];
}


