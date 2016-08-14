$(".menuyu-ac").on("click", function(event) {
  event.preventDefault();
  
  $(".ana-menu").show();
});

$(".menuyu-kapat").on("click", function(event) {
  event.preventDefault();
  
  $(".ana-menu").hide();
});

$(".menuyu-kapat-ac").on("click", function(event) {
  event.preventDefault();
  
  $(".ana-menu").toggle();
});
