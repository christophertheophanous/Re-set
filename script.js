import smoothscroll from "smoothscroll-polyfill";
import "smoothscroll-anchor-polyfill";
import Marquee3k from "marquee3000";
// import * as JZZ from "jzz";


// Smoothscroll für Safari
smoothscroll.polyfill();


// Initialize Marquee scroller

// Wir warten darauf, dass das dokument vollständig geladen ist:
window.addEventListener("load", function() {
  
  // Wir warten bis die Font geladen ist. Dann starten wir den Marquee. Ansonsten ist die breite falsch berechnet
  document.fonts.ready.then(function() {
    Marquee3k.init({ selector: "marquee3k" });
  });
});

// Zur sicherheit laden wir nach drei sekunden den Marquee nochmal neu falls sich was verschoben hat:
setTimeout(function() {
  Marquee3k.refreshAll();
}, 3000);


//Popup für 

const wrongBrowserPopup = document.getElementById("wrong-browser");

const currentBrowser = getBrowser();
console.log("detected: " + currentBrowser);

if (currentBrowser != "Safari") {
  wrongBrowserPopup.classList.remove("wrong-browser-hidden");
}


// Styles Section --> makes slider interactive

const styleSliderSizes = ["thin", "light", "regular", "medium", "bold"];
const defaultSize = 68;

function styleSliderFactory(size) {
  const stylesSlider = document.getElementById(`styles-slider-${size}`);
  const stylesSliderOutput = document.getElementById(
    `styles-slider-${size}-text`
  );

  stylesSlider.value = defaultSize;
  stylesSliderOutput.innerHTML = "68px";

  stylesSlider.oninput = function(event) {
    const sliderValue = event.currentTarget.value;
    console.log(sliderValue);
    document.documentElement.style.setProperty(
      `--styles-size-${size}`,
      `${sliderValue}px`
    );
    stylesSliderOutput.innerHTML = `${sliderValue}px`;
  };
}

styleSliderSizes.forEach(size => styleSliderFactory(size));




// Get current Browser:

function getBrowser() {
  if (
    (navigator.userAgent.indexOf("Opera") ||
      navigator.userAgent.indexOf("OPR")) != -1
  ) {
    return "Opera";
  } else if (navigator.userAgent.indexOf("Chrome") != -1) {
    return "Chrome";
  } else if (navigator.userAgent.indexOf("Safari") != -1) {
    return "Safari";
  } else if (navigator.userAgent.indexOf("Firefox") != -1) {
    return "Firefox";
  } else if (
    navigator.userAgent.indexOf("MSIE") != -1 ||
    !!document.documentMode == true
  ) {
    //IF IE > 10
    return "IE";
  } else {
    return "unknown";
  }
}














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

// Test Browser
