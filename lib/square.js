const Shape = require("./shapes");

class Square extends Shape {
  constructor(border, fill) {
    super(border, fill);
  }

  render() {
    return`<rect x="30" y="30" width="80%" height="80%" stroke="${this.border}" fill="${this.fill}" stroke-width="5"/>`;
  }
}

module.exports = Square;