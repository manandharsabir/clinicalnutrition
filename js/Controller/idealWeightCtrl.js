clinicalNutritionApp.controller('IdealWeightCtrl', ['$rootScope','$scope','$state','$location','dialogs','ClinicalNutrition',
	function($rootScope, $scope, $state, $location, dialogs, ClinicalNutrition) {
		$scope.calculatedValue = "";
		$scope.height = '';

		$scope.calculate = function (form){
			if(!form.$valid) {
				return;
	    	}
			$scope.calculatedValue = ClinicalNutrition.idealWeight($scope.height);
		}
}]);