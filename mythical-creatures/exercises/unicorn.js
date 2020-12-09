class Unicorn {
  constructor(name, color) {
    this.name = name;
    if (color === undefined) {
      this.color = 'white';
    } else {
      this.color = color;
    }
  }
  isWhite = function() {
    if (this.color !== "white") {
      return false;
    }
  }
  says = function(string) {
    var sparklyingStuffFront = "**;*";
    var sparklyingStuffBack = "*;**"
    return `${sparklyingStuffFront} ${string} ${sparklyingStuffBack}`;
  }
}


module.exports = Unicorn;
