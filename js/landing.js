let current = null;
let line = document.getElementById("line");
let length = line.getTotalLength();

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

  // How does it work line
  // The start position of the drawing
  line.style.strokeDasharray = length;

  // Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
  window.addEventListener("scroll", myFunction);

  function myFunction() {
    var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    var draw = length * scrollpercent;

    // Reverse the drawing (when scrolling upwards)
    line.style.strokeDashoffset = length - draw;
  };
});
