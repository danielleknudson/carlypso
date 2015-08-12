carlypso.service('API', function ($http, $q) {
  var context = this;
  context.baseURL = 'http://localhost:8080';

  this.getListingsCount = function () {
    var defer = $q.defer();

    $http.get(context.baseURL + '/count')
    .success(function (res) {
        defer.resolve(res.value);
      })
    .error(function (err) {

        defer.reject(err)
      });

    return defer.promise;
  };

  this.getListings = function (offset, limit) {
    var defer = $q.defer();

    $http.get(context.baseURL + '/listings?offset=' + offset + '&limit=' + limit)
    .success(function (res) {
      defer.resolve(res.value);
    })
    .error(function (err) {
      defer.reject(err)
    });

    return defer.promise;
  };
  return context;
});