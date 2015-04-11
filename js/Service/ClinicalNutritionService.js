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
		}
	}
});