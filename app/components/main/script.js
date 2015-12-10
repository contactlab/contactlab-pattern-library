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
			var _this2 = this;

			var pages = this.querySelector('iron-pages');
			var library = this.querySelector('library-clab');

			this.handleRouting = function () {
				var url = this.router.getRoute();
				if (url[0] === '') {
					pages.selected = 'home';
				} else {
					pages.selected = 'library';
					library.page = url[1];
				}
			};

			this.routes = {
				'/': function _() {
					_this2.handleRouting();
				},
				'/design/colors': function designColors() {
					_this2.handleRouting();
				},
				'/design/typography': function designTypography() {
					_this2.handleRouting();
				},
				'/design/iconography': function designIconography() {
					_this2.handleRouting();
				},
				'/design/motion': function designMotion() {
					_this2.handleRouting();
				},
				'/ui/buttons': function uiButtons() {
					_this2.handleRouting();
				},
				'/ui/buttons-group': function uiButtonsGroup() {
					_this2.handleRouting();
				},
				'/ui/labels-badges': function uiLabelsBadges() {
					_this2.handleRouting();
				},
				'/ui/tables': function uiTables() {
					_this2.handleRouting();
				},
				'/ui/alerts': function uiAlerts() {
					_this2.handleRouting();
				},
				'/ui/panels': function uiPanels() {
					_this2.handleRouting();
				},
				'/ui/spinner': function uiSpinner() {
					_this2.handleRouting();
				},
				'/ui/cards': function uiCards() {
					_this2.handleRouting();
				},
				'/ui/features': function uiFeatures() {
					_this2.handleRouting();
				},
				'/ui/breadcrumb': function uiBreadcrumb() {
					_this2.handleRouting();
				},
				'/ui/lists': function uiLists() {
					_this2.handleRouting();
				},
				'/ui/forms': function uiForms() {
					_this2.handleRouting();
				},
				'/ui/select': function uiSelect() {
					_this2.handleRouting();
				},
				'/ui/datepicker': function uiDatepicker() {
					_this2.handleRouting();
				},
				'/ui/pagination': function uiPagination() {
					_this2.handleRouting();
				},
				'/ui/progress-bars': function uiProgressBars() {
					_this2.handleRouting();
				},
				'/ui/modals': function uiModals() {
					_this2.handleRouting();
				},
				'/ui/tabs-pills': function uiTabsPills() {
					_this2.handleRouting();
				},
				'/ui/accordion': function uiAccordion() {
					_this2.handleRouting();
				},
				'/ui/tooltips': function uiTooltips() {
					_this2.handleRouting();
				},
				'/ui/toaster': function uiToaster() {
					_this2.handleRouting();
				},
				'/product-brand/our-logo': function productBrandOurLogo() {
					_this2.handleRouting();
				},
				'/product-brand/brand-book': function productBrandBrandBook() {
					_this2.handleRouting();
				},
				'/documentation/release-notes': function documentationReleaseNotes() {
					_this2.handleRouting();
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