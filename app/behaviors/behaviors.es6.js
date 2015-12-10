var ClipboardBehav = {
	_copyToClipboard: evt=>{
		let textToCopy = evt.target._composedParent.nextElementSibling.innerText;
		clipboard.copy(textToCopy).then(
				()=>{
					console.log('copied');
				},
				err=>{
					console.log('Unable to copy this on clipboard', err);
				}
			);
	}
}