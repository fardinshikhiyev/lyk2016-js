//var element = document.getElementById("text");
//var element = document.getElementsByClassName("text");
//var element = document.getElementsByTagName('div');

var elements = document.querySelectorAll(".text .foo");

for (var i = 0; i < elements.length; i++) {
  elements[i].innerHTML = "<p>Lyk Frontend 2016</p>";
}

var el = document.createElement('article');
var el2 = document.createElement('figure');
el2.innerHTML = "EL2";
document.body.appendChild(el);
el.appendChild(el2);
elements[1].appendChild(el2);

var dolly = el2.cloneNode(true);

document.body.appendChild(dolly);

document.body.removeChild(dolly);

var paragraf = document.getElementById('text');

document.body.removeChild(paragraf);
