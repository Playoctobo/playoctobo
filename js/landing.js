let current = null;

$(document).ready(function() {
  // product feature tabs
  $('.tab-content > .tab-panel').hide();
  current = $('.tab-content > .tab-panel:first-of-type').show();

  $('.feature-tabs a').click(function(e) {
    e.preventDefault();

    var $this = $(this),
        tabContent = '#'+$this.parents('.tab-content').data('.tab-panel'),
        link = $this.closest('li').siblings().children('a'),
        target = $this.attr('href');

    if (current) {
      current.hide();
    }

    current = $(target);

    //link.removeClass('active');
    $this.addClass('active');
    $(tabContent).children('.tab-panel').hide();
    $(target).show();
  });

  $('.feature-tabs li').click(function() {
    $(this).addClass('active')
           .siblings('.active').removeClass('active');
  });

  // scroll test

  // product features
  $( ".feature" ).mouseenter(function() {
    $("." + $(this).attr("feature") + "-image").show();
    $('.main-image').hide();
  });

  // Add event for mouse leaving a feature
  $( ".feature" ).mouseleave(function() {
    $("." + $(this).attr("feature") + "-image").hide();
    $('.main-image').show();
  });

  // footer hover
  $(".facebook img").hover(
    function () {
      $(this).attr("src","./images/facebook.png");
    },
    function () {
      $(this).attr("src","./images/facebook.svg");
    }
  );

  $(".twitter img").hover(
    function () {
      $(this).attr("src","./images/twitter.png");
    },
    function () {
      $(this).attr("src","./images/twitter.svg");
    }
  );

  $(".instagram img").hover(
    function () {
      $(this).attr("src","./images/instagram.png");
    },
    function () {
      $(this).attr("src","./images/instagram.svg");
    }
  );
});
