$.ajax({
  url: 'http://jsonplaceholder.typicode.com/todos?userId=1',
  method: 'GET'
}).done(function(data) {
  var completed = $('#completed');
  var uncompleted = $('#uncompleted');

  data.forEach(function(obj) {
    var li = $('<li>');

    li.text(obj.id + ' ' + obj.title);

    if (obj.completed == true) { 
      completed.append(li);
    } else {
      uncompleted.append(li);
    }

  });
}).fail(function(err) {
  console.log(err);
});
