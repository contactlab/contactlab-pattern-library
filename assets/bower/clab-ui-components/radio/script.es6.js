'use strict';

import {Polymer} from "./../_assets/js/polymer";
import {UtilBehavior} from "./../_behaviors/behaviors.es6";

export class RadioClab {

  get behaviors() {
    return [UtilBehavior];
  }

  beforeRegister() {
    this.is = "radio-clab";
    this.properties = {
      labels: {
        type: Array,
        value: []
      },
      name: {
        type: String
      },
      wrapperType: {
        type: String,
        value: ''
      },
      active: {
        type: Number,
        value: 0
      },
      disabled: {
        type: Array,
        value: []
      },
      inline: {
        type: Boolean,
        value: false,
        observer: '_computeInline',
        reflectToAttribute: true
      }
    }
  }



  /*----------
    COMPUTED
  ----------*/
  _computeType(wt) {
    return ['row', wt].join(' ');
  }

  _computeInline(inline){
    inline ? this.classList.add('inline') : this.classList.remove('inline');
  }

  /*----------
    UTILS
  ----------*/
  _isChecked(index, active) {
    return index === active;
  }

  _isDisabled(index, disabledArr) {
    return disabledArr.includes(index)
  }

  /*----------
    LISTENERS
  ----------*/

  _onChange(evt) {
    const clickedIndex = parseInt(evt.target.dataset.index, 10)
    this.set('active', clickedIndex)
  }
}


Polymer(RadioClab);
