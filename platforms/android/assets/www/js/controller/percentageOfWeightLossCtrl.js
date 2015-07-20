clinicalNutritionApp.controller('PercentageOfWeightLossCtrl', ['$rootScope','$scope','$state','$location','dialogs','ClinicalNutrition',
	function($rootScope, $scope, $state, $location, dialogs, ClinicalNutrition) {
		
		$scope.usualWeight = "";
		$scope.currentWeight = "";
		$scope.time = "";

		$scope.adequacyOfWeightLoss = "";
		$scope.adequacyOfWeightLossStatus = "";

		$scope.calculate = function (form){
			$scope.adequacyOfWeightLoss = "";
			$scope.adequacyOfWeightLossStatus = "";

			if(!form.$valid) {
				return;
	    	}

			$scope.adequacyOfWeightLoss = ClinicalNutrition.percentageOfWeightLoss($scope.usualWeight, $scope.currentWeight);
			$scope.adequacyOfWeightLossStatus = ClinicalNutrition.percentageOfWeightLossStatus($scope.adequacyOfWeightLoss, $scope.time);
			
		}
}]);