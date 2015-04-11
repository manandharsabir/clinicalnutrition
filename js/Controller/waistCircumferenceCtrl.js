clinicalNutritionApp.controller('WaistCircumferenceCtrl', ['$rootScope','$scope','$state','$location','dialogs','ClinicalNutrition',
	function($rootScope, $scope, $state, $location, dialogs, ClinicalNutrition) {
		$scope.result = "";
		$scope.age = "";
		$scope.gender = "";
		$scope.waistCircumference = "";

		$scope.calculate = function (form){
			$scope.result = "";

			if(!form.$valid) {
				return;
	    	}
			$scope.result = ClinicalNutrition.waistCircumference($scope.age, $scope.gender, $scope.waistCircumference);
		}
}]);