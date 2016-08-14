var counterDiv = document.getElementById('counter');
var inc = document.getElementById('inc');
var dec = document.getElementById('dec');
var counter = 0;

counterDiv.innerHTML = counter;

function handleClick(event) {
  if(event.target.id == 'inc') {
    counter += 5;
  } else {
    counter -= 5;
  }
  counterDiv.innerHTML = counter;
}

inc.addEventListener('click', handleClick);
dec.addEventListener('click', handleClick);
