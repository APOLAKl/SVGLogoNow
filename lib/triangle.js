const Shape = require("./shapes");

class Triangle extends Shape {
  constructor(border, fill) {
    super(border, fill);
  }

  render() {
    return`<polygon points="250,60 100,400 400,400" stroke="${this.border}" fill="${this.fill}" stroke-width="5"/>`;
  }
}

module.exports = Triangle;