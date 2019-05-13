
// ======================================================
//  Library : bind drag scroll
// ======================================================



window.bindDragScroll = function ($container, $scroller) {
  console.log("bindDragScroll")
  var $window = $(window);

  var x = 0;
  var y = 0;

  var x2 = 0;
  var y2 = 0;
  var t = 0;

  $container.on("mousedown", down);
  $container.on("click", preventDefault);
  $scroller.on("mousewheel", horizontalMouseWheel); // prevent macbook trigger prev/next page while scrolling

  function down(evt) {
    if (evt.button === 0) {
      t = Date.now();
      x = x2 = evt.pageX;
      y = y2 = evt.pageY;

      $container.addClass("down");
      $window.on("mousemove", move);
      $window.on("mouseup", up);

      evt.preventDefault();
    }
  }

  function move(evt) {
    if ($container.hasClass("down")) {
      var _x = evt.pageX;
      var _y = evt.pageY;
      var deltaX = _x - x;
      var deltaY = _y - y;

      $scroller[0].scrollTop -= deltaY;
      $scroller[0].scrollLeft -= deltaX;

      x = _x;
      y = _y;
    }
  }

  function up(evt) {
    $window.off("mousemove", move);
    $window.off("mouseup", up);

    var deltaT = Date.now() - t;
    var deltaX = evt.pageX - x2;
    var deltaY = evt.pageY - y2;
    if (deltaT <= 300) {
      $scroller.stop().clearQueue().animate(
        {
          scrollTop: "-=" + deltaY * 3,
          scrollLeft: "-=" + deltaX * 3
        },
        500,
        function(x, t, b, c, d) {
          // easeOutCirc function from http://gsgd.co.uk/sandbox/jquery/easing/
          return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        }
      );
    }

    t = 0;

    $container.removeClass("down");
  }

  function preventDefault(evt) {
    if (x2 !== evt.pageX || y2 !== evt.pageY) {
      evt.preventDefault();
      return false;
    }
  }

  function horizontalMouseWheel(evt) {
    evt = evt.originalEvent;
    var x = $scroller.scrollLeft();
    var max = $scroller[0].scrollWidth - $scroller[0].offsetWidth;
    var dir = evt.deltaX || evt.wheelDeltaX;
    var stop = dir > 0 ? x >= max : x <= 0;
    if (stop && dir) {
      evt.preventDefault();
    }
  }
}



jQuery( document ).ready(function(jQuery) {

  // because conflic reasnon, so load the library here.
  (function($){

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *       the user visible viewport of a web browser.
     *       can accounts for vertical position, horizontal, or both
     */
    var $w=$(window);
    $.fn.visible = function(partial,hidden,direction,container){

        if (this.length < 1)
            return;

  // Set direction default to 'both'.
  direction = direction || 'both';

        var $t          = this.length > 1 ? this.eq(0) : this,
  					isContained = typeof container !== 'undefined' && container !== null,
  					$c				  = isContained ? $(container) : $w,
  					wPosition        = isContained ? $c.position() : 0,
            t           = $t.get(0),
            vpWidth     = $c.outerWidth(),
            vpHeight    = $c.outerHeight(),
            clientSize  = hidden === true ? t.offsetWidth * t.offsetHeight : true;

        if (typeof t.getBoundingClientRect === 'function'){

            // Use this native browser method, if available.
            var rec = t.getBoundingClientRect(),
                tViz = isContained ?
  											rec.top - wPosition.top >= 0 && rec.top < vpHeight + wPosition.top :
  											rec.top >= 0 && rec.top < vpHeight,
                bViz = isContained ?
  											rec.bottom - wPosition.top > 0 && rec.bottom <= vpHeight + wPosition.top :
  											rec.bottom > 0 && rec.bottom <= vpHeight,
                lViz = isContained ?
  											rec.left - wPosition.left >= 0 && rec.left < vpWidth + wPosition.left :
  											rec.left >= 0 && rec.left <  vpWidth,
                rViz = isContained ?
  											rec.right - wPosition.left > 0  && rec.right < vpWidth + wPosition.left  :
  											rec.right > 0 && rec.right <= vpWidth,
                vVisible   = partial ? tViz || bViz : tViz && bViz,
                hVisible   = partial ? lViz || rViz : lViz && rViz,
  	vVisible = (rec.top < 0 && rec.bottom > vpHeight) ? true : vVisible,
                hVisible = (rec.left < 0 && rec.right > vpWidth) ? true : hVisible;

            if(direction === 'both')
                return clientSize && vVisible && hVisible;
            else if(direction === 'vertical')
                return clientSize && vVisible;
            else if(direction === 'horizontal')
                return clientSize && hVisible;
        } else {

            var viewTop 				= isContained ? 0 : wPosition,
                viewBottom      = viewTop + vpHeight,
                viewLeft        = $c.scrollLeft(),
                viewRight       = viewLeft + vpWidth,
                position          = $t.position(),
                _top            = position.top,
                _bottom         = _top + $t.height(),
                _left           = position.left,
                _right          = _left + $t.width(),
                compareTop      = partial === true ? _bottom : _top,
                compareBottom   = partial === true ? _top : _bottom,
                compareLeft     = partial === true ? _right : _left,
                compareRight    = partial === true ? _left : _right;

            if(direction === 'both')
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop)) && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
            else if(direction === 'vertical')
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop));
            else if(direction === 'horizontal')
                return !!clientSize && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
        }
    };

  })(jQuery);
  // $(window).bind('mousewheel DOMMouseScroll',function(event){
  //   console.log("mousewheel",event.originalEvent.deltaX)
  // });




