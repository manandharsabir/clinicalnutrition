clinicalNutritionApp.controller('HomeCtrl', function($rootScope, $scope, $state, $location, dialogs) {
	var currentDate = moment();
	console.log('HomeCtrl' + currentDate.format());

	$scope.alarmDialog = function(which) {
		var dlg = dialogs.create('views/alarm-dialog.html', 'AlarmDialogCtrl', {}, {
			size : 'lg',
			keyboard : true,
			backdrop : false,
			windowClass : 'my-class'
		});
		dlg.result.then(function(name) {
			console.log('Alarm dialog responded-1');
		}, function() {
			console.log('Alarm dialog responded-2');
		});
	};
});