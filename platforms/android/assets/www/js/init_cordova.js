var phonegapApp = {
	initialize : function() {
		this.bindEvents();
	},

	bindEvents : function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},

	onDeviceReady : function() {
		phonegapApp.receivedEvent('deviceready');
		
	},
	/**
	 * Handle backbutton pressed in any controller
	 */
	handleDeviceBackButton : function(){
		/*
		if (angular.element('[ng-controller=HomeCtrl]').length){
			angular.element('[ng-controller=HomeCtrl]').scope().backPress();
		}
		*/
	},

	receivedEvent : function(id) {
		console.log('Received Cordova Event: ' + id);
		angular.bootstrap(document, ["clinicalNutritionApp"]);
		//document.addEventListener("backbutton", handleDeviceBackButton, false);
	}
};
phonegapApp.initialize();