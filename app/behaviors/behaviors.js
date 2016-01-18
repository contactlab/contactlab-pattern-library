'use strict';

var ClipboardBehav = {
	_copyToClipboard: function _copyToClipboard(evt) {
		var textToCopy = evt.target._composedParent.nextElementSibling.innerText;
		clipboard.copy(textToCopy).then(function () {
			evt.target.classList.add('copied');
			setTimeout(function () {
				evt.target.classList.remove('copied');
			}, 800);
		}, function (err) {
			console.warn('Unable to copy on clipboard', err);
		});
	},

	_highlightCode: function _highlightCode() {
		var n = document.querySelectorAll('pre code').length;
		n ? hljs.highlightBlock(document.querySelector('pre code')) : null;
		Array.prototype.map.call(document.querySelectorAll('.html'), function (el) {
			hljs.highlightBlock(el);
		});
	}
};