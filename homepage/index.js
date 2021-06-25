'use strict';

window.addEventListener('scroll', () => {
  let content = document.querySelector('.textBox');
  let contentPosition = content.getBoundingClientRect().top;
  let secreenPosition = window.innerHeight;
  if (contentPosition < secreenPosition) {
    content.classList.add('active');
  }
});
