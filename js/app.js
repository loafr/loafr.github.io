var app = angular.module('lrApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){

  $routeProvider
  .when('/', {
  	templateUrl: 'js/homeTemplate.html',
  	controller: 'MainCtrl'
  })
  .when('/about', {
  	templateUrl: 'js/aboutTemplate.html',
  	controller: 'MainCtrl'
  })
  .when('/projects', {
  	templateUrl: 'js/projectsTemplate.html',
  	controller: 'MainCtrl'
  })
  .otherwise ({
  	redirectTo: '/'
  })

  $locationProvider.html5Mode(false);

});