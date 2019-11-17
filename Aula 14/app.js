var one = new Vue({
	el: '#vue-app-one',
	data:{
		title: 'View App One'
	},
	methods:{
		
	},
	computed:{
		greet: function(){
			return 'Hello from app one :)';
		}
	}
});

var two = new Vue({
	el: '#vue-app-two',
	data:{
		title: 'View App Two'		
	},
	methods:{
		changeTitle: function(){
			one.title = "Title Changed";
		}
	},
	computed:{
		greet: function(){
			return 'Yo dudes! This is app two speaking to ya :)';
		}
	}
});

//This title will overwrite the title from view TWO
two.title = "Changed from outside";