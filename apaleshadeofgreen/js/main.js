$(function() {

/* ---------------------------------------------------------------------

Animated scrolling to selected section in nav bar 

--------------------------------------------------------------------- */
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

/* ---------------------------------------------------------------------

 Scroll down arrow on Carousel

--------------------------------------------------------------------- */
 

   $('.scroll-down').on('click', gotoAbout);
        
   function gotoAbout(e) {
       e.preventDefault();
       
       var $this = $(this);
       var elemId = $this.attr('href');
       
       var $scrollToElem = $(elemId);


   $('html,body').animate({
       scrollTop: $scrollToElem.offset().top},
       1000);
    };

/* ---------------------------------------------------------------------

 learn more button on Carousel

--------------------------------------------------------------------- */
 

   $('.button-primary').on('click', gotoAbout);
        
   function gotoAbout(e) {
       e.preventDefault();
       
       var $this = $(this);
       var elemId = $this.attr('href');
       
       var $scrollToElem = $(elemId);


   $('html,body').animate({
       scrollTop: $scrollToElem.offset().top},
       1000);
    };
    
});





 