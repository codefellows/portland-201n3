var studentJohn = {
  name:   "John Student",
  email:  "john@school.com",
  phone:  "503-555-1234",
  addInfo:  function() {
    var list = document.getElementById("students");
    var info = "<li>"+this.name;
    info += "<ul><li>"+this.email+"</li>";
    info += "<li>"+this.phone+"</li></ul></li>";
    list.innerHTML += info;
  }
}

var studentJane = {
  name:   "Jane Citizen",
  email:  "jane@school.com",
  phone:  "503-555-9876",
  addInfo:  function() {
    var list = document.getElementById("students");
    var info = "<li>"+this.name;
    info += "<ul><li>"+this.email+"</li>";
    info += "<li>"+this.phone+"</li></ul></li>";
    list.innerHTML += info;
  }
}

var studentJake = {
  name:   "Jake Junior",
  email:  "jake@school.com",
  phone:  "503-555-5555",
  addInfo:  function() {
    var list = document.getElementById("students");
    var info = "<li>"+this.name;
    info += "<ul><li>"+this.email+"</li>";
    info += "<li>"+this.phone+"</li></ul></li>";
    list.innerHTML += info;
  }
}

var students = [studentJohn, studentJane, studentJake];

for (var index = 0; index < students.length; index++) {
  var currentStudent = students[index];
  currentStudent.addInfo();
}
