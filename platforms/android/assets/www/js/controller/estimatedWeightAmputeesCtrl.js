clinicalNutritionApp.controller('EstimatedWeightAmputeesCtrl', ['$filter','$rootScope','$scope','$state','$location','dialogs','ClinicalNutrition',
	function($filter, $rootScope, $scope, $state, $location, dialogs, ClinicalNutrition) {
		$scope.weightAfterAmputation = "";
		
		$scope.selectionLeft = {};
		$scope.selectionRight = {};

		$scope.calculatedWeight = "";

		$scope.amputationArray = [
			{
				"id" : "hand",
				"name" : "Hand",
				"weightRatio" : 0.7
			},{
				"id" : "leg",
				"name" : "Leg ",
				"weightRatio" : 16
			},{
				"id" : "forearm",
				"name" : "Forearm",
				"weightRatio" :  2.7 
			},{
				"id" : "legBelowKnee",
				"name" : " Leg below the knee",
				"weightRatio" : 4.4
			},{
				"id" : "armToShoulder",
				"name" : " Arm to the shoulder",
				"weightRatio" : 6.6
			},{
				"id" : "legAboveKnee",
				"name" : " Leg above the knee",
				"weightRatio" : 10.1
			},{
				"id" : "foot",
				"name" : "Foot",
				"weightRatio" : 1.5
			}

		];

		$scope.selectedAmputeesLeft = function () {
        	$scope.selectionLeft = $filter('filter')($scope.amputationArray, {checkedLeft: true});
		}

		$scope.selectedAmputeesRight = function () {
        	$scope.selectionRight= $filter('filter')($scope.amputationArray, {checkedRight: true});
		}


		$scope.calculate = function (form){
			if(!form.$valid) {
				return;
	    	}
	    	var totalAmputePercentage = 0.0;

	    	for(var i = 0; i < $scope.selectionLeft.length; i++) {
			    var obj = $scope.selectionLeft[i];
			    totalAmputePercentage += obj.weightRatio;
			}

			for(var i = 0; i < $scope.selectionRight.length; i++) {
			    var obj = $scope.selectionRight[i];
			    totalAmputePercentage += obj.weightRatio;
			}

			$scope.calculatedWeight = ClinicalNutrition.estimatedWeightAmputees($scope.weightAfterAmputation, totalAmputePercentage);
		}
}]);