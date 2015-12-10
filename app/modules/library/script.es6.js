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

		var n = document.querySelectorAll('pre code').length;
		n ? hljs.highlightBlock(document.querySelector('pre code')) : null;
		Array.from(document.querySelectorAll('.html')).forEach((el) => {
			hljs.highlightBlock(el);
		});
	}

	_pageChanged(){
		//console.log(this.page);
		window.scroll(0,0);
	}
}

Polymer(LibraryClab);