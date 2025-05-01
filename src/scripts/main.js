'use strict';

const mainImage = document.querySelector('#largeImg');

document.addEventListener('click', function (e) {
  let clickedImg;

  if (e.target.tagName === 'img') {
    clickedImg = e.target;
  } else if (e.target.tagName === 'a') {
    clickedImg = e.target.querySelector('img');
  }

  if (!clickedImg) {
    return;
  }

  const link = clickedImg.closest('a');

  if (link) {
    e.preventDefault();
    mainImage.src = link.href;
  }
});
