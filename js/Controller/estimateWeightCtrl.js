clinicalNutritionApp.controller('EstimateWeightCtrl', function($rootScope, $scope, $state, $location, dialogs) {
	var currentDate = moment();
	console.log('EstimateWeightCtrl' + currentDate.format());


	$scope.method18To60 = function(){
		$state.go('main.estimateWeight18To60');
	}
	
});



clinicalNutritionApp.controller('EstimateWeight18To60Ctrl', function($rootScope, $scope, $state, $location, dialogs) {
	var currentDate = moment();
	console.log('EstimateWeightCtrl' + currentDate.format());
	
});