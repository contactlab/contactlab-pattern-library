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
					value: window.location.hash
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

Polymer(LibraryClab);

window.requestAnimFrame = function () {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
		window.setTimeout(callback, 1000 / 60);
	};
}();