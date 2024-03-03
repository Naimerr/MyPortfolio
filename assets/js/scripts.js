$(function(){

// feadback slider
$('.fd-slider').slick({
  slidesToShow: 1,
  arrows:false,
  autoplay:true,
  responsive:[
  {
    breakpoint:576,
    settings:{
      slidesToShow:1,
        centerMode:true,
      
    }
  }
]

});

});

