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
			value: 'clab clab-icon-expand expand'
		},
		reduceClose:{
			type: String,
			value: 'clab clab-icon-resize compress'
		}
	},
	_reduce: function(){
		document.body.classList.toggle('main-sidebar-small');
	},
	_computeTitleIcon: function(icon){
		return ['clab',icon].join(' ');
	},
	_computeReduceIcons: function(classes){
		return classes;
	}
});