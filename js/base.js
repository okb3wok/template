"use strict";

$(document).ready(function () {


  $(".hstr-footer").addClass("loaded");
  $(".menu-item").click(function() {
    var page_number = $( "li" ).index( this );
    $( ".hstr-content" ).css("display" , "none");
    $( "#page" + page_number ).css("display" , "block");
  });


  const sticky = (elJQSelector,
    offsetTop,
    offsetParentTop,
    widthStopSticky,
    JQSelectorBottomStopper='.footer') => {

    let delta = offsetTop - offsetParentTop;// indent from top of parent element
    let scrollTop = $(window).scrollTop();
    let elementWidth =$(elJQSelector).css('width');
    let documentWidth=$(document).width();
    let footerOffsetTop = $(JQSelectorBottomStopper).offset().top;
    let stickyBlockHeight = $(elJQSelector).outerHeight();

    if(documentWidth > widthStopSticky) {

      if (scrollTop > offsetParentTop) {
        if((scrollTop + stickyBlockHeight + 2 * delta ) < footerOffsetTop) {
          $(elJQSelector).css({
            'position':'fixed',
            'top': delta,
            'margin-top' : 0,
            'width':elementWidth
          });
        }else {
          let delta2 = footerOffsetTop - offsetTop - delta - stickyBlockHeight;
           $(elJQSelector).css({
             'position':'static',
             'margin-top': delta2,
             'width':'100%'
           });
        }
      }else {
        $(elJQSelector).css({
          'position':'static',
          'margin-top': 0,
          'width':'100%'
        });
      }
    }else {
      $(elJQSelector).css({
        'position':'static',
        'margin-top': 0,
        'width':'100%'
      });
    }
  };


  let stickyElement = $('#stickyBlock');
  let offsetTop = stickyElement.offset().top;
  let offsetParentTop = stickyElement.parent().offset().top;
  let widthStopSticky = 630; //Width screen when sticky effect is off
  let elJQSelector = '#stickyBlock';
  let JQSelectorBottomStopper = '.hstr-footer';


  sticky(elJQSelector,
    offsetTop,
    offsetParentTop,
    widthStopSticky,
    JQSelectorBottomStopper
  );


  $(window).scroll(function(){

    sticky(elJQSelector,
      offsetTop,
      offsetParentTop,
      widthStopSticky,
      JQSelectorBottomStopper
    );

  });


  $(window).resize(function(){

    sticky(elJQSelector,
      offsetTop,
      offsetParentTop,
      widthStopSticky,
      JQSelectorBottomStopper
    );

  });

});
