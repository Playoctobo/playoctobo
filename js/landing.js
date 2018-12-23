$(document).ready(function() {
  $('.tab-content > .tab-panel').hide();
  $('.tab-content > .tab-panel:first-of-type').show();

  $('.feature-tabs a').click(function(e) {
    e.preventDefault();

    var $this = $(this),
        tabContent = '#'+$this.parents('.tab-content').data('.tab-panel'),
        link = $this.closest('li').siblings().children('a'),
        target = $this.attr('href');

    link.removeClass('active');
    $this.addClass('active');
    $(tabContent).children('.tab-panel').hide();
    $(target).show();
  });
});
