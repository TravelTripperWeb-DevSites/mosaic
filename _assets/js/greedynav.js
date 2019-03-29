/*
GreedyNav.js - http://lukejacksonn.com/actuate
Licensed under the MIT license - http://opensource.org/licenses/MIT
Copyright (c) 2015 Luke Jackson
*/

document.ready(() => {
  const greedy = document.getElementsByClassName('greedy')[0];
  const greedyNavLinks = document.getElementsByClassName('greedy-nav__links')[0];
  const btn = document.getElementsByClassName('greedy-nav--menu')[0];
  const vlinks = [].slice.call(greedyNavLinks.getElementsByClassName('nav__item'));
  const hlinks = greedy.getElementsByClassName('greedy__hidden-links')[0];
  const closingTime = 1000;

  let numOfItems = 0;
  let totalSpace = 0;
  let breakWidths = [];

  // Get initial state
  vlinks.forEach((vlink) => {
    totalSpace += vlink.offsetWidth;
    numOfItems += 1;
    breakWidths.push(totalSpace);
    console.log('totalSpace:', totalSpace);
    console.log('numOfItems:', numOfItems);
    console.log('breakwidths:', breakWidths);
  });

  let availableSpace
  let numOfVisibleItems
  let requiredSpace
  let timer;

  function check() {

    // Get instant state
    availableSpace = greedyNavLinks.offsetWidth - 10;
    numOfVisibleItems = greedyNavLinks.childElementCount;
    requiredSpace = breakWidths[numOfVisibleItems - 1];
    console.log('required: ', requiredSpace);
    console.log('available: ', availableSpace);
    // There is not enough space
    if (requiredSpace > availableSpace) {
      console.log('not enough space!');
      hlinks.insertBefore(vlinks[numOfVisibleItems - 1], hlinks.firstChild);
      numOfVisibleItems -= 1;

      check();
      // There is more than enough space
    } else if (availableSpace > breakWidths[numOfVisibleItems]) {
      console.log('enough space!');
      greedyNavLinks.appendChild(hlinks.firstChild);
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
  window.onresize = () => {
    check();
  };

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
