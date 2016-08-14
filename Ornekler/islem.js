function islem(x, islem, y) {
  var z = parseInt(x);
  var t = parseInt(y);
  switch (islem) {
    case "+":
      return z + t;
    case "-":
      return z - t;
    case "*":
      return z * t;
    case "/":
      return z / t;
  }
}

var x = prompt("x");
var islem = prompt("Islem");
var y = prompt("y");

var sonuc = islem(x, islem, y);

alert(sonuc);

