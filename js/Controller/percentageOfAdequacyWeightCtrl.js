clinicalNutritionApp.controller('PercentageOfAdequacyWeightCtrl', ['$rootScope','$scope','$state','$location','dialogs','ClinicalNutrition',
	function($rootScope, $scope, $state, $location, dialogs, ClinicalNutrition) {
		
		$scope.height = '';
		$scope.weight = '';

		$scope.idealWeight = "";
		$scope.adequacyOfWeight = "";
		$scope.adequacyOfWeightStatus = "";
		$scope.calculate = function (form){
			$scope.idealWeight = "";
			$scope.adequacyOfWeight = "";
			$scope.adequacyOfWeightStatus = "";

			if(!form.$valid) {
				return;
	    	}

			$scope.idealWeight = ClinicalNutrition.idealWeight($scope.height);
			$scope.adequacyOfWeight = ClinicalNutrition.percentageOfAdequacyWeight($scope.weight, $scope.idealWeight);
			$scope.adequacyOfWeightStatus = ClinicalNutrition.percentageOfAdequacyWeightStatus($scope.adequacyOfWeight);
		}


		
}]);