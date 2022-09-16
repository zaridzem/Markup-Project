$(".slick-slider").slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  cssEase: "linear",
});

document.getElementById("btn").addEventListener("click", function () {
  alert("Thanks for filling out our form! Feedback Sent Successfully");
});

let toggleButton = document.getElementById("burger");
let navigation = document.getElementById("nav");
toggleButton.addEventListener("click", function () {
  navigation.classList.toggle("navigation-active");
  toggleButton.classList.toggle("li-active");
});
