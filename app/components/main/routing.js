var Routing =(function(){
	var pages = document.querySelector('iron-pages');
	var library = document.querySelector('library-clab');

	var routes = {
	    '/': function() {
	    	pages.selected='home';
	    },
	    '/design/colors': function(){
	    	pages.selected='library';
	    	library.page = 'colors';
	    },
	    '/design/typography': function() {
	    	pages.selected='library';
	    	library.page = 'typography';
	    },
	    '/design/iconography': function() {
	    	pages.selected='library';
	    	library.page = 'iconography';
	    },
	    '/design/motion': function() {
	    	pages.selected='library';
	    	library.page = 'motion';
	    },
	    '/ui/buttons': function() {
	    	pages.selected='library';
	    	library.page = 'buttons';
	    },
	    '/ui/buttons-group': function() {
	    	pages.selected='library';
	    	library.page = 'buttons-group';
	    },
	    '/ui/labels-badges': function() {
	    	pages.selected='library';
	    	library.page = 'labels-badges';
	    },
	    '/ui/tables': function() {
	    	pages.selected='library';
	    	library.page = 'tables';
	    },
	    '/ui/alerts': function() {
	    	pages.selected='library';
	    	library.page = 'alerts';
	    },
	    '/ui/panels': function() {
	    	pages.selected='library';
	    	library.page = 'panels';
	    },
	    '/ui/spinner': function() {
	    	pages.selected='library';
	    	library.page = 'spinner';
	    },
	    '/ui/cards': function() {
	    	pages.selected='library';
	    	library.page = 'cards';
	    },
	    '/ui/features': function() {
	    	pages.selected='library';
	    	library.page = 'features';
	    },
	    '/ui/breadcrumb': function() {
	    	pages.selected='library';
	    	library.page = 'breadcrumb';
	    },
	    '/ui/lists': function() {
	    	pages.selected='library';
	    	library.page = 'lists';
	    },
	    '/ui/forms': function() {
	    	pages.selected='library';
	    	library.page = 'forms';
	    },
	    '/ui/select': function() {
	    	pages.selected='library';
	    	library.page = 'select';
	    },
	    '/ui/datepicker': function() {
	    	pages.selected='library';
	    	library.page = 'datepicker';
	    },
	    '/ui/pagination': function() {
	    	pages.selected='library';
	    	library.page = 'pagination';
	    },
	    '/ui/progress-bars': function() {
	    	pages.selected='library';
	    	library.page = 'progress-bars';
	    },
	    '/ui/modals': function() {
	    	pages.selected='library';
	    	library.page = 'modals';
	    },
	    '/ui/tabs-pills': function() {
	    	pages.selected='library';
	    	library.page = 'tabs-pills';
	    },
	    '/ui/accordion': function() {
	    	pages.selected='library';
	    	library.page = 'accordion';
	    },
	    '/ui/tooltips': function() {
	    	pages.selected='library';
	    	library.page = 'tooltips';
	    },
	    '/ui/toaster': function() {
	    	pages.selected='library';
	    	library.page = 'toaster';
	    },
	    '/product-brand/our-logo': function() {
	    	pages.selected='library';
	    	library.page = 'our-logo';
	    },
	    '/product-brand/brand-book': function() {
	    	pages.selected='library';
	    	library.page = 'brand-book';
	    },
	    '/documentation/release-notes': function() {
	    	pages.selected='library';
	    	library.page = 'release-notes';
	    }
	};

	var router = Router(routes).configure({
		notfound: function(){
			pages.selected='library';
	    	library.page = 'not-found';
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

	router.init('/');
});