var AppRoutes = (function(){
	var view = $('#view');

	var routes = {
	    '/design/colors': [function() {
	    	view.load('pages/colors/colors.html', highlight);
	    }],
	    '/design/typography': [function() {
	    	view.load('pages/typography/typography.html', highlight);
	    }],
	    '/design/iconography': [function() {
	    	view.load('pages/iconography/iconography.html', highlight);
	    }],
	    '/design/motion': [function() {
	    	view.load('pages/motion/motion.html', highlight);
	    }],
	    '/ui/buttons': [function() {
	    	view.load('pages/buttons/buttons.html', highlight);
	    }],
	    '/ui/labels-badges': [function() {
	    	view.load('pages/labels-badges/labels-badges.html', highlight);
	    }],
	    '/ui/tables': [function() {
	    	view.load('pages/tables/tables.html', highlight);
	    }],
	    '/ui/alerts': [function() {
	    	view.load('pages/alerts/alerts.html', highlight);
	    }],
	    '/ui/panels': [function() {
	    	view.load('pages/panels/panels.html', highlight);
	    }],
	    '/ui/spinner': [function() {
	    	view.load('pages/spinner/spinner.html', highlight);
	    }],
	    '/ui/cards': [function() {
	    	view.load('pages/cards/cards.html', highlight);
	    }],
	    '/ui/features': [function() {
	    	view.load('pages/features/features.html', highlight);
	    }],
	    '/ui/breadcrumb': [function() {
	    	view.load('pages/breadcrumb/breadcrumb.html', highlight);
	    }],
	    '/ui/lists': [function() {
	    	view.load('pages/lists/lists.html', highlight);
	    }],
	    '/ui/forms': [function() {
	    	view.load('pages/forms/forms.html', highlight);
	    }],
	    '/ui/pagination': [function() {
	    	view.load('pages/pagination/pagination.html', highlight);
	    }],
	    '/ui/progress-bars': [function() {
	    	view.load('pages/progress-bars/progress-bars.html', highlight);
	    }],
	    '/ui/modals': [function() {
	    	view.load('pages/modals/modals.html', highlight);
	    }],
	    '/ui/tabs-pills': [function() {
	    	view.load('pages/tabs-pills/tabs-pills.html', highlight);
	    }],
	    '/ui/accordion': [function() {
	    	view.load('pages/accordion/accordion.html', highlight);
	    }],
	    '/ui/tooltips': [function() {
	    	view.load('pages/tooltips/tooltips.html', highlight);
	    }],
	    '/ui/toaster': [function() {
	    	view.load('pages/toaster/toaster.html', highlight);
	    }]
	};

	var highlight = function(){
		var n = document.querySelectorAll('pre code').length;
		n ? hljs.highlightBlock(document.querySelector('pre code')) : null;
	}

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