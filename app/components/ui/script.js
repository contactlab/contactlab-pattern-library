Polymer({
	is: 'ui-clab',
	properties:{
		page:{
			type:String,
			observer: '_pageChanged'
		}
	},
	attached:function(){
		this.querySelector('menu-clab').menu = AppMenu;

		var n = document.querySelectorAll('pre code').length;
		n ? hljs.highlightBlock(document.querySelector('pre code')) : null;
		$('.html').each(function(i, block) {
			hljs.highlightBlock(block);
		});
	},
	_pageChanged:function(){
		//console.log(this.page);
		window.scroll(0,0);
	}
});