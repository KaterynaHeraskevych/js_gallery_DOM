'use strict';

const list = document.querySelector('#thumbs');
const bigImg = document.querySelector('#largeImg');

list.addEventListener('click', (e) => e.preventDefault(), { capture: true });

list.addEventListener('click', (e) => {
  bigImg.src = e.target.parentElement.href;
});
