//function fun1 () {
//  console.log("Ben bir callbackim.");
//}

//fun2(function() {
//  console.log("Anonim fonksiyon");
//});

function fun2 (callback) {
  if(typeof callback == 'function') {
    callback();
  }
}

fun2(function () {
  console.log("test");
});

