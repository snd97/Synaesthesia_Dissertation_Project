

// let paperSound = new Howl({
//   src: ["../sounds/Page_Turn.mp3"],
//   preload: true, html5: true
// });
// let pickUpSound = new Howl({
//   src: ["../sounds/pick-up.wav"],
//   preload: true, html5: true
// });
// let paperSound;
// let pickUpSound;



document.addEventListener('DOMContentLoaded', function() {
  let overlay = document.querySelector('#splash');
  let enterBtn = document.querySelector('.enter');
  enterBtn.addEventListener('click', function (e) {
    overlay.style.visibility = 'hidden';
    // paperSound = new Howl({
    //   src: ["../sounds/Page_Turn.mp3"],
    //   preload: true, html5: true
    // });
    // pickUpSound = new Howl({
    //   src: ["../sounds/pick-up.wav"],
    //   preload: true, html5: true
    // });
    
  });
});




let numbersVisible = false;
let infoButton = document.querySelector('#infoButton');
let infoBoxContainer = document.querySelector('.infoBoxContainer');
let infoBox = document.querySelector('.infoBox');

infoButton.addEventListener('click', function(){
  showVariantInfo();
})
infoBoxContainer.addEventListener('click', function (){
  infoBoxContainer.style.visibility = 'hidden';
})

function showVariantInfo(){
  let infoHeading = document.getElementById('infoHeading');
  let infoPara = document.getElementById('infoPara');
  if(magazineUpClose.object3D.visible === true){
    infoHeading.innerHTML = "Grapheme-colour Synaesthesia";
    infoPara.innerHTML = "The most common type is grapheme-colour synaesthesia in which graphemes are experienced as having a consistent colour";
  }else if(torus.object3D.visible === true){
    infoHeading.innerHTML = "Time-Space Synaesthesia: Circular Calendar";
    infoPara.innerHTML = "Time-space synaesthetes have 'conscious awareness of mappings between time and space (e.g., they may see months arranged in an ellipse, or years as columns or spirals)'";
  }else if(numbersVisible === true){
    infoHeading.innerHTML = "Sequence-Space Synaesthesia";
    infoPara.innerHTML = "Sequence-space synaesthesia can cause any type of ordered sequence (days, months, playing cards, etc.) to be experienced visually, in the mind's eye or in the physical space around them.";
  }else if (document.querySelector('a-videosphere').object3D.visible === true){
    infoHeading.innerHTML = "Music-Color Synaesthesia";
    infoPara.innerHTML = "Pan around the space and experience music in a whole new way...";
  }
  else{
    infoHeading.innerHTML = "Immersive Environment Instructions";
    infoPara.innerHTML = "Use your mouse to pan around and click on objects in the environment. Click the info button at the bottom right to find out more about the current Synaesthesia variant or enter fullscreen to fully immerse yourself in VR.";
  }

  infoBoxContainer.style.visibility = 'visible';
}



// let randomColor = Math.floor(Math.random()*16777215).toString(16);



let allHotspots = document.querySelectorAll('.hotspots');
let tooltip = "";
let tooltipDiv = document.querySelector(".div-tooltip");

let numbers = document.querySelectorAll('.numbers');
let clock = document.querySelector('#clock');
let magazine = document.querySelector('#magazine');
let magazineUpClose = document.querySelector('#showMagazine');
// const muteBtn = document.querySelector('.mute');
let calendar = document.querySelector('#calendar');
let torus = document.querySelector('#torus');
let navLinks = document.getElementById('navLinks');


let hisbtn = document.querySelector('.hisbtn');

//change sky when icon is clicked

