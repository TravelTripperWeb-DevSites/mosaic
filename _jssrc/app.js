//fallback ready document
function readyDoc(fn) {
	var d = document;
	(d.readyState == 'loading') ? d.addEventListener('DOMContentLoaded', fn): fn();
}

readyDoc(function() {

	// Slider With Images

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
			controlsContainer: "#reviews-controls",
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
			items: 1,
			gutter: 15,
			speed: 300,
			mouseDrag: true,
			edgePadding: 12,
			nav: false,
			controlsContainer: "#offers-controls",
			"responsive": {
				"768": {
					gutter: 80,
					edgePadding: 150,
				}
			}
		});
	}

})
