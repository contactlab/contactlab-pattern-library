(function(){

window.ki = {
	e: undefined,
	state: undefined,
	width: function(){
		return window.document.body.offsetWidth;
	},
	get: function(what){
		return document.querySelector(what);
	},
	getAll: function(what){
		document.querySelectorAll(what);
	},
	one: function(what){
		this.e = document.querySelector(what);
		this.state = 'one';
		return this;
	},
	all: function(what){
		this.e = document.querySelectorAll(what);
		this.state = 'all';
		return this;
	},
	on: function(event,callback){
		switch(this.state){
			case 'one':
				this.e.addEventListener(event,callback);
				break;
			case 'all':
				this.each(function(e,i){
					e.addEventListener(event,callback);
				});
				break;
		}
	},
	each: function(callback){
		this.state = 'each';
		return [].slice.call(this.e).forEach(callback);
	},
	domReady: function(callback){
		document.addEventListener('DOMContentLoaded', callback);
	},
	addClass: function(str){
		switch(this.state){
			case 'one':
				this.e.classList.add(str);
				break;
			case 'all':
				this.each(function(e,i){
					e.classList.add(str);
				});
				break;
		}
		return this;
	},
	removeClass: function(str){
		switch(this.state){
			case 'one':
				this.e.classList.remove(str);
				break;
			case 'all':
				this.each(function(e,i){
					e.classList.remove(str);
				});
				break;
		}
		return this;
	},
	toggleClass: function(str){
		switch(this.state){
			case 'one':
				this.e.classList.toggle(str);
				break;
			case 'all':
				this.each(function(e,i){
					e.classList.toggle(str);
				});
				break;
		}
		return this;
	}
}

window.K = window.ki;

})();