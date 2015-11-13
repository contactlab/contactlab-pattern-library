Polymer({
	is: 'library-clab',
	_routing: AppRoutes,
	_layoutManager: function (){
	  if ($(window).width() < 1024) {
	    $('body').addClass('main-sidebar-small')
	  } else if ($(window).width() > 1780){
	    $('body').addClass('secondary-sidebar-open');
	    $("#secondary-sidebar").addClass('sidebar-open');
	    $("#user-menu-toggle").addClass('active')
	  } else {
	    $('body').removeClass('main-sidebar-small')
	    $("#secondary-sidebar").removeClass('sidebar-open');
	    $("#user-menu-toggle").removeClass('active')
	  }
	},
	_highlightCode: function(){
		setTimeout(function(){
			$('.html').each(function(i, block) {
			    hljs.highlightBlock(block);
			});
		},500);
	},
	_changePage: function(evt){
		window.scroll(0,0);
		this._highlightCode();
	},
	attached: function(){

		this._routing();

		window.addEventListener('resize', function () {
		    this._layoutManager();
		}.bind(this));

		window.addEventListener('orientationchange', function () {
		    this._layoutManager();
		}.bind(this));

		window.addEventListener('hashchange', this._changePage.bind(this));

		this._layoutManager();

		document.querySelector('menu-clab').menu = AppFakeMenu;
	},

	ready: function(){
		this._highlightCode();
	}
});