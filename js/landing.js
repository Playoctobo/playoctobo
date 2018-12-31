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

  // line Scroll

  // product features

  // highly interactive
  $('.highly-interactive').mouseenter( function() {
    $('.highly-interactive-image').show();
    $('h2', this).css('color', '#15d4ef');
    $('.main-image').hide();
    $('.hover', this).show();
  });

  $('.highly-interactive').mouseleave( function() {
    $('.hover', this).hide();
    $('h2', this).css('color', '#1A2D45');
    $('.highly-interactive-image').hide();
    $('.main-image').show();
  });

  // operating system
  $('.operating-system').mouseenter( function() {
    $('.operating-system-image').show();
    $('h2', this).css('color', '#15d4ef');
    $('.main-image').hide();
    $('.hover', this).show();
  });

  $('.operating-system').mouseleave( function() {
    $('.hover', this).hide();
    $('h2', this).css('color', '#1A2D45');
    $('.operating-system-image').hide();
    $('.main-image').show();
  });

  // batteries
  $('.batteries').mouseenter( function() {
    $('.batteries-image').show();
    $('h2', this).css('color', '#15d4ef');
    $('.main-image').hide();
    $('.hover', this).show();
  });

  $('.batteries').mouseleave( function() {
    $('.hover', this).hide();
    $('h2', this).css('color', '#1A2D45');
    $('.batteries-image').hide();
    $('.main-image').show();
  });

  // hypoallergenic
  $('.hypoallergenic').mouseenter( function() {
    $('.hypoallergenic-image').show();
    $('h2', this).css('color', '#15d4ef');
    $('.main-image').hide();
    $('.hover', this).show();
  });

  $('.hypoallergenic').mouseleave( function() {
    $('.hover', this).hide();
    $('h2', this).css('color', '#1A2D45');
    $('.hypoallergenic-image').hide();
    $('.main-image').show();
  });

  // compatible tablet sizes
  $('.compTablet').mouseenter( function() {
    $('.compTablet-image').show();
    $('h2', this).css('color', '#15d4ef');
    $('.main-image').hide();
    $('.hover', this).show();
  });

  $('.compTablet').mouseleave( function() {
    $('.hover', this).hide();
    $('h2', this).css('color', '#1A2D45');
    $('.compTablet-image').hide();
    $('.main-image').show();
  });

  // genuine personality
  $('.genuine-personality').mouseenter( function() {
    $('.genuine-personality-image').show();
    $('h2', this).css('color', '#15d4ef');
    $('.main-image').hide();
    $('.hover', this).show();
  });

  $('.genuine-personality').mouseleave( function() {
    $('.hover', this).hide();
    $('h2', this).css('color', '#1A2D45');
    $('.genuine-personality-image').hide();
    $('.main-image').show();
  });

  // size
  $('.size').mouseenter( function() {
    $('.size-image').show();
    $('h2', this).css('color', '#15d4ef');
    $('.main-image').hide();
    $('.hover', this).show();
  });

  $('.size').mouseleave( function() {
    $('.hover', this).hide();
    $('h2', this).css('color', '#1A2D45');
    $('.size-image').hide();
    $('.main-image').show();
  });

  // soft and safe
  $('.soft-and-safe').mouseenter( function() {
    $('.soft-and-safe-image').show();
    $('h2', this).css('color', '#15d4ef');
    $('.main-image').hide();
    $('.hover', this).show();
  });

  $('.soft-and-safe').mouseleave( function() {
    $('.hover', this).hide();
    $('h2', this).css('color', '#1A2D45');
    $('.soft-and-safe-image').hide();
    $('.main-image').show();
  });

  // expanding app
  $('.expanding-app').mouseenter( function() {
    $('.expanding-app-image').show();
    $('h2', this).css('color', '#15d4ef');
    $('.main-image').hide();
    $('.hover', this).show();
  });

  $('.expanding-app').mouseleave( function() {
    $('.hover', this).hide();
    $('h2', this).css('color', '#1A2D45');
    $('.expanding-app-image').hide();
    $('.main-image').show();
  });
});
