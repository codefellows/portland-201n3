var imageTracker = function (name, source) {
  this.imageSource = source;
  this.upVotes = 0;
  this.name = name;
}

var imageOptions = [
  new imageTracker("Banana", "images/banana.jpg"),
  new imageTracker("Bag", "images/bag.jpg"),
  new imageTracker("Boots", "images/boots.jpg"),
  new imageTracker("Chair", "images/chair.jpg"),
  new imageTracker("Cthulhu", "images/cthulhu.jpg"),
  new imageTracker("Dragon", "images/dragon.jpg"),
];

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
}
