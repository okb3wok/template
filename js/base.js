"use strict";
import $ from './jQuery3.js'
import {sticky} from './sticky.js'

$(document).ready(function () {


  $(".hstr-footer").addClass("loaded");
  $(".menu-item").click(function() {
    let page_number = $( "li" ).index( this );
    $( ".hstr-content" ).css("display" , "none");
    $( "#page" + page_number ).css("display" , "block");
  });


  let elJQSelector = '#stickyBlock';
  let JQSelectorBottomStopper = '.hstr-footer';//Stop sticky block before footer
  let stickyElement = $(elJQSelector);
  let offsetTop = stickyElement.offset().top;
  let offsetParentTop = stickyElement.parent().offset().top;
  let widthStopSticky = 630;//Width screen when sticky effect is off


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
