function getWeather(city) {
  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&APPID=0617b0b806920586bbd5d1ff4ef84189',
    method: 'GET'
  }).done(function(data) {
    var div = $('#weather');
    var icon = $('<img>').attr('src', 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png');
    var degree = $('<div>').addClass('degree').text(data.main.temp + ' °C');

    div.html(''); 

    div.append(icon).append(degree);

  }).fail(function(err) {
    console.log('ERROR', err);
  });
}

$('#city').change(function() {
  
  var city = $('#city option:selected').text().toLowerCase();
  var val = $('#city option:selected').val();

  localStorage.setItem('city', city);
  localStorage.setItem('value', val);

  getWeather(city);
});

if (localStorage.city) {
  getWeather(localStorage.city);
  $('#city').val(localStorage.value);
}
