function Address(){
	var number = 0;
	var city = '';
	var address = '';
}

Address.prototype.setNumber = function(_number){
	number = _number;	
};
Address.prototype.getNumber = function(){
	return number;
};
Address.prototype.setCity = function(_city){
	city = _city;	
};
Address.prototype.getCity = function(){
	return city;
};
Address.prototype.setAddress = function(_address){
	address = _address;	
};
Address.prototype.getAddress = function(){
	return address;
};


function Person(){
	var name ='';
	var age = 0;
}

Person.prototype = new Address();
Person.prototype.constuctor = Person;

Person.prototype.getName = function(){
	return name;
};
Person.prototype.setName = function(_name){
	name = _name;
};

Person.prototype.getAge = function(){
	return age;
};
Person.prototype.setAge = function(_age){
	age = _age;
};




var william = new Person();

william.setName('William');
william.setAge(31);
william.setCity('Marilia')
console.log(william);
console.log(william.getName(), william.getAge(), william.getCity());
console.log(william instanceof Address);



