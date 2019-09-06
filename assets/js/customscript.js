;$(function () {
  $('[data-toggle="tooltip"]').tooltip({
  	viewport: '.tooltip'
  })
});
$('.social').on("mouseenter", function(){
		$("#social-span").fadeIn(500)
	});

$('.modal').on("mouseleave", function(){
		$("#social-span").fadeOut()
	});


;