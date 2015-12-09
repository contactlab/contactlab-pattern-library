Polymer({
	is: 'library-clab',
	_routing: Routing,
	_layoutManager: function (){
	  if ($(window).width() < 1024) {
	    $('body').addClass('main-sidebar-small');
	  } else if ($(window).width() > 1780){
	    $('body').addClass('secondary-sidebar-open');
	    $("#secondary-sidebar").addClass('sidebar-open');
	    $("#user-menu-toggle").addClass('active');
	  } else {
	    $('body').removeClass('main-sidebar-small')
	    $("#secondary-sidebar").removeClass('sidebar-open');
	    $("#user-menu-toggle").removeClass('active');
	  }
	},
	attached:function(){
		this._routing();

		window.addEventListener('resize', function () {
		    this._layoutManager();
		}.bind(this));

		window.addEventListener('orientationchange', function () {
		    this._layoutManager();
		}.bind(this));

		this._layoutManager();
	}
});