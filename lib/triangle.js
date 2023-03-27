const Shape = require("./shapes");

class triangle extends Shape {
  constructor(border, fill, points) {
    super(border, fill)
    this.points = points;
  }



  getPoints() {
    return this.points;
  }

  getFigure() {
    return "triangle";
  }
}

module.exports = triangle;