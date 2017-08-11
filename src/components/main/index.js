'use strict';

import 'contactlab-ui-components';
import './view.html';
import {Polymer} from './../../polymer';
import router from './../../routing';
import {routes} from './routes';
// Modules
import './../cover';
import './../library';
import './../gist-embed/';


export class MainClab {
	beforeRegister(){
		this.is = "main-clab";
		this.properties = {
			currentModule: {
				type: String,
				value: null
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
				value: {
					name: '',
					path: ''
				}
			},
			libPage: {
				type: String,
				value: ''
			},
			cover: {
				type: Boolean,
				value: true
			}
		}
	}

	attached(){
		const hash = window.location.hash;
		// !hash.length ? window.location.hash = '#/' : null;
		const first = hash.split('#')[1] || '#/';

		router.add(routes).addListener((to, from) => {
			this.route = Object.assign({}, to);
		}).start(first);

	}

	_computeRibbon(visible, module){
		if(visible && module === 'home'){
			return true;
		}else{
			return false;
		}
	}

	_isPage(data ,cur, page){
		console.log(cur, page, cur === page, this.route);
		if (this.route.name === 'home'){
			this.currentModule = 'home';
			return true;
		} else {
			const url = this.route.path.replace('/').split('/');
			this.currentModule = 'library';
			this.libPage = url[1];
			return false;
		}
		
		// return cur === page;
	}

}

Polymer(MainClab);
