'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LibraryClab = function () {
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
					value: location.hash
				},
				beta: {
					type: Boolean,
					value: false
				},
				menu: {
					type: Array,
					value: AppMenu
				}
			};
		}
	}, {
		key: 'attached',
		value: function attached() {
			this.fire('libraryLoaded');
		}
	}, {
		key: 'scrollTo',
		value: function (_scrollTo) {
			function scrollTo(_x, _x2, _x3) {
				return _scrollTo.apply(this, arguments);
			}

			scrollTo.toString = function () {
				return _scrollTo.toString();
			};

			return scrollTo;
		}(function (element, to, duration) {
			if (duration <= 0) return;
			var difference = to - element.scrollTop;
			var perTick = difference / duration * 10;

			setTimeout(function () {
				element.scrollTop = element.scrollTop + perTick;
				if (element.scrollTop === to) return;
				scrollTo(element, to, duration - 10);
			}, 10);
		})
	}, {
		key: '_menuChange',
		value: function _menuChange(evt) {
			this.set('submenu', evt.detail.links);
			this.submenuLabel = evt.detail.label;
		}
	}, {
		key: '_pageChanged',
		value: function _pageChanged() {
			this.currentHash = location.hash;
			// window.scroll(0,0);
			this.scrollTo(document.body, 0, 600);
		}
	}, {
		key: '_isPage',
		value: function _isPage(cur, page) {
			return cur === page;
		}
	}]);

	return LibraryClab;
}();

Polymer(LibraryClab);