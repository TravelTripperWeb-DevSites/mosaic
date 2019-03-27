//fallback ready document
function readyDoc(fn) {
	var d = document;
	(d.readyState == 'loading') ? d.addEventListener('DOMContentLoaded', fn): fn();
}

readyDoc(function() {

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

	if (document.getElementsByClassName('rooms-slider-container').length > 0) {
		// Slider With Images
		var sliderRooms = tns({
			container: '.rooms-slider-container',
			speed: 300,
			mouseDrag: true,
      items: 1.5,
      gutter: 80,
      loop: true,
      nav: true,
      prevButton: "#customNavItemsRooms .prev", // previous button
      nextButton: "#customNavItemsRooms .next", // next button
      navContainer: '#customNavItemsRooms .custom-control-items__nav',
		});

    function changeSlide(num) {
      sliderRooms.goTo(num);
    }

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
