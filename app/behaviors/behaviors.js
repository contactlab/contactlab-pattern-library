'use strict';

var ClipboardBehav = {
	_copyToClipboard: function _copyToClipboard(evt) {
		var textToCopy = evt.target._composedParent.nextElementSibling.innerText;
		clipboard.copy(textToCopy).then(function () {
			console.log('copied');
		}, function (err) {
			console.log('Unable to copy this on clipboard', err);
		});
	}
};