/* eslint-disable no-undef */
'use strict';

const form = document.querySelector('.form');
const page = document.querySelector('.page');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

window.onload = function() {
  const hash = localStorage.getItem('hash');

  if (hash) {
    window.location.hash = hash;

    if (window.location.hash === '#menu') {
      localStorage.setItem('hash', window.location.hash);
      page.style.overflow = 'hidden';
    } else {
      page.style.overflow = 'visible';
    }
  }
};

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    localStorage.setItem('hash', window.location.hash);
    page.style.overflow = 'hidden';
  } else {
    localStorage.removeItem('hash');
    page.style.overflow = 'visible';
  }
});
