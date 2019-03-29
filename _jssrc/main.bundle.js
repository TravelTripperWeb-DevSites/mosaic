'use strict';

//fallback ready document
function readyDoc(fn) {
	var d = document;
	d.readyState == 'loading' ? d.addEventListener('DOMContentLoaded', fn) : fn();
}

readyDoc(function () {
	if (document.getElementById("close_offer_btn")) {
		document.getElementById("close_offer_btn").onclick = function () {
			var offerBar = document.getElementById("hero-offer");
			offerBar.style.display = 'none';
		};
	}

	if (document.getElementsByClassName('review-box__wrap').length > 0) {
		// Slider With Images
		var slider = tns({
			container: '.review-box__wrap',
			speed: 300,
			autoplay: true,
			autoplayHoverPause: true,
			autoplayTimeout: 3500,
			autoplayButtonOutput: false,
			mouseDrag: true,
			prevButton: "#reviews-controls .prev", // previous button
			nextButton: "#reviews-controls .next", // next button
			navContainer: '#reviews-controls .custom-control-items__nav'
		});
	}

	if (document.getElementsByClassName('rooms-slider-container').length > 0) {
		// Slider With Images
		var sliderRooms = tns({
			container: '.rooms-slider-container',
			speed: 300,
			mouseDrag: true,
			gutter: 12,
			edgePadding: 40,
			items: 1,
			loop: true,
			nav: true,
			center: true,
			prevButton: "#customNavItemsRooms .prev", // previous button
			nextButton: "#customNavItemsRooms .next", // next button
			navContainer: '#customNavItemsRooms .custom-control-items__nav',
			"responsive": {
				"768": {
					gutter: 160,
					edgePadding: 100,
					items: 1
				},
				"1300": {
					edgePadding: 200
				},
				"1600": {
					edgePadding: 400
				}
			}
		});
	}

	if (document.getElementsByClassName('dining-slider').length > 0) {
		// Slider With Images
		var slider = tns({
			container: '.dining-slider__wrap',
			speed: 300,
			autoplay: true,
			autoplayHoverPause: true,
			autoplayTimeout: 3500,
			autoplayButtonOutput: false,
			autoHeight: true,
			mouseDrag: true,
			controls: false
		});
	}

	if (document.getElementsByClassName('special-offers').length > 0) {
		// Slider With Images
		var slider = tns({
			container: '.special-offers-listings__wrap',
			items: 1.1,
			gutter: 15,
			speed: 300,
			mouseDrag: true,
			nav: false,
			prevButton: "#customNavItemsOffers .prev", // previous button
			nextButton: "#customNavItemsOffers .next", // next button
			navContainer: '#customNavItemsOffers .custom-control-items__nav',
			"responsive": {
				"768": {
					items: 1.4,
					gutter: 80
				}
			}
		});
	}
	if (document.getElementsByClassName('room-details__images__carousel').length > 0) {
		// Slider With Images
		var slider = tns({
			container: '.room-details__images__carousel',
			mouseDrag: true,
			controls: false
		});
	}
	if (document.getElementsByClassName('room-features__list').length > 0) {
		// Slider With Images
		var slider = tns({
			container: '.room-features__list',
			mouseDrag: true,
			nav: false,
			items: 2,
			prevButton: "#customNavItemsRoomFeatures .prev", // previous button
			nextButton: "#customNavItemsRoomFeatures .next", // next button
			navContainer: '#customNavItemsRoomFeatures .custom-control-items__nav',
			"responsive": {
				"768": {
					items: 3
				},
				"992": {
					items: 5
				}
			}
		});
	}
});
