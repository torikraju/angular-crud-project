var app = angular.module("ContactApp", ["iso-3166-country-codes"]);



app.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});

app.filter('countryParser', function(ISO3166) {
      return ISO3166.getCountryNames(ISO3166);
});

