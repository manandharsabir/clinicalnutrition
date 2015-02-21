ngAppClinicalNutrition.controller('SplashCtrl', ['$scope','$timeout','$location', function ($scope,$timeout,$location) {
    //alert('controller initializing');
    $timeout(function() {
	      $location.path('/home');
	      //alert("called");
	   }, 2000);
}]);

ngAppClinicalNutrition.controller('HomeCtrl', ['$scope', function ($scope) {
    //alert('Home controller initializing');
    $scope.name = "Test";
}]);
	

	
