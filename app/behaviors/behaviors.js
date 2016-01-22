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
	}
};