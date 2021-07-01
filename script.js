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

    // Zur sicherheit laden wir nach drei sekunden den Marquee nochmal neu falls sich was verschoben hat:
    setTimeout(function() {
      Marquee3k.refreshAll();
    }, 3000);
  });
});

//Popup für Chrome/Firefox ua.

const wrongBrowserPopup = document.getElementById("wrong-browser");

const currentBrowser = getcurrentBrowser();
console.log("detected: " + currentBrowser);

if (currentBrowser !== "Safari") {
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




// OSC Stuff

localStorage.debug = false;
// '*';

var socket = io("127.0.0.1:3030");
socket.on("connect", function() {
  // sends to socket.io server the host/port of oscServer
  // and oscClient
  socket.emit("config", {
    server: {
      port: 3333,
      host: "127.0.0.1"
    },
    client: {
      port: 3334,
      host: "127.0.0.1"
    }
  });
});

// const status = document.getElementById("log");

// Animate: "wght" 100 - 700

let connectedToSocket = false

const resetVariableScroller = document.getElementById("reset-variable-scroller");
const neueOrnamentScroller = document.getElementById("neue-ornament-scroller");

function addFontWeightAnimation () {
  resetVariableScroller.style.animationName = 'animateFontWeight'
  neueOrnamentScroller.style.animationName = 'animateFontWeight'
  console.log('add pulsing font Animation')
}

function removeFontWeightAnimation () {
  resetVariableScroller.style.animationName = ''
  neueOrnamentScroller.style.animationName = ''
  console.log('remove pulsing font Animation')
}


let lastValue = 50;

socket.on("message", function(obj) {
  /*const status = document.getElementById("log");
  const newPtag = document.createElement('p')
  const newContent = document.createTextNode(obj + '\n\r')
  newPtag.appendChild(newContent);
  status.insertBefore(newPtag, status.firstChild);*/
  // console.log('Message: ', obj[0], obj);

  const thisValue = obj[1];

  // const differenz = calcDiff(lastValue, thisValue)
  //const differenz = thisValue - lastValue
  //const ausschlag = 50 + (differenz * 3)

  // const softVal = (thisValue + lastValue) / 2
  const roundValue = Math.round(thisValue * 100) / 100;
  const normalizeMessage = rangeMap(roundValue, 0, 1, 100, 700);

  //console.log(thisValue, lastValue, differenz, ausschlag, normalizeMessage)

  // console.log(thisValue + " -> " + normalizeMessage);



  if(!connectedToSocket) { removeFontWeightAnimation() }
  console.log('Connected To Socket')

  resetVariableScroller.style.fontWeight = normalizeMessage;
  neueOrnamentScroller.style.fontWeight = normalizeMessage;

  lastValue = thisValue;
  connectedToSocket = true
  // Marquee3k.refreshAll();
});

socket.on("disconnect", function(obj) {
  connectedToSocket = false
  console.log('LOST connection to socket')
  addFontWeightAnimation()
})

////////// HELPER FUNCTION ////////

const rangeMap = (value, x1, y1, x2, y2) =>
  ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;

const calcDiff = (a, b) => (a > b ? a - b : b - a);

// Get current Browser:

function getcurrentBrowser() {
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
