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

  // ----------------
  // 交差監視API
  // ----------------
  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  const options = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver(callback, options);

  const targets = document.querySelectorAll('.animate');
 

  targets.forEach(target => {
    observer.observe(target);
  });

// -----------
//  scroll-bar をスクロール量500で非表示にする
// -----------
const scrollBar = document.querySelector('span.scroll');

window.addEventListener('scroll', () => {
  const currentPos = window.pageYOffset // スクロール量を取得

  if (currentPos > 500) {
    scrollBar.classList.add('hidden');
  } else {
    scrollBar.classList.remove('hidden');
  }
});
  
}
