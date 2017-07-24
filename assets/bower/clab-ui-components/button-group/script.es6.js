'use strict';

import {Polymer} from "./../_assets/js/polymer";

export class GroupClab{

	beforeRegister(){
		this.is = 'group-clab';
		this.properties = {
			/**
			* Additional class
			*/
			type: {
				type: String,
				value: ''
			},
			/**
			* `size` additional class for the size of the buttons
			*/
			size:{
				type: String,
				value: ''
			},
			/**
			* Whether the buttons are disabled
			*/
			disabled: {
				type: Boolean,
				value: false,
				observer: '_updateDisabled'
			},
			/**
			* Index of the button active at init
			*/
			value: {
				type: Number,
				value: 0,
				observer: '_updateAppearance',
				reflectToAttribute: true
			}
		}
	}

	attached(){
		let btns = this.getContentChildren();
		Array.prototype.map.call(btns, (btn, i) => {
			btn.classList.add('group-item');
			btn.appearance = (i==this.value) ? '' : 'empty';
			btn.setAttribute('data-i', i);
			btn.addEventListener('btnclick', this._selectElement.bind(this));
		});
	}



	/*----------
	OBSERVER
	----------*/
	_updateDisabled(val, old){
		let btns = this.getContentChildren();
		Array.prototype.map.call(btns, btn => {
			btn.disabled = val;
		});
	}

	_updateAppearance(val, old){
		if(old!==undefined && old !== val){
			this.dispatchEvent(new CustomEvent('change', {
				bubbles: true,
				composed: true,
				detail: {
					value: val
				}
			}));

			let btns = this.getContentChildren();
			Array.prototype.map.call(btns, (btn, i) => {
				btn.appearance = (i==this.value) ? '' : 'empty';
			});
		}
	}



	/*----------
	EVENT HANDLERS
	----------*/
	_selectElement(evt){
		this.set('value', Number(evt.target.getAttribute('data-i')) );
	}




	/*----------
	COMPUTED
	----------*/
	_computeGroupClass(type, size){
		let arr = [type, size];
		return arr.join(' ');
	}


}


Polymer(GroupClab);
