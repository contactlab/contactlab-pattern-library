var AppRoutes = (function(){
	var view = $('#view');

	var routes = {
	    '/design/colors': [function() {
	    	view.load('pages/colors/colors.html');
	    }],
	    '/design/typography': [function() {
	    	view.load('pages/typography/typography.html');
	    }],
	    '/design/iconography': [function() {
	    	view.load('pages/iconography/iconography.html');
	    }],
	    '/design/motion': [function() {
	    	view.load('pages/motion/motion.html');
	    }],
	    '/ui/buttons': [function() {
	    	view.load('pages/buttons/buttons.html');
	    }],
	    '/ui/labels-badges': [function() {
	    	view.load('pages/labels-badges/labels-badges.html');
	    }],
	    '/ui/tables': [function() {
	    	view.load('pages/tables/tables.html');
	    }],
	    '/ui/alerts': [function() {
	    	view.load('pages/alerts/alerts.html');
	    }],
	    '/ui/panels': [function() {
	    	view.load('pages/panels/panels.html');
	    }],
	    '/ui/spinner': [function() {
	    	view.load('pages/spinner/spinner.html');
	    }],
	    '/ui/cards': [function() {
	    	view.load('pages/cards/cards.html');
	    }],
	    '/ui/features': [function() {
	    	view.load('pages/features/features.html');
	    }],
	    '/ui/breadcrumb': [function() {
	    	view.load('pages/breadcrumb/breadcrumb.html');
	    }],
	    '/ui/lists': [function() {
	    	view.load('pages/lists/lists.html');
	    }],
	    '/ui/forms': [function() {
	    	view.load('pages/forms/forms.html');
	    }],
	    '/ui/pagination': [function() {
	    	view.load('pages/pagination/pagination.html');
	    }],
	    '/ui/progress-bars': [function() {
	    	view.load('pages/progress-bars/progress-bars.html');
	    }],
	    '/ui/modals': [function() {
	    	view.load('pages/modals/modals.html');
	    }],
	    '/ui/tabs-pills': [function() {
	    	view.load('pages/tabs-pills/tabs-pills.html');
	    }],
	    '/ui/accordion': [function() {
	    	view.load('pages/accordion/accordion.html');
	    }],
	    '/ui/tooltips': [function() {
	    	view.load('pages/tooltips/tooltips.html');
	    }],
	    '/ui/toaster': [function() {
	    	view.load('pages/toaster/toaster.html');
	    }]
	};

	var router = Router(routes).configure({
		notfound: function(){
			view.load('pages/error.html');
		},
		on: function(){
			$('menu-clab .first-level-menu>li>a').each(function(i, e){					
				if(location.hash.search(e.getAttribute('href')) > -1){
					e.parentNode.classList.add('active');
				}else{
					e.parentNode.classList.remove('active');
				}
			});
		}
	});

	router.init('/design/colors');

});