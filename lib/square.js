const Shape = require("./shapes");

class square extends Shape {
  constructor(border, fill, Xaxis, Yaxis, width, height) {
    super(border, fill)
    this.Xaxis = Xaxis;
    this.yAxis = Yaxis;
    this.width = width;
    this.height = height;
  }



  getXaxis() {
    return this.Xaxis;
  }

  getYaxis() {
    return this.Yaxis;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  getFigure() {
    return "square";
  }
}

module.exports = square;