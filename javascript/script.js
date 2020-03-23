var myName = "Adeyemi Ibrahim";

var myCourses = ['Html', 'css', 'javascript','Node.js']

document.getElementById("name").innerHTML ='<h1>' + myName; + '</h1>';
document.getElementById("courses").innerHTML = " " + myCourses;
console.log(myName);
console.log(myCourses);

if ((myCourses.length % 2)  == 0 ) {
	var number = [];
	number.length = 201;
	for (var i = 0; i < number.length; i++) {
		if ((i % 2) == 0) {
			console.log(i);
		}
	}
}