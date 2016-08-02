var imageTracker = function (name, source) {
  this.imageSource = source;
  this.upVotes = 0;
  this.name = name;
  this.showVotes = function() {
    console.log(this.name+": "+this.upVotes+" votes");
  }
}

var imageOptions = [];

var pickedImages = []; // This is our memory - tracks which images we have shown
// document.getElementById("image1").addEventListener("click", recordClick);
// document.getElementById("image2").addEventListener("click", recordClick);
// document.getElementById("image3").addEventListener("click", recordClick);
document.getElementById("image-container").addEventListener("click", recordClick);

function getThreeImages() {
  pickedImages = []; // Empty this so that we can track 3 new images
  for (var imageID = 1; imageID <= 3; imageID++) {
    do { // Get a random index value for our image
      var index = Math.floor(Math.random() * 6);
    } while (pickedImages.indexOf(index) >= 0); // keep trying until it's unique
    var source = imageOptions[index].imageSource; // Get the source for the image
    document.getElementById("image"+imageID).src = source; // update the image with the new source
    pickedImages.push(index); // add the image location to our memory for later use
  }
}

function recordClick(event) {
  var clickedImage = event.target;
  console.log(clickedImage);
  var clickedImageSource = clickedImage.src;
  console.log("Clicked SRC: "+clickedImageSource);
  for (var index = 0; index < imageOptions.length; index++) {
    console.log("  Compare to: "+imageOptions[index].imageSource);
    if (clickedImageSource.indexOf(imageOptions[index].imageSource) >= 0) {
      imageOptions[index].upVotes++;
      console.log("    Clicked Item: "+imageOptions[index].name);
    } // if (clickedImageSource.indexOf(imageOptions[index].imageSource) >= 0)
  } // for (var index = 0; index < imageOptions.length; index++)
  getThreeImages();
}

function showGreeting() {
  if (localStorage.getItem("username") == null) {
    var userName = prompt("Welcome! Please tell me your name:", "");
    localStorage.setItem("username", userName);
  } else {
    var userName = localStorage.getItem("username");
  }
  var nameNode = document.createTextNode("Welcome "+userName);
  document.getElementById("greeting").appendChild(nameNode);
}

function loadImages() {
  if (localStorage.getItem("images") == null) {
    imageOptions.push(new imageTracker("Banana", "images/banana.jpg"));
    imageOptions.push(new imageTracker("Banana", "images/banana.jpg"));
    imageOptions.push(new imageTracker("Bag", "images/bag.jpg"));
    imageOptions.push(new imageTracker("Boots", "images/boots.jpg"));
    imageOptions.push(new imageTracker("Chair", "images/chair.jpg"));
    imageOptions.push(new imageTracker("Cthulhu", "images/cthulhu.jpg"));
    imageOptions.push(new imageTracker("Dragon", "images/dragon.jpg"));
  } else {
    var storedImages = JSON.parse(localStorage.getItem("images"));
    for (var index = 0; index < storedImages.length; index++) {
      var image = storedImages[index];
      var tracker = new imageTracker(image.name, image.imageSource);
      tracker.upVotes = image.upVotes;
      imageOptions.push(tracker);
    }
  }
}

window.addEventListener("load", showGreeting);
window.addEventListener("load", loadImages);
