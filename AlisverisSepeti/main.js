angular.module('basket', [])

.controller('BasketController', function ($scope) {
  
  $scope.products = [
    {name: "Ananas", price: 15},
    {name: "Elma", price: 10},
    {name: "Armut", price: 10},
    {name: "Portakal", price: 12},
    {name: "Kivi", price: 14},
    {name: "Kavun", price: 22},
    {name: "Karpuz", price: 13},
    {name: "Şeftali", price: 17}
  ];
  
  $scope.basket = [];
  
  $scope.addBasket = function(product) {
    $scope.basket.push(
      {name: product.name, price: product.price}
    );
  }
  
  $scope.clear = function(index) {
    $scope.basket.splice(index, 1);
  }
 
  $scope.total = function() {
    var prices = $scope.basket.map(function(obj) {
      return obj.price;
    });
    
    return prices.reduce(function(prev, curr) {
      return prev + curr;
    }, 0);
  }
  
});
