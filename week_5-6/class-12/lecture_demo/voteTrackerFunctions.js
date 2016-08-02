function greetUser() {
  if (localStorage.getItem("username") == null) {
    var username = prompt("Welcome to Bus Mall Vote Tracker!", "Enter Your Name");
    localStorage.setItem("username", username);
    document.getElementById("greeting").innerText = "Welcome "+username;
  } else {
    var username = localStorage.getItem("username");
    document.getElementById("greeting").innerText = "Welcome Back "+username;
  }
}

function initializeImagesToTrack() {
  imagesToTrack.push(new voteTracker("Banana", "images/banana.jpg"));
  imagesToTrack.push(new voteTracker("Bag", "images/bag.jpg"));
  imagesToTrack.push(new voteTracker("Boots", "images/boots.jpg"));
  imagesToTrack.push(new voteTracker("Chair", "images/chair.jpg"));
  imagesToTrack.push(new voteTracker("Cthulhu", "images/cthulhu.jpg"));
  imagesToTrack.push(new voteTracker("Dragon", "images/dragon.jpg"));
}

function showImages() {
  var pickedImages = []; // Empty this so that we can track 3 new images
  var imageContainer = document.getElementById("image-container");
  imageContainer.innerHTML = "";
  for (var imageID = 1; imageID <= 3; imageID++) {
    do { // Get a random index value for our image
      var index = Math.floor(Math.random() * 6);
    } while (pickedImages.indexOf(index) >= 0); // keep trying until it's unique
    var source = imagesToTrack[index].imageSource; // Get the source for the image
    var imageElement = document.createElement("img");
    imageElement.src = source; // update the image with the new source
    imageContainer.appendChild(imageElement);
    pickedImages.push(index); // add the image location to our memory for later use
  }
}

function recordClick(event) {
  var clickedImage = event.target;
  var clickedImageSource = clickedImage.src;
  for (var index = 0; index < imagesToTrack.length; index++) {
    if (clickedImageSource.indexOf(imagesToTrack[index].imageSource) >= 0) {
      imagesToTrack[index].upVotes++;
    } // if (clickedImageSource.indexOf(imagesToTrack[index].imageSource) >= 0)
  } // for (var index = 0; index < imagesToTrack.length; index++)
  showImages();
}
