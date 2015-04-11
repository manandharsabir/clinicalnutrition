clinicalNutritionApp.controller('EstimatedWeightCtrl', ['$rootScope','$scope','$state','$location','dialogs','ClinicalNutrition',
	function($rootScope, $scope, $state, $location, dialogs, ClinicalNutrition) {
		$scope.estimatedWeight = "";

		$scope.gender = '';
		$scope.race = '';
		$scope.age = '';
		
		$scope.armCircumference = '';
		$scope.calfCircumference = '';
		$scope.subescapularSkinfold = '';

		$scope.kneeHeight = '';

		$scope.calculate = function (form){
			if(!form.$valid) {
				return;
	    	}
			$scope.estimatedWeight = ClinicalNutrition.estimatedWeight($scope.gender, $scope.race, $scope.age, $scope.armCircumference, $scope.calfCircumference, $scope.subescapularSkinfold, $scope.kneeHeight);
		}
}]);