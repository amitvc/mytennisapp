(function(){
    
    var myApp = angular.module('myApp', ['ngRoute','ui.grid']);
    
    myApp.config(function($routeProvider){
       $routeProvider
		  .when('/profiles', {
			templateUrl: 'views/profile.html',
			controller: 'profileController'
		})
		  .when('/promotions', {
			templateUrl: 'views/promotions.html',
			controller: 'promotionController'	
		}).otherwise( { redirectTo: '/' });
 
    });
    
})();