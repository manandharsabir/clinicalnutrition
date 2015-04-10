clinicalNutritionApp.controller("MainCtrl",['$rootScope', '$scope', '$state','$http', 'dialogs','PhonegapService', 'appConfig', function($rootScope, $scope, $state,$http,dialogs, PhonegapService, appConfig) {

	$scope.menuItems = [];
	function loadMenuItems(){
		$http.get('data/menu.json').success(function(data) {
      		//alert("data:" + JSON.stringify(data));
      		$scope.menuItems = data;
    	});
	}


	function init(){
        $rootScope.$on('PhonegapServiceEvent', function(event, jsonMessage){
        	
            var dlg = dialogs.create('views/remark-dialog.html', 'RemarkDialogCtrl', jsonMessage , {
                size : 'lg',
                keyboard : true,
                backdrop : false,
                windowClass : 'my-class'
            });

            dlg.result.then(function(name) {
                console.log('Remark dialog responded-1');
            }, function() {
                console.log('Remark dialog responded-2');
            });
        });


    	$state.go('main.home');
	}

	loadMenuItems();
	
	init();

	$scope.go = function (route){
		$state.go(route);
	}

	function showPosition(position) {
		dialogs.notify('GPS Location', 'Latitude: ' + position.coords.latitude + '<br>' + 'Longitude: ' + position.coords.longitude);
	}

	$scope.getLocation = function() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition, function() {
				dialogs.notify('GPS Location', 'Error retriving location..check if gps is enabled');
			});
		} else {
			dialogs.notify('GPS Location', 'Error retriving location');
		}
	};

	$scope.exitDialog = function(which) {
		var dlg = dialogs.confirm('Exit application', 'Are you sure you want to exit application ?');
		dlg.result.then(function(btn) {
			try {
				localStorage.clear();
				//localStorage.removeItem("AuthenticationKey");
				//localStorage.removeItem("UserName");
				//localStorage.removeItem("UserId");
				
				
				PhonegapService.stopService("Stopping phonegap service", function(){
					navigator.app.exitApp();
				}, function (){
					navigator.app.exitApp();
				});
			} catch (error) {
				console.log('Cordova ERROR:' + 'exitDialog' + error);
				navigator.app.exitApp();
			}
		}, function(btn) {
			
		});
	};

	$scope.alarmDialog = function() {
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
	
	$scope.isAvailable = false;
	
	$scope.openUserStatus = function(){
		alert("called openUserStatus");
	};
}]);