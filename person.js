function Person(){
	this.name = '';
	this.age = '';
	this.eyesColor = '';
	this.body = '';

	this.move = function(){

	};

	this.say = function(){
		console.log('Hello from say action');
	};

	this.see = function(){

	};

}

var william = new Person();

console.log(typeof Person); //function
console.log(typeof william); //object

william.age = 31;
william.name = 'William';
william.eyesColor = 'brown';
william.body = 1.80;


console.log(william);
william.say();

var wesley = new Person();
wesley.age = 25;
wesley.name = 'Wesley';
wesley.eyesColor = 'black';
wesley.body = 1.68;

console.log(wesley);