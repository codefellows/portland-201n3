var imagesToTrack = [];

var voteTracker = function (name, source) {
  this.imageSource = source;
  this.upVotes = 0;
  this.name = name;
  this.showVotes = function() {
    console.log(this.name+": "+this.upVotes+" votes");
  }
}
