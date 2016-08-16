function Circle(radius) {
  this.radius = radius;
};
  
Circle.prototype.area = function area () {
  return Math.PI * Math.pow(this.radius, 2);
};

var x = new Circle(5);

console.log(x.area());

