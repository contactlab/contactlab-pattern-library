'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HeaderClab = (function () {
	function HeaderClab() {
		_classCallCheck(this, HeaderClab);
	}

	_createClass(HeaderClab, [{
		key: 'beforeRegister',
		value: function beforeRegister() {
			this.is = 'header-clab';
			this.listeners = {
				'click': '_anchorScroll'
			};
		}
	}, {
		key: 'responseHandler',
		value: function responseHandler(response) {
			this._setResponse(response);
		}
	}, {
		key: 'ready',
		value: function ready() {
			var _this = this;

			document.querySelector('library-clab').addEventListener('headready', function (evt) {
				_this.listOfAnchors = evt.detail;
			});
		}
	}, {
		key: '_anchorScroll',
		value: function _anchorScroll(evt) {
			evt.preventDefault();

			function smoothScroll(el, to, duration) {
				if (duration < 0) {
					return;
				}
				var difference = to - $(window).scrollTop();
				var perTick = difference / duration * 10;
				this.scrollToTimerCache = setTimeout(function () {
					if (!isNaN(parseInt(perTick, 10))) {
						window.scrollTo(0, $(window).scrollTop() + perTick);
						smoothScroll(el, to, duration - 10);
					}
				}, 10);
			}

			smoothScroll($(window), $($(evt.target).attr('href')).offset().top - 80, 250);
		}
	}]);

	return HeaderClab;
})();

Polymer(HeaderClab);