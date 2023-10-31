import $ from './jQuery3.js'

export function sticky (elJQSelector,
  offsetTop,
  offsetParentTop,
  widthStopSticky,
  JQSelectorBottomStopper='.footer') {

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
}

