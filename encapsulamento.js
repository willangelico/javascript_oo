function Person(){
	var name = '';
	var age = 0;

	this.getName = function(){
		return name;
	};

	this.setName = function(_name){
		name = _name;
	};

	this.getAge = function(){
		return age;
	};

	this.setAge = function(_age){
		age = _age;
	};
}

var william = new Person();

william.setName('William Angelico');
console.log(william.getName());

william.setAge(31);
console.log(william.getAge());

console.log(william);

