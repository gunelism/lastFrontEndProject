
jQuery(document).ready(function($) {
	// $(this).scrollTop(0);
	$x=true;
	$('#top1').fadeIn(1000);
	$(window).scroll(function() {
  var scrollTop = $(window).scrollTop();
  // var bounce = $('#trimg')
 	if(scrollTop>300){
 		$('.yuxar').css('transform','translate(0px)'),
 		$('.ashag').css('transform','translate(0px)')
 	}
 	if (scrollTop>600 && $x==true) {

 		$('#trimg').css("transform","translateX(100px)"),
 		$('#rightcome').css("transform","translateX(0px)")

 
	for (var i = 0; i < 2; i++) {
		$('#trimg').animate({marginLeft:'+=100px'},"fast")
		$('#trimg').animate({marginLeft:'-=100px'},'fast')
		$x=false;
	}

 	}
 	if (scrollTop>1100) {
 		$('#trimg2').css("transform","translateX(0px)"),
 		$('#rightcome2').css("transform","translateX(0px)")
 	}
 	if (scrollTop>1600) {
 		$('#trimg3').css("transform","translateX(0px)"),
 		$('#rightcome3').css("transform","translateX(0px)")
 	}
 	 if (scrollTop>600) {
		 	$('nav').removeClass('head');
		 	$('nav').addClass('head2');
		 }else{
		 	$('nav').removeClass('head2');
		 	$('nav').addClass('head');
		 }

 
});
 	$('#tab button').click(function(){
 		$('#tab button').removeClass('active');
 		$(this).addClass('active');
 	});
 			
 	$('.btn1').click(function(event) {
 		$('.first').css('display','block');
 		$('.second').css('display','none');
 		$('.third').css('display','none');
 	});
 	$('.btn2').click(function(event) {
 		$('.first').css('display','none');
 		$('.second').css('display','block');
 		$('.third').css('display','none');
 	});
 	$('.btn3').click(function(event) {
 		$('.first').css('display','none');
 		$('.second').css('display','none');
 		$('.third').css('display','block');
 	});

});