// function toggleSky(){  
//   if(document.querySelector('a-sky').getAttribute('src') === '#panorama2'){
//     document.getElementById('sky').setAttribute('src', '#panorama');
//     magazine.object3D.visible = true;
//     magazine.classList.add('rayobjs');
//     calendar.object3D.visible = true;
//     calendar.classList.add('rayobjs');
//     clock.object3D.visible = true;
//     clock.classList.add('rayobjs');
//   }else if(document.querySelector('a-sky').getAttribute('src') === '#panorama'){
//     document.getElementById('sky').setAttribute('src', '#panorama2');
//     magazine.object3D.visible = false;
//     magazine.classList.remove('rayobjs');
//     calendar.object3D.visible = false;
//     calendar.classList.remove('rayobjs');
//     clock.object3D.visible = false;
//     clock.classList.remove('rayobjs');
//   }
// }
//hideObjects function will hide all clickable objects while in thesecond room
function hideObjects(){
      magazine.object3D.visible = false;
      magazine.classList.remove('rayobjs');
      calendar.object3D.visible = false;
      calendar.classList.remove('rayobjs');
      clock.object3D.visible = false;
      clock.classList.remove('rayobjs');
}
function showObjects(){
    magazine.object3D.visible = true;
    magazine.classList.add('rayobjs');
    calendar.object3D.visible = true;
    calendar.classList.add('rayobjs');
    clock.object3D.visible = true;
    clock.classList.add('rayobjs');
}


function toggleSkyVideo(){
 let sky = document.querySelector('a-sky');
 let videosphere = document.querySelector('a-videosphere');
 if(sky.object3D.visible === true){
  sky.object3D.visible = false;
  hideObjects();
  videosphere.object3D.visible = true;
  videosphere.components.material.data.src.currentTime = 0;
  videosphere.components.material.material.map.image.play();    
 }else if(videosphere.object3D.visible === true){
  videosphere.object3D.visible = false;
  videosphere.components.material.material.map.image.pause();
  sky.object3D.visible = true; 
  showObjects(); 
  
 }
 
}
//SHOW TOOLTIPS ON HOVER
allHotspots.forEach((spot) => {
  spot.addEventListener('mouseenter', function(e){
    displayTooltip(e, this);
  });
  spot.addEventListener('mouseleave', function(e){
    tooltipDiv.style.visibility = "hidden";  
  })
});

let audioPickup = document.querySelector('#pickup');
// console.log(audioPickup);

//CLOCK HOTSPOT
clock.addEventListener('click', function(){
  // pickUpSound.play();
  numbers.forEach((number) =>{
    if(number.getAttribute('visible') === false){  
      numbersVisible = true;  
      number.setAttribute('visible', true);
    }else{
      number.setAttribute('visible', false);
      numbersVisible = false; 
    }
  }) 
});

//MAGAZINE HOTSPOT
magazine.addEventListener('click', function() {  
  if((magazineUpClose.object3D.visible) === false){
     
    // paperSound.play();
    magazineUpClose.object3D.visible = true; 
    magazineUpClose.classList.add('rayobjs');
    magazine.object3D.visible = false;
    magazine.classList.remove('rayobjs');   
  }else{  
    magazineUpClose.setAttribute('visible', false);
    magazine.object3D.visible = true;
    magazineUpClose.classList.remove('rayobjs');
    magazine.classList.add('rayobjs');
  }
});

magazineUpClose.addEventListener('click', function(){
  
  if(magazineUpClose.getAttribute('visible') === true){
    // paperSound.play();
    magazineUpClose.object3D.visible = false;
    magazineUpClose.classList.remove('rayobjs');
    magazine.object3D.visible = true;
    magazine.classList.add('rayobjs');
  }
});
//CALENDAR HOTSPOT
calendar.addEventListener('click', function(){
  
  // pickUpSound.play();
  if(torus.object3D.visible === false){      
    torus.object3D.visible = true;
    torus.classList.add('rayobjs');
  }
  else{
    torus.object3D.visible = false;
  }
});

torus.addEventListener('click', function(){
  
  // pickUpSound.play();
  if(torus.object3D.visible === true){
    torus.object3D.visible = false;
    torus.classList.remove('rayobjs');
  }
  
});


