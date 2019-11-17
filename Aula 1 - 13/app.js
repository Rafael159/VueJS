new Vue({
	el: '#vue-app',
	data:{
		//Aula 1 - 7

		// name: 'John',
		// job : 'Astronaut',
		// website: 'https://www.restartgames.com.br',
		// websiteTag: '<a href="https://www.restartgames.com.br">Restart Games Website</a>',
		// age: 26,
		// x: 0,
		// y: 0

		//Aula 8

		//name: '',
		//age: ''

		//Aula 9
		// age: 20,
		// a: 0,
		// b: 0

		//Aula 10
		available: true,
		nearby: false
	},
	methods:{
		//Aula 1 - 7
		// greet: function(time){
		// 	return 'Good ' + time +' '+ this.name;
		// },
		// add: function(inc){
		// 	this.age += inc;
		// },
		// substract: function(dec){
		// 	this.age -= dec;
		// },
		// updateXY: function(event){
		// 	this.x = event.offsetX;
		// 	this.y = event.offsetY;
		// },
		// click: function(){
		// 	alert('You clicked me');
		// },
		// logName: function(){			
		// 	console.log("You entered your name");
		// },
		// logAge: function(){
		// 	console.log("You entered your age");
		// }

		//Aula 9
		/*addToA: function(){
			return this.age + this.a;
		},
		addToB: function(){
			return this.age + this.b;
		}*/
	},
	computed:{
		//Aula 9
		// addToA: function(){
		// 	console.log("addToA");
		// 	return this.age + this.a;
		// },
		// addToB: function(){
		// 	console.log("addToB");
		// 	return this.age + this.b;
		// }

		//Aula 10

		compClasses: function(){
			return{
				available : this.available,
				nearby : this.nearby
			}
		}

	}
});