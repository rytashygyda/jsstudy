var name="Ryta",
	email="Ryta@mail.com",
	age=18,
	isAdmin=true,
	user={
		name:name,
		email:email,
		age: age + 1,
		isAdmin: !isAdmin,
		address:{
			sreet: "Kurska",
			city: "Kyiv"
		}		
	};
console.log(user);