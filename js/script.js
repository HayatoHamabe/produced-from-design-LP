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
    769: {
      slidesPerView: 3.7,
      spaceBetween: 56,
    },
  },
});

// $(document).ready(function () {
//   const $submitBtn = $("#js-submit");
//   $("#form input,#form textarea").on("change", function () {
//     if (
//       $('#form input[type="text"]').val() !== "" &&
//       $('#form input[type="email"]').val() !== "" &&
//       $('#form input[type="checkbox"]').val() !== "" &&
//       $("#form #privacyCheck").prop("checked") === true
//     ) {
//       $submitBtn.prop("disabled", false);
//     } else {
//       $submitBtn.prop("disabled", true);
//     }
//   });
// });

$("#js-submit").on("click", function () {
  let errors = 0;

  $("#form-name").removeClass("name-err");
  $("#form-email").removeClass("email-err");
  $("#form-contact").removeClass("contact-err");
  $("#form-privacy").removeClass("polisy-err");

  if ($("#name").val() == "") {
    $("#form-name").addClass("name-err");
    errors += 1;
  }
  if ($("#email").val() == "") {
    $("#form-email").addClass("email-err");
    errors += 1;
  }
  if ($("#form-textarea").val() == "") {
    $("#form-contact").addClass("contact-err");
    errors += 1;
  }
  if (!$("#privacy").prop("checked")) {
    console.log("privacy");
    $("#form-privacy").addClass("polisy-err");
    errors += 1;
  }
  $(window).scrollTop($("#contact").position().top);
  if (errors !== 0) {
    return false;
  }
});

$("form").submit(function () {});
