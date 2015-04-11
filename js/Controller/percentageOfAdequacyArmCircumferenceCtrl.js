clinicalNutritionApp.controller('PercentageOfAdequacyArmCircumferenceCtrl', ['$rootScope','$scope','$state','$location','dialogs','ClinicalNutrition',
	function($rootScope, $scope, $state, $location, dialogs, ClinicalNutrition) {

		$scope.gender = "";
		$scope.age = "";
		$scope.currentArmCircumference = "";

		$scope.adequacyArmCircumference = "";
		$scope.adequacyArmCircumferenceStatus = "";

		$scope.calculate = function (form){
			$scope.adequacyArmCircumference = "";
			$scope.adequacyArmCircumferenceStatus = "";

			if(!form.$valid) {
				return;
	    	}

			$scope.adequacyArmCircumference = ClinicalNutrition.percentageOfAdequacyArmCircumference($scope.gender, $scope.age, $scope.currentArmCircumference);
			$scope.adequacyArmCircumferenceStatus = ClinicalNutrition.percentageOfAdequacyArmCircumferenceStatus($scope.adequacyArmCircumference);
		}


		
}]);