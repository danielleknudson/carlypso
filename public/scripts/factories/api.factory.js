carlypso.factory('API', function () {
  var API = {};

  var baseURL = 'http://localhost:8080'

  API.getListingsCount = function () {
    return $.ajax({
        url: baseURL + '/count'
      })
        .done(function (res) {
          return res;
        })
        .fail(function (res) {
          return res;
        });
  };

  API.getListings = function (offset, limit) {
    return $.ajax({
        url: baseURL + '/listings?offset=' + offset + '&limit=' + limit
      })
        .done(function (res) {
          return res;
        })
        .fail(function (res) {
          return res;
        });
  };

  return API;
});