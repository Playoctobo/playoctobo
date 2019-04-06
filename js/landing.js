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

  // stop video embed from playing
  $('.close').click(function () {
    var $iframe = $(this).parent().find("iframe");
    $iframe.attr("src", $iframe.attr("src"));
  });

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
});
