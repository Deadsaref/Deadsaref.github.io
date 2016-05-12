$(document).ready(function () {
  var menuElementPath = '#menu li';
  var slidePath = '.slide';
  $(menuElementPath).click(function () {
    $(menuElementPath).removeClass('active');
    $(this).addClass('active');
    $(slidePath).removeClass('active');   
    var c = $(this).attr('id').split('-');
    $(slidePath+'[class*="'+c[1]+'"]').addClass('active');
  });
});