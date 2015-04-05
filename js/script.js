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
       /* .state("login", {
            url : "/login",
            templateUrl : "views/login.html"
        })*/
		.state("main", {
			url : "/main",
			templateUrl : "views/main.html"
		})
        .state("main.home", {
            url : "/home",
            templateUrl : "views/home.html"
        })
        .state("main.estimateHeight", {
            url : "/estimateHeight",
            templateUrl : "views/estimateHeight.html"
        })
        .state("main.estimateWeight", {
            url : "/estimateWeight",
            templateUrl : "views/estimateWeight.html"
        })
        .state("main.estimateWeight18To60", {
            url : "/estimateWeight18To60",
            templateUrl : "views/estimateWeight18To60.html"
        })
        .state("main.adjustedWeight", {
            url : "/adjustedWeight",
            templateUrl : "views/adjustedWeight.html"
        })
        .state("main.weightForAmputees", {
            url : "/weightForAmputees",
            templateUrl : "views/weightForAmputees.html"
        })
        .state("main.waistCircumference", {
            url : "/waistCircumference",
            templateUrl : "views/waistCircumference.html"
        })
        .state("main.percentageAdequacyOfWeight", {
            url : "/percentageAdequacyOfWeight",
            templateUrl : "views/percentageAdequacyOfWeight.html"
        })
        .state("main.percentageOfWeightLoss", {
            url : "/percentageOfWeightLoss",
            templateUrl : "views/percentageOfWeightLoss.html"
        });

        
	
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