//FUNCTIONS

let displayTooltip = function(e, obj){
  tooltip = obj.dataset.tooltip;

  tooltipDiv.innerHTML = tooltip;
  // tooltipDiv.setAttribute('value', tooltip);
  // tooltipDiv.value = tooltip;
  tooltipDiv.style.visibility = "visible";

};

let myEnterVRButton = document.getElementById('myEnterVRButton');
let immersiveSection = document.getElementById('2');

myEnterVRButton.addEventListener("click", function(e) {
  e.preventDefault();
  toggleFullScreen360()
}, false);

let yOffset360;

function toggleFullScreen360(){

  if ((document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)) {
          yOffset360 = window.pageYOffset;
          console.log(yOffset);
        if (immersiveSection.requestFullScreen) {
          immersiveSection.requestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (document.documentElement.mozRequestFullScreen) {
          immersiveSection.mozRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (document.documentElement.webkitRequestFullScreen) {
          immersiveSection.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.exitFullscreen();
            setTimeout(() => window.scrollTo(0, yOffset360), 100);
            
        } else if (document.mozCancelFullScreen) {
            document.mozancelFullScreen();
            setTimeout(() => window.scrollTo(0, yOffset360), 100);
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
            setTimeout(() => window.scrollTo(0, yOffset360), 100);
        }
    }
}




let pianoSection = document.getElementById('3');

// let firsticon = document.querySelector('.imagetochange');
// let secondicon = document.querySelector('.imagetochangetwo');
// let home = document.querySelector('.homebtn');



let introSection = document.getElementById('1');
introSection.addEventListener('mouseover', event => {
  hisbtn.setAttribute('style', 'color:black');
  
  // console.log('mouse is over introSection');
  // firsticon.src = "../images/home-fill.png";
  // home.href = "../three.html";
  // scrolldown.href = "#2"
});


immersiveSection.addEventListener('mouseover', event => {
  hisbtn.setAttribute('style', 'color:black');

  // console.log('mouse is over immersiveSection');
  // firsticon.src = "../images/icons_left.svg"
  // home.href = "#1";
  // scrolldown.href = "#3";
  // firsticon.src = "../images/icons_left.svg"
});


//Change colour of Discover link when mouse is in the piano section, and then also if it's hovering over the nav links
pianoSection.addEventListener('mouseover', event => {
  hisbtn.setAttribute('style', 'color:white');
  navLinks.addEventListener('mouseover', event => {
    hisbtn.setAttribute('style', 'color:black');
   });
 });

//Check which section the user is in
$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

//on a mousemove, resize or scroll event, check if user is in:
// #1 The landing section - if so, ensure arrow icon is correct and if clicked, scroll down to beginning of 360 section
$(window).on('mousemove resize scroll', function() {
  if ($('.first').isInViewport()) {
    // console.log('in landing section');
    $(".imagetochangetwo").attr("src","../images/right.png");
      $(".scroll").on( "click", function() {
        window.scrollTo({
          top: window.innerHeight,
          left: 0,
          behavior: 'smooth'
        });    
    });
// #2 The 360 section - if so, ensure arrow icon is correct and if clicked, scroll down to beginning of piano section
  } else if ($('.second').isInViewport()) {
    // console.log('in 360 section');
    $(".imagetochangetwo").attr("src","../images/right.png");
    $(".scroll").on( "click", function() {      
      window.scrollTo({
        top: window.innerHeight * 2,
        left: 0,
        behavior: 'smooth'
      });    
    });
// #3 The piano section - if so, ensure arrow icon is correct and if clicked, scroll to top
  }else if ($('.piano').isInViewport()){
    // console.log('in piano section');
    $(".imagetochangetwo").attr("src","../images/left2.png");
    $(".scroll").on( "click", function() {      
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    
    });
  }
});

