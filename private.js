function Person(){
	this.name = ''	;
	this.age = 0;
	var tattoo = 0;

	var swim = function(){
		
		return console.log('I`m swimming');

	};

	this.move = function(canSwim){
		if(canSwim){
			return swim();
		}
		return console.log('I`m walking');

	};


}


var william = new Person();
console.log(william);

william.move(); //walking
william.move(true); //swimming