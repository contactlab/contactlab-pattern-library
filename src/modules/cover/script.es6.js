'use strict';

// Main library
import {Polymer} from './../../polymer';

export class CoverClab {
	beforeRegister(){
		this.is = "cover-clab";
		this.properties = {
			beta: {
				type: Boolean,
				value: false
			},
			version: {
				type: String,
				value: '0.0.0'
			}
		}
	}

	_computeYear(){
		let date = new Date();
		return date.getFullYear();
	}
}

Polymer(CoverClab);
