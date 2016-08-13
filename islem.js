function islem(x, tip, y) {
  var z = parseInt(x);
  var t = parseInt(y);
  switch (tip) {
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
var i = prompt("Islem");
var y = prompt("y");

var sonuc = islem(x, i, y);

alert(sonuc);

