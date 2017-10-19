$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};


	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});



/* СКРОЛЛ */
$(document).ready(function() {
	/* highlight the top nav as scrolling occurs */
	$('body').scrollspy({ target: '#nav' })

	/* smooth scrolling for scroll to top */
	$('.scroll-top').click(function(){
		$('body,html').animate({scrollTop:0},1000);
	})

	$('.menu>a').click(function(){
		var link = $(this).attr('href');
		var posi = $(link).offset().top;
		$('body,html').animate({scrollTop:posi},700);
	});

	$('a.sec-one-btn,a.sec-three-btn,a.sec-five-btn,a.sec-seven-btn,a.sec-eight-btn-denis,a.sec-eight-btn-irina,a.sec-eight-btn-stas').click(function(){
		var link = $(this).attr('href');
		var posi = $(link).offset().top;
		$('body,html').animate({scrollTop:posi},700);
	});

});



/* Modal CENTER */
$(document).ready(function() {
	function centerModals(){
		$('.modal').each(function(i){
			var $clone = $(this).clone().css('display', 'block').appendTo('body');
			var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
			top = top > 0 ? top : 0;
			$clone.remove();
			$(this).find('.modal-content').css("margin-top", top);
		});
	}
	$('.modal').on('show.bs.modal', centerModals);
	$(window).on('resize', centerModals);
});



/* A C C O R D I O N */
$(document).ready(function() {
	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
		acc[i].onclick = function() {
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.maxHeight){
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		}
	}
});


$(window).load(function() {



});