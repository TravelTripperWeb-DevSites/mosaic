'use strict';

//fallback ready document
function readyDoc(fn) {
	var d = document;
	d.readyState == 'loading' ? d.addEventListener('DOMContentLoaded', fn) : fn();
}

readyDoc(function () {

	// Slider With Images

	if (document.getElementsByClassName('review-box__wrap').length > 0) {
		// Slider With Images
		var slider = tns({
			container: '.review-box__wrap',
			speed: 300,
			controlsContainer: "#reviews-controls",
			"responsive": {
				"768": {
					items: 1
				}
			}
		});
	}
});
