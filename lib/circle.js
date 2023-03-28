const Shape = require("./shapes");

class Circle extends Shape{
  constructor(border, fill) {
    super(border, fill);
  }

  render() {
    return`<circle cx="100" cy="100" r="50" stroke="${this.border}" fill="${this.fill}" stroke-width="5"/>`;
  }
}

module.exports = Circle;
