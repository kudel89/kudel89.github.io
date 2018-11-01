$(function () {

	//SVG Fallback
	if (!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function () {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	// $("form").submit(function () { //Change
	// 	var th = $(this);
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mail.php", //Change
	// 		data: th.serialize()
	// 	}).done(function () {
	// 		alert("Thank you!");
	// 		setTimeout(function () {
	// 			// Done Functions
	// 			th.trigger("reset");
	// 		}, 1000);
	// 	});
	// 	return false;
	// });

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if ($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch (err) {

	};

	$("img, a").on("dragstart", function (event) {
		event.preventDefault();
	});
});

// SCROLL - TO
$(document).ready(function () {
	$(function () {
		$('a[href*=#]').on('click', function (e) {
			e.preventDefault();
			if ($(window).width() > 767) {
				$('html, body').animate({
					scrollTop: $($(this).attr('href')).offset().top - 90
				}, 500, 'linear');
			} else {
				$('html, body').animate({
					scrollTop: $($(this).attr('href')).offset().top
				}, 500, 'linear');
			}
		});
	});
});

// Waypoint
$('document').ready(function () {
	var s = $('section');
	var nav = $('ul li a');
	s.waypoint({
		handler: function (direction) {
			var active = $(this);
			if (direction == 'up')
				active = active.prev();
			var active_link = $('ul li a[href="#' + active.attr('id') + '"]');

			nav.parent().removeClass('active');
			active_link.parent().addClass('active');
		},
		offset: '15%'
	});

	// For 'Contact' link in NAV - [START]
	var e = $('footer');
	if ($(window).width() > 767) {
		e.waypoint({
			handler: function (direction) {
				var active = $(this);
				if (direction == 'up')
					active = active.prev();
				var active_link = $('ul li a[href="#' + active.attr('id') + '"]');

				nav.parent().removeClass('active');
				active_link.parent().addClass('active');
			},
			offset: 'bottom-in-view'
		});
	} else {
		e.waypoint({
			handler: function (direction) {
				var active = $(this);
				if (direction == 'up')
					active = active.prev();
				var active_link = $('ul li a[href="#' + active.attr('id') + '"]');

				nav.parent().removeClass('active');
				active_link.parent().addClass('active');
			},
			offset: '15%'
		});
	};
	// For 'Contact' link in NAV - [END]
});

// Sticky navbar
// =========================
$(document).ready(function () {
	// Custom function which toggles between sticky class (is-sticky)
	var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
		var stickyHeight = sticky.outerHeight();
		var stickyTop = stickyWrapper.offset().top;
		if (scrollElement.scrollTop() >= stickyTop) {
			stickyWrapper.height(stickyHeight);
			sticky.addClass("is-sticky");
		} else {
			sticky.removeClass("is-sticky");
			stickyWrapper.height('auto');
		}
	};

	// Find all data-toggle="sticky-onscroll" elements
	$('[data-toggle="sticky-onscroll"]').each(function () {
		var sticky = $(this);
		var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
		sticky.before(stickyWrapper);
		sticky.addClass('sticky');

		// Scroll & resize events
		$(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
			if ($(window).width() > 767) {
				stickyToggle(sticky, stickyWrapper, $(this));
			}
		});

		// On page load
		stickyToggle(sticky, stickyWrapper, $(window));
	});
});

// OWL Carousel - 1
$("#owl-one").owlCarousel({
	loop: true,
	items: 1,
	nav: true,
	margin: 0,
	autoplay: true,
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
	navText: [
		"<div class='nav-btn prev-slide'></div>",
		"<div class='nav-btn next-slide'></div>"
	]
});

// OWL Carousel - 2 & 3
$("#owl-two,#owl-three").owlCarousel({
	loop: true,
	center: true,
	dots: false,
	margin: 15,
	autoplay: true,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
	items: 3,
	nav: true,
	navText: [
		"<div class='nav-btn prev-slide-2'></div>",
		"<div class='nav-btn next-slide-2'></div>"
	],
	responsive: {
		0: {
			items: 1,
			margin: 10,
			stagePadding: 40
		},
		480: {
			items: 1,
			margin: 20,
			stagePadding: 80
		},
		576: {
			items: 2
		},
		1000: {
			items: 3
		}
	}
});


/* A C C O R D I O N */
$(document).ready(function () {
	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
		acc[i].onclick = function () {
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		}
	}
});

// Nav on mobiles
$(document).ready(function () {
	$("#js-navbar-toggle").click(function () {
		$("#js-menu").toggleClass("active");
		$(".navbar-toggle").toggleClass("change");
		$(".sticky.is-sticky.navbar").toggleClass("toggle");
	});

	$(".nav-section li a").click(function () {
		$("#js-menu").toggleClass("active");
		$(".navbar-toggle").toggleClass("change");
		$(".sticky.is-sticky.navbar").toggleClass("toggle");
	});
});