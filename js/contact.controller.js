(function() {
    var app = angular.module("ContactApp");
    app.controller("ContactCtrl",ContactCtrl);

    function ContactCtrl(ContactDataSvc) {

        this.contacts = ContactDataSvc.contacts ;

        this.selectContact = function (index) {
            this.selectedContact = this.contacts[index];
        };



    }
})();