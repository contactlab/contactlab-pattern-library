var ClipboardBehav = {
	_copyToClipboard: evt=>{
		let textToCopy = evt.target._composedParent.nextElementSibling.innerText;
		clipboard.copy(textToCopy).then(
				()=>{
					evt.target.classList.add('copied');
					setTimeout(()=>{
						evt.target.classList.remove('copied');
					},800);
				},
				err=>{
					console.warn('Unable to copy on clipboard', err);
				}
			);
	}
}