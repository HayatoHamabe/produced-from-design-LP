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
  slidesPerView: 3.7,
  spaceBetween: 56,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
  },
  speed: 500,
  loop: true,
});
