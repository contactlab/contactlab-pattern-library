Polymer({
	is: 'progress-bar',
	properties:{
		value: {
			type: Number,
			value: 0
		},
		minimal: {
			type: Boolean,
			value: false
		},
		primary: {
			type: Boolean,
			value: false
		},
		secondary: {
			type: Boolean,
			value: false
		},
		info: {
			type: Boolean,
			value: false
		},
		success: {
			type: Boolean,
			value: false
		},
		warning: {
			type: Boolean,
			value: false
		},
		error: {
			type: Boolean,
			value: false
		}
	},
	attached: function(){
		this.$.label.classList.remove('progress-bar');
	},
	computeProp: function(value){
		return 'width:' + this.value + '%;';
	},
	computeClass: function(minimal,color){
		var vals = ['minimal','primary','secondary','info','success','warning','error'];
		var classes = [];
		for(var i = 0; i < arguments.length; i++){
			arguments[i] ? classes.push(vals[i]) : null;
		}
		return classes.join(' ');
	},
	percent: function(value){
		return value + '%'
	}
});