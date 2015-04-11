var clinicalNutritionApp = angular.module("clinicalNutritionApp", [ 'snap', "ui.router", "ui.bootstrap", "toggle-switch", 'dialogs.main', 'timer']);

clinicalNutritionApp.constant('appConfig',{
    ver: '1.0',
    url: '',
    portal:'',
    accessKey:"",
    interval: 60,
});

clinicalNutritionApp.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state("main", {
			url : "/main",
			templateUrl : "views/main.html"
		})
        .state("main.home", {
            url : "/home",
            templateUrl : "views/home.html"
        })
        .state("main.estimatedHeight", {
            url : "/estimatedHeight",
            templateUrl : "views/estimated-height.html",
        })
        .state("main.estimatedWeight", {
            url : "/estimatedWeight",
            templateUrl : "views/estimated-weight.html"
        })
        .state("main.estimatedWeightAmputees", {
            url : "/estimatedWeightAmputees",
            templateUrl : "views/estimated-weight-amputees.html"
        })
        /*
        .state("main.idealWeight", {
            url : "/idealWeight",
            templateUrl : "views/ideal-weight.html"
        })*/
        .state("main.adjustedWeight", {
            url : "/adjustedWeight",
            templateUrl : "views/adjusted-weight.html"
        })
        .state("main.waistCircumference", {
            url : "/waistCircumference",
            templateUrl : "views/waist-circumference.html"
        })
        .state("main.percentageOfAdequacyWeight", {
            url : "/percentageOfAdequacyWeight",
            templateUrl : "views/percentage-of-adequacy-weight.html"
        })
        .state("main.percentageOfWeightLoss", {
            url : "/percentageOfWeightLoss",
            templateUrl : "views/percentage-of-weight-loss.html"
        })
        .state("main.percentageOfAdequacyArmCircumference", {
            url : "/percentageOfAdequacyArmCircumference",
            templateUrl : "views/percentage-of-adequacy-arm-circumference.html"
        }) 
        .state("main.percentageOfAdequacyArmMuscleCircumference", {
            url : "/percentageOfAdequacyArmMuscleCircumference",
            templateUrl : "views/percentage-of-adequacy-arm-muscle-circumference.html"
        });

        /* .state("login", {
            url : "/login",
            templateUrl : "views/login.html"
        })*/

        
	
	$urlRouterProvider.otherwise("main");
	
	
});

clinicalNutritionApp.config([ 'dialogsProvider', function(dialogsProvider) {
	dialogsProvider.useBackdrop('static');
	dialogsProvider.useEscClose(false);
	dialogsProvider.useCopy(false);
	dialogsProvider.setSize('sm');

} ]).run([ '$rootScope','$templateCache','dialogs','$state', 
    function($rootScope, $templateCache,dialogs,$state) {
	// $templateCache.put('/dialogs/custom.html','<div>hello</div>');
	console.log('Clinical Nutrition 2.0 Application Started.');
} ]);






