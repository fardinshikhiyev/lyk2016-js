$.ajax({
  url: 'http://jsonplaceholder.typicode.com/posts',
  method: 'GET'
}).done(function(data) {

  var posts = $('#posts');

  data.forEach(function(obj) {
    // /*BAD*/ $('#posts').append('<li>' + obj.id + ' ' + obj.title + '<p>' + obj.body +  '</p></li>');
    posts.append(
      '<li>' + 
        obj.id + ' ' + obj.title +
        '<p>' +
          obj.body + 
        '</p>' +
      '</li>');
  });
  
}).fail(function(err) {
  console.log(err.statusText, err.status);
});
