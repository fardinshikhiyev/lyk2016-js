function getMovies(value) {
  $.ajax({
    url: 'http://www.omdbapi.com/?s=' + value,
    method: 'GET'
  }).done(function(data) {
    var movieList = $('.movie-list');
    var notFound = $('.not-found');
    movieList.html('');
    
    if (data.Response == 'True') {
      notFound.hide();
      movieList.show();
      
      data.Search.forEach(function(item) {
        var li = $('<li>');
        
        var title = $('<p>').addClass('title').text(item.Title);
        var year = $('<p>').text('Yılı: ' + item.Year);
        var imdbID = $('<p>').text('IMDb ID: ' + item.imdbID);
        
        li.append(title).append(year).append(imdbID);
        
        movieList.append(li);
        
        /*movieList.append('<li><p class="title">'+
                         item.Title + '</p><p>Yılı: ' +
                         item.Year + '</p><p>IMDb ID: ' +
                         item.imdbID + '</p></li>');*/
      });
    } else {
      movieList.hide();
      notFound.show();
    }
  });
};

$('.search-form').submit(function(event) {
  event.preventDefault();
  
  var value = $('.search-input').val();
  
  if (value != "") {
    getMovies(value); 
  } else {
    alert("Bir değer gir.");
  }
});

