carlypso.controller('HomeController', function ($scope, $q, API) {
  $scope.scope = {};
  $scope.scope.currentPage = 1;
  $scope.scope.getCount = function () {
    return API.getListingsCount() 
    .then(function (res) {
      $scope.scope.count = res;
    }, function (err) {
      return err;
    })
  };
  $scope.scope.getListings = function (offset, count) {
    return API.getListings(offset, count)
    .then(function (res) {
      $scope.scope.listings = res;
    }, function (err) {
      return err;
    });
  };

  $scope.scope.getNextPage = function () {

    if ($scope.scope.currentPage === 1) {
      offset = 0;
    } else {
      offset = ($scope.scope.currentPage - 1) * 20;
    }

    return API.getListings(offset, 20)
    .then(function (res) {
      $scope.scope.listings = res;
    }, function (err) {
      return err;
    })

  };
  $scope.scope.getCount();
  $scope.scope.getListings(0, 20);

});