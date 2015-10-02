function layoutManager(){
  if (ki.width() < 1024) {
    ki.one('body').addClass('main-sidebar-small'),
    ki.one('body').addClass('secondary-sidebar-closed')
  } else if (ki.width() < 1200) {
    ki.one('body').addClass('secondary-sidebar-closed')
  } else {
    ki.one('body').removeClass('main-sidebar-small'),
    ki.one('body').removeClass('secondary-sidebar-closed')
  }
};

window.addEventListener('resize', function () {
    layoutManager();
});

ki.domReady(function(){

  layoutManager();

  window.onorientationchange = layoutManager();

  if (ki.width() < 960) {
    ki.one('body').addClass('main-sidebar-small');
    ki.one('body').addClass('secondary-sidebar-closed');
  }

  // ki.one("#user-menu-toggle").on('click',function() {
  //   ki.one(".user-bar").toggleClass('active');
  // });

  // ki.one(".search-icon").on('click',function() {
  //   ki.one(".search-input").toggleClass('active');
  // });

  // ki.one("#secondary-sidebar-label").on('click',function() {
  //   ki.one('body').toggleClass('secondary-sidebar-closed');
  // });

});


// function layoutManager(){
//   if ($(window).width() < 1024) {
//     ki.one('body').addClass('main-sidebar-small'),
//     ki.one('body').addClass('secondary-sidebar-closed')
//   } else if ($(window).width() < 1200) {
//     ki.one('body').addClass('secondary-sidebar-closed')
//   } else {
//     ki.one('body').removeClass('main-sidebar-small'),
//     ki.one('body').removeClass('secondary-sidebar-closed')
//   }
// };

// $(window).bind('resize', function () {
//     layoutManager();
// });

// window.onorientationchange = layoutManager();

// $(document).ready(function(){

//   layoutManager();

//   if ($(window).width() < 960) {
//     ki.one('body').addClass('main-sidebar-small');
//     ki.one('body').addClass('secondary-sidebar-closed');
//   }

//   $( "#user-menu-toggle" ).click(function() {
//     $(".user-bar").toggleClass('active');
//   });

//   $( ".search-icon" ).click(function() {
//     $(".search-input").toggleClass('active');
//   });

//   $( "#secondary-sidebar-label" ).click(function() {
//     $("body").toggleClass('secondary-sidebar-closed');
//   });

// });