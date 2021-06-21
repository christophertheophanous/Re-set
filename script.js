/*function setup() {
  document.body.style.backgroundColor = "#F5EFDE";
  Marquee3k.init();
}*/

/*function mousePressed() {
  let fs = fullscreen();
  fullscreen(!fs);
}*/

import Marquee3k from 'marquee3000'

Marquee3k.init({
        selector: 'marquee3k', // define a custom classname
    });

Marquee3k.refreshAll();
