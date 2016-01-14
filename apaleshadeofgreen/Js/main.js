$(function() {
 
   $('.scrollTo').on('click', goToSection);
        
   function goToSection(e) {
       e.preventDefault();
       
       var $this = $(this);
       var elemId = $this.attr('href');
       
       var $scrollToElem = $(elemId);
       
       // figure out postion from top of $scrollToELEm
       
   $('html,body').animate({
       scrollTop: $scrollToElem.offset().top},
       'slow');
};
   
   var siteHeader = $('.site-header');
   var siteHeaderScrolled = 'site-header-scrolled';
   var front = 120;

$(window).scroll(function() {
   
 if( $(this).scrollTop() > front ) {

   siteHeader.addClass(siteHeaderScrolled);
 } else {
   siteHeader.removeClass(siteHeaderScrolled);
 }
});
   
    
});