Polymer({
	is: 'menu-sidebar',
	properties: {
		title: {
			type: String,
			value: 'Title'
		},
		titleIcon: {
			type: String,
			value: 'fa-hand-peace-o'
		},
		reduceText:{
			type: String,
			value: 'Riduci menu'
		},
		reduceOpen:{
			type: String,
			value: 'contactlab-icon-compress-h icon compress'
		},
		reduceClose:{
			type: String,
			value: 'contactlab-icon-expand-h icon expand'
		}
	},
	_reduce: function(){
		document.body.classList.toggle('main-sidebar-small');
	},
	_computeTitleIcon: function(icon){
		return ['fa',icon].join(' ');
	},
	_computeReduceIcons: function(classes){
		return classes;
	}
});