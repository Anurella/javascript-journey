function() {
  var currentTabIndex = $(this).index();
  var tabsContainer = $(this).closest('.eael-advance-tabs');
  var tabsNav = $(tabsContainer).children('.eael-tabs-nav').children('ul').children('li');
  var tabsContent = $(tabsContainer).children('.eael-tabs-content').children('div');

  $(this).parent('li').addClass('active');

  $(tabsNav).removeClass('active active-default').addClass('inactive');
  $(this).addClass('active').removeClass('inactive');

  $(tabsContent).removeClass('active').addClass('inactive');
  $(tabsContent).eq(currentTabIndex).addClass('active').removeClass('inactive');

  $(tabsContent).each(function(index) {
    $(this).removeClass('active-default');
  });
}

-- current tab index; 

  var currentTab = $('.eael-tabs-content div.active').index();
