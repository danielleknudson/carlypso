carlypso.controller('HomeController', function ($scope, $q, API) {
  $scope.scope = {};
  $scope.scope.test = "Testing Angular Routing";
  $scope.scope.currentPage = 0;
  $scope.scope.getCount = function () {
    return $q(function (resolve, reject) {
      API.getListingsCount().then(function (result) {
        var count = JSON.parse(result);
        $scope.$apply($scope.scope.count = count);
        return resolve($scope.scope.count);
      });
    })
  };
  $scope.scope.getListings = function (offset, count) {
    return $q(function (resolve, reject) {
      API.getListings(offset, count).then(function (result) {
        var listings = JSON.parse(result);
        $scope.$apply($scope.scope.listings = listings.value);
        return resolve($scope.scope.listings);
      });
    });
  };

  $scope.scope.getNextPage = function () {
    var offset = $scope.scope.currentPage * 100;
    var count = 20;
    return $q(function (resolve, reject) {
      API.getListings(offset, count).then(function (result) {
        var listings = JSON.parse(result);
        $scope.$apply($scope.scope.listings = listings.value);
        return resolve($scope.scope.listings);
      });
    });
  }
  $scope.scope.getCount();
  $scope.scope.getListings(0, 20);

});