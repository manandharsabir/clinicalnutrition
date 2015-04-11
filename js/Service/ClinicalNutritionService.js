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
		}, 

		estimatedWeight : function(gender, race, age, ac, cc, ss, kh){
			
			if (race == ''){
				//Chumlea et al, 1985
				if (gender == 'men'){
					return  (1.73 * ac) + (0.98 * cc) + (0.37 * ss) + ( 1.16 * kh) - 81.69;
				}else if (gender == 'women'){
					return (0.98 * ac) + (1.27 * cc) + (0.40 * ss) + (0.87 * kh) - 62.35;
				}
			}else if (race != '' && (age > 16 && age <=60)) {
				//Chumlea et al, 1988
				if (race == 'white' && gender == 'men'){
					return (kh * 1.19) + (ac * 3.21) - 86.82;
				} else if (race == 'white' && gender == 'women'){
					return (kh * 1.01) + (ac * 2.81) - 60.04;
				} else if (race == 'black' && gender == 'men') {
					 return (kh * 1.09) + (ac * 3.14) - 83.72;
				}else if (race == 'black' && gender == 'women'){
					return  (kh * 1.24) + (ac * 2.97) - 82.48;
				}
			}
			return -1;
		},
		estimatedWeightAmputees : function(weightAfterAmputation, percentageAmputation){
			return ((weightAfterAmputation * 100)/(100-percentageAmputation));


			
		}
	}
});