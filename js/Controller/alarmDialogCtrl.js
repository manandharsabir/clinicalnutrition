clinicalNutritionApp.controller('AlarmDialogCtrl', function($scope, $modalInstance, data) {
	$scope.user = {
	};
	
	$scope.cancel = function() {
		$modalInstance.dismiss('Canceled');
	};

	$scope.sendAlarm = function() {
		console.log("Trigger alarm!!");
		$scope.cancel();
	}

});