function layoutManager(){
  if ($(window).width() < 1024) {
    $('body').addClass('main-sidebar-small'),
    $('body').addClass('secondary-sidebar-closed')
  } else if ($(window).width() < 1200) {
    $('body').addClass('secondary-sidebar-closed')
  } else {
    $('body').removeClass('main-sidebar-small'),
    $('body').removeClass('secondary-sidebar-closed')
  }
};

$(window).bind('resize', function () {
    layoutManager();
});

window.onorientationchange = layoutManager();

$(document).ready(function(){

  layoutManager();

  if ($(window).width() < 960) {
    $('body').addClass('main-sidebar-small');
    $('body').addClass('secondary-sidebar-closed');
  }

  $( "#user-menu-toggle" ).click(function() {
    $(".user-bar").toggleClass('active');
  });

  $( ".search-icon" ).click(function() {
    $(".search-input").toggleClass('active');
  });

  $( "#reduce" ).click(function() {
    $("body").toggleClass('main-sidebar-small');
  });

  $( "#secondary-sidebar-label" ).click(function() {
    $("body").toggleClass('secondary-sidebar-closed');
  });

});