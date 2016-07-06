function addPerson() {
  var name = prompt("Who is the person to add:","");
  var table_cell = document.getElementById("new-person");
  table_cell.innerHTML = "<span class='bold'>"+name+"</span>";
}
