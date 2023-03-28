const Shape = require("./shapes");

class Triangle extends Shape {
  constructor(border, fill) {
    super(border, fill);
  }

  render() {
    return`<polygon points="145,0 30,200 400,380" stroke="${this.border}" fill="${this.fill}" stroke-width="5"/>`;
  }
}

module.exports = Triangle;