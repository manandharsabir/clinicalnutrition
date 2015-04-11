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
		},
		idealWeight : function (height){
			return  (height - 100);
		},

		adjustedWeight : function(currentWeight, idealWeight){
			//If    BMI < 18,5kg/m² and BMI > 30kg/m²
			return (currentWeight - idealWeight) * 0.25 + idealWeight ;
	
		},
		calculateBMI : function (currentWeight, currentHeight){
			//weight in KG, height in centimeters
			// Adapted from WHO, 1995, WHO, 2000 and WHO 2004
			var heightInMeters = currentHeight/100;
			return (currentWeight/(heightInMeters * heightInMeters));
		},

		//Underweight < 22kg/m² Healthy weight 22-27kg/m² Overweight > 27kg/m²




		classifyBMI : function (calculatedBMI, age){

			if (age >=20 && age <=60){
				if (calculatedBMI < 18.50){ //Underweight
					if (calculatedBMI < 16){
						return "Underweight - Serve thinness";
					}else if (calculatedBMI >=16 && calculatedBMI < 17){
						return "Underweight - Moderate thinness";
					}else if (calculatedBMI >=17 && calculatedBMI < 18.5){
						return "Underweight - Mild thinness";
					}
				}else if (calculatedBMI >= 18.5 && calculatedBMI < 25){//Normal range
						return "Normal";
				} else if (calculatedBMI >= 25){//Overweight
					if (calculatedBMI >=25 && calculatedBMI < 30){//pre obese
						return "Overweight - Pre obese";
					}else if (calculatedBMI >=30){
						if (calculatedBMI >=30 && calculatedBMI < 35){
							return "Overweight - Obese class I";
						}else if (calculatedBMI >=35 && calculatedBMI < 40){
							return "Overweight - Obese class II";
						}else if (calculatedBMI >=40){
							return "Overweight - Obese class III";
						}
					}
				}
			} else if (age > 60){
				//Lipschitz, 1994

				if (calculatedBMI < 22){ 
					return "Underweight";
				} else if (calculatedBMI >=22 && calculatedBMI <27){
					return " Healthy weight";
				} else if (calculatedBMI >=27){
					return "Overweight";
				
				}

			} else {
				return "NOT DEFINED for age " + age;
			}
		},

		waistCircumference : function (age, gender, waistCircumference){
			if (age < 20 || age > 60){
				return "NOT DEFINED for age " + age ;
			}else {
				if (gender == 'men'){
					if (waistCircumference >= 94 && waistCircumference < 102){
						return "increased";
					}else if (waistCircumference >=102){
						return "substantially increased";
					}
				}else if  (gender == 'women'){
					if (waistCircumference >= 80 && waistCircumference < 88){
						return "increased";
					}else if (waistCircumference >=88){
						return "substantially increased";
					}
				}
			}
			return "normal";	
		},

		percentageOfAdequacyWeight : function(weight, idealWeight){
			 return ((weight/idealWeight) * 100);
		},

		percentageOfAdequacyWeightStatus : function(adequacyOfWeight){
			if (adequacyOfWeight <= 70){
				return "Servere malnurtition";
			}else if (adequacyOfWeight > 70 && adequacyOfWeight <=80){
				return "Moderate malnutrition";
			}else if (adequacyOfWeight > 80 && adequacyOfWeight <=90){
				return "Mild malnutrition";
			}else if (adequacyOfWeight > 90 && adequacyOfWeight <=110){
				return "Eutrophic";
			}else if (adequacyOfWeight > 110 && adequacyOfWeight <=120){
				return "Overwieght";
			}else if (adequacyOfWeight > 120){
				return "Obesity";
			}
		},

		percentageOfWeightLoss : function (usualWeight, currentWeight){
			return ((usualWeight - currentWeight)/usualWeight)* 100;
		},

		percentageOfWeightLossStatus : function (percentWeightLoss, time){
			if (time == 0.25){
				if (percentWeightLoss >=1 && percentWeightLoss <=2){
					return "Significant loss ";
				}else if (percentWeightLoss >2 ){
					return "Servere loss";
				}
			}else if (time == 1){
				if (percentWeightLoss == 5){
					return "Significant loss ";
				}else if (percentWeightLoss > 5 ){
					return "Servere loss";
				}
			} else if (time == 3){
				if (percentWeightLoss == 7.5){
					return "Significant loss ";
				}else if (percentWeightLoss > 7.5 ){
					return "Servere loss";
				}
			} else if (time == 6){
				if (percentWeightLoss == 10){
					return "Significant loss ";
				}else if (percentWeightLoss > 10 ){
					return "Servere loss";
				}
			} 
		},

		percentageOfAdequacyArmCircumference : function (gender, age, currentArmCircumference){
			var armCircumferenceChartMenP50= [
				{"start" : 1, "end": 2, "value": 15.9},
				{"start" : 2, "end": 3, "value": 16.2},
				{"start" : 3, "end": 4, "value": 16.7},
				{"start" : 4, "end": 5, "value": 17.1},
				{"start" : 5, "end": 6, "value": 17.5},
				{"start" : 6, "end": 7, "value": 17.9},
				{"start" : 7, "end": 8, "value": 18.7},
				{"start" : 8, "end": 9, "value": 19.0},
				{"start" : 9, "end": 10, "value": 20.0},
				{"start" : 10, "end": 11, "value": 21.0},
				{"start" : 11, "end": 12, "value": 22.3},
				{"start" : 12, "end": 13, "value": 23.2},
				{"start" : 13, "end": 14, "value": 24.7},
				{"start" : 14, "end": 15, "value": 25.3},
				{"start" : 15, "end": 16, "value": 26.4},
				{"start" : 16, "end": 17, "value": 27.8},
				{"start" : 17, "end": 18, "value": 28.5},
				{"start" : 18, "end": 19, "value": 29.7},
				{"start" : 19, "end": 25, "value": 30.8},
				{"start" : 25, "end": 35, "value": 31.9},
				{"start" : 35, "end": 45, "value": 32.6},
				{"start" : 45, "end": 55, "value": 32.2},
				{"start" : 55, "end": 65, "value": 31.7},
				{"start" : 65, "end": 75, "value": 30.7},

			];

			var armCircumferenceChartWomenP50= [
				{"start" : 1, "end": 2, "value": 15.6},
				{"start" : 2, "end": 3, "value": 16.0},
				{"start" : 3, "end": 4, "value": 16.7},
				{"start" : 4, "end": 5, "value": 17.9},
				{"start" : 5, "end": 6, "value": 17.5},
				{"start" : 6, "end": 7, "value": 17.6},
				{"start" : 7, "end": 8, "value": 18.3},
				{"start" : 8, "end": 9, "value": 19.5},
				{"start" : 9, "end": 10, "value": 21.1},
				{"start" : 10, "end": 11, "value": 21.0},
				{"start" : 11, "end": 12, "value": 22.4},
				{"start" : 12, "end": 13, "value": 23.7},
				{"start" : 13, "end": 14, "value": 24.3},
				{"start" : 14, "end": 15, "value": 25.2},
				{"start" : 15, "end": 16, "value": 25.4},
				{"start" : 16, "end": 17, "value": 25.4},
				{"start" : 17, "end": 18, "value": 20.5},
				{"start" : 18, "end": 19, "value": 20.2},
				{"start" : 19, "end": 25, "value": 20.7},
				{"start" : 25, "end": 35, "value": 21.2},
				{"start" : 35, "end": 45, "value": 21.8},
				{"start" : 45, "end": 55, "value": 22.0},
				{"start" : 55, "end": 65, "value": 22.5},
				{"start" : 65, "end": 75, "value": 22.5},

			];

			var valFromChart = "";

			if (gender == 'men'){
				for(var i = 0; i < armCircumferenceChartMenP50.length; i++) {
				    var obj = armCircumferenceChartMenP50[i];
				    if (age >= obj.start && age < obj.end){
				    	valFromChart = obj.value;
				    	break;
				    }

				}
			}else if (gender == 'women'){
				for(var i = 0; i < armCircumferenceChartWomenP50.length; i++) {
				    var obj = armCircumferenceChartWomenP50[i];
				    if (age >= obj.start && age < obj.end){
				    	valFromChart = obj.value;
				    	break;
				    }
				}
			}
			return (currentArmCircumference/valFromChart) * 100;
		},

		percentageOfAdequacyArmCircumferenceStatus : function (adequacyArmCircumference){
			if (adequacyArmCircumference <= 70){
				return "Severe malnutriton ";
			} else if (adequacyArmCircumference > 70 && adequacyArmCircumference <= 80 ){
				return "Moderate malnutrition ";
			} else if (adequacyArmCircumference > 80 && adequacyArmCircumference <= 90 ){
				return "Mild malnutrition ";
			} else if (adequacyArmCircumference > 90 && adequacyArmCircumference <= 110 ){
				return "Eutrophic ";
			} else if (adequacyArmCircumference > 110 && adequacyArmCircumference <= 120 ){
				return "Overweight ";
			} else if (adequacyArmCircumference > 120){
				return "Obesity";
			}
		},

		percentageOfAdequacyArmMuscleCircumference : function (gender, age, currentArmMuscleCircumference){
			var armMuscleCircumferenceChartMenP50= [
				{"start" : 1, "end": 2, "value": 12.7},
				{"start" : 2, "end": 3, "value": 13.0},
				{"start" : 3, "end": 4, "value": 13.7},
				{"start" : 4, "end": 5, "value": 14.1},
				{"start" : 5, "end": 6, "value": 14.6},
				{"start" : 6, "end": 7, "value": 15.1},
				{"start" : 7, "end": 8, "value": 16.0},
				{"start" : 8, "end": 9, "value": 16.2},
				{"start" : 9, "end": 10, "value": 17.0},
				{"start" : 10, "end": 11, "value": 18.0},
				{"start" : 11, "end": 12, "value": 18.3},
				{"start" : 12, "end": 13, "value": 19.5},
				{"start" : 13, "end": 14, "value": 21.1},
				{"start" : 14, "end": 15, "value": 22.3},
				{"start" : 15, "end": 16, "value": 23.7},
				{"start" : 16, "end": 17, "value": 24.9},
				{"start" : 17, "end": 18, "value": 25.8},
				{"start" : 18, "end": 19, "value": 26.4},
				{"start" : 19, "end": 25, "value": 27.3},
				{"start" : 25, "end": 35, "value": 27.9},
				{"start" : 35, "end": 45, "value": 28.6},
				{"start" : 45, "end": 55, "value": 28.1},
				{"start" : 55, "end": 65, "value": 27.8},
				{"start" : 65, "end": 75, "value": 26.8},

			];

			var armMuscleCircumferenceChartWomenP50= [
				{"start" : 1, "end": 2, "value": 12.4},
				{"start" : 2, "end": 3, "value": 12.6},
				{"start" : 3, "end": 4, "value": 13.2},
				{"start" : 4, "end": 5, "value": 13.6},
				{"start" : 5, "end": 6, "value": 14.2},
				{"start" : 6, "end": 7, "value": 14.5},
				{"start" : 7, "end": 8, "value": 15.1},
				{"start" : 8, "end": 9, "value": 16.0},
				{"start" : 9, "end": 10, "value": 16.7},
				{"start" : 10, "end": 11, "value": 17.0},
				{"start" : 11, "end": 12, "value": 18.1},
				{"start" : 12, "end": 13, "value": 19.1},
				{"start" : 13, "end": 14, "value": 19.8},
				{"start" : 14, "end": 15, "value": 20.1},
				{"start" : 15, "end": 16, "value": 20.2},
				{"start" : 16, "end": 17, "value": 20.2},
				{"start" : 17, "end": 18, "value": 20.5},
				{"start" : 18, "end": 19, "value": 20.2},
				{"start" : 19, "end": 25, "value": 20.7},
				{"start" : 25, "end": 35, "value": 21.2},
				{"start" : 35, "end": 45, "value": 21.8},
				{"start" : 45, "end": 55, "value": 22.0},
				{"start" : 55, "end": 65, "value": 22.5},
				{"start" : 65, "end": 75, "value": 22.5},

			];

			var valFromChart = "";

			if (gender == 'men'){
				for(var i = 0; i < armMuscleCircumferenceChartMenP50.length; i++) {
				    var obj = armMuscleCircumferenceChartMenP50[i];
				    if (age >= obj.start && age < obj.end){
				    	valFromChart = obj.value;
				    	break;
				    }

				}
			}else if (gender == 'women'){
				for(var i = 0; i < armMuscleCircumferenceChartWomenP50.length; i++) {
				    var obj = armMuscleCircumferenceChartWomenP50[i];
				    if (age >= obj.start && age < obj.end){
				    	valFromChart = obj.value;
				    	break;
				    }
				}
			}
			return (currentArmMuscleCircumference/valFromChart) * 100;
		},

		percentageOfAdequacyArmMuscleCircumferenceStatus : function (adequacyArmMuscleCircumference){
			if (adequacyArmMuscleCircumference <= 70){
				return "Severe malnutriton ";
			} else if (adequacyArmMuscleCircumference > 70 && adequacyArmMuscleCircumference <= 80 ){
				return "Moderate malnutrition ";
			} else if (adequacyArmMuscleCircumference > 80 && adequacyArmMuscleCircumference <= 90 ){
				return "Mild malnutrition ";
			} else if (adequacyArmMuscleCircumference > 90) {
				return "Eutrophic ";
			}
		}
		
	}
});