$(function() {
  $(".cs aside figure a").fancybox({
    openEffect	: 'elastic',
    closeEffect	: 'elastic'
  });
  
  $(".cs_nav li a").hover(
    function () {
        $(this).children().removeClass('out').addClass('over');
    },
    function () {
        $(this).children().removeClass('over').addClass('out');
    }
  );
});
