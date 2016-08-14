var element, elements, el, el2, dolly, text;
element = document.getElementById("text");
element = document.getElementsByClassName("text");
element = document.getElementsByTagName('div');

elements = document.querySelectorAll(".text .foo");

for (var i = 0; i < elements.length; i++) {
  elements[i].innerHTML = "<p>Lyk Frontend 2016</p>";
}

el = document.createElement('article');
el2 = document.createElement('figure');
el2.innerHTML = "EL2";
document.body.appendChild(el);
el.appendChild(el2);
elements[1].appendChild(el2);

dolly = el2.cloneNode(true);

document.body.appendChild(dolly);

document.body.removeChild(dolly);

text = document.getElementById('text');

document.body.removeChild(text);
