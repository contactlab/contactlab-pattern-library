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
			this.querySelector('menu-clab').menu = AppMenu;

			var n = document.querySelectorAll('pre code').length;
			n ? hljs.highlightBlock(document.querySelector('pre code')) : null;
			Array.from(document.querySelectorAll('.html')).forEach(function (el) {
				hljs.highlightBlock(el);
			});
		}
	}, {
		key: '_pageChanged',
		value: function _pageChanged() {
			//console.log(this.page);
			window.scroll(0, 0);
		}
	}]);

	return LibraryClab;
})();

Polymer(LibraryClab);