/*
GreedyNav.js - http://lukejacksonn.com/actuate
Licensed under the MIT license - http://opensource.org/licenses/MIT
Copyright (c) 2015 Luke Jackson
*/

document.ready(() => {
  const greedy = document.getElementsByClassName('greedy')[0];
  const greedyNavLinks = document.getElementsByClassName('greedy-nav-links')[0];
  const btn = document.getElementsByClassName('hidden-nav-btn')[0];
  const vlinks = [].slice.call(greedyNavLinks.getElementsByClassName('nav__item'));
  const hlinks = greedy.getElementsByClassName('hidden-links')[0];
  const closingTime = 1000;

  let numOfItems = 0;
  let totalSpace = 0;

  let breakWidths = [];

  // Get initial state
  vlinks.forEach((vlink) => {
    totalSpace += vlink.offsetWidth;
    numOfItems += 1;
    breakWidths.push(totalSpace);
  });

  let availableSpace
  let numOfVisibleItems
  let requiredSpace
  let timer;

  function check() {

    // Get instant state
    availableSpace = greedy.offsetWidth - 10;
    numOfVisibleItems = vlinks.length;
    requiredSpace = breakWidths[numOfVisibleItems - 1];
    console.log('required: ', requiredSpace);
    console.log('available: ', availableSpace);
    // There is not enough space
    if (requiredSpace > availableSpace) {
      console.log('not enough space!');
      hlinks.insertBefore(vlinks[vlinks.length-1], hlinks.firstChild);
      numOfVisibleItems -= 1;
      check();
      // There is more than enough space
    } else if (availableSpace > breakWidths[numOfVisibleItems]) {
      console.log('enough space!');
      hlinks.children().first().appendTo(vlinks);
      numOfVisibleItems += 1;
      check();
    }
    // Update the button accordingly
    btn.setAttribute("count", numOfItems - numOfVisibleItems);
    if (numOfVisibleItems === numOfItems) {
      btn.classList.add('d-none');
    } else btn.classList.remove('d-none');
  }

  // Window listeners
  window.addEventListener('resize', check());

  // btn.on('click', function() {
  //   $hlinks.toggleClass('hidden');
  //   clearTimeout(timer);
  // });

  // $hlinks.on('mouseleave', function() {
  //   // Mouse has left, start the timer
  //   timer = setTimeout(function() {
  //     $hlinks.addClass('hidden');
  //   }, closingTime);
  // }).on('mouseenter', function() {
  //   // Mouse is back, cancel the timer
  //   clearTimeout(timer);
  // })

  check();
});
