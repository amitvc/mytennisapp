/**
 *  Main bootstrapping code for angular. Here you are configuring which views/controllers to load on different
 *  entry points. For e.g when the entry point is http://appName/profile then view (profile.html) and
 *  controller(profileController) is loaded.
 */
(function(){

    var myApp = angular.module('myApp', ['ngRoute','ui.grid','mwl.calendar']);

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

    myApp.controller("MainController",function(moment){
      var vm = this;

    vm.events = [
      {
        title: 'Editable event',
        type: 'warning',
        startsAt: moment().startOf('month').toDate(),
        editable: true,
        deletable: false
      }, {
        title: 'Deletable event',
        type: 'info',
        startsAt: moment().startOf('month').toDate(),
        deletable: true,
        editable: false
      }, {
        title: 'Non editable and deletable event',
        type: 'important',
        startsAt: moment().startOf('month').toDate(),
        editable: false,
        deletable: false
      }
    ];

    vm.calendarView = 'month';
    vm.viewDate = moment().startOf('month').toDate();
    });

})();
