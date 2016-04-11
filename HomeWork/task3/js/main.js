var user = {
    name: "Kitty",
    email: "hello.kittycats.com",
    age: -2651321,
    isAdmin: false
};
var validateResults = [
						{
						parametr: undefined,
						status: undefined,
						message: undefined
						},
						{
						 parametr: undefined,
						 status: undefined,
						 message: undefined
						}
					];


function validateEmail (mail) {
	  var mailPattern= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
	  if (mailPattern.test(mail))
		  return 'OK';
	  else 
		  return 'I cant send letter to this address :(';
	  
}
function validateAge(age){
	switch (true) {
		case age < 0:
		   return 'Hm.. Are U from other Planet?';
		case age > 150:
			return 'Are U eat rejuvenating apples? ';
		case age%10 > 0:
			return 'I asked about ages! Not mounth and days:)';
		default:
			return 'OK';	
	}
	
}
function validateUser (objUser){
	var valideAgeRes =  validateAge(objUser.age);
	//check age
	validateResults[0].parametr = 'AGE';
	switch (true) {
		case valideAgeRes === 'OK':
			validateResults[0].status = true;
			validateResults[0].message = valideAgeRes;
			break;
		case valideAgeRes !== 'OK':
			validateResults[0].status = false;
			validateResults[0].message = valideAgeRes;
			break;
			
	}
	//check email
	validateResults[1].parametr = 'EMAIL';
	validateEmailRes = validateEmail (objUser.email)
	switch (true) {
		case validateEmailRes === 'OK':
			validateResults[1].status = true;
			validateResults[1].message = validateEmailRes;
			break;
		case validateEmailRes !== 'OK':
			validateResults[1].status = false;
			validateResults[1].message = validateEmailRes;
			break;
			
	}
	
   console.log(validateResults);
	
};

validateUser (user);