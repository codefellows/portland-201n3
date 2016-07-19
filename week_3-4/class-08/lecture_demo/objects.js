var Student = function(name, email, phone) {
  this.name = name;
  this.email = email;
  this.phone = phone;
  this.addInfo = function() {
    var studentRow = document.createElement("tr");
    var nameCell = document.createElement("td");
    nameCell.innerText = this.name;
    studentRow.appendChild(nameCell);
    var emailCell = document.createElement("td");
    emailCell.innerText = this.email;
    studentRow.appendChild(emailCell);
    var phoneCell = document.createElement("td");
    phoneCell.innerText = this.phone;
    studentRow.appendChild(phoneCell);

    var table = document.getElementById("students");
    table.appendChild(studentRow);
  };
}

var students = [
  new Student("John Student", "john@school.com", "503-555-1234"),
  new Student("Jane Citizen", "jojane@school.com", "503-555-9876"),
  new Student("Jake Junior", "jake@school.com", "503-555-5555"),
  new Student("Julie Public", "jp@test.com", "503-555-1111"),
  new Student("Mark Fitzgerald", "mark@codefellows.com", "503-555-0000"),
];
// Add Table Header "Student Roster"
var table = document.getElementById("students");
var tableHeader = document.createElement("tr");
var tableHeaderCell = document.createElement("th");
tableHeaderCell.setAttribute("colspan", "3");
tableHeaderCell.innerText = "Student Roster";
tableHeader.appendChild(tableHeaderCell);
table.appendChild(tableHeader);

// Add Column Headers
tableHeader = document.createElement("tr");
tableHeaderCell = document.createElement("th");
tableHeaderCell.innerText = "Name";
tableHeader.appendChild(tableHeaderCell);
tableHeaderCell = document.createElement("th");
tableHeaderCell.innerText = "E-Mail";
tableHeader.appendChild(tableHeaderCell);
tableHeaderCell = document.createElement("th");
tableHeaderCell.innerText = "Phone";
tableHeader.appendChild(tableHeaderCell);
table.appendChild(tableHeader);

// Add Students
for (var index = 0; index < students.length; index++) {
  var currentStudent = students[index];
  currentStudent.addInfo();
}

function findStudent() {
  var studentToFind = prompt("Name of student to find:","");
  for (var index = 0; index < students.length; index++) {
    var currentStudent = students[index];
    if (currentStudent.name.indexOf(studentToFind) >= 0) {
      console.log(currentStudent);
    } else if (currentStudent.email == studentToFind) {
      console.log(currentStudent);
    }
  }
}
