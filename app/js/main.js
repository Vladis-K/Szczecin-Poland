jQuery(function($) {

  var w = $('#slider-1').width();
        $('.all-slides>li').width(w);
        $('.all-slides').width(w*$('.all-slides>li').length);

        $('.all-slides').css('left', -w);
        $('.all-slides>li:last-child').prependTo('.all-slides');

        function next(){
           $('.all-slides').animate({
               'margin-left': -w
           }, 1200, function(){
              $('.all-slides>li:first-child').appendTo('.all-slides');
              $('.all-slides').css('margin-left', '0');
           })
       }
        $('#nextSlide').click(next);

        function prev(){
            $('.all-slides').animate({
                'margin-left': w
            }, 1200, function(){
                $('.all-slides>li:last-child').prependTo('.all-slides');
                $('.all-slides').css('margin-left', '0');
            })
        }
        $('#prevSlide').click(prev);
  
});





