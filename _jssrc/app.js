//fallback ready document

function readyDoc(fn) {
	var d = document;
	(d.readyState == 'loading') ? d.addEventListener('DOMContentLoaded', fn): fn();
}

readyDoc(function() {

	if (document.getElementById("intro_slide_hover")) {
    var sliderIntro = tns({
      container: '#intro_slide_hover',
      autoplayTimeout: 2000,
      mode: 'gallery',
			freezable: false,
      loop: true,
			speed: 500,
      items: 1,
      autoplay: true
    });

    var info = sliderIntro.getInfo();
    sliderIntro.pause();
    var checkhover = 0;
    info.container.onmouseover = function() {
			if(checkhover == 0) {
				checkhover = 1;
				sliderIntro.goTo('next');
			}else {
				sliderIntro.play();
			}

    }
    info.container.onmouseleave = function(e) {
			setTimeout(function(){
				checkhover = 0;
			},500);
			sliderIntro.pause();
    }
    // },1000);

  }

	if (document.getElementById("close_offer_btn")) {
		document.getElementById("close_offer_btn").addEventListener('click', function() {
			var offerBar = document.getElementById("hero-offer");
			offerBar.style.display = 'none';
		})
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
					items: 1,
				},
				"1300": {
					edgePadding: 200,
				},
				"1600": {
					edgePadding: 400,
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
		var sliderz = tns({
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

		var controls = document.querySelectorAll('#customNavItemsOffers span');
		for (var i = 0; i < controls.length; i++) {
			controls[i].onclick = function() {
				// get slider info
				var info = sliderz.getInfo(),
					indexCurrent = info.index;
				console.log(info);
				indexCurrent = info.slideItems[indexCurrent].attributes[1].nodeValue;
				document.getElementById('current-slide').innerHTML = indexCurrent;
			};
		}
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

	if (document.getElementsByClassName('filtered-galleries').length > 0) {
		document.querySelector(".filtered-galleries #list").onclick = function() {
			document.querySelector(".filtered-galleries .gallery-items").classList.remove("grid-view");
		};
		document.querySelector(".filtered-galleries #grid").onclick = function() {
			document.querySelector(".filtered-galleries .gallery-items").classList.add("grid-view");
		};
		var filterItems = document.querySelectorAll(".filtered-galleries .gallery-nav li a");
		document.querySelector(".filtered-galleries .gallery-nav .fa-chevron-down").onclick = function() {
			for (var i = 0; i < filterItems.length; i++) {
				filterItems[i].style.display = "block";
			}
		}
		if (window.innerWidth < 768) {
			for (var i = 0; i < filterItems.length; i++) {
				filterItems[i].onclick = function(e) {
					for (var j = 0; j < document.querySelectorAll(".filtered-galleries .gallery-nav li a").length; j++) {
						document.querySelectorAll(".filtered-galleries .gallery-nav li a")[j].style.display = "none";
					}
					e.target.style.display = "block";
				}
			}
		}

	}
	// cendyn newsletter post data
	document.getElementById('newsletterForm').onsubmit = function() {
		var formId = document.getElementById('formID').value
		var url = 'https://web2.cendynhub.com/FormsRest/submit/' + formId + '?format=json';
		var data = JSON.stringify({
			"PostData": {
				"emailAddress": document.getElementById('emailAddress').value
			}
		});
		makeRESTCall(url, data, function() {
			window.location = '/thankyou';
		})
		return false;
	}

	function makeRESTCall(url, data, callback) {
		var request = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

		request.onreadystatechange = function() {
			if (request.readyState == 4 && request.status == 200) {
				console.log(request.responseText);
				if (callback) {
					callback(request.responseText);
				}
			}
		}
		request.open('post', url, true);
		request.setRequestHeader('Content-Type', 'application/json');
		request.send(data);
	}

})
