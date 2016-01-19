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


    //this is where we apply opacity to the arrow
    $(window).scroll(function(){

      //get scroll position
      var topWindow = $(window).scrollTop();
      //multipl by 1.5 so the arrow will become transparent half-way up the page
      var topWindow = topWindow * 1.5;
      
      //get height of window
      var windowHeight = $(window).height();
          
      //set position as percentage of how far the user has scrolled 
      var position = topWindow / windowHeight;
      console.log(position);
      //invert the percentage
      position = 1 - position;

      //define arrow opacity as based on how far up the page the user has scrolled
      //no scrolling = 1, half-way up the page = 0
      $('.arrow-wrap').css('opacity', position);

});





 // Hover effect on categories section pictures
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

  });