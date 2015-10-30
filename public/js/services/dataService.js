(function(){ 
    var dataService = function($http) {
        this.getData = function() {
            console.log("Calling /profile/all");
            return $http.get("/profile/all");
        }   
        this.getCustomerData = function() {
            return $http.get("/customers/"+id);
        }
    }
    angular.module("myApp").service('dataService', dataService);
    dataService.$inject = ['$http'];
    
})();