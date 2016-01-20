'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LibraryClab = (function () {
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
				}
			};
		}
	}, {
		key: 'attached',
		value: function attached() {
			var _this = this;

			var menu = this.querySelector('menu-clab');
			menu.menu = AppMenu;
			menu.addEventListener('subchange', function (evt) {
				_this.submenu = evt.detail.links;
				_this.submenu.map(function (item) {
					if (item.open != undefined) delete item.open;
				});
				_this.async(function () {
					_this.querySelector('inner-menu-clab').menu = _this.submenu;
				}, 100);
			});

			this.fire('libraryLoaded');
		}
	}, {
		key: '_pageChanged',
		value: function _pageChanged() {
			window.scroll(0, 0);
		}
	}, {
		key: '_isPage',
		value: function _isPage(cur, page) {
			return cur === page;
		}
	}]);

	return LibraryClab;
})();

Polymer(LibraryClab);