/**
 *  Main bootstrapping code for angular. Here you are configuring which views/controllers to load on different
 *  entry points. For e.g when the entry point is http://appName/profile then view (profile.html) and 
 *  controller(profileController) is loaded. 
 */
(function(){
    
    var myApp = angular.module('myApp', ['ngRoute','ui.grid']);
    
    myApp.config(function($routeProvider){
       $routeProvider
		  .when('/profile', {
			templateUrl: 'views/profile.html',
			controller: 'profileController'
		})
		  .when('/promotion', {
			templateUrl: 'views/promotions.html',
			controller: 'promotionController'	
		}).otherwise( { redirectTo: '/' });
 
    });
    
})();