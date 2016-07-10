function addPerson() {
  var name = prompt("Who is the person to add:","");
  var table_cell = document.getElementById("new-person");
  table_cell.innerHTML = "<span class='bold'>"+name+"</span>";
}

var names = new Array("Mark", "Sarah Joy", "Arielle", "Kara", "Chris");
var message = "Your Instructor and TAs for Code 201:\n";
for (zzTop = 0; zzTop < names.length; zzTop++) {
  message += names[zzTop] + ", ";
}
//alert (message.substr(0, message.length - 2))
