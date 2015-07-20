clinicalNutritionApp.factory("EchoService", function($rootScope) {
	return{
		echo: function(messageText){
			console.log(messageText);
			try{
				echo.createEcho(messageText, function(){},function(){});
			}catch(error){
				console.log("Error:" + error);
			}
			
		}
	}
});

clinicalNutritionApp.factory("PhonegapService",['$rootScope', function($rootScope) {
	return{
		startService: function(pluginParam, callBack){
			console.log("Starting service with URL:" + pluginParam.URL);
			try{
				service.startService(pluginParam, callBack,callBack);
			}catch(error){
				console.log("Error:" + error);
			}
		},
		
		stopService: function(messageText,callBack){
			console.log(messageText);
			try{
				var pluginParam = {};
				service.stopService(pluginParam, callBack,callBack);
			}catch(error){
				console.log("Error:" + error);
			}
		},
		
		callWebservice: function(param, callBack){
			try{
				service.callWebservice(param, callBack,callBack);
			}catch(error){
				console.log("Error..callWebservice:" + error);
				callBack("web");
			}
			
		},
		openBrowser :function(urlPath){
			try{
				var ref = window.open(urlPath, '_system', 'location=no');
			}catch(error){
				console.log("Error..openBrowser:" + error);
			}
			
		}
	}
}]);

clinicalNutritionApp.factory("SqliteDB", function($rootScope) {
	
	var db = null;
	
	return{
		initializeSettingDB: function(success, error){
			
			var dbSize = 5 * 1024 * 1024; // 5MB
			db = openDatabase("Clinical Nutrition", "2.0", "Clinical Nutrition 2.0", dbSize);
			db.transaction(function(tx) {
		        tx.executeSql("CREATE TABLE IF NOT EXISTS Settings(name TEXT PRIMARY KEY, value TEXT)", [],success,error);
			});
		},
		
		insertOrReplace : function(name, value,success, error){
			db.transaction(function(tx){
				tx.executeSql("INSERT OR REPLACE INTO Settings(name, value) VALUES (?,?)",
					[name, value],
					success,
					error
				);
			});
		},
		
		getSetting : function(name,success, error) {
	        db.transaction(function(tx) {
	        	tx.executeSql("SELECT * FROM Settings WHERE name = ?", [name], success, error);
	        });
	    },

	    getAllSettings: function (success, error){
	    	db.transaction(function(tx) {
	        	tx.executeSql("SELECT * FROM Settings", [], success, error);
	        });
	    },

	    deleteAllSettings: function (success, error){
	    	 db.transaction(function(tx) {
	        	tx.executeSql("DROP TABLE IF EXISTS Settings", [], success, error);
	        });
	    }
	}
});