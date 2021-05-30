
function setup() {
  document.body.style.backgroundColor = "#F5EFDE";
  Marquee3k.init();
}



function mousePressed() {
  let fs = fullscreen();
  fullscreen(!fs);
}

