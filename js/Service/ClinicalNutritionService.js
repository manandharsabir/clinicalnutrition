clinicalNutritionApp.factory("ClinicalNutrition", function($rootScope) {
	return{
		estimatedHeight: function(gender, race, age, kneeHeight){ //return in cm
			if (race == '' && age > 60){
				//height for elderly...
				if (gender == 'men'){
					return 64.19 - (0.04 * age) + (2.02 * kneeHeight);
				}else if (gender == 'women'){
					return 84.88 - (0.24 * age) + (1.83 * kneeHeight);
				}
				return -1;
			} else if (race == 'black' && gender == 'women'){
				if (age >= 19 && age <= 60){
					return 68.10 + (1.86 * kneeHeight) - (0.06 * age);
				}else if (age > 60){
					return 58.72 + (1.96 * kneeHeight); 
				}
				return -1;

			} else if (race == 'white' && gender == 'women'){
				if (age >= 19 && age <=60){
					return 70.25 + (1.87 * kneeHeight) - (0.06 * age);
				}else if (age > 60){
					return  75.00 + (1.91 * kneeHeight) - (0.17 * age)
				}
				return -1;
			} else if (race == 'black' && gender == 'men'){
				if (age >= 19 && age <=60){
					return 73.42 + (1.79 * kneeHeight); 
				}else if (age > 60){
					return  95.79 + (1.37 * kneeHeight); 
				}
				return -1;
			} else if (race == 'white' && gender == 'men'){
				if (age >= 19 && age <=60){
					return  71.85 + (1.88 * kneeHeight);
				}else if (age > 60){
					return 59.01 + (2.08 * kneeHeight);
				}
				return -1;
			}
			return -1;
		}
	}
});