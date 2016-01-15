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

		window.addEventListener('resize', ()=> {
		    this._layoutManager();
		});
		window.addEventListener('orientationchange', ()=> {
		    this._layoutManager();
		});

		this._layoutManager();
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
						this.querySelector('library-clab').page=url[1];
						window.removeEventListener('libraryLoaded');
					});
				} else {
					this.querySelector('library-clab').page=url[1];
				}
				
				//this.currentPage=this.querySelector('.library-clab.iron-selected');
			} 
			
			/*console.log('current: ', this.currentPage);
			if(oldPage){
				console.log('old: ', oldPage);
				/*let elSaved=oldPage.outerHTML;
				console.log(elSaved);
				//this.querySelector(oldPage.tagName.toLowerCase()).outerHTML=oldPage.outerHTML;
				this.querySelector(oldPage.tagName.toLowerCase()).remove();
				this.querySelector().createElement(oldPage.outerHTML);*/


				// Find all the CLAB custom elements in the page and reset each one of them 
				/*Array.from(oldPage.querySelectorAll('[class*="style-scope"]')).forEach((el)=>{
						let name = el.tagName.toLowerCase();
						if(name.indexOf('clab')>-1){
							customTags.push(el);
							let proto = this.getNativePrototype(name);
							//console.log(name);
							console.log(proto);
							console.log(proto.properties);
						}
				});
			}

			oldPage=this.currentPage;*/
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
		    '/ui/forms': ()=> {
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
			on: ()=>{
				$('menu-clab .first-level-menu>li>a').each(function(i, e){					
					if(location.hash.search(e.getAttribute('href')) > -1){
						e.parentNode.classList.add('active');
					}else{
						e.parentNode.classList.remove('active');
					}
				});
			}
		});

		this.router.init('/');
	}

	_isPage(cur, page){
		return cur === page;
	}

	_layoutManager(){
	  if ($(window).width() < 1024) {
	    document.querySelector('body').classList.add('main-sidebar-small');
	  } else if ($(window).width() > 1780){
		document.querySelector('body').classList.add('secondary-sidebar-open');
		//document.querySelector('#secondary-sidebar').classList.add('sidebar-open');
		//document.querySelector('#user-menu-toggle').classList.add('active');
	  } else {
	    document.querySelector('body').classList.remove('main-sidebar-small')
	    //document.querySelector('#secondary-sidebar').classList.remove('sidebar-open');
	    //document.querySelector('#user-menu-toggle').classList.remove('active');
	  }
	}
}

Polymer(MainClab);