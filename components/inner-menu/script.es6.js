class InnerMenuClab {
	beforeRegister(){
		this.is = 'inner-menu-clab';
		this.properties={
			menu:{
				type:Array
			},
			mobileToggle: {
				type: Boolean,
				value: false,
				observer: '_mobileToggle'
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
		evt.preventDefault();
		evt.stopPropagation();

		var i;
		switch(evt.target.localName){
			case 'a':
				var i = evt.target.getAttribute('data-index');
				break;
			case 'i':
				var i = evt.target.parentElement.getAttribute('data-index');
				break;
		}
		this.menu.map((item, n) => {
			if(n==i){
				(item.open) ? this.set('menu.'+n+'.open', false) : this.set('menu.'+n+'.open', true);
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

	_toggleMobileNav(evt){
		console.log('_toggleMobileNav', evt);
		this.mobileToggle = !this.mobileToggle;
	}

	_mobileToggle(newVal, oldVal){
		let elem = this.querySelector('ul.first-level');
		if(newVal){
			elem.style.display = 'block';
		} else {
			elem.style.display = 'none';
		}
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
		if(item.url){
			let urlArr=item.url.split('/');
			let curUrlArr=curUrl.split('/');
			if(urlArr[urlArr.length-1]==curUrlArr[curUrlArr.length-1]) arr.push('active');
		}
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
