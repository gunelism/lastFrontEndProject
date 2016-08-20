
jQuery(document).ready(function($) {
	$x=true;
	$('#top1').fadeIn(1000);
	$(window).scroll(function() {
		// scroll ile animation-lar ishlemesi
  var scrollTop = $(window).scrollTop();
 	if(scrollTop>300){
 		$('.yuxar').css('transform','translateY(0px)'),
 		$('.ashag').css('transform','translateY(0px)')
 	}
 	if (scrollTop>600 && $x==true) {

 		$('#trimg').css("transform","translateX(40px)"),
 		$('#rightcome').css("transform","translateX(-40px)")

 
	// for (var i = 0; i < 1; i++) {
		$('#trimg').animate({marginLeft:'+=50px'},"fast")
		$('#trimg').animate({marginLeft:'-=50px'},'fast')
		$('#rightcome').animate({marginLeft:'-=50px'},"fast")
		$('#rightcome').animate({marginLeft:'+=50px'},'fast')
		$x=false;
	// }

 	}
 	if (scrollTop>1100) {
 		$('#trimg2').css("transform","translateX(0px)"),
 		$('#rightcome2').css("transform","translateX(0px)")
 	}
 	if (scrollTop>1600) {
 		$('#trimg3').css("transform","translateX(0px)"),
 		$('#rightcome3').css("transform","translateX(0px)")
 	}
 	// burda bitir scroll animation

 	//scroll ile navbarin gorunmesi
 	 if (scrollTop>600) {
		 	$('nav').removeClass('head');
		 	$('nav').addClass('head2');
		 }else{
		 	$('nav').removeClass('head2');
		 	$('nav').addClass('head');
		 }
	
 
});
	//navbara basarken active classlarin deyishmesi
 	$('li').on('click',function(){

 		$('li').removeClass('active1');
 		$(this).addClass('active1');

 	});

//tab section hissede her 3 duymeye aid funksiya ve animatinlarin ishe 
//dushmesi. burada birinci button ucun baslayir
 			
 	$('.btn1').click(function(event) {


 		$('.first').css('display','block');
 		$('.second').css('display','none');
 		$('.third').css('display','none');

 		 $('.fromTop').css('transform','translateY(-250px)');


 		setTimeout(function (argument) {
 			  $('#rightcome').css('transform','translateX(-50px)');
 			  $('#trimg').css('transform','translateX(50px)');
 		},1)

 			for (var i=0; i<1; i++) {
 				$('#rightcome').animate({marginLeft: '-=50px'}, 'fast')
 				$('#rightcome').animate({marginLeft: '+=50px'}, 'fast')
 				$('#trimg').animate({marginLeft: '+=50px'}, 'fast')
 				$('#trimg').animate({marginLeft: '-=50px'}, 'fast')
 				$x=false;
 			}
 	

 			$('#tabRightCome1').css('transform','translateX(800px)');
 		$('#tabLeftCome1').css('transform','translateX(-800px)');
 		$('#tabRightCome1').css({marginLeft: '0px'});
 		$('#tabLeftCome1').css({marginLeft: '0px'});
 	});

//ikinci button bu hissede bashlayir
 	$('.btn2').click(function(event) {

 		$('#rightcome').css('transform','translateX(800px)');
 		$('#trimg').css('transform','translateX(-800px)');

 		$('#rightcome').css({marginLeft: '0px'});
 		$('#trimg').css({marginLeft: '0px'});


 		 $('.fromTop').css('transform','translateY(-250px)');


 		setTimeout(function (argument) {
 			  $('#tabRightCome1').css('transform','translateX(-40px)');
 			  $('#tabLeftCome1').css('transform','translateX(40px)');
 		},1)

 		// for (var i=0; i<1; i++) {
 		// 		$('#tabRightCome1').animate({marginLeft: '-=40px'}, 'fast')
 		// 		$('#tabRightCome1').animate({marginLeft: '+=40px'}, 'fast')
 		// 		$('#tabLeftCome1').animate({marginLeft: '+=40px'}, 'fast')
 		// 		$('#tabLeftCome1').animate({marginLeft: '-=40px'}, 'fast')
 		// 		$x=false;
 		// 	}



 		$('.first').css('display','none');
 		$('.second').css('display','block');
 		$('.third').css('display','none');
 	});
 	
 //ucuncu button ise burada bashlayir
 	$('.btn3').click(function(event) {
 		$('.first').css('display','none');
 		$('.second').css('display','none');
 		$('.third').css('display','block');
 		
	 		setTimeout(function (argument){

	 		$('.fromTop').css({transform:'translateY(0px)'})
 		// $('#textshow').css('fontSize', '16px') ???????????????????

	 		},1);



 		$('#rightcome').css('transform','translateX(800px)');
 		$('#trimg').css('transform','translateX(-800px)');
 		$('#rightcome').css({marginLeft: '0px'});
 		$('#trimg').css({marginLeft: '0px'});

 		$('#tabRightCome1').css('transform','translateX(800px)');
 		$('#tabLeftCome1').css('transform','translateX(-800px)');
 		$('#tabRightCome1').css({marginLeft: '0px'});
 		$('#tabLeftCome1').css({marginLeft: '0px'});

 	// ????	$('#textShow').show('slow');


 		
 	});

});
