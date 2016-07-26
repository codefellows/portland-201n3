function showClickResults() {
  alert("I Got Clicked!");
}

function clickResults2() {
  alert("Just Saying 'Hi' Again.");
}

function headerResults() {
  alert("This is an import part of the page.");
}

function bodyResults() {
  alert("The body tag is responding to the click.");
}

document.getElementById("click-button").addEventListener("click", showClickResults);
document.body.addEventListener("click", bodyResults);


document.getElementById("heading").addEventListener("click", headerResults);
