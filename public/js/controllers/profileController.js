/**
 * 
 */
(function(){
    
    var profileController = function ($scope,dataService,$routeParams,$log) {
        dataService.getData().then(function(response){
            console.log("Got called to get all profiles");
            $scope.customers = response.data;
        },function(response){
             console.log("Handle errors");    
        });
    }
    
    angular.module("myApp").controller('profileController', profileController);    
    profileController.$inject = ['$scope', 'dataService','$routeParams','$log'];
})();