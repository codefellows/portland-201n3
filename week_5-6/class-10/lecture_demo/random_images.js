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

function getThreeImages() {
  var index = Math.floor(Math.random() * 6);
  var source = imageOptions[index].imageSource;
  document.getElementById("image1").src = source;
}
