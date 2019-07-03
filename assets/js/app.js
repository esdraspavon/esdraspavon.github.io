/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "assets/js/particles.json", function() {
  console.log("callback - particles.js config loaded");
});

var hero_text = {
  strings: ["Desarrollador Web", "Geek", "Apasionado por la tecnología"],
  typeSpeed: 40,
  loop: true
};
var typed = new Typed(".hero-text", hero_text);

var scaling = 1.5;
//count
var currentSliderCount = 0;
var videoCount = document.getElementsByClassName("slider-container")[0].children
  .length;
var showCount = 4;
var sliderCount = videoCount / showCount;
var controlsWidth = 40;
var scollWidth = 0;
var win = window;
var sliderFrame = document.getElementsByClassName("slider-frame")[0];
var sliderContainer = document.getElementsByClassName("slider-container")[0];
var slides = document.getElementsByClassName("slide");
init();
// $(document).ready(function() {
//   //$('.slider-container .slide:nth-last-child(-n+4)').prependTo('.slider-container');
//   init();
// });
// $(window).resize(function() {
//   init();
// });
function init() {
  // elements

  //counts
  var scollWidth = 0;

  //sizes
  var windowWidth = win.innerWidth;
  var frameWidth = win.innerWidth - 80;

  if (windowWidth >= 0 && windowWidth <= 414) {
    showCount = 2;
  } else if (windowWidth >= 414 && windowWidth <= 768) {
    showCount = 3;
  } else {
    showCount = 4;
  }
  var videoWidth = (windowWidth - controlsWidth * 2) / showCount;
  var videoHeight = Math.round(videoWidth / (16 / 9));

  var videoWidthDiff = videoWidth * scaling - videoWidth;
  var videoHeightDiff = videoHeight * scaling - videoHeight;

  //set sizes
  sliderFrame.style.width = `${windowWidth}px`;
  sliderFrame.style.height = `${videoHeight * scaling}px`;

  //sliderFrame.style.top = `${videoHeightDiff / 2}px`;

  sliderContainer.style.height = `${videoHeight * scaling}px`;

  sliderContainer.style.width = `${videoWidth * videoCount + videoWidthDiff}px`;

  sliderContainer.style.top = `${videoHeightDiff / 2}px`;

  sliderContainer.style.marginLeft = `${controlsWidth}px`;

  for (var i = 0; i < slides.length; i++) {
    slides.item(i).style.width = `${videoWidth}px`;
    slides.item(i).style.height = `${videoHeight}px`;

    //hover effect
    slides.item(i).addEventListener(
      "mouseover",
      function() {
        this.style.width = `${videoWidth * scaling}px`;
        this.style.height = `${videoHeight * scaling}px`;
        this.style.top = `${-(videoHeightDiff / 2)}px`;
        if (i == 0 || i % 4 == 0) {
          // do nothing
        } else if ((i + 1) % 4 == 0 && i != 0) {
          sliderContainer.style.marginLeft = -(videoWidthDiff - controlsWidth);
        } else {
          sliderContainer.style.marginLeft = -(videoWidthDiff / 2);
        }
      },
      false
    );
    slides.item(i).addEventListener("mouseout", function() {
      this.style.width = `${videoWidth * 1}px`;
      this.style.height = `${videoHeight * 1}px`;
      this.style.top = 0;
      sliderContainer.style.marginLeft = controlsWidth;
    });
  }

  // controls
  controls(frameWidth, scollWidth);
}
function controls(frameWidth, scollWidth) {
  var prev = document.getElementsByClassName("prev")[0];
  var next = document.getElementsByClassName("next")[0];

  next.addEventListener(
    "click",
    function() {
      console.log(currentSliderCount);
      console.log(sliderCount);
      scollWidth = scollWidth + frameWidth;

      console.log(frameWidth);
      console.log(scollWidth);
      sliderContainer.style.left = `${-scollWidth}px`;

      if (currentSliderCount >= sliderCount - 1) {
        sliderContainer.style.left = 0;
        currentSliderCount = 0;
        scollWidth = 0;
      } else {
        currentSliderCount++;
      }
    },
    false
  );

  prev.addEventListener("click", function() {
    scollWidth = scollWidth - frameWidth;
    sliderContainer.style.left = `${scollWidth}px`;
    currentSliderCount--;
  });
}
