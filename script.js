// var username = prompt ("who is there");

// 	if (username == "Admin") {
// 		let password = prompt("Password");
// 		if (userPassword == "The Master"){
// 			alert ("welcome");
// 		}
// 		else if (userPassword ""){
// 			alert ("cancelled"),
// 		}
// 		else alert ("wrong Password");
// 	}
// 	else if (username == ""){
// 		alert("cancelled")
// 	}
// 	else alert("i dont know you"); {

// 	}
    


// var username = prompt ("who is there");
// switch (user) {
// 	case "admin":
// 	prompt ("enter Password");
// 	break;

// 	case "null":
// 	prompt("cancelled");
// 	break;

// 	case "The Master":
// 	prompt("Welcome");
// 	break;

// 	default:
// 	prompt("wrong password");
// 	break;

// 	default:
// 	prompt("i dont know you");
// 	break;
// }


// var func = (x, y) {
// 	return x*y
// 	func(3, 2);
// 	func(3, 3);
// 	func(1, 1);

// };
// function secondFunction(){};
// 	var result;
// 	result func ()
// }

// var x = function (x'y) {return x*y





// function names(name,age,) {
//   let.name = name;
//   let.age = age;
// }

var anita = new names("Anita", 41);
var tejuri = new names("Tejuri",25);
var pelumi = new names("Pelumi",67);
var gerald = new names("Gerald",43);


var array = [41,25,67,43];
array.average = () => {
 var total = 0;
  for (var i = 0; i < array.length; i++) {
   total += array[i];
  }
 var avg = total / array.length;
 return avg;
}

var avg = array.average();

names.prototype.getAverageAge = function getAge() {
  return avg;
};


var nameA = {
	name: "Greald"
	age: 43
}
var nameB = {
	name: "Anita"
	age: 23
}
var nameC = {
	name: "Tejuri"
	age: 15
}
var nameD = {
	name: "Pelumi"
	age: 16
}
var names = [nameA.age, nameB.age, nameC.age, nameD.age];
console.log(names);

function Gettotal(x, y){
	let result = x+y;
	return result;
};

var sum = names.reduce(Gettotal);
function getMean(){
	let mean = sum / names.length;
	return(mean);
}
