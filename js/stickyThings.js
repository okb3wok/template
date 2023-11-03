import $ from './jQuery3.js'

export function stickyThings (scrolledCurrent = 0,
  headerJQSelector='.hstr-header',
  footerJQSelector='.hstr-footer',
  stickyBlockJQSelector='#stickyBlock',
  ) {


  let header = $(headerJQSelector);
  let footer = $(footerJQSelector);
  let sticky = $(stickyBlockJQSelector);
  let stickyWidth = sticky.css('width');
  let scrolledFromTop = $(window).scrollTop(); // Скролл от верха документа в px

  let stickyIsOn = false;
  if ($(document).width() > 631) {
    stickyIsOn = true;
  }


  // Если скроллим
  if ( scrolledFromTop > 0 ) {

    if ( scrolledFromTop > scrolledCurrent ) {

      if (scrolledFromTop < header.outerHeight() + header.offset().top ) {
        //----------------------------
        // Scolling down & header is visible
        //----------------------------

        if (scrolledFromTop > header.outerHeight() && stickyIsOn && sticky.offset().top > 230) {

          if((scrolledFromTop + sticky.outerHeight() + 60) < footer.offset().top){
            sticky.css({
              'position':'absolute',
              'top': header.offset().top + header.outerHeight() + 30,
              'width':stickyWidth
            });
          }
        }

        if(scrolledFromTop < 50 && sticky.offset().top < 230 && stickyIsOn){
          sticky.css({
            'position':'static',
            'margin-top': 0,
            'width':'100%'
          });
        }

        let topPosition = header.offset().top; // Фиксируем текущую позицию меню
        header.css({
          "top": topPosition + "px",
          "position": "absolute"
        });


        if(scrolledFromTop > (header.offset().top + 50 + header.outerHeight()) && stickyIsOn){
          sticky.css({
            "position": "absolute",
            "top": (topPosition + 30 + header.outerHeight()) + "px"
          });
        }

      }else {
        //----------------------------
        // Scolling down & header is unvisible
        //----------------------------

        if (scrolledFromTop > 200 && stickyIsOn) {
          if((scrolledFromTop + sticky.outerHeight() + 60) < footer.offset().top){
            sticky.css({
              'position':'fixed',
              'top': 30,
              'margin-top' : 0,
              'width':stickyWidth
            });
          }
          else {
            let delta2 = footer.offset().top - 230 - 30 - sticky.outerHeight();
            sticky.css({
              'position':'static',
              'margin-top': delta2,
              'width':'100%'
            });
          }
        }

        header.css({ // Позиционируем меню фиксированно вне экрана
          "position": "fixed",
          "top": "-" + header.outerHeight() + "px"
        });

      }

    }else {

      //__________________________________________
      //  Scolling up & header is midvisible
      //__________________________________________
      if ( scrolledFromTop > header.offset().top) {

        header.css({
          "top": header.offset().top + "px",
          "position": "absolute"
        });

        if(sticky.offset().top > scrolledFromTop &&
          stickyIsOn===true &&
          sticky.offset().top > (header.offset().top + header.outerHeight())){

          sticky.css({
            "position": "absolute",
            "top": (header.offset().top + 30 + header.outerHeight()) + "px",
            "width": stickyWidth,
            "margin-top": 0
          });
        }

        if (scrolledFromTop < 200 && stickyIsOn){
          sticky.css({
            "position": "absolute",
            "top": (header.offset().top + 30 + header.outerHeight()) + "px",
            "width": stickyWidth,
            "margin-top": 0
          });
        }

        if(sticky.offset().top < 230){
          sticky.css({
            'position':'static',
            'margin-top': 0,
            'width':'100%'
          });
        }

      }else {
        //________________________________________
        // Scolling up & header is visible
        //__________________________________________

        if((sticky.offset().top - header.outerHeight() - 30) >= scrolledFromTop && stickyIsOn ){

            sticky.css({
              "position": "fixed",
              'margin-top': 0,
              "top": (30 + header.outerHeight()) + "px",
              "width": stickyWidth
            });
        }
        if( sticky.offset().top < 230 && stickyIsOn){
          sticky.css({
            'position':'static',
            'margin-top': 0,
            'width':'100%'
          });
        }

        header.removeAttr("style");
      }
    }
    scrolledCurrent = scrolledFromTop;
  }
  return scrolledCurrent;
}