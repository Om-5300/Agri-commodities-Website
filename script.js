let navbar = document.querySelector('.header .navbar');
let contactInfo = document.querySelector('.contact-info');
let morecontactInfo = document.querySelector('#more-contact');
document.querySelector('#menu-btn').onclick = () => {
   navbar.classList.toggle('active');
};

document.querySelector('#info-btn').onclick = () => {
   contactInfo.classList.toggle('active');
};

document.querySelector('#info-btn').onclick = () => {
   contactInfo.classList.add('active');
};

document.querySelector('#close-contact-info').onclick = () => {
   contactInfo.classList.remove('active');
};

document.querySelector('#more-contact').onclick = () => {
   contactInfo.classList.add('active');
};

window.onscroll = () => {
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
}

lightGallery(document.querySelector('.projects .box-container'));
document.addEventListener('DOMContentLoaded', () => {
   const swiper = new Swiper('.reviews-slider', {
      loop: true, 
      autoplay: {
         delay: 3000, 
         disableOnInteraction: false,
      },
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
   });
});
