import smoothscroll from "smoothscroll-polyfill";
import "smoothscroll-anchor-polyfill";
import Marquee3k from "marquee3000";
// import * as JZZ from "jzz";

// Smoothscroll für Safari
smoothscroll.polyfill();

// Initialize Marquee scroller

Marquee3k.init({ selector: "marquee3k" });
// Marquee3k.refreshAll();

const styleSliderSizes = ["thin", "light", "regular", "medium", "bold"];

function styleSliderFactory(size) {
  const stylesSlider = document.getElementById(`styles-slider-${size}`);

  stylesSlider.value = 68;

  stylesSlider.oninput = function(event) {
    const sliderValue = event.currentTarget.value;
    console.log(sliderValue);
    document.documentElement.style.setProperty(`--styles-size-${size}`, `${sliderValue}px`);
  };
}

styleSliderSizes.forEach(size => styleSliderFactory(size))


// WebMidi Stuff

/* JZZ().or('Cannot start MIDI engine!')
     .openMidiOut().or('Cannot open MIDI Out port!')
     .wait(500).send([0x90,60,127]) // note on
     .wait(500).send([0x80,60,0]);  // note off
     */

/*
JZZ()
  .or('Cannot start MIDI engine!')

  .openMidiIn("MIDI Touchbar User")
  .or("Cannot open MIDI In port!")

  .and(function() {
    console.log("MIDI-In: ", this.name());
    console.log(JZZ().info())
  })

  .connect(function(msg) {
    console.log(msg.toString())
  console.log(msg)
  
  
  })

  .wait(10000)
  .close();
*/
