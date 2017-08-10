'use strict';

import 'contactlab-ui-components';
import './view.html';
import {Polymer} from './../../polymer';
import router from './../../routing';
import {routes} from './routes';
// Modules
import './../cover';
import './../library';


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
				value: {
					name: '',
					path: ''
				}
			}
		}
	}

	attached(){
		const hash = window.location.hash;
		!hash.length ? window.location.hash = '#/' : null;

		router.add(routes).addListener((to, from) => {
			console.log('router:', to, from);
			this.route = Object.assign({}, to);
			console.log(this.route);
		}).start('test');

		router.navigate('mytest');
		console.log(router, router.isStarted());
	}

	_computeRibbon(visible, module){
		if(visible && module === 'home'){
			return true;
		}else{
			return false;
		}
	}

	_isPage(data,cur, page){
		console.log(data, cur, page);
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
		console.log(this.currentModule);
		return cur === page;
	}

}

Polymer(MainClab);
