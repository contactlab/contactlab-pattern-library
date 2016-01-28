class InnerMenuClab {
	beforeRegister(){
		this.is = 'inner-menu-clab';
		this.properties={
			menu:{
				type:Array
			},
			curUrl:{
				type:String,
				observer:'_closeSubmenu'
			}
		}
	}
	


	/* ------------------
		EVENT HANDLERS
	------------------- */
	_handleOpen(evt){
		evt.stopPropagation();

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
			if(n==i){
				(item.open)? this.set('menu.'+n+'.open', false) : this.set('menu.'+n+'.open', true);
			} else {
				this.set('menu.'+n+'.open', false)
			}
		});

		var windowClick=(evt)=>{
			// There isn't a conditional for the evt.target.classList.contains('inner-menu-clab') because the inner-menu has stopPropagation()
			this.menu.map((item, n)=>{
				if(item.open) this.set('menu.'+n+'.open', false);
			});

			window.removeEventListener('click', windowClick);
		}
		window.addEventListener('click', windowClick);
	}



	/* ------------------
		OBSERVERS
	------------------- */
	_closeSubmenu(){
		if(this.menu != undefined){
			this.menu.map((item, n)=>{
				this.set('menu.'+n+'.open', false);
			});
		}
	}




	/* ------------------
		COMPUTED
	------------------- */
	_computeShow(open){
		if(open) 
			return 'show';
		else
			return '';
	}

	_computeActive(item, curUrl){
		var arr=[];
		//se è con l'url quindi di 2° livello
		if(item.url && curUrl.search(item.url) > -1) arr.push('active');
		//se è senza url quindi con altri submenu
		if(item.submenu){
			arr.push('submenu');
			item.submenu.map((el, i)=>{
				if(curUrl.search(el.url) > -1) arr.push('active');
			});
		}

		return arr.join(' ');
	}
	
}

Polymer(InnerMenuClab);