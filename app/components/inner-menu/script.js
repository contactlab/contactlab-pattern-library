'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InnerMenuClab = (function () {
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
})();

Polymer(InnerMenuClab);