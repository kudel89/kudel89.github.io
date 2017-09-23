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



/*HIDE youtube text*/
$(document).ready(function() {
	$('p.why-video-text').click(function(){
		console.log('click');
		$(this).hide();
	})
});


/* СКРОЛЛ */
$(document).ready(function() {
	/* highlight the top nav as scrolling occurs */
	$('body').scrollspy({ target: '#nav' })

	/* smooth scrolling for scroll to top */
	$('.scroll-top').click(function(){
		$('body,html').animate({scrollTop:0},1000);
	})

	$('#nav .navbar-nav li>a').click(function(){
		var link = $(this).attr('href');
		var posi = $(link).offset().top;
		$('body,html').animate({scrollTop:posi},700);
	});

	$('a.btn-denis,a.btn-why,a.btn-motivation,a.btn-reason-denis,a.btn-reason-irina,a.btn-reason-stanislav').click(function(){
		var link = $(this).attr('href');
		var posi = $(link).offset().top;
		$('body,html').animate({scrollTop:posi},700);
	});

	$('a.why-more-denis').click(function(){
		var link = $(this).attr('href');
		var posi = $(link).offset().top;
		$('body,html').animate({scrollTop:posi},700);
	});

	$('a.why-more-irina').click(function(){
		var link = $(this).attr('href');
		var posi = $(link).offset().top;
		$('body,html').animate({scrollTop:posi},700);
	});

	$('a.why-more-stanislav').click(function(){
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



// POPUP Settings
$(document).ready(function(){

	// placeholder 
	var placeHolder = 0;
		$(".formPlaceholder").focus(function(){
			placeHolder = $(this).attr("placeholder");
			$(this).attr({"placeholder" : ""});
		});

		$(".formPlaceholder").focusout(function(){
			$(this).attr({"placeholder" : placeHolder});
		});

	//проверка формы внизу
	$(".form-one").submit(function(a){
		$(".formPlaceholder").each(function() {
			if($(this).val() === ""){
				$(this).addClass("formInputError");
				$(".formTooltip").fadeIn(300);
				a.preventDefault();
			}
			else{
				$(this).removeClass("formInputError");
				$(".formTooltip").fadeOut(300);
				$('#thank').modal('show');
			}
		});

		if($(".formInputError").size() == 0) {
			$(".formTooltip").fadeOut();
		}
	});

	//проверка modal формы 1
	$(".form-modal-1").submit(function(a){
		$(".modalPlaceholder1").each(function() {
			if($(this).val() === ""){
				$(this).addClass("modalInputError1");
				$(".modalTooltip1").fadeIn(300);
				a.preventDefault();
			}
			else{
				$(this).removeClass("modalInputError1");
				$(".modalTooltip1").fadeOut(300);
				$('#thank').modal('show');
			}
		});

		if($(".modalInputError1").size() == 0) {
			$(".modalTooltip1").fadeOut();
		}
	});

	//проверка modal формы 2
	$(".form-modal-2").submit(function(a){
		$(".modalPlaceholder2").each(function() {
			if($(this).val() === ""){
				$(this).addClass("modalInputError2");
				$(".modalTooltip2").fadeIn(300);
				a.preventDefault();
			}
			else{
				$(this).removeClass("modalInputError2");
				$(".modalTooltip2").fadeOut(300);
				$('#thank').modal('show');
			}
		});

		if($(".modalInputError2").size() == 0) {
			$(".modalTooltip2").fadeOut();
		}
	});

	//проверка modal формы 3
	$(".form-modal-3").submit(function(a){
		$(".modalPlaceholder3").each(function() {
			if($(this).val() === ""){
				$(this).addClass("modalInputError3");
				$(".modalTooltip3").fadeIn(300);
				a.preventDefault();
			}
			else{
				$(this).removeClass("modalInputError3");
				$(".modalTooltip3").fadeOut(300);
				$('#thank').modal('show');
			}
		});

		if($(".modalInputError3").size() == 0) {
			$(".modalTooltip3").fadeOut();
		}
	});

	//проверка modal формы 4
	$(".form-modal-4").submit(function(a){
		$(".modalPlaceholder4").each(function() {
			if($(this).val() === ""){
				$(this).addClass("modalInputError4");
				$(".modalTooltip4").fadeIn(300);
				a.preventDefault();
			}
			else{
				$(this).removeClass("modalInputError4");
				$(".modalTooltip4").fadeOut(300);
				$('#thank').modal('show');
			}
		});

		if($(".modalInputError4").size() == 0) {
			$(".modalTooltip4").fadeOut();
		}
	});

	//проверка modal формы 5
	$(".form-modal-5").submit(function(a){
		$(".modalPlaceholder5").each(function() {
			if($(this).val() === ""){
				$(this).addClass("modalInputError5");
				$(".modalTooltip5").fadeIn(300);
				a.preventDefault();
			}
			else{
				$(this).removeClass("modalInputError5");
				$(".modalTooltip5").fadeOut(300);
				$('#thank').modal('show');
			}
		});

		if($(".modalInputError5").size() == 0) {
			$(".modalTooltip5").fadeOut();
		}
	});


});



/* Collapse NAV after click #nav > li > a item */
$(document).ready(function () {
	$("#nav").find("li").on("click", "a", function () {
		$('.navbar-collapse.in').collapse('hide');
	});
});


$(window).load(function() {



});