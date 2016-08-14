var intervalId = setInterval(function () {
  console.log("Ben asenkronum.");
}, 2000);


setTimeout(function () {
  clearInterval(intervalId);
  console.log("Anladik asenkron oldugunu.");
}, 10000);

console.log("Bitti.")
