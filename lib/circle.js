const Shape = require("./shapes");

class circle extends Shape {
  constructor(border, fill, radius) {
    super(border, fill)
    this.radius = radius;
  }



  getRadius() {
    return this.radius;
  }

  getFigure() {
    return "circle";
  }
}

module.exports = circle;