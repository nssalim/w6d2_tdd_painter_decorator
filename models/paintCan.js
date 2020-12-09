const PaintCan = function (numberOfPaintCans, paintPerCanInLitres) {
    this.paintCans = [];
    this.paintPerCanInLitres = 5;
  }
  PaintCan.prototype.numberOfpaintCans = function () {
    return this.paintCans.length;
  }
  PaintCan.prototype.addPaintCans = function (paintCans) {
    this.paintCans.push(paintCans);
  }
  PaintCan.prototype.removePaintCansByName = function (paintCans) {
    const indexOfpaintCan = this.paintCans.indexOf(paintCans);
    this.paintCans.splice(indexOfpaintCans, 1);
  }
  PaintCan.prototype.removeAllPaintCans = function () {
    this.paintCans.splice(0, this.numberOfpaintCans());
  }
  module.exports = PaintCan;