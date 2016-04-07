var user = {
    name: "Ryta",
    email: "ryta@mail.com",
    age: undefined,
    isAdmin: false
};

// using construction case
age = Math.round(Math.random() * 100);
switch (true) {
    case age % 10 == 1:
        console.log("Користувачу " + name + " " + age + " рік");
        break;
    case ((age % 10 >= 2) && (age % 10 <= 4)):
        console.log("Користувачу " + name + " " + age + " роки");
        break;

    default:
        console.log("Користувачу " + name + " " + age + " років");
        break;
}
