'use strict';

// Main library
import {Polymer} from './../../polymer';
// components
import {MenuClabCust} from './../../components/menu/script.es6';
import {InnerMenuClab} from './../../components/inner-menu/script.es6';
// Menu
import {AppMenu} from './menu.es6';

export class LibraryClab {
	beforeRegister(){
		this.is="library-clab";
		this.properties = {
			page:{
				type:String,
				observer: '_pageChanged'
			},
			submenu:{
				type:Array
			},
			submenuLabel:{
				type:String
			},
			currentHash:{
				type:String,
				value: window.location.hash
			},
			beta: {
				type: Boolean,
				value: false
			},
			menu: {
				type: Array,
				value: AppMenu
			}
		}
	}

	attached(){
		this.fire('libraryLoaded');
	}

	scrollToY(scrollTargetY, speed, easing) {
    // scrollTargetY: the target scrollY property of the window
    // speed: time in pixels per second
    // easing: easing equation to use
    var scrollY = window.scrollY,
        scrollTargetY = scrollTargetY || 0,
        speed = speed || 2000,
        easing = easing || 'easeOutSine',
        currentTime = 0;

    var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

    // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
    var PI_D2 = Math.PI / 2,
        easingEquations = {
            easeOutSine: function (pos) {
                return Math.sin(pos * (Math.PI / 2));
            },
            easeInOutSine: function (pos) {
                return (-0.5 * (Math.cos(Math.PI * pos) - 1));
            },
            easeInOutQuint: function (pos) {
                if ((pos /= 0.5) < 1) {
                    return 0.5 * Math.pow(pos, 5);
                }
                return 0.5 * (Math.pow((pos - 2), 5) + 2);
            }
        };

	    function tick() {
	        currentTime += 1 / 60;
	        var p = currentTime / time;
	        var t = easingEquations[easing](p);
	        if (p < 1) {
	            requestAnimFrame(tick);
	            window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
	        } else {
	            window.scrollTo(0, scrollTargetY);
	        }
	    }

	    tick();
	}

	_menuChange(evt){
		this.set('submenu', evt.detail.links);
		this.submenuLabel=evt.detail.label;
	}

	_pageChanged(){
		this.currentHash = window.location.hash;
		this.scrollToY(0, 1500, 'easeInOutQuint');
		// this.querySelector('nav.main-nav').classList.remove('show');
	}

	_isPage(cur, page){
		return cur === page;
	}
}

Polymer(LibraryClab);

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();
