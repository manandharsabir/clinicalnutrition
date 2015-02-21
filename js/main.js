var ngAppClinicalNutrition = angular.module("ngAppClinicalNutrition", ['ngRoute','ui.bootstrap','dialogs','snap']);

ngAppClinicalNutrition.config(function ($routeProvider, $locationProvider, $httpProvider) {

    $routeProvider.otherwise({redirectTo:'/',});
    
    $routeProvider.when('/',{templateUrl:'views/splash.html',controller:'SplashCtrl'});

    $routeProvider.when('/home',{templateUrl:'views/home.html',controller:'HomeCtrl'});
});

ngAppClinicalNutrition.run(["$rootScope", "$location", function ($rootScope, $location) {
	
	console.log('Clinical Nutrition App run');
}]);







