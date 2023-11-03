"use strict";
import $ from './jQuery3.js'
import {stickyThings} from './stickyThings.js'


$(document).ready(function () {

  $(".hstr-footer").addClass("loaded");
  $(".menu-item").click(function() {
    let page_number = $( "li" ).index( this );
    $( ".hstr-content" ).css("display" , "none");
    $( "#page" + page_number ).css("display" , "block");
  });




  //------
  // Sticky
  //-----
  let scrolledPrev = 0 // Предыдущее значение скролла

  $(window).scroll(function() {
    scrolledPrev = stickyThings(scrolledPrev);
  });


  //---------------------------------
  //  Sticky Block
  //---------------------------------
  $(window).resize(function(){
    scrolledPrev = stickyThings(scrolledPrev);
  });



  //---------------------------------
  //  To top
  //---------------------------------
  var offset = 220;
  var duration = 300;

  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      $('#totop').fadeIn(duration);
    } else {
      $('#totop').fadeOut(duration);
    }
  });

  $('#totop').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, duration);
    return false;
  });


  //------
  // Burger toggle
  //-----
  $('#menu-burger').click(function() {
    $('.header-menu').toggleClass( "header-menu--disabled" );

  })


});