// ======================================================
//  bind mini-game events
// ======================================================
  var startX;
  var itemSelector = ".eye";
  var activeClassName = "active"
  var containerSelector = "#mini-game-wrapper"
  var scrollerSelector = "#mini-game-eye-container"
  var scrollerInnerSelector = "#mini-game-eye-container-inner"



  var centerNumber =  Math.round($(itemSelector).length / 2 );
  var elementWidth = 170 ;

  var $container = $(containerSelector);
  var $scroller = $(scrollerSelector);
  var autoPlayIntervalId ;

  $(document).on("mousedown", scrollerSelector, function() {
    $(itemSelector).removeClass(activeClassName);
    startX = $scroller.scrollLeft();
    console.log("mousedown", startX);
  });
  $(document).on("mousemove",containerSelector, function(){
    if(startX === null) return
    var scrollX = $scroller.scrollLeft();
    var hMove = scrollX - startX  ;
    if (Math.abs(hMove) > elementWidth){
      if (hMove > 0){
        move(true)
      }else{
        move(false)
      }
    }
  })
  $(document).on("mouseup", OnDragEnd);

  function OnDragEnd() {
    var scrollX = $scroller.scrollLeft();
    console.log("mouseup", scrollX);

    if (startX === null || scrollX === startX) {
      $( itemSelector + ":nth-of-type(" + centerNumber + ")").addClass(activeClassName);
      return;
    }

    console.log("mouseup");
    console.log(startX);

    if (Math.abs(scrollX - startX) > (elementWidth /2)){
      if (scrollX > startX) {
        next();
      } else {
        pre();
      }
    }else{
      scroll()
    }

  }

  $(window).on("resize",function(){
    $scroller.stop().scrollLeft(($(scrollerInnerSelector).width() - $scroller.width() )/ 2);
    startX = $scroller.scrollLeft()
    OnDragEnd()
  })


  $(document).on("scroll",rigister_mini_game_auto_play)
  function rigister_mini_game_auto_play(){
    console.log("hey")
    if (!$scroller.visible(true)) return ;
    auto_play();
    $(document).off("scroll",rigister_mini_game_auto_play)
  }
  rigister_mini_game_auto_play()


  $scroller.on("mouseover",function(){
    if (autoPlayIntervalId){
      console.log("mouseover",autoPlayIntervalId)
      clearInterval(autoPlayIntervalId)
      autoPlayIntervalId = null
      console.log("mouseover",autoPlayIntervalId)
    }
  })
  $scroller.on("mouseleave",function(){
    console.log("mouseout",autoPlayIntervalId)
    if (!autoPlayIntervalId){
      auto_play()
    }
    console.log("mouseout",autoPlayIntervalId)

  })

// ======================================================
//  feature tabs
// ======================================================

  $("#innovative-storytelling, #emotional-feedback ,#expanding-digital-library ").parent(".index-section").addClass("nopadding");
  $(".feature-nav-item").on("click",function(){
    var scrollTop = $(document).scrollTop();
    $(".feature-nav-item").removeClass("active");
    $("#innovative-storytelling, #emotional-feedback ,#expanding-digital-library ").removeClass("active")
    $($(this).data("href")).addClass("active");
    $("[data-href='" + $(this).data("href") +"']").addClass("active")
    $(document).scrollTop(scrollTop);
  });


// ======================================================
//  internal scroll
// ======================================================

  function scroll() {
    // $scroller.off();

    console.log("scroll",($(scrollerInnerSelector).width() - $scroller.width() )/ 2)
    $scroller
      .stop()
      .animate(
        {
          scrollLeft: ($(scrollerInnerSelector).width() - $scroller.width() )/ 2
        },
        function() {
          $(itemSelector + ":nth-of-type("+centerNumber+")").addClass(activeClassName);
          window.setTimeout(window.bindScrollEvent, 1);
          startX = null ;
        }
      );
    console.log($scroller.scrollLeft());
  }

  function next() {
    move(true);
    scroll();
  }
  function pre() {
    move(false);
    scroll();
  }

  function move(next) {
    var first = itemSelector + ":first-of-type";
    var last = itemSelector + ":last-of-type";
    var scrollX = $scroller.scrollLeft();

    if (next) {
      $(first).insertAfter(last).css({opacity : 0 }).animate({opacity: 1},300);
      $scroller.scrollLeft(scrollX - elementWidth);
    } else {
      $(last).insertBefore(first).css({opacity : 0 }).animate({opacity: 1},300);
      $scroller.scrollLeft(scrollX + elementWidth);
    }
  }
  function auto_next(){
    if (startX !== null) return
    $scroller
      .queue(function() {
        $(itemSelector).removeClass(activeClassName);
        $(this).dequeue();
      })
      .delay(500)
      .queue(function() {
        next()
        $(this).dequeue();
      })
  }
  function auto_play (){
    setTimeout(function(){
      auto_next();
      if (!autoPlayIntervalId)
        autoPlayIntervalId = setInterval(auto_next,5000)
      console.log("autoPlayIntervalId",autoPlayIntervalId)
    },3000)
  }


// ======================================================
//  main flow
// ======================================================

  scroll();

  // main


  window.bindDragScroll($container, $scroller);
});
