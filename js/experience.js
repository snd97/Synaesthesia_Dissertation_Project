//PRELOADER - show gif while page is loading. Show page content only when content is finished loading
let loader = document.getElementById('preloader');
window.onload = (event) => {
  loader.style.visibility = "hidden";
  // document.body.style.opacity ='1';
};


// LANDING SECTION //
let introSection = document.getElementById('1');
let immersiveSection = document.getElementById('2');
let pianoSection = document.getElementById('3');
let hisbtn = document.querySelector('.hisbtn');
let navLinks = document.getElementById('navLinks');

introSection.addEventListener('mouseover', event => {
  hisbtn.setAttribute('style', 'color:black');
});

immersiveSection.addEventListener('mouseover', event => {
  hisbtn.setAttribute('style', 'color:black');
});
//Change colour of Discover link when mouse is in the piano section, and then also if it's hovering over the nav links
pianoSection.addEventListener('mouseover', event => {
  hisbtn.setAttribute('style', 'color:white');
  navLinks.addEventListener('mouseover', event => {
    hisbtn.setAttribute('style', 'color:black');
   });
 });

 //on a mousemove, resize or scroll event, check if user is in:
// #1 The landing section - if so, ensure arrow icon is correct and if clicked, scroll down to beginning of 360 section
$(window).on('mousemove resize scroll', function() {
  if ($('.first').isInViewport()) {
    // console.log('in landing section');
    $(".imagetochangetwo").attr("src","images/icons/scroll-arrows.png");
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
    $(".imagetochangetwo").attr("src","images/icons/scroll-arrows.png");
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
    $(".imagetochangetwo").attr("src","images/icons/scroll-to-top.png");
    $(".scroll").on( "click", function() {      
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    
    });
  }
});

//360 IMMERSIVE SECTION

// document.addEventListener('DOMContentLoaded', function() {
let overlay = document.querySelector('#splash');
let enterBtn = document.querySelector('.enter');
enterBtn.addEventListener('click', function (e) {
  overlay.style.visibility = 'hidden';
  });
// });

let infoButton = document.querySelector('#infoButton');
let infoBoxContainer = document.querySelector('.infoBoxContainer');
let infoBox = document.querySelector('.infoBox');

let audioPickup = document.querySelector('#pickup');

let allHotspots = document.querySelectorAll('.hotspots');
let tooltip = "";
let tooltipDiv = document.querySelector(".div-tooltip");

let numbers = document.querySelectorAll('.numbers');
let allNumbers = document.getElementById('allNumbers');

let clock = document.querySelector('#clock');
let magazine = document.querySelector('#magazine');
// let magazineUpClose = document.querySelector('#showMagazine');

let magUpClose = document.querySelector('#magUpCloseContainer');
let newspaperToggleBtn = document.querySelector('#newspaperToggle');
let newspaper = document.querySelector('#magUpClose');
let exitNewspaperView = document.getElementById('exitNewspaperView');
let newspaperMoreInfoBtn = document.getElementById('newspaperVariant');

let calendar = document.querySelector('#calendar');
let torus = document.querySelector('#torus');

let whatsthis = document.getElementById('whatsthis');
let showExtraInfo = document.querySelector('#showExtraInfo');
const myEnterVRButton = document.getElementById('myEnterVRButton');
let yOffset360;

let exitVariantViewBtn = document.getElementById('exitVariantView');

// EVENT LISTENERS //

//Show/hide Immersive Section Instructions when info button is clicked
infoButton.addEventListener('click', function(){
  infoBoxContainer.style.visibility = 'visible';
});
infoBoxContainer.addEventListener('click', function (){
  infoBoxContainer.style.visibility = 'hidden';
});

//SHOW TOOLTIPS ON HOVER
allHotspots.forEach((spot) => {
  spot.addEventListener('mouseenter', function(e){
    displayTooltip(e, this); //detect which object has been hovered over and pass it to displayTooltip function to show relevant tip
  });
  spot.addEventListener('mouseleave', function(e){
    tooltipDiv.style.visibility = "hidden";  //once mouse leaves object hide the tooltip
  })
});

