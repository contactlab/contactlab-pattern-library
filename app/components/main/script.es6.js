class MainClab {
	beforeRegister(){
		this.is = "main-clab";
		this.properties = {
			currentModule:{
				type:String,
				value:null,
				readonly:true
			}
		}
	}

	attached(){
		this._routing();
	}

	_routing(){
		this.handleRouting=function(){
			let url = this.router.getRoute();
			if(url[0]===''){
				this.querySelector('iron-pages').selected=this.currentModule='home';
			} else {
				this.querySelector('iron-pages').selected=this.currentModule='library';

				if(!this.querySelector('library-clab')){
					window.addEventListener('libraryLoaded',(evt)=>{
						this.querySelector('library-clab').page = url[1];
						// window.removeEventListener('libraryLoaded');
					});
				} else {
					this.querySelector('library-clab').page = url[1];
				}
				//this.currentPage=this.querySelector('.library-clab.iron-selected');
			}
		};

		this.routes = {
		    '/': ()=>{
		    	this.handleRouting();
		    },
		    '/design/colors': ()=>{
		    	this.handleRouting();
		    },
		    '/design/typography': ()=> {
		    	this.handleRouting();
		    },
		    '/design/iconography': ()=> {
		    	this.handleRouting();
		    },
		    '/design/motion': ()=> {
		    	this.handleRouting();
		    },
		    '/ui/buttons': ()=> {
		    	this.handleRouting();
		    },
		    '/ui/buttons-group': ()=> {
		    	this.handleRouting();
		    },
		    '/ui/labels-badges': ()=> {
		    	this.handleRouting();
		    },
		    '/ui/tables': ()=> {
		    	this.handleRouting();
		    },
		    '/ui/alerts': ()=> {
		    	this.handleRouting();
		    },
		    '/ui/dropdown': ()=> {
		    	this.handleRouting();
		    },
		    '/ui/autocomplete': ()=> {
		    	this.handleRouting();
		    },
		    '/ui/tags': ()=> {
		    	this.handleRouting();
		    },
		    '/ui/multiple': ()=> {
		    	this.handleRouting();
		    },
		    '/ui/panels': ()=> {
		    	this.handleRouting();
		    },
		    '/ui/spinner': ()=> {
		    	this.handleRouting();
		    },
		    '/ui/cards': ()=> {
		    	this.handleRouting();
		    },
		    '/ui/features': ()=> {
		    	this.handleRouting();
		    },
		    '/ui/breadcrumb': ()=> {
		    	this.handleRouting();
		    },
		    '/ui/lists': ()=> {
		    	this.handleRouting();
		    },
		    '/ui/form-elements': ()=> {
		    	this.handleRouting();
		    },
		    '/ui/select': ()=> {
		    	this.handleRouting();
		    },
		    '/ui/datepicker': ()=> {
		    	this.handleRouting();
		    },
		    '/ui/pagination': ()=> {
		    	this.handleRouting();
		    },
		    '/ui/progress-bars': ()=> {
		    	this.handleRouting();
		    },
		    '/ui/modals': ()=> {
		    	this.handleRouting();
		    },
		    '/ui/tabs-pills': ()=> {
		    	this.handleRouting();
		    },
		    '/ui/accordion': ()=> {
		    	this.handleRouting();
		    },
		    '/ui/tooltips': ()=> {
		    	this.handleRouting();
		    },
		    '/ui/text-inputs': ()=> {
		    	this.handleRouting();
		    },
		    '/ui/toaster': ()=> {
		    	this.handleRouting();
		    },
		    '/product-brand/our-logo': ()=> {
		    	this.handleRouting();
		    },
		    '/product-brand/brand-book': ()=> {
		    	this.handleRouting();
		    },
		    '/documentation/release-notes': ()=> {
		    	this.handleRouting();
		    },
		    '/documentation/getting-started': ()=> {
		    	this.handleRouting();
		    }
		};

		this.router = Router(this.routes).configure({
			notfound: ()=>{
				pages.selected='library';
		    	library.page = 'not-found';
			},
			on: () => {
				/*$('menu-clab .first-level-menu>li>a').each(function(i, e){
					if(location.hash.search(e.getAttribute('href')) > -1){
						e.parentNode.classList.add('active');
					}else{
						e.parentNode.classList.remove('active');
					}
				});*/
			}
		});

		this.router.init('/');
	}

	_isPage(cur, page){
		return cur === page;
	}
}

Polymer(MainClab);
