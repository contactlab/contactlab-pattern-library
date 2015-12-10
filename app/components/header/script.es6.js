class HeaderClab {
	beforeRegister(){
		this.is = 'header-clab';
		this.listeners ={
			'click': '_anchorScroll'
		};
	}

	responseHandler(response) {
      this._setResponse(response);
    }

	ready(){
		
		document.querySelector('library-clab').addEventListener('headready', (evt)=>{
			this.listOfAnchors = evt.detail;
		});
		
	}

	_anchorScroll(evt){
		evt.preventDefault();

		function smoothScroll(el, to, duration) {
		    if (duration < 0) {
		        return;
		    }
		    var difference = to - $(window).scrollTop();
		    var perTick = difference / duration * 10;
		    this.scrollToTimerCache = setTimeout(()=> {
		        if (!isNaN(parseInt(perTick, 10))) {
		            window.scrollTo(0, $(window).scrollTop() + perTick);
		            smoothScroll(el, to, duration - 10);
		        }
		    }, 10);
		}

		smoothScroll($(window), $($(evt.target).attr('href')).offset().top-80, 250);
	}
}

Polymer(HeaderClab);