//CLOCK HOTSPOT
clock.addEventListener('click', function(){
  if(allNumbers.object3D.visible === false){ //check if the numbers are hidden, if so
    hideMagazineUpClose();                   //ensure other variants are hidden 
    hide3DCalendar();
    showMagazineOnTable();
    showExitVariantBtn()

    showAllNumbers()   //show the numbers         
    showVariantInfoBtn(); //assign the correct variant info text to the ? button
    whatsthis.object3D.position.set(2.7, 2, -7.5); //assign the ? button's position and rotation
    whatsthis.object3D.rotation.set(0, 0, 0);
  }else{ //hide the numbers if the clock is clicked again
    hideAllNumbers()
    hideVariantInfoBtn();
    hideExitVariantBtn()
  }
});

//NEWSPAPER HOTSPOT
magazine.addEventListener('click', function() {  
  if((magUpClose.style.visibility) === 'hidden'){
    hide3DCalendar();
    hideAllNumbers()

    showMagazineUpClose();
    hideMagazineOnTable();
  }else{  
    hideMagazineUpClose();
    showMagazineOnTable();
    // hideVariantInfoBtn();
  }
});
//on question mark click
newspaperMoreInfoBtn.addEventListener('click', function() {  
  showExtraInfo.style.visibility = 'visible';
  assignInfoText();
  });
//on close button click
exitNewspaperView.addEventListener('click', function(){  
  if(magUpClose.style.visibility === 'visible'){
    hideMagazineUpClose();
    showMagazineOnTable();
    hideVariantInfoBtn();
  }
});
//on toggle colour/monochrome click
newspaperToggleBtn.addEventListener('click', function(){
  if(newspaper.getAttribute('src') == "images/newspaper_colour.png"){
    newspaper.setAttribute('src', 'images/newspaper_bw.png');
    newspaperToggleBtn.src = 'images/icons/color-newspaper.png';
  }
  else{
    newspaper.setAttribute('src', 'images/newspaper_colour.png');    
    newspaperToggleBtn.src = 'images/icons/greyscale-newspaper.png';
  }
});

//CALENDAR HOTSPOT
calendar.addEventListener('click', function(){
  if(torus.object3D.visible === false){
    hideAllNumbers()
    hideMagazineUpClose();
    showMagazineOnTable();
    showExitVariantBtn();  

    show3DCalendar();
    showVariantInfoBtn();
    whatsthis.object3D.position.set(3.86, 2.5, 5.6);
    whatsthis.object3D.rotation.set(0, 180, 0);
  }
  else{
    hide3DCalendar();
    hideVariantInfoBtn();
  }
});

torus.addEventListener('click', function(){  
  if(torus.object3D.visible === true){
    hide3DCalendar();
    hideVariantInfoBtn();
    hideExitVariantBtn()
  }  
});
//SHOW VARIANT INFORMATION ON CLICK
whatsthis.addEventListener('click', function(){
  showExtraInfo.style.visibility = 'visible';
  assignInfoText();
});
//HIDE VARIANT INFO ON CLICK
showExtraInfo.addEventListener('click', function(){
  showExtraInfo.style.visibility = 'hidden';
});

//TOGGLE FULLSCREEN
myEnterVRButton.addEventListener("click", function(e) {
  e.preventDefault();
  toggleFullScreen360();
}, false);


//EXIT VARIANT VIEW
exitVariantViewBtn.addEventListener('click', function(){
  hideAllNumbers();
  hide3DCalendar();
  hideVariantInfoBtn();
  hideExitVariantBtn();
})

