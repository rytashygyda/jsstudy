/*
Створити об’єкт user з загальними властивостями для всіх користувачів
Створити об’єкт admin котрий наслідується від user та розширяє його.
Виконати перебір і вивід в консоль властивостей admin пропустивши властивості, що наслідуються
*/
var user = {
		name: null,
		email: "hello.kittycats.com",
		age: 0
	}	
var admin = {
		salary: 120,
        knowledge: 'Oracle',
        certificat: 'Oracle DBA 1'
	}	
 
 var manager = {
     salary: 115,
     knowledge: 'PMP'
 }
admin.__proto__  = user;
manager.___proto__ = user;

for (var key in admin) {
    if (admin.hasOwnProperty(key)){
        console.log( 'My property is ' + key + ' = ' + admin[key]);
    }
    else {
        console.log( 'Not my property is ' + key + ' = ' + admin[key]);
    }
 }  





