$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

/*
	$("#tag1").on('click', '[href="#ссылка_на_блок"]', function(e){
		var fixed_offset = 100;
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
		e.preventDefault();
	});
*/
});


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

	$('a.btn-denis,a.btn-why,a.btn-motivation').click(function(){
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

	$('a.sec-five-btn').click(function(){
		var link = $(this).attr('href');
		var posi = $(link).offset().top;
		$('body,html').animate({scrollTop:posi},700);
	});
	$('a.sec-ten-btn').click(function(){
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

	//проверка формы
	$(".form-one").submit(function(a){
		$(".formPlaceholder").each(function() {
			if($(this).val() === ""){
				$(this).addClass("formInputError");
				$(".formTooltip").fadeIn(300);
				a.preventDefault();
			}
			else{
				$(this).removeClass("formInputError");
				$(".formTooltip").fadeOut();
			}
		});

		if($(".formInputError").size() == 0) {
			$(".formTooltip").fadeOut();
		}
	});

});


$(window).load(function() {



});
