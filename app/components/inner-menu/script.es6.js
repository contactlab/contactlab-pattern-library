class InnerMenuClab {
	beforeRegister(){
		this.is = 'inner-menu-clab';
		this.properties={
			menu:{
				type:Array
			}
		}
	}

	ready(){
		this.set('menu', document.querySelector('menu-clab').submenu);
		console.log('ready----->', this.menu);
	}

	_computeActive(link){
		let url = location.hash;
		let arr = [];
		if(url.search(link) > -1) arr.push('active');
		return arr.join(' ');
	}
	
}

Polymer(InnerMenuClab);