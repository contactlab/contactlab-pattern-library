/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Polymer = exports.Polymer = window.Polymer;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Main library

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.MainClab = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// Modules


var _polymer = __webpack_require__(0);

var _script = __webpack_require__(5);

var _script2 = __webpack_require__(7);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainClab = exports.MainClab = function () {
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
				},
				ribbon: {
					type: Object,
					value: {
						visible: true,
						repo: 'https://github.com/contactlab/contactlab-ui-components'
					}
				}
			};
		}
	}, {
		key: 'attached',
		value: function attached() {
			this._routing();
		}
	}, {
		key: '_routing',
		value: function _routing() {
			var _this2 = this;

			this.handleRouting = function () {
				var _this = this;

				var url = this.router.getRoute();
				if (url[0] === '') {
					this.currentModule = 'home';
				} else {
					this.currentModule = 'library';

					if (!this.querySelector('library-clab')) {
						window.addEventListener('libraryLoaded', function (evt) {
							_this.querySelector('library-clab').page = url[1];
							// window.removeEventListener('libraryLoaded');
						});
					} else {
						this.querySelector('library-clab').page = url[1];
					}
					//this.currentPage=this.querySelector('.library-clab.iron-selected');
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
				'/ui/dropdown': function uiDropdown() {
					_this2.handleRouting();
				},
				'/ui/autocomplete': function uiAutocomplete() {
					_this2.handleRouting();
				},
				'/ui/tags': function uiTags() {
					_this2.handleRouting();
				},
				'/ui/multiple': function uiMultiple() {
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
				'/ui/form-elements': function uiFormElements() {
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
				'/ui/text-inputs': function uiTextInputs() {
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
				'/documentation/compatibility': function documentationCompatibility() {
					_this2.handleRouting();
				},
				'/documentation/using-with': function documentationUsingWith() {
					_this2.handleRouting();
				},
				'/documentation/getting-started': function documentationGettingStarted() {
					_this2.handleRouting();
				}
			};

			this.router = Router(this.routes).configure({
				notfound: function notfound() {
					pages.selected = 'library';
					library.page = 'not-found';
				}
			});

			this.router.init('/');
		}
	}, {
		key: '_computeRibbon',
		value: function _computeRibbon(visible, module) {
			if (visible && module === 'home') {
				return true;
			} else {
				return false;
			}
		}
	}, {
		key: '_isPage',
		value: function _isPage(cur, page) {
			return cur === page;
		}
	}]);

	return MainClab;
}();

(0, _polymer.Polymer)(MainClab);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Main library

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.InnerMenuClab = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _polymer = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InnerMenuClab = exports.InnerMenuClab = function () {
	function InnerMenuClab() {
		_classCallCheck(this, InnerMenuClab);
	}

	_createClass(InnerMenuClab, [{
		key: 'beforeRegister',
		value: function beforeRegister() {
			this.is = 'inner-menu-clab';
			this.properties = {
				menu: {
					type: Array
				},
				mobileToggle: {
					type: Boolean,
					value: false,
					observer: '_mobileToggle'
				},
				curUrl: {
					type: String,
					observer: '_closeSubmenu'
				}
			};
		}

		/* ------------------
  	EVENT HANDLERS
  ------------------- */

	}, {
		key: '_handleOpen',
		value: function _handleOpen(evt) {
			var _this = this;

			evt.preventDefault();
			evt.stopPropagation();

			var i;
			switch (evt.target.localName) {
				case 'a':
					var i = evt.target.getAttribute('data-index');
					break;
				case 'i':
					var i = evt.target.parentElement.getAttribute('data-index');
					break;
			}
			this.menu.map(function (item, n) {
				if (n == i) {
					item.open ? _this.set('menu.' + n + '.open', false) : _this.set('menu.' + n + '.open', true);
				} else {
					_this.set('menu.' + n + '.open', false);
				}
			});

			var windowClick = function windowClick(evt) {
				// There isn't a conditional for the evt.target.classList.contains('inner-menu-clab') because the inner-menu has stopPropagation()
				_this.menu.map(function (item, n) {
					if (item.open) _this.set('menu.' + n + '.open', false);
				});

				window.removeEventListener('click', windowClick);
			};
			window.addEventListener('click', windowClick);
		}
	}, {
		key: '_toggleMobileNav',
		value: function _toggleMobileNav(evt) {
			console.log('_toggleMobileNav', evt);
			this.mobileToggle = !this.mobileToggle;
		}
	}, {
		key: '_mobileToggle',
		value: function _mobileToggle(newVal, oldVal) {
			var elem = this.querySelector('ul.first-level');
			if (newVal) {
				elem.style.display = 'block';
			} else {
				elem.style.display = 'none';
			}
		}

		/* ------------------
  	OBSERVERS
  ------------------- */

	}, {
		key: '_closeSubmenu',
		value: function _closeSubmenu() {
			var _this2 = this;

			if (this.menu != undefined) {
				this.menu.map(function (item, n) {
					_this2.set('menu.' + n + '.open', false);
				});
			}
		}

		/* ------------------
  	COMPUTED
  ------------------- */

	}, {
		key: '_computeShow',
		value: function _computeShow(open) {
			if (open) return 'show';else return '';
		}
	}, {
		key: '_computeActive',
		value: function _computeActive(item, curUrl) {
			var arr = [];
			//se è con l'url quindi di 2° livello
			if (item.url) {
				var urlArr = item.url.split('/');
				var curUrlArr = curUrl.split('/');
				if (urlArr[urlArr.length - 1] == curUrlArr[curUrlArr.length - 1]) arr.push('active');
			}
			//se è senza url quindi con altri submenu
			if (item.submenu) {
				arr.push('submenu');
				item.submenu.map(function (el, i) {
					if (curUrl.search(el.url) > -1) arr.push('active');
				});
			}

			return arr.join(' ');
		}
	}]);

	return InnerMenuClab;
}();

(0, _polymer.Polymer)(InnerMenuClab);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Main library

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.MenuClabCust = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _polymer = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MenuClabCust = exports.MenuClabCust = function () {
	function MenuClabCust() {
		_classCallCheck(this, MenuClabCust);
	}

	_createClass(MenuClabCust, [{
		key: 'beforeRegister',
		value: function beforeRegister() {
			this.is = 'menu-clab-cust';
			this.properties = {
				title: {
					type: String,
					value: 'Title'
				},
				titleIcon: {
					type: String,
					value: 'fa-hand-peace-o'
				},
				menu: {
					type: Array,
					value: []
				},
				link: {
					type: String,
					value: '/'
				},
				draft: {
					type: String,
					value: null
				},
				firstChild: {
					type: Boolean,
					value: false
				},
				submenu: Object,
				currentHash: String,

				_mainNav: {
					type: Boolean,
					value: false
				}
			};

			this.observers = ['_updateCurrent(menu, currentHash)'];
		}
	}, {
		key: 'attached',
		value: function attached() {
			this._iosMenu();
		}

		/*----------
  EVENT HANDLERS
  ----------*/

	}, {
		key: '_toggleMenu',
		value: function _toggleMenu(evt) {
			/* switch(evt.target.localName){
   	case 'i':
   		var open=evt.target.parentNode.classList.contains('open-menu');
   		break;
   	case 'div':
   		var open=evt.target.classList.contains('open-menu');
   		break;
   }*/
			/*if(open){
   	this.set('_mainNav',true);
   } else {
   	this.set('_mainNav',false);
   }*/
			this._mainNav ? this.set('_mainNav', false) : this.set('_mainNav', true);
		}
	}, {
		key: '_linkClicked',
		value: function _linkClicked(evt) {
			var _this = this;

			var target = evt.target;
			//while(target.localName!='a'){ target=target.parentNode; }
			this.fire('a-click', { href: target.getAttribute('href') });

			// Wait change of window.location after click on link
			// aftet that toggle the main nav if mobile
			setTimeout(function () {
				if (window.innerWidth < 960) _this.set('_mainNav', false);
			}, 150);
		}

		/*----------
  METHODS
  ----------*/

	}, {
		key: '_iosMenu',
		value: function _iosMenu() {
			var _this2 = this;

			document.querySelector('body').addEventListener('click', function (evt) {
				switch (evt.target.nodeName) {
					case 'INPUT':
					case 'BUTTON':
					case 'TEXTAREA':
					case 'LABEL':
					case 'SELECT':
						return true;
						break;
					default:
						_this2.querySelector('.logo a').focus();
						break;
				}
			});
		}

		/*----------
  OBSERVERS
  ----------*/

	}, {
		key: '_updateCurrent',
		value: function _updateCurrent(menu, currentHash) {
			if (menu != undefined && menu.length > 0 && currentHash != undefined) {
				var current = menu.filter(function (item) {
					return item.url.split('/')[1] == currentHash.split('/')[1];
				});

				if (current.length > 0) {
					var menuItem = current[0];
					this.set('submenu', menuItem.submenu || undefined);
					this.fire('menuchange', {
						label: menuItem.label,
						links: menuItem.submenu || []
					});
				} else {
					this.fire('hashnotfound');
				}
			}
		}

		/*----------
  COMPUTE
  ----------*/

	}, {
		key: '_visibleMenu',
		value: function _visibleMenu(menu) {
			if (menu != undefined) {
				var arr = [];
				menu.map(function (obj) {
					if (obj.visible || obj.visible == undefined) arr.push(obj);
				});
				return arr;
			}
		}
	}, {
		key: 'getIndex',
		value: function getIndex(item) {
			var i = -1;
			this.menu.map(function (voce, n) {
				if (voce.label === item.label) i = n;
			});
			return i;
		}
	}, {
		key: '_computeUrl',
		value: function _computeUrl(item) {
			var url = void 0;
			if (this.firstChild && item.submenu) {
				if (item.submenu[0].submenu) // 3 levels
					url = item.submenu[0].submenu[0].url;else // 2 levels
					url = item.submenu[0].url;
			} else {
				url = item.url;
			}
			return url;
		}
	}, {
		key: '_computeActive',
		value: function _computeActive(hash, url) {
			var arr = [];
			if (hash.search(url) > -1) arr.push('active');
			return arr.join(' ');
		}
	}, {
		key: '_computeTitleIcon',
		value: function _computeTitleIcon(icon) {
			return ['clab-icon', icon].join(' ');
		}
	}, {
		key: '_compMainNav',
		value: function _compMainNav(str, show) {
			var arr = [str];
			if (show) arr.push('show');
			return arr.join(' ');
		}
	}]);

	return MenuClabCust;
}();

(0, _polymer.Polymer)(MenuClabCust);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _script = __webpack_require__(1);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Main library

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CoverClab = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _polymer = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CoverClab = exports.CoverClab = function () {
	function CoverClab() {
		_classCallCheck(this, CoverClab);
	}

	_createClass(CoverClab, [{
		key: 'beforeRegister',
		value: function beforeRegister() {
			this.is = "cover-clab";
			this.properties = {
				beta: {
					type: Boolean,
					value: false
				},
				version: {
					type: String,
					value: '0.0.0'
				}
			};
		}
	}, {
		key: '_computeYear',
		value: function _computeYear() {
			var date = new Date();
			return date.getFullYear();
		}
	}]);

	return CoverClab;
}();

(0, _polymer.Polymer)(CoverClab);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var AppMenu = exports.AppMenu = [{
	"label": "Brand",
	"url": "#/product-brand",
	"submenu": [{
		"label": "Our logo",
		"url": "#/product-brand/our-logo"
	}, {
		"label": "Brand Book",
		"url": "#/product-brand/brand-book"
	}]
}, {
	"label": "Visual Design",
	"url": "#/design",
	"submenu": [{
		"label": "Colors",
		"url": "#/design/colors"
	}, {
		"label": "Typography",
		"url": "#/design/typography"
	}, {
		"label": "Iconography",
		"url": "#/design/iconography"
	}, {
		"label": "Motion",
		"url": "#/design/motion"
	}]
}, {
	"label": "UI Components",
	"url": "#/ui",
	"submenu": [{
		"label": "Base Elements",
		"submenu": [{
			"label": "Breadcrumb",
			"url": "#/ui/breadcrumb"
		}, {
			"label": "Lists",
			"url": "#/ui/lists"
		}, {
			"label": "Tables",
			"url": "#/ui/tables"
		}]
	}, {
		"label": "Components",
		"submenu": [{
			"label": "Alerts",
			"url": "#/ui/alerts"
		}, {
			"label": "Accordion",
			"url": "#/ui/accordion"
		}, {
			"label": "Buttons",
			"url": "#/ui/buttons"
		}, {
			"label": "Buttons group",
			"url": "#/ui/buttons-group"
		}, {
			"label": "Cards",
			"url": "#/ui/cards"
		}, {
			"label": "Features",
			"url": "#/ui/features"
		}, {
			"label": "Form elements",
			"url": "#/ui/form-elements"
		}, {
			"label": "Labels & badges",
			"url": "#/ui/labels-badges"
		}, {
			"label": "Modals",
			"url": "#/ui/modals"
		}, {
			"label": "Pagination",
			"url": "#/ui/pagination"
		}, {
			"label": "Progress bars",
			"url": "#/ui/progress-bars"
		}, {
			"label": "Spinner",
			"url": "#/ui/spinner"
		}, {
			"label": "Tabs & pills",
			"url": "#/ui/tabs-pills"
		}, {
			"label": "Text inputs",
			"url": "#/ui/text-inputs"
		}, {
			"label": "Tooltips",
			"url": "#/ui/tooltips"
		}]
	}, {
		"label": "Advanced Components",
		"submenu": [{
			"label": "Autocomplete",
			"url": "#/ui/autocomplete"
		}, {
			"label": "Datepicker",
			"url": "#/ui/datepicker"
		}, {
			"label": "Dropdown",
			"url": "#/ui/dropdown"
		}, {
			"label": "Multiple",
			"url": "#/ui/multiple"
		}, {
			"label": "Tags",
			"url": "#/ui/tags"
		}]
	}]
}, {
	"label": "Documentation",
	"url": "#/documentation",
	"submenu": [{
		"label": "Getting started",
		"url": "#/documentation/getting-started"
	}, {
		"label": "Using with...",
		"url": "#/documentation/using-with"
	},
	// {
	// 	"label": "Compatibility",
	// 	"url": "#/documentation/compatibility"
	// },
	{
		"label": "Release notes",
		"url": "https://github.com/contactlab/contactlab-ui-components/releases"
	}]
}];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Main library

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.LibraryClab = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// components

// Menu


var _polymer = __webpack_require__(0);

var _script = __webpack_require__(3);

var _script2 = __webpack_require__(2);

var _menu = __webpack_require__(6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LibraryClab = exports.LibraryClab = function () {
	function LibraryClab() {
		_classCallCheck(this, LibraryClab);
	}

	_createClass(LibraryClab, [{
		key: 'beforeRegister',
		value: function beforeRegister() {
			this.is = "library-clab";
			this.properties = {
				page: {
					type: String,
					observer: '_pageChanged'
				},
				submenu: {
					type: Array
				},
				submenuLabel: {
					type: String
				},
				currentHash: {
					type: String,
					value: window.location.hash
				},
				beta: {
					type: Boolean,
					value: false
				},
				menu: {
					type: Array,
					value: _menu.AppMenu
				}
			};
		}
	}, {
		key: 'attached',
		value: function attached() {
			this.fire('libraryLoaded');
		}
	}, {
		key: 'scrollToY',
		value: function scrollToY(scrollTargetY, speed, easing) {
			// scrollTargetY: the target scrollY property of the window
			// speed: time in pixels per second
			// easing: easing equation to use
			var scrollY = window.scrollY,
			    scrollTargetY = scrollTargetY || 0,
			    speed = speed || 2000,
			    easing = easing || 'easeOutSine',
			    currentTime = 0;

			var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

			// easing equations from https://github.com/danro/easing-js/blob/master/easing.js
			var PI_D2 = Math.PI / 2,
			    easingEquations = {
				easeOutSine: function easeOutSine(pos) {
					return Math.sin(pos * (Math.PI / 2));
				},
				easeInOutSine: function easeInOutSine(pos) {
					return -0.5 * (Math.cos(Math.PI * pos) - 1);
				},
				easeInOutQuint: function easeInOutQuint(pos) {
					if ((pos /= 0.5) < 1) {
						return 0.5 * Math.pow(pos, 5);
					}
					return 0.5 * (Math.pow(pos - 2, 5) + 2);
				}
			};

			function tick() {
				currentTime += 1 / 60;
				var p = currentTime / time;
				var t = easingEquations[easing](p);
				if (p < 1) {
					requestAnimFrame(tick);
					window.scrollTo(0, scrollY + (scrollTargetY - scrollY) * t);
				} else {
					window.scrollTo(0, scrollTargetY);
				}
			}

			tick();
		}
	}, {
		key: '_menuChange',
		value: function _menuChange(evt) {
			this.set('submenu', evt.detail.links);
			this.submenuLabel = evt.detail.label;
		}
	}, {
		key: '_pageChanged',
		value: function _pageChanged() {
			this.currentHash = window.location.hash;
			this.scrollToY(0, 1500, 'easeInOutQuint');
			// this.querySelector('nav.main-nav').classList.remove('show');
		}
	}, {
		key: '_isPage',
		value: function _isPage(cur, page) {
			return cur === page;
		}
	}]);

	return LibraryClab;
}();

(0, _polymer.Polymer)(LibraryClab);

window.requestAnimFrame = function () {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
		window.setTimeout(callback, 1000 / 60);
	};
}();

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map