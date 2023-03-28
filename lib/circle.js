const Shape = require("./shapes");

class Circle extends Shape{
  constructor(border, fill) {
    super(border, fill);
  }

  render() {
    return`<circle cx="150" cy="105" r="90" stroke="${this.border}" fill="${this.fill}" stroke-width="5"/>`;
  }
}

module.exports = Circle;
