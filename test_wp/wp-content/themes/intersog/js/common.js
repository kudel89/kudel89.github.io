$(document).ready(function() {

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


	/* Header links dropdown */

/*
	$(function() {
		$('.navbar li a').click(function () {
			$('.navbar li').removeClass('current_page_item');
			$(this).parent().toggleClass('current_page_item');
		});
	});
*/



	$(function() {
		$('#menu-item-106 a').click(function () {
			$(this).parent().toggleClass('active-custom');
			$(this).parent().next().removeClass('active-custom');
		});

		$('#menu-item-107 a').click(function () {
			$(this).parent().toggleClass('active-custom');
			$(this).parent().prev().removeClass('active-custom');
		});
	});




	/* Footer navigation dropdowns */
	$(function() {
		$('.footer-links-holder h4').click(function () {
			$(this).parent().toggleClass('active');
		});
	});


	/* FORM dropdown for select-country */
	$(function() {
		$('#select-country').change(function(){
			$('#result').html($(this).val());
		}).trigger('change');
	});




	/* Select price */
	$(function() {

		var paymentPriceText;

		/* Plan price one */
		$("#tab1").click(function(){
			paymentPriceText = $('html').find('#label1').text();
			$('html').find("p.payment-price-text span").text(paymentPriceText);
		});
		$("#tab2").click(function(){
			paymentPriceText = $('html').find('#label2').text();
			$('html').find("p.payment-price-text span").text(paymentPriceText);
		});
		$("#tab3").click(function(){
			paymentPriceText = $('html').find('#label3').text();
			$('html').find("p.payment-price-text span").text(paymentPriceText);
		});

		/* Plan price two */
		$("#tab4").click(function(){
			paymentPriceText = $('html').find('#label4').text();
			$('html').find("p.payment-price-text span").text(paymentPriceText);
		});
		$("#tab5").click(function(){
			paymentPriceText = $('html').find('#label5').text();
			$('html').find("p.payment-price-text span").text(paymentPriceText);
		});
		$("#tab6").click(function(){
			paymentPriceText = $('html').find('#label6').text();
			$('html').find("p.payment-price-text span").text(paymentPriceText);
		});

		/* Plan price three */
		$("#tab7").click(function(){
			paymentPriceText = $('html').find('#label7').text();
			$('html').find("p.payment-price-text span").text(paymentPriceText);
		});
		$("#tab8").click(function(){
			paymentPriceText = $('html').find('#label8').text();
			$('html').find("p.payment-price-text span").text(paymentPriceText);
		});
		$("#tab9").click(function(){
			paymentPriceText = $('html').find('#label9').text();
			$('html').find("p.payment-price-text span").text(paymentPriceText);
		});

	});




	/* Choose plan COLOR */
	$(function() {

		$('#tab1, #tab2, #tab3').click(function() {
			$('html').find('.plan-heading').removeClass('plan-two-color');
			$('html').find('.plan-heading').removeClass('plan-three-color');
			$('html').find('.plan-heading').addClass('plan-one-color');

			$('html').find('.choose-plan').css("border", "#2099d4 solid 1px");
			$('html').find('.account').css("border", "#2099d4 solid 1px");
			$('html').find('.payment').css("border", "#2099d4 solid 1px");
			$('html').find('.personal-info').css("border", "#2099d4 solid 1px");
		});

		$('#tab4, #tab5, #tab6').click(function() {
			$('html').find('.plan-heading').removeClass('plan-one-color');
			$('html').find('.plan-heading').removeClass('plan-three-color');
			$('html').find('.plan-heading').addClass('plan-two-color');

			$('html').find('.choose-plan').css("border", "#0d9446 solid 1px");
			$('html').find('.account').css("border", "#0d9446 solid 1px");
			$('html').find('.payment').css("border", "#0d9446 solid 1px");
			$('html').find('.personal-info').css("border", "#0d9446 solid 1px");
		});

		$('#tab7, #tab8, #tab9').click(function() {
			$('html').find('.plan-heading').removeClass('plan-one-color');
			$('html').find('.plan-heading').removeClass('plan-two-color');
			$('html').find('.plan-heading').addClass('plan-three-color');

			$('html').find('.choose-plan').css("border", "#133866 solid 1px");
			$('html').find('.account').css("border", "#133866 solid 1px");
			$('html').find('.payment').css("border", "#133866 solid 1px");
			$('html').find('.personal-info').css("border", "#133866 solid 1px");
		});

	});



});
