var database = firebase.database();

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function printAllUsers(){
  var usersRef = database.ref('users/meowman/username');
  usersRef.once('value').then(function(snapshot) {
  var username = snapshot.val();
  console.log(username);
});
}

function printAllUsersListen(){
    var usersRef = database.ref('users');
  console.log("meow");
  usersRef.on('value', function(snapshot) {
  var username = snapshot.val();
  console.log(username);
});
}

function writeUserData(username, password) {
  database.ref('users/' + username).set({
      password: password
  });
}

console.log(getRandomInt(0,100000000));