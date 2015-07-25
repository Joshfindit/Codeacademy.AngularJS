app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Silly Goose';
  $scope.promo = "On sale yesterday!";
  $scope.product = new Object();
  $scope.product.name = 'The Book of Trees';
  $scope.product.price = 19;
  $scope.product.pubdate = new Date('2014', '03', '08');
}]);
