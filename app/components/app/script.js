Polymer({
	is: 'library-clab',
	fakeMenu: [
		{
			"label": "Design",
			"url": "#/design",
			"icon": "clab clab-icon-sign-design icon",
			"submenu": [
				{
					"label": "Colors",
					"url": "#/design/colors"
				},
				{
					"label": "Typography",
					"url": "#/design/typography"
				},
				{
					"label": "Iconography",
					"url": "#/design/iconography"
				},
				{
					"label": "Motion",
					"url": "#/design/motion"
				}
			]
		},{
			"label": "UI Components",
			"url": "#/ui",
			"icon": "clab clab-icon-sign icon",
			"submenu": [
				{
					"label": "Buttons",
					"url": "#/ui/buttons"
				},
				{
					"label": "Labels & badges",
					"url": "#/ui/labels-badges"
				},
				{
					"label": "Tables",
					"url": "#/ui/tables"
				},
				{
					"label": "Alerts",
					"url": "#/ui/alerts"
				},
				{
					"label": "Panels",
					"url": "#/ui/panels"
				},
				{
					"label": "Spinner",
					"url": "#/ui/spinner"
				},
				{
					"label": "Forms",
					"url": "#/ui/forms"
				},
				{
					"label": "Cards",
					"url": "#/ui/cards"
				},
				{
					"label": "Features",
					"url": "#/ui/features"
				},
				{
					"label": "Progress bars",
					"url": "#/ui/progress-bars"
				},
				{
					"label": "Breadcrumb",
					"url": "#/ui/breadcrumb"
				},
				{
					"label": "Lists",
					"url": "#/ui/lists"
				},
				{
					"label": "Pagination",
					"url": "#/ui/pagination"
				}
			]
		},{
			"label": "Resources",
			"url": "#/resoruces",
			"icon": "clab clab-icon-sign-resources icon"
		}
	],
	_routing: function(){
		var routes = {
		    '/design/colors': [function() {
		    	$('#view').load('pages/colors/colors.html');
		    }],
		    '/design/typography': [function() {
		    	$('#view').load('pages/typography/typography.html');
		    }],
		    '/design/iconography': [function() {
		    	$('#view').load('pages/iconography/iconography.html');
		    }],
		    '/design/motion': [function() {
		    	$('#view').load('pages/motion/motion.html');
		    }],
		    '/ui/buttons': [function() {
		    	$('#view').load('pages/buttons/buttons.html');
		    }],
		    '/ui/labels-badges': [function() {
		    	$('#view').load('pages/labels-badges/labels-badges.html');
		    }],
		    '/ui/tables': [function() {
		    	$('#view').load('pages/tables/tables.html');
		    }],
		    '/ui/alerts': [function() {
		    	$('#view').load('pages/alerts/alerts.html');
		    }],
		    '/ui/panels': [function() {
		    	$('#view').load('pages/panels/panels.html');
		    }],
		    '/ui/spinner': [function() {
		    	$('#view').load('pages/spinner/spinner.html');
		    }],
		    '/ui/cards': [function() {
		    	$('#view').load('pages/cards/cards.html');
		    }],
		    '/ui/features': [function() {
		    	$('#view').load('pages/features/features.html');
		    }],
		    '/ui/breadcrumb': [function() {
		    	$('#view').load('pages/breadcrumb/breadcrumb.html');
		    }],
		    '/ui/lists': [function() {
		    	$('#view').load('pages/lists/lists.html');
		    }],
		    '/ui/forms': [function() {
		    	$('#view').load('pages/forms/forms.html');
		    }],
		    '/ui/pagination': [function() {
		    	$('#view').load('pages/pagination/pagination.html');
		    }],
		    '/ui/progress-bars': [function() {
		    	$('#view').load('pages/progress-bars/progress-bars.html');
		    }]
		};

		var router = Router(routes).configure({
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
	},
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
	attached: function(){
		this._routing();

		window.addEventListener('resize', function () {
		    this._layoutManager();
		}.bind(this));

		window.addEventListener('orientationchange', function () {
		    this._layoutManager();
		}.bind(this));

		this._layoutManager();

		document.querySelector('menu-clab').menu = this.fakeMenu;
	}
});