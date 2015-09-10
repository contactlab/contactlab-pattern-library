/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	function layoutManager() {
	  if ($(window).width() < 1024) {
	    $('body').addClass('main-sidebar-small'), $('body').addClass('secondary-sidebar-closed');
	  } else if ($(window).width() < 1200) {
	    $('body').addClass('secondary-sidebar-closed');
	  } else {
	    $('body').removeClass('main-sidebar-small'), $('body').removeClass('secondary-sidebar-closed');
	  }
	};

	$(window).bind('resize', function () {
	  layoutManager();
	});

	window.onorientationchange = layoutManager();

	$(document).ready(function () {

	  layoutManager();

	  if ($(window).width() < 960) {
	    $('body').addClass('main-sidebar-small');
	    $('body').addClass('secondary-sidebar-closed');
	  }

	  $("#user-menu-toggle").click(function () {
	    $(".user-bar").toggleClass('active');
	  });

	  $(".search-icon").click(function () {
	    $(".search-input").toggleClass('active');
	  });

	  $("#reduce").click(function () {
	    $("body").toggleClass('main-sidebar-small');
	  });

	  $("#secondary-sidebar-label").click(function () {
	    $("body").toggleClass('secondary-sidebar-closed');
	  });
	});

/***/ }
/******/ ]);