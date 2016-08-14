function fun2 (callback) {
  if(typeof callback == 'function') {
    callback();
  }
}

fun2(function () {
  console.log("Callback");
});

