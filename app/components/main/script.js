'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainClab = (function () {
	function MainClab() {
		_classCallCheck(this, MainClab);
	}

	_createClass(MainClab, [{
		key: 'beforeRegister',
		value: function beforeRegister() {
			this.is = "main-clab";
			this.properties = {
				currentModule: {
					type: String,
					value: null,
					readonly: true
				}
			};
		}
	}, {
		key: 'attached',
		value: function attached() {
			var _this = this;

			this._routing();

			window.addEventListener('resize', function () {
				_this._layoutManager();
			});
			window.addEventListener('orientationchange', function () {
				_this._layoutManager();
			});

			this._layoutManager();
		}
	}, {
		key: '_routing',
		value: function _routing() {
			var _this3 = this;

			this.handleRouting = function () {
				var _this2 = this;

				var url = this.router.getRoute();
				if (url[0] === '') {
					this.querySelector('iron-pages').selected = this.currentModule = 'home';
				} else {
					this.querySelector('iron-pages').selected = this.currentModule = 'library';

					if (!this.querySelector('library-clab')) {
						window.addEventListener('libraryLoaded', function (evt) {
							_this2.querySelector('library-clab').page = url[1];
							window.removeEventListener('libraryLoaded');
						});
					} else {
						this.querySelector('library-clab').page = url[1];
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
				'/': function _() {
					_this3.handleRouting();
				},
				'/design/colors': function designColors() {
					_this3.handleRouting();
				},
				'/design/typography': function designTypography() {
					_this3.handleRouting();
				},
				'/design/iconography': function designIconography() {
					_this3.handleRouting();
				},
				'/design/motion': function designMotion() {
					_this3.handleRouting();
				},
				'/ui/buttons': function uiButtons() {
					_this3.handleRouting();
				},
				'/ui/buttons-group': function uiButtonsGroup() {
					_this3.handleRouting();
				},
				'/ui/labels-badges': function uiLabelsBadges() {
					_this3.handleRouting();
				},
				'/ui/tables': function uiTables() {
					_this3.handleRouting();
				},
				'/ui/alerts': function uiAlerts() {
					_this3.handleRouting();
				},
				'/ui/dropdown': function uiDropdown() {
					_this3.handleRouting();
				},
				'/ui/autocomplete': function uiAutocomplete() {
					_this3.handleRouting();
				},
				'/ui/tags': function uiTags() {
					_this3.handleRouting();
				},
				'/ui/multiple': function uiMultiple() {
					_this3.handleRouting();
				},
				'/ui/panels': function uiPanels() {
					_this3.handleRouting();
				},
				'/ui/spinner': function uiSpinner() {
					_this3.handleRouting();
				},
				'/ui/cards': function uiCards() {
					_this3.handleRouting();
				},
				'/ui/features': function uiFeatures() {
					_this3.handleRouting();
				},
				'/ui/breadcrumb': function uiBreadcrumb() {
					_this3.handleRouting();
				},
				'/ui/lists': function uiLists() {
					_this3.handleRouting();
				},
				'/ui/forms': function uiForms() {
					_this3.handleRouting();
				},
				'/ui/select': function uiSelect() {
					_this3.handleRouting();
				},
				'/ui/datepicker': function uiDatepicker() {
					_this3.handleRouting();
				},
				'/ui/pagination': function uiPagination() {
					_this3.handleRouting();
				},
				'/ui/progress-bars': function uiProgressBars() {
					_this3.handleRouting();
				},
				'/ui/modals': function uiModals() {
					_this3.handleRouting();
				},
				'/ui/tabs-pills': function uiTabsPills() {
					_this3.handleRouting();
				},
				'/ui/accordion': function uiAccordion() {
					_this3.handleRouting();
				},
				'/ui/tooltips': function uiTooltips() {
					_this3.handleRouting();
				},
				'/ui/toaster': function uiToaster() {
					_this3.handleRouting();
				},
				'/product-brand/our-logo': function productBrandOurLogo() {
					_this3.handleRouting();
				},
				'/product-brand/brand-book': function productBrandBrandBook() {
					_this3.handleRouting();
				},
				'/documentation/release-notes': function documentationReleaseNotes() {
					_this3.handleRouting();
				},
				'/documentation/getting-started': function documentationGettingStarted() {
					_this3.handleRouting();
				}
			};

			this.router = Router(this.routes).configure({
				notfound: function notfound() {
					pages.selected = 'library';
					library.page = 'not-found';
				},
				on: function on() {
					$('menu-clab .first-level-menu>li>a').each(function (i, e) {
						if (location.hash.search(e.getAttribute('href')) > -1) {
							e.parentNode.classList.add('active');
						} else {
							e.parentNode.classList.remove('active');
						}
					});
				}
			});

			this.router.init('/');
		}
	}, {
		key: '_isPage',
		value: function _isPage(cur, page) {
			return cur === page;
		}
	}, {
		key: '_layoutManager',
		value: function _layoutManager() {
			if ($(window).width() < 1024) {
				document.querySelector('body').classList.add('main-sidebar-small');
			} else if ($(window).width() > 1780) {
				document.querySelector('body').classList.add('secondary-sidebar-open');
				//document.querySelector('#secondary-sidebar').classList.add('sidebar-open');
				//document.querySelector('#user-menu-toggle').classList.add('active');
			} else {
					document.querySelector('body').classList.remove('main-sidebar-small');
					//document.querySelector('#secondary-sidebar').classList.remove('sidebar-open');
					//document.querySelector('#user-menu-toggle').classList.remove('active');
				}
		}
	}]);

	return MainClab;
})();

Polymer(MainClab);