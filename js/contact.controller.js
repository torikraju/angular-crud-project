(function () {
    var app = angular.module("ContactApp");
    app.controller("ContactCtrl", ContactCtrl);

    function ContactCtrl(ContactDataSvc) {
        var self = this;

        ContactDataSvc.getContacts()
            .then(function (data) {
                self.contacts= data;
            });

        this.selectContact = function (index) {
            ContactDataSvc.getContact(index)
                .then(function (data) {
                    self.selectedContact= data;
                });
        };
    }
})();