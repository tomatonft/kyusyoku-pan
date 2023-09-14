'use strict';

{
  // ----------------
  // スマホでの100vhの見え方の違いを調節（hero)
  // ----------------
  let vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);

  // ----------------
  //  ハンバーガ―メニュー
  // ----------------
  const hamburger = document.getElementById('hamburger');
  const navi = document.getElementById('navi');
  const menu = document.querySelectorAll('ul.hamburger-menu a');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navi.classList.toggle('active');
  });

  for (let i = 0; i <= 4; i++) {
    menu[i].addEventListener('click', () => {
      navi.classList.remove('active');
      hamburger.classList.toggle('active');
    });
  }
}
