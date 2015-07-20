clinicalNutritionApp.controller('EstimatedHeightCtrl', ['$rootScope','$scope','$state','$location','dialogs','ClinicalNutrition',
	function($rootScope, $scope, $state, $location, dialogs, ClinicalNutrition) {
		$scope.estimatedHeight = "";

		$scope.gender = '';
		$scope.race = '';
		$scope.age = '';
		$scope.kneeHeight = '';

		$scope.calculate = function (form){
			if(!form.$valid) {
				return;
	    	}
			$scope.estimatedHeight = ClinicalNutrition.estimatedHeight($scope.gender, $scope.race, $scope.age, $scope.kneeHeight);
		}
}]);