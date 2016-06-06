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
			},
			beta: {
				type: Boolean,
				value: false
			}
		}
	}

	attached(){
		var menu=this.querySelector('menu-clab');
		menu.addEventListener('menuchange', (evt)=>{
			this.set('submenu', evt.detail.links);
			this.submenuLabel=evt.detail.label;
		});
		menu.menu = AppMenu;

		this.fire('libraryLoaded');
	}

	scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
	}


	_pageChanged(){
		this.currentHash=location.hash;
		// window.scroll(0,0);
		this.scrollTo(document.body, 0, 600);
	}

	_isPage(cur, page){
		return cur === page;
	}
}

Polymer(LibraryClab);
