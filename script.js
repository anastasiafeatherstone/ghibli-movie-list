//step 1: get DOM
let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");

let carouselDom = document.querySelector(".carousel");
let SliderDom = carouselDom.querySelector(".carousel .list");
let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
let timeDom = document.querySelector(".carousel .time");

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function () {
  showSlider("next");
};

prevDom.onclick = function () {
  showSlider("prev");
};
let runTimeOut;
let runNextAuto = setTimeout(() => {
  next.click();
}, timeAutoNext);
function showSlider(type) {
  let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
  let thumbnailItemsDom = document.querySelectorAll(
    ".carousel .thumbnail .item"
  );

  if (type === "next") {
    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add("next");
  } else {
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    carouselDom.classList.add("prev");
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRunning);

  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    next.click();
  }, timeAutoNext);
}

// JavaScript for handling modals
document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("trailerModal");
  var iframe = document.getElementById("trailerIframe");
  var close = document.getElementsByClassName("close")[0];

  document.body.addEventListener("click", function (event) {
    if (event.target && event.target.classList.contains("trailerButton")) {
      var videoUrl = event.target.getAttribute("data-video-url");
      iframe.src = videoUrl;
      modal.style.display = "block";
    }
  });

  close.onclick = function () {
    modal.style.display = "none";
    iframe.src = ""; // Stop the video when the modal is closed
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      iframe.src = ""; // Stop the video when the modal is closed
    }
  };
});
