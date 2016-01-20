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
	}



	/* ------------------
		EVENT HANDLERS
	------------------- */
	_handleOpen(evt){
		var i;
		if(evt.target.tagName=='A'){
			i=evt.target.getAttribute('data-index');
			
		} else {
			i=evt.target.parentElement.getAttribute('data-index');
		}

		this.menu.map((item, n)=>{
			if(item.open==undefined) this.set('menu.'+n+'.open', false);
			if(n==i){
				(item.open)? this.set('menu.'+n+'.open', false) : this.set('menu.'+n+'.open', true);
			} else {
				this.set('menu.'+n+'.open', false);
			}
		});
	}




	/* ------------------
		COMPUTED
	------------------- */
	_computeShow(open){
		if(open) return 'show';
	}

	_computeActive(item){
		let url = location.hash;
		let arr = [];

		//se è con l'url quindi di 2° livello
		if(item.url && url.search(item.url) > -1) arr.push('active');

		//se è senza url quindi con 3 livelli
		if(item.submenu){
			arr.push('submenu');
			for(var i=0; i<item.submenu.length; i++){
				if(url.search(item.submenu[i].url) > -1) arr.push('active');
			}
		}
		return arr.join(' ');
	}
	
}

Polymer(InnerMenuClab);