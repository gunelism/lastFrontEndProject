
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

 		$('#trimg').css("transform","translateX(50px)"),
 		$('#rightcome').css("transform","translateX(-50px)")

 
	// for (var i = 0; i < 1; i++) {
		$('#trimg').animate({marginLeft:'+=50px'},"fast")
		$('#trimg').animate({marginLeft:'-=50px'},'fast')
		$('#rightcome').animate({marginLeft:'-=50px'},"fast")
		$('#rightcome').animate({marginLeft:'+=50px'},'fast')
		$x=false;
	// }

 	}
 	if (scrollTop>1100){
 		$('#trimg2').css("transform","translateX(-50px)")
 		$('#rightcome2').css("transform","translateX(50px)")

 	// 	$('#trimg2').animate({marginLeft:'-=50px'},"fast")
		// $('#trimg2').animate({marginLeft:'+=50px'},'fast')
		// $('#rightcome2').animate({marginLeft:'+=50px'},"fast")
		// $('#rightcome2').animate({marginLeft:'-=50px'},'fast')
		// $x=false;
 	}
 	if (scrollTop>1600) {
 		$('#trimg3').css("transform","translateX(0px)"),
 		$('#rightcome3').css("transform","translateX(0px)")
 	}
 	
 	if (scrollTop>2500) {
			$('#lorem .img1').css('transform', 'rotateX(0deg)')
		}

 	if (scrollTop>3000){
 		$('.sagdan').css("transform","translateX(0px)"),
 		setTimeout(function (argument) {
 			  $('.soldan').css("transform","translateX(0px)")
 		},300)
 	}
 	if(scrollTop>3310){
 		$('.leftcome4').css("transform","translateX(0px)")
 		$('.rightcome4').css("transform","translateX(0px)")
 	}
 	if(scrollTop>3500){
 		$('.frombot').css("transform","translateY(0px)")
 	}
 	if (scrollTop>4250){
 		 $('.frombot1').css("transform","translateY(0px)")

 	}
 	if (scrollTop>5300){
 		// $('.team1').css('display', 'block');
 		// $('.team3').css('display', 'block');
 		$('.team1').css("transform","translateX(0px)")

 		setTimeout(function (argument) {
 			  $('.team2').css("transform","translateX(0px)")
 		},100)
 		setTimeout(function (argument) {
 			  $('.team3').css("transform","translateX(0px)")
 		},200)
 		setTimeout(function (argument) {
 			  $('.team4').css("transform","translateX(0px)")
 		},300)



 	}

 	console.log(scrollTop);
 	// burda bitir scroll animation

 	//scroll ile navbarin gorunmesi
 	 if (scrollTop>600) {
		 	$('nav').removeClass('head');
		 	$('nav').addClass('head2');
		 	$('#hello').removeClass('scrollzero');	
		 	$('#hello').addClass('scrollzero1');
		 }else{
		 	$('nav').removeClass('head2');
		 	$('nav').addClass('head');
		 	$('#hello').removeClass('scrollzero1');	
		 	$('#hello').addClass('scrollzero');

		 }
	
 
});
	//navbara basarken active classlarin deyishmesi
 	$('li').on('click',function(){

 		$('li').removeClass('active1');
 		$(this).addClass('active1');

 	});

 	//scrollzero button funksiyasinin ishlemesi. yeni scrollun 
 	//sifirlasnmasi ucun 
 	$('#hello').click(function() {
 		$(document).scrollTo('#launch',800);
 	});





//tab section hissede her 3 duymeye aid funksiya ve animatinlarin ishe 
//dushmesi. burada birinci button ucun baslayir
 			
	$('.buttt').on('click',function(){
		$('.buttt').removeClass('active');
		$(this).addClass('active');
		
	})

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

	 $('#lorem .col').click(function() {
	    $('#lorem .col').removeClass('active4');
		$(this).addClass('active4');
	});


 	 $('#colOne').click(function() {
	 $('.img1').css('display', 'block');
	   $('.img2').css('display', 'none');
	   $('.img3').css('display', 'none');

	   setTimeout(function (argument) {
		 $('.img1').css('transform', 'rotateX(0deg)');
		},10);
		  $('.img2').css('transform', 'rotateY(88deg)');
		  $('.img3').css('transform', 'translateX(600px)');
	 });


	 $('#colTwo').click(function() {
	 	
	   $('.img .img1').css('display', 'none');
	    $('.img .img2').css('display', 'block');
	   $('.img .img3').css('display', 'none');
	    setTimeout(function (argument) {
		 $('.img2').css('transform', 'rotateY(0deg)');
		},10) 
		$('.img1').css('transform', 'rotateX(88deg)');
		$('.img3').css('transform', 'translateX(600px)');
	 });

	 $('#colThree').click(function() {
	   $('.img .img1').css('display', 'none');
	   $('.img .img2').css('display', 'none');
	    $('.img .img3').css('display', 'block');
	     setTimeout(function (argument) {
		 $('.img3').css('transform', 'translateX(0px)');
		},10) 
	     $('.img1').css('transform', 'rotateX(88deg)');
	     $('.img2').css('transform', 'rotateY(88deg)');
	 });

});
