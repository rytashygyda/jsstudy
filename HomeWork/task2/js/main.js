var user = {
    name: "Ryta",
    email: "ryta@mail.com",
    age: undefined,
    isAdmin: false
};


// using construction case
console.log("*** Using construction switch ***");
age = Math.round(Math.random() * 100);
switch (true) {
    case age % 10 == 1:
        console.log("Користувачу " + user.name + " " + age + " рік");
        break;
    case ((age % 10 >= 2) && (age % 10 <= 4)):
        console.log("Користувачу " + user.name  + " " + age + " 'роки");
        break;

    default:
        console.log("Користувачу " + user.name  + " " + age + " років");
        break;
}
// using construction if
console.log("*** Using construction if ***");
age = Math.round(Math.random() * 100);
if ( age % 10 == 1 ) {
     console.log("Користувачу " + user.name  + " " + age + " рік");    
} else if ( (age % 10 >= 2) && (age % 10 <= 4) ) {
     console.log("Користувачу " + user.name  + " " + age + " роки");
}
else{
    console.log("Користувачу " + user.name + " " + age + " років");
}

