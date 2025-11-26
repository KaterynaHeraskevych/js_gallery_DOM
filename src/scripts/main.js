'use strict';

const listItems = document.querySelectorAll('.list-item');
const bigImg = document.querySelector('#largeImg');

listItems.forEach((el) => {
  el.addEventListener('click', (e) => e.preventDefault(), { capture: true });

  el.addEventListener('click', (e) => {
    if (e.currentTarget.tagName === 'LI') {
      bigImg.src = e.currentTarget.children[0].href;
    }
  });
});
