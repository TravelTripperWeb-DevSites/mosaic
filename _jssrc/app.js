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
			navAsThumbnails: "#custom-nav",
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

})
