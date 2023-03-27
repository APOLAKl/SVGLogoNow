class Shape {
  constructor(border, fill) {
    this.border = border;
    this.fill = fill;
  }

  getStroke() {
    return this.border;
  }

  getFill() {
    return this.fill;
  }
}

module.exports = Shape;