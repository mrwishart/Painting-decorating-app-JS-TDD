const Room = function(area){
  this.area = area;
  this.paintStatus = false;
};

Room.prototype.paintRoom = function () {
  this.paintStatus = true;
};

module.exports = Room;
