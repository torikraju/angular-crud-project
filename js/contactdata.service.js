(function () {
    var app = angular.module("ContactApp");
    app.service("ContactDataSvc", function ($http) {

        var self = this;

        self.getContacts = function () {
            var promise1 = $http.get('http://localhost:3000/contacts')
                .then(function (response) {
                    return response.data;
                });
            var promise2 = promise1.then(function (response) {
                return response.data;
            });
            return promise1;
        }

        self.getContact = function (index) {
            var contact = $http.get('http://localhost:3000/contacts/' + index)
                .then(function (response) {
                    return response.data;
                });
            return contact;
        }

    });
})();