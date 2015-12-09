var Routing =(function(){
	var pages = document.querySelector('iron-pages');
	var ui = document.querySelector('ui-clab');

	var routes = {
	    '/': function() {
	    	pages.selected='home';
	    },
	    '/design/colors': function(){
	    	pages.selected='ui';
	    	ui.page = 'colors';
	    },
	    '/design/typography': function() {
	    	pages.selected='ui';
	    	ui.page = 'typography';
	    },
	    '/design/iconography': function() {
	    	pages.selected='ui';
	    	ui.page = 'iconography';
	    },
	    '/design/motion': function() {
	    	pages.selected='ui';
	    	ui.page = 'motion';
	    },
	    '/ui/buttons': function() {
	    	pages.selected='ui';
	    	ui.page = 'buttons';
	    },
	    '/ui/buttons-group': function() {
	    	pages.selected='ui';
	    	ui.page = 'buttons-group';
	    },
	    '/ui/labels-badges': function() {
	    	pages.selected='ui';
	    	ui.page = 'labels-badges';
	    },
	    '/ui/tables': function() {
	    	pages.selected='ui';
	    	ui.page = 'tables';
	    },
	    '/ui/alerts': function() {
	    	pages.selected='ui';
	    	ui.page = 'alerts';
	    },
	    '/ui/panels': function() {
	    	pages.selected='ui';
	    	ui.page = 'panels';
	    },
	    '/ui/spinner': function() {
	    	pages.selected='ui';
	    	ui.page = 'spinner';
	    },
	    '/ui/cards': function() {
	    	pages.selected='ui';
	    	ui.page = 'cards';
	    },
	    '/ui/features': function() {
	    	pages.selected='ui';
	    	ui.page = 'features';
	    },
	    '/ui/breadcrumb': function() {
	    	pages.selected='ui';
	    	ui.page = 'breadcrumb';
	    },
	    '/ui/lists': function() {
	    	pages.selected='ui';
	    	ui.page = 'lists';
	    },
	    '/ui/forms': function() {
	    	pages.selected='ui';
	    	ui.page = 'forms';
	    },
	    '/ui/select': function() {
	    	pages.selected='ui';
	    	ui.page = 'select';
	    },
	    '/ui/datepicker': function() {
	    	pages.selected='ui';
	    	ui.page = 'datepicker';
	    },
	    '/ui/pagination': function() {
	    	pages.selected='ui';
	    	ui.page = 'pagination';
	    },
	    '/ui/progress-bars': function() {
	    	pages.selected='ui';
	    	ui.page = 'progress-bars';
	    },
	    '/ui/modals': function() {
	    	pages.selected='ui';
	    	ui.page = 'modals';
	    },
	    '/ui/tabs-pills': function() {
	    	pages.selected='ui';
	    	ui.page = 'tabs-pills';
	    },
	    '/ui/accordion': function() {
	    	pages.selected='ui';
	    	ui.page = 'accordion';
	    },
	    '/ui/tooltips': function() {
	    	pages.selected='ui';
	    	ui.page = 'tooltips';
	    },
	    '/ui/toaster': function() {
	    	pages.selected='ui';
	    	ui.page = 'toaster';
	    },
	    '/product-brand/our-logo': function() {
	    	pages.selected='ui';
	    	ui.page = 'our-logo';
	    },
	    '/product-brand/brand-book': function() {
	    	pages.selected='ui';
	    	ui.page = 'brand-book';
	    }
	};

	var router = Router(routes).configure({
		notfound: function(){
			pages.selected='ui';
	    	ui.page = 'not-found';
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