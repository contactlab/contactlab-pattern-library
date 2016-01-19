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
		this.querySelector('menu-clab').menu = AppMenu;
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