clinicalNutritionApp.controller('PercentageOfAdequacyArmMuscleCircumferenceCtrl', ['$rootScope','$scope','$state','$location','dialogs','ClinicalNutrition',
	function($rootScope, $scope, $state, $location, dialogs, ClinicalNutrition) {

		$scope.gender = "";
		$scope.age = "";
		$scope.currentArmMuscleCircumference = "";

		$scope.adequacyArmMuscleCircumference = "";
		$scope.adequacyArmMuscleCircumferenceStatus = "";

		$scope.calculate = function (form){
			$scope.adequacyArmMuscleCircumference = "";
			$scope.adequacyArmMuscleCircumferenceStatus = "";

			if(!form.$valid) {
				return;
	    	}

			$scope.adequacyArmMuscleCircumference = ClinicalNutrition.percentageOfAdequacyArmMuscleCircumference($scope.gender, $scope.age, $scope.currentArmMuscleCircumference);
			$scope.adequacyArmMuscleCircumferenceStatus = ClinicalNutrition.percentageOfAdequacyArmMuscleCircumferenceStatus($scope.adequacyArmMuscleCircumference);
		}


		
}]);