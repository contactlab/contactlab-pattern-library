'use strict';

// Main library
import {Polymer} from './../../polymer';
// Modules
import {CoverClab} from './../../modules/cover/script.es6';
import {LibraryClab} from './../../modules/library/script.es6';

export class MainClab {
	beforeRegister(){
		this.is = "main-clab";
		this.properties = {
			currentModule: {
				type: String,
				value: null,
				readonly: true
			},
			ribbon: {
				type: Object,
				value: {
					visible: true,
					repo: 'https://github.com/contactlab/contactlab-ui-components'
				}
			},
			route: {
				type: Object,
				notify: true
			},
			pageData: {
				type: Object,
				notify: true
			},
			pageTail: {
				type: Object,
				notify: true
			}
		}
	}

	attached(){
		let hash = window.location.hash;
		!hash.length ? window.location.hash = '#/' : null;
	}

	_computeRibbon(visible, module){
		if(visible && module === 'home'){
			return true;
		}else{
			return false;
		}
	}

	_isPage(data,cur, page){
		//console.log(this.route.path, cur, page);
		if(this.route.path.length < 2){
			this.currentModule = 'home';
		} else {
			const url = this.route.path.replace('/').split('/');
			this.currentModule = 'library';
			if(!this.querySelector('library-clab')){
				window.addEventListener('libraryLoaded',(evt)=>{
					this.querySelector('library-clab').page = url[1];
				});
			} else {
				this.querySelector('library-clab').page = url[1];
			}
		}
		return cur === page;
	}

}

Polymer(MainClab);
