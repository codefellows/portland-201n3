var userName = null;

function playGame() {
  if (userName == null) {
    userName = getUserName();
  }
  greetUser(userName);
  if (userName != "") {
    var guess = prompt("Guess a number between 1 and 10:","");
    if (guess == 7) {
      alert("Great job! You got it!!");
    } else {
      alert("Wah, wah, waaaaah. Sorry, no.");
    }
    var times = prompt("How many times should I say 'Hello'?");
    for (var count = 1; count <= times; count++) {
      alert("Count = " + count);
      if (count > 3) {
        alert("Really? I think that "+times+" is too much. I'm calling it a day.");
        count = times + 1;
      } // if (count > 3)
    } // for (var count = 1; count <= times; count++)
  } // if (userName != null)
}

function getUserName() {
  var userName = "";
  while ((userName.trim() == "") && (userName != null)) {
    userName = prompt("Please tell me your name:","");
  }
  if (userName != null) {
    return userName;
  } else {
    return "";
  }
}

function greetUser(name) {
  var message = "Hello ";
  if (name != "") {
    message += name + "!";
  }
  message += "\nI hope you enjoy the game.";
  alert(message);
}
