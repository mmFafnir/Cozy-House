
const iconBurger = document.querySelector('.burger__icon');
const menuBurger = document.querySelector('.burger');

if (iconBurger) {
    iconBurger.addEventListener("click", function (e) {
        document.body.classList.toggle('lock');
        iconBurger.classList.toggle('active');
        menuBurger.classList.toggle('active');
    })
}



//Плавная прокрутка
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('href').substr(1)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    if(iconBurger.classList.contains('active')){
        document.body.classList.remove('lock');
        iconBurger.classList.remove('active');
        menuBurger.classList.remove('active');
    }
  })
}

const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;

function addHeaderColor(){
    if (window.pageYOffset > 10) {
      iconBurger.classList.add('burger__icon_top');
       header.classList.add('header_color');
    } else {
      iconBurger.classList.remove('burger__icon_top');
      header.classList.remove('header_color');
    }
}
window.onscroll=addHeaderColor;
addHeaderColor();
;





const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

breakpoints: {
  582: {
      slidesPerView: 2,
    },
    918: {
      slidesPerView: 3,
    },

}

});
