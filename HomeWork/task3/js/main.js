var validateResults = [];
var userBad = {
		name: null,
		email: "hello.kittycats.com",
		age: -2651321
	}	
var userGood = {
		name: "Kitty",
		email: "hello.kitty@cats.com",
		age: 100
	}	
    
    
function validateEmail (mail) {
	  var mailPattern= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
	  
	  if ( (mail === "undefined") || (mail === null) )
		  return 'Email not found';
	  else if (mailPattern.test(mail))
		  return 'OK';
	  else 
		  return 'I cant send letter to this address :(';
	  
}
function validateAge(age){
	switch (true) {
		case ( (age === "undefined") || (age === null)):
			return 'Age not found';
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
function validateName(name){
	if ( (name === "undefined") || (name === null))
			return 'Unhappy user';
	else return 'OK';
}

function validateUser (objUser){
	var valideAgeRes =  validateAge(objUser.age);
	//check age
	switch (true) {
		case valideAgeRes === 'OK':
			validateResults.push({parameter:'AGE', status:true, message:valideAgeRes});
			break;
		case valideAgeRes !== 'OK':
			validateResults.push({parameter:'AGE', status:false, message:valideAgeRes});
			break;
			
	}
	//check email
	validateEmailRes = validateEmail (objUser.email)
	switch (true) {
		case validateEmailRes === 'OK':
			validateResults.push({parameter:'EMAIL', status:true, message:validateEmailRes});
			break;
		case validateEmailRes !== 'OK':
			validateResults.push({parameter:'EMAIL', status:false, message:validateEmailRes});
			break;			
	}
	//chech name
	validateNameRes = validateName (objUser.name)
	switch (true) {
		case validateNameRes === 'OK':
			validateResults.push({parameter:'NAME', status:true, message:validateNameRes});
			break;
		case validateEmailRes !== 'OK':
			validateResults.push({parameter:'NAME', status:false, message:validateNameRes});
			break;			
	}
	

	return(validateResults);
	
};

console.log(validateUser (userBad));
