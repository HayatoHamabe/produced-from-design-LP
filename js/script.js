AOS.init();

//hamburger button
toggle = () => {
  const line = document.getElementById("hamburger-line");
  const nav = document.getElementById("g-nav");
  line.classList.toggle("is-active");
  nav.classList.toggle("is-show");
};

gNavClick = () => {
  console.log("g-nav");
  document.getElementById("g-nav").classList.remove("is-show");
  document.getElementById("hamburger-line").classList.remove("is-active");
};

//ページ内スクロール
$('a[href^="#"]').on("click", function () {
  var speed = 500;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? "html" : href);
  var position = target.offset().top;
  $("html, body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing"
  );
  return false;
});

$(".faq__question").on("click", function () {
  console.log("OK");
  $(this).next().slideToggle();
});

// swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 1.7,
  spaceBetween: 36,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
  },
  speed: 500,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 3.7,
      spaceBetween: 56,
    },
  },
});
