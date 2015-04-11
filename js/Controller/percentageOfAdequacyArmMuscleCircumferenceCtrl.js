clinicalNutritionApp.controller('PercentageOfAdequacyArmMuscleCircumferenceCtrl', ['$rootScope','$scope','$state','$location','dialogs','ClinicalNutrition',
	function($rootScope, $scope, $state, $location, dialogs, ClinicalNutrition) {
		
		$scope.age = "";
		$scope.height = '';
		$scope.weight = '';

		$scope.idealWeight = "";
		$scope.adjustedWeight = "";
		$scope.calculatedBMI = "";
		$scope.classifiedBMIInfo = "";

		$scope.calculate = function (form){
			$scope.idealWeight = "";
			$scope.adjustedWeight = "";
			$scope.calculatedBMI = "";
			$scope.classifiedBMIInfo = "";

			if(!form.$valid) {
				return;
	    	}

			$scope.idealWeight = ClinicalNutrition.idealWeight($scope.height);
			$scope.adjustedWeight = ClinicalNutrition.adjustedWeight($scope.weight, $scope.idealWeight);
			$scope.calculatedBMI = ClinicalNutrition.calculateBMI($scope.weight, $scope.height);
			$scope.classifiedBMIInfo = ClinicalNutrition.classifyBMI($scope.calculatedBMI, $scope.age);
		}


		
}]);