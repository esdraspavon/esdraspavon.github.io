/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "assets/js/particles.json", function() {
  console.log("callback - particles.js config loaded");
});

var hero_text = {
  strings: ["Desarrollador Web", "Geek", "Apasionado por la tecnología"],
  typeSpeed: 40,
  loop: true
};
var my_name = {
  strings: ["Edsdaras", "Esdras"],
  typeSpeed: 90,
  backSpeed: 50,
  startDelay: 5000,
  showCursor: false
};

var typed = new Typed(".hero-text", hero_text);
var typed = new Typed(".my-name", my_name);
