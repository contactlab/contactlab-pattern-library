class InnerMenuClab {
	beforeRegister(){
		this.is = 'inner-menu-clab';
		this.properties={
			menu:{
				type:Array
			},

			_url:{
				type:String,
				observer:'_closeSubmenu'
			}
		}
	}

	ready(){
		this.set('menu', document.querySelector('menu-clab').submenu);
		this._url = location.hash;
	}



	/* ------------------
		EVENT HANDLERS
	------------------- */
	_handleOpen(evt){
		var i;
		switch(evt.target.localName){
			case 'a':
				var i=evt.target.getAttribute('data-index');
				break;
			case 'i':
				var i=evt.target.parentElement.getAttribute('data-index');
				break;
		}

		this.menu.map((item, n)=>{
			if(item.open==undefined) this.set('menu.'+n+'.open', false);
			if(n==i){
				(item.open)? this.set('menu.'+n+'.open', false) : this.set('menu.'+n+'.open', true);
			}
		});
	}




	/* ------------------
		METHODS
	------------------- */
	_closeSubmenu(){
		this.menu.map((item, n)=>{
			if(this.menu[n].open) this.set('menu.'+n+'.open', false);
		});
	}




	/* ------------------
		COMPUTED
	------------------- */
	_computeShow(open){
		if(open) return 'show';
	}

	_computeActive(item){
		this._url = location.hash;
		let arr = [];

		//se è con l'url quindi di 2° livello
		if(item.url && this._url.search(item.url) > -1) arr.push('active');

		//se è senza url quindi con 3 livelli
		if(item.submenu){
			arr.push('submenu');
			for(var i=0; i<item.submenu.length; i++){
				if(this._url.search(item.submenu[i].url) > -1) arr.push('active');
			}
		}
		return arr.join(' ');
	}
	
}

Polymer(InnerMenuClab);