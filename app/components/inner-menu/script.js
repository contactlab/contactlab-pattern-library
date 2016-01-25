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

				_url: {
					type: String,
					observer: '_closeSubmenu'
				}
			};
		}
	}, {
		key: 'ready',
		value: function ready() {
			this.set('menu', document.querySelector('menu-clab').submenu);
			this._url = location.hash;
		}

		/* ------------------
  	EVENT HANDLERS
  ------------------- */

	}, {
		key: '_handleOpen',
		value: function _handleOpen(evt) {
			var _this = this;

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
				if (item.open == undefined) _this.set('menu.' + n + '.open', false);
				if (n == i) {
					item.open ? _this.set('menu.' + n + '.open', false) : _this.set('menu.' + n + '.open', true);
				}
			});
		}

		/* ------------------
  	METHODS
  ------------------- */

	}, {
		key: '_closeSubmenu',
		value: function _closeSubmenu() {
			var _this2 = this;

			this.menu.map(function (item, n) {
				if (_this2.menu[n].open) _this2.set('menu.' + n + '.open', false);
			});
		}

		/* ------------------
  	COMPUTED
  ------------------- */

	}, {
		key: '_computeShow',
		value: function _computeShow(open) {
			if (open) return 'show';
		}
	}, {
		key: '_computeActive',
		value: function _computeActive(item) {
			this._url = location.hash;
			var arr = [];

			//se è con l'url quindi di 2° livello
			if (item.url && this._url.search(item.url) > -1) arr.push('active');

			//se è senza url quindi con 3 livelli
			if (item.submenu) {
				arr.push('submenu');
				for (var i = 0; i < item.submenu.length; i++) {
					if (this._url.search(item.submenu[i].url) > -1) arr.push('active');
				}
			}
			return arr.join(' ');
		}
	}]);

	return InnerMenuClab;
})();

Polymer(InnerMenuClab);