// FUNCTIONS //
function showAllNumbers(){
  allNumbers.object3D.visible = true;
}
function hideAllNumbers(){
  allNumbers.object3D.visible = false;
}
function showMagazineOnTable(){
  magazine.object3D.visible = true;
  magazine.classList.add('rayobjs');
}
function hideMagazineOnTable(){
  magazine.object3D.visible = false;
  magazine.classList.remove('rayobjs'); 
}
// function showMagazineUpClose(){
//   magazineUpClose.object3D.visible = true; 
//   magazineUpClose.classList.add('rayobjs');
// }
function showMagazineUpClose(){
  magUpClose.style.visibility = 'visible';

}
// function hideMagazineUpClose(){
//   magazineUpClose.object3D.visible = false;
//   magazineUpClose.classList.remove('rayobjs');
// }
function hideMagazineUpClose(){
  magUpClose.style.visibility = 'hidden';
}
function show3DCalendar(){
  torus.object3D.visible = true;
  torus.classList.add('rayobjs');
}
function hide3DCalendar(){
  torus.object3D.visible = false;
  torus.classList.remove('rayobjs');
}
function showVariantInfoBtn(){
  whatsthis.object3D.visible = true;
  whatsthis.classList.add('rayobjs');
}
function hideVariantInfoBtn(){
  whatsthis.object3D.visible = false;
  whatsthis.classList.remove('rayobjs');
}
function showExitVariantBtn(){
  exitVariantViewBtn.style.visibility = "visible";
}
function hideExitVariantBtn(){
  exitVariantViewBtn.style.visibility = "hidden";
}
function displayTooltip(e, obj){
  tooltip = obj.dataset.tooltip;
  tooltipDiv.innerHTML = tooltip;
  tooltipDiv.style.visibility = "visible";
}
function assignInfoText(){
  let variantH2 = document.getElementById('variantH2');
  let variantP = document.getElementById('variantP');
  if(magUpClose.style.visibility === 'visible'){
    variantH2.innerHTML = "Grapheme-colour Synaesthesia";
    variantP.innerHTML = "The most common type of Synaesthesia in which letters, numbers, symbols, etc. are experienced as having a consistent colour. Hover over the newspaper to get a glimpse of this phenomenon.";
  }else if(torus.object3D.visible === true){
    variantH2.innerHTML = "Time-Space Synaesthesia: Circular Calendar";
    variantP.innerHTML = "Time-space synaesthetes have 'conscious awareness of mappings between time and space (e.g., they may see months arranged in an ellipse, or years as columns or spirals)'. In this example, months are experienced visually in 3D space. The length of each month is dependent on how the synesthete percieves it and each also has a distinct colour association.";
  }else if(allNumbers.object3D.visible === true){
    variantH2.innerHTML = "Sequence-Space Synaesthesia";
    variantP.innerHTML = "Sequence-space synaesthesia can cause any type of ordered sequence (days, months, playing cards, etc.) to be experienced visually, in the mind's eye or in the physical space around them. In this example, each number is represented by its own colour and appears physically in space.";
  }
}
function toggleFullScreen360(){
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)) {
          yOffset360 = window.pageYOffset;
          console.log(yOffset360);
        if (immersiveSection.requestFullScreen) {
          immersiveSection.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          immersiveSection.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
          immersiveSection.webkitRequestFullScreen();
        }
    } else {
        if (document.cancelFullScreen) {
            document.exitFullscreen();
            // setTimeout(() => window.scrollTo(0, yOffset360), 100);
            
        } else if (document.mozCancelFullScreen) {
            document.mozancelFullScreen();
            // setTimeout(() => window.scrollTo(0, yOffset360), 100);
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
            // setTimeout(() => window.scrollTo(0, yOffset360), 100);
        }
    }
}
//CHECK IF USER IS IN PARTICULAR PAGE SECTION
$.fn.isInViewport = function() {
  let elementTop = $(this).offset().top;
  let elementBottom = elementTop + $(this).outerHeight();

  let viewportTop = $(window).scrollTop();
  let viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};
//Exit Room
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
//hideObjects function will hide all clickable objects while in thesecond room
function hideObjects(){
  hideMagazineOnTable();
  calendar.object3D.visible = false;
  calendar.classList.remove('rayobjs');
  clock.object3D.visible = false;
  clock.classList.remove('rayobjs');
}
function showObjects(){
  showMagazineOnTable()
  calendar.object3D.visible = true;
  calendar.classList.add('rayobjs');
  clock.object3D.visible = true;
  clock.classList.add('rayobjs');
}

let windowsize = $(window).width();
console.log(windowsize);

$(document).ready(function() { 
  if(windowsize > 1920){
    $('.zoom').magnify({
      speed: 100,
      src: 'images/newspaper_colour.png'
      });

  }
  else{
    $('.zoom').magnify({
      speed: 100,
      src: 'images/newspaper-colour-smaller.png'
      });

  }
    

});

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

// let randomColor = Math.floor(Math.random()*16777215).toString(16);


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