class LibraryClab {
	beforeRegister(){
		this.is="library-clab";
		this.properties = {
			page:{
				type:String,
				observer: '_pageChanged'
			},
			submenu:{
				type:Array
			},
			submenuLabel:{
				type:String
			},
			currentHash:{
				type:String,
				value:location.hash
			}
		}
	}

	attached(){
		var menu=this.querySelector('menu-clab');
		menu.menu = AppMenu;
		menu.addEventListener('subchange', (evt)=>{
			this.set('submenu', evt.detail.links);
			this.submenuLabel=evt.detail.label;
		});

		this.fire('libraryLoaded');
	}

	_pageChanged(){
		this.currentHash=location.hash;
		window.scroll(0,0);
	}

	_isPage(cur, page){
		return cur === page;
	}
}

Polymer(LibraryClab);