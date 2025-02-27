// Your code here

class Polygon {

  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce(function (accum, side) {
      return accum + side;
    }, 0);
  }

}

class Triangle extends Polygon {

  get isValid() {
    if (this.countSides !== 3) {
      return false
    }
    else {
    return (this.sides[0] + this.sides[1] > this.sides[2] && this.sides[0] + this.sides[2] > this.sides[1] && this.sides[1] + this.sides[2] > this.sides[0])
    }
  }

}

class Square extends Polygon {

  get isValid() {
    if (this.countSides !== 4) {
      return false
    }
    else {
      return ((this.sides[0] === this.sides[1]) && (this.sides[0] === this.sides[2]) && (this.sides[0] === this.sides[3]))
    }
  }

  get area() {
    if (this.isValid) {
      return this.sides[0] * this.sides[1];
    }
    else {
      alert("Cannot get area for invalid square")
    }
  }

}
