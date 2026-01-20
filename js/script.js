$(document).ready(() => {
 
  $(".slick-second-init").css({
    maxWidth: "800px",
    margin: "30px auto 0",
  });
  $(".slick-slider-init").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 2000,
    asNavFor: ".slick-second-init", 
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
  $(".slick-second-init").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".slick-slider-init", 
    fade: true,
    arrows: false, 
  });

 
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
  $(".btn-prev").on("click", function () {
    $(".slick-slider-init").slick("slickPrev");
  });

  $(".btn-next").on("click", function () {
    $(".slick-slider-init").slick("slickNext");
  });
});

const lenis = new Lenis({
  autoRaf: true,
});

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
