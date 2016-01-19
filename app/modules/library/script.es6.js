class LibraryClab {
	beforeRegister(){
		this.is="library-clab";
		this.properties = {
			page:{
				type:String,
				observer: '_pageChanged'
			}
		}
	}

	attached(){
		var menu=this.querySelector('menu-clab');
		menu.menu = AppMenu;
		menu.addEventListener('subchange', (evt)=>{
			this.submenu=evt.detail.links;
			this.async(()=>{
				this.querySelector('inner-menu-clab').menu=this.submenu;
			},100);
		});

		this.fire('libraryLoaded');
	}

	_pageChanged(){
		window.scroll(0,0);
	}

	_isPage(cur, page){
		return cur === page;
	}
}

Polymer(LibraryClab);