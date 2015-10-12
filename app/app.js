var menu = 
  [
      {
          "label": "Design",
          "url": "#/design",
          "icon": "clab clab-icon-sign-design icon",
          "submenu": [
              {
                  "label": "Colors",
                  "url": "#/design/colors"
              },
              {
                  "label": "Typography",
                  "url": "#/design/typography"
              },
              {
                  "label": "Iconography",
                  "url": "#/design/iconography"
              },
              {
                  "label": "Motion",
                  "url": "#/design/motion"
              }
          ]
      },
      {
          "label": "Ui components",
          "url": "#/ui/buttons",
          "icon": "clab clab-icon-sign icon",
          "submenu": [
              {
                  "label": "Buttons",
                  "url": "#/ui/buttons"
              },
              {
                  "label": "Labels & badges",
                  "url": "#/ui/labels-badges"
              },
              {
                  "label": "Tables",
                  "url": "#/ui/tables"
              },
              {
                  "label": "Alerts",
                  "url": "#/ui/alerts"
              },
              {
                  "label": "Panels",
                  "url": "#/ui/panels"
              },
              {
                  "label": "Spinner",
                  "url": "#/ui/spinner"
              },
              {
                  "label": "Forms",
                  "url": "#/ui/forms"
              },
              {
                  "label": "cards",
                  "url": "#/ui/cards"
              },
              {
                  "label": "Features",
                  "url": "#/ui/features"
              },
              {
                  "label": "Progress bars",
                  "url": "#/ui/progress-bars"
              },
              {
                  "label": "Breadcrumb",
                  "url": "#/ui/breadcrumb"
              },
              {
                  "label": "Lists",
                  "url": "#/ui/lists"
              },
              {
                  "label": "Pagination",
                  "url": "#/ui/pagination"
              }
          ]
      },
      {
          "label": "Resources",
          "url": "#/resources",
          "icon": "clab clab-icon-sign-resources icon"
      }
  ]

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
  document.querySelector('menu-clab').menu = menu;
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