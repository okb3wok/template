import $ from './jQuery3.js'

export function stickyHeader (scrolledCurrent = 0,
  headerJQSelector='.hstr-header',
  footerJQSelector='.hstr-footer',
  stickyBlockJQSelector='#stickyBlock') {


  let header = $(headerJQSelector);
  let footer = $(footerJQSelector);
  let sticky = $(stickyBlockJQSelector);
  let stickyWidth = sticky.css('width');
  let scrolledFromTop = $(window).scrollTop(); // Скролл от верха документа в px
  let stickyIsOn = false;

  if($(document).width() > 630) {
    stickyIsOn = true;
  }
  else {
    stickyIsOn = false;
  }


  // Если скроллим
  if ( scrolledFromTop > 0 ) {

    if ( scrolledFromTop > scrolledCurrent ) {

      //__________________________________________
      //  Scolling down
      //__________________________________________

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
      }else {
        sticky.css({
          'position':'static',
          'margin-top': 0,
          'width':'100%'
        });
      }

      if (scrolledFromTop < header.outerHeight() + header.offset().top ) {
        //----------------------------
        // Scolling down & header is visible
        //----------------------------

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
        header.css({ // Позиционируем меню фиксированно вне экрана
          "position": "fixed",
          "top": "-" + header.outerHeight() + "px"
        });
      }

    }else {
      //__________________________________________
      //  Scolling up & header is visible
      //__________________________________________
      if ( scrolledFromTop > header.offset().top) {

        header.css({
          "top": header.offset().top + "px",
          "position": "absolute"
        });

        if(sticky.offset().top >= scrolledFromTop && stickyIsOn===true && sticky.offset().top > (header.offset().top + header.outerHeight())){
          console.log("здеесь")
          sticky.css({
            "position": "absolute",
            "top": (header.offset().top + 30 + header.outerHeight()) + "px",
            "width": stickyWidth,
            "margin-top": 0
          });
        }

      }else {
        //__________________________________________
        // Scolling up & header is unvisible
        //__________________________________________
        if((sticky.offset().top - header.outerHeight() - 30) > scrolledFromTop ){
          if(scrolledFromTop < 50){
            sticky.css({
              'position':'static',
              'margin-top': 0,
              'width':'100%'
            });
          }else {
            console.log(stickyWidth)
            sticky.css({
              "position": "fixed",
              'margin-top': 0,
              "top": (30 + header.outerHeight()) + "px",
              "width": stickyWidth
            });
          }
        }

        console.log(header.offset().top + 30 + header.outerHeight());
        header.removeAttr("style");

      }
    }
    scrolledCurrent = scrolledFromTop;
  }
  return scrolledCurrent;
}