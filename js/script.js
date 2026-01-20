$(document).ready(() => {
  // স্লাইডারের টেক্সট কন্টেইনারের স্টাইল সেট করা
  $(".slick-second-init").css({
    maxWidth: "800px",
    margin: "30px auto 0",
  });

  // ইমেজ/প্রোফাইল স্লাইডার কনফিগারেশন
  $(".slick-slider-init").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 2000,
    asNavFor: ".slick-second-init", // টেক্সট স্লাইডারের সাথে সিঙ্ক
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // টেক্সট কন্টেন্ট স্লাইডার কনফিগারেশন
  $(".slick-second-init").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".slick-slider-init", // ইমেজ স্লাইডারের সাথে সিঙ্ক
    fade: true,
    arrows: false, // ডিফল্ট অ্যারো বন্ধ রাখা হয়েছে
  });

  // স্লাইডার পরিবর্তনের সময় ক্লাস অ্যাড এবং রিমুভ করার লজিক
  $(".slick-slider-init .slick-center").next().addClass("sl-next");
  $(".slick-slider-init .slick-center").prev().addClass("sl-prev");

  $(".slick-slider-init").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      $(".slick-slider-init").find(".slick-center").next().removeClass("sl-next");
      $(".slick-slider-init").find(".slick-center").prev().removeClass("sl-prev");
    }
  );

  $(".slick-slider-init").on(
    "afterChange",
    function (event, slick, currentSlide, nextSlide) {
      $(".slick-slider-init").find(".slick-center").next().addClass("sl-next");
      $(".slick-slider-init").find(".slick-center").prev().addClass("sl-prev");
    }
  );

  // কাস্টম নেভিগেশন অ্যারো বাটন লজিক
  $(".btn-prev").on("click", function () {
    $(".slick-slider-init").slick("slickPrev");
  });

  $(".btn-next").on("click", function () {
    $(".slick-slider-init").slick("slickNext");
  });
});