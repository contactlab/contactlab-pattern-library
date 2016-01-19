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
				}
			};
		}
	}, {
		key: 'ready',
		value: function ready() {
			this.set('menu', document.querySelector('menu-clab').submenu);
			console.log('ready----->', this.menu);
		}
	}, {
		key: '_computeActive',
		value: function _computeActive(link) {
			var url = location.hash;
			var arr = [];
			if (url.search(link) > -1) arr.push('active');
			return arr.join(' ');
		}
	}]);

	return InnerMenuClab;
})();

Polymer(InnerMenuClab);