class Color {
  constructor(red, violet, blue, green, yellow, orange) {
    this.red = red;
    this.violet = violet;
    this.blue = blue;
    this.green = green;
    this.yellow = yellow;
    this.orange = orange;
  }

  getRed() {
    return this.red;
  }

  getViolet() {
    return this.violet;
  }

  getGreen() {
    return this.green;
  }

  getBlue() {
    return this.blue;
  }

  getYellow() {
    return this.yellow;
  }

  getOrange() {
    return this.orange;
  }
}

module.exports = Color;