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
});

// The start position of the drawing
line.style.strokeDasharray = length;

window.addEventListener("scroll", myFunction);

function myFunction() {
  var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  var draw = length * scrollpercent;

  // Reverse the drawing (when scrolling upwards)
  line.style.strokeDashoffset = length - draw;
};
