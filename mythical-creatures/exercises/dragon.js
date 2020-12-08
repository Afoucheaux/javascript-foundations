class Dragon {
  constructor(name, rider, hungry) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.fed = 0;
  }
  greet = function() {
    return `Hi, ${this.rider}!`;
  }
  eat = function() {
    console.log(this.fed);
    if (this.fed > 1) {
      this.fed = this.fed + 1;
      this.hungry = false;
    } else {
      this.fed = this.fed + 1;
      this.hungry = true;
    }
  }
}

module.exports = Dragon;
