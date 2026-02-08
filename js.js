// 메인비주얼 슬라이드
var swiper = new Swiper(".mvSwiper", {
  autoplay: {
    delay: 3000,
  },
  speed: 1000,
  loop: true,
  navigation: {
    nextEl: ".mv-btn-next",
    prevEl: ".mv-btn-prev",
  },
  pagination: {
    el: ".mv-pagination",
    clickable: true,
  },
});

// 분양절차 슬라이드
var swiper = new Swiper(".procedureSwiper", {
  autoplay: {
    delay: 5000,
  },
  speed: 1000,
  loop: true,
  navigation: {
    nextEl: ".procedure-btn-next",
    prevEl: ".procedure-btn-prev",
  },
});

// 리뷰 슬라이드
var swiper = new Swiper(".reviewSwiper", {
  autoplay: {
    delay: 5000,
  },
  speed: 2000,
  slidesPerView: 'auto',
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".review-btn-next",
    prevEl: ".review-btn-prev",
  },
});

// 지점 슬라이드
var swiper = new Swiper(".storeSwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  freeMode: true,
  autoplay: {
    delay: 2000,
  },
  speed: 1000,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    }
  }
});

// header
// 스크롤하면 active 추가
let header = document.querySelector('.header');
window.addEventListener('scroll', function () {
  if (scrollY > 0) header.classList.add('active');
  else header.classList.remove('active');
})

// 모바일내비
let hamburgerBtn = document.querySelector('.hamburgar-btn');
let responsiveNav = document.querySelector('.responsive-nav');
let navLinks = document.querySelectorAll('.r-gnb a');

// 햄버거 버튼 클릭
hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('active');
  responsiveNav.classList.toggle('active');
});

// 모바일 메뉴 클릭 시 닫기
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburgerBtn.classList.remove('active');
    responsiveNav.classList.remove('active');
  });
});