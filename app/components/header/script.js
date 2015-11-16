Polymer({
	is: 'header-clab',

	listeners: {
		'click': '_anchorScroll'
	},

	responseHandler: function(response) {
      this._setResponse(response);
    },

	ready: function(){
		
		document.querySelector('library-clab').addEventListener('headready', function(evt){
			this.listOfAnchors = evt.detail;
		}.bind(this));
		
	},

	_anchorScroll: function(evt){
		evt.preventDefault();

		function smoothScroll(el, to, duration) {
		    if (duration < 0) {
		        return;
		    }
		    var difference = to - $(window).scrollTop();
		    var perTick = difference / duration * 10;
		    this.scrollToTimerCache = setTimeout(function() {
		        if (!isNaN(parseInt(perTick, 10))) {
		            window.scrollTo(0, $(window).scrollTop() + perTick);
		            smoothScroll(el, to, duration - 10);
		        }
		    }.bind(this), 10);
		}

		smoothScroll($(window), $($(evt.target).attr('href')).offset().top-80, 250);
	}
});