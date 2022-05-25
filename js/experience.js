//PRELOADER - show gif while page is loading. Show page content only when content is finished loading
let loader = document.getElementById('preloader');
window.onload = (event) => {
  loader.style.visibility = "hidden";
};

//LANDING SECTION
// References to html elements 
let introSection = document.querySelector('.first');
let immersiveSection = document.querySelector('.second');
let pianoSection = document.querySelector('.piano');
let hisbtn = document.querySelector('.hisbtn');
let navLinks = document.getElementById('navLinks');
let splash = document.getElementById('splash');

//event listeners
//set colour of History link to black while mouse is in the landing section 
introSection.addEventListener('mouseover', event => {
  hisbtn.setAttribute('style', 'color:black');
});
//set colour of History link to white while mouse is in the immersive section and black if user hovers over the nav bar
immersiveSection.addEventListener('mouseover', event => {
  hisbtn.setAttribute('style', 'color:white');
    navLinks.addEventListener('mouseover', event => {
    hisbtn.setAttribute('style', 'color:black');
   });
});
//set colour of History link to white when mouse is in the piano section, and black if it's hovering over the nav bar
pianoSection.addEventListener('mouseover', event => {
  hisbtn.setAttribute('style', 'color:white');
  navLinks.addEventListener('mouseover', event => {
    hisbtn.setAttribute('style', 'color:black');
   });
 });

//Function which detects a mousemove, resize or scroll event and check whether user is in:
// #1 The landing section - if so, ensure arrow icon is correct and if clicked, scroll down to beginning of 360 section
$(window).on('mousemove resize scroll', function() {
  if ($('.first').isInViewport()) {
    $(".imagetochangetwo").attr("src","images/icons/scroll-down-arrows.svg");
      $(".scroll").on( "click", function() {
        window.scrollTo({
          top: window.innerHeight,
          left: 0,
          behavior: 'smooth'
        });    
    });
// #2 The 360 section - if so, ensure arrow icon is correct and if clicked, scroll down to beginning of piano section
  } else if ($('.second').isInViewport()) {
    $(".imagetochangetwo").attr("src","images/icons/scroll-down-arrows.svg");
    $(".scroll").on( "click", function() {      
      window.scrollTo({
        top: window.innerHeight * 2,
        left: 0,
        behavior: 'smooth'
      });    
    });
// #3 The piano section - if so, ensure arrow icon is correct and if clicked, scroll to top
  }else if ($('.piano').isInViewport()){
    $(".imagetochangetwo").attr("src","images/icons/scroll-to-top.svg");
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
//html references
let overlay = document.querySelector('#splash'); //overlay before entering VR section
let enterBtn = document.querySelector('.enter'); //enter immersive environment button

let infoButton = document.querySelector('#infoButton'); //info icon at bottom-right of container
let infoBoxContainer = document.querySelector('.infoBoxContainer'); //full viewport container for instructions
let infoBox = document.querySelector('.infoBox'); //container for instruction h2 and p elements

let audioPickup = document.querySelector('#pickup'); //audio sound

let allHotspots = document.querySelectorAll('.hotspots'); //all elements which are interactive
let tooltip = ""; //initial text for tooltip at bottom left corner
let tooltipDiv = document.querySelector(".div-tooltip"); //div for tooltip

let numbers = document.querySelectorAll('.numbers'); //all individual numbers for time-space synaesthesia
let allNumbers = document.getElementById('allNumbers'); //entity containing all numbers

let clock = document.querySelector('#clock'); //clock image on wall
let newspaperonTable = document.querySelector('#magazine'); //newspaper image on table
let calendar = document.querySelector('#calendar'); //calendar image on wall
let torus = document.querySelector('#torus'); //3D torus for circular calendar

let magUpClose = document.querySelector('#magUpCloseContainer'); //div containing newspaper up close and controls
let newspaperToggleBtn = document.querySelector('#newspaperToggle'); //icon to toggle greyscale/colour newspaper
let newspaper = document.querySelector('#magUpClose'); //image of newspaper up close
let exitNewspaperView = document.getElementById('exitNewspaperView'); //icon to exit newspaper up close
let newspaperMoreInfoBtn = document.getElementById('newspaperVariant'); //icon to toggle more newspaper info

let whatsthis = document.getElementById('whatsthis'); //icon to toggle more variant information
let showExtraInfo = document.querySelector('#showExtraInfo'); //div containing more variant information
let exitVariantViewBtn = document.getElementById('exitVariantView'); //icon to exit variant view
const myEnterVRButton = document.getElementById('myEnterVRButton'); //fullscreen icon


// EVENT LISTENERS //

//if enter button is clicked, hide the immersive section overlay
enterBtn.addEventListener('click', function (e) {
  overlay.style.visibility = 'hidden';
  });

//Show/hide Immersive Section Instructions when info button is clicked
infoButton.addEventListener('click', function(){
  if(infoBoxContainer.style.visibility === 'visible'){
    infoBoxContainer.style.visibility = 'hidden'
  }
  else{
    infoBoxContainer.style.visibility = 'visible';
  }  
});
//hide instructions when the container is clicked
infoBoxContainer.addEventListener('click', function (){
  infoBoxContainer.style.visibility = 'hidden';
});

//SHOW TOOLTIPS ON HOVER based on the elements data-tooltip content
allHotspots.forEach((spot) => {
  spot.addEventListener('mouseenter', function(e){
    displayTooltip(e, this); //detect which object has been hovered over and pass it to displayTooltip function to show relevant tip
  });
  spot.addEventListener('mouseleave', function(e){
    tooltipDiv.style.visibility = "hidden";  //once mouse leaves object hide the tooltip
  })
});

//CLOCK HOTSPOT - when clicked show the time-space variant and hide other variants
clock.addEventListener('click', function(){
  if(allNumbers.object3D.visible === false){ //check if the numbers' visibility is hidden, if so
    hideMagazineUpClose();  //ensure newspaper up close is hidden 
    hide3DCalendar(); //ensure 3D calendar is hidden 
    showMagazineOnTable(); //ensure newspaper on table is still visible

    showExitVariantBtn() //show the exit variant button
    showAllNumbers()   //show the numbers for time-space synaesthesia         
    showVariantInfoBtn(); //assign the correct variant info text to the ? button and make it visible
    whatsthis.object3D.position.set(2.5, 2, -7.5); //assign the ? button's position and rotation
    whatsthis.object3D.rotation.set(0, 0, 0);
  }else{ //otherwise, if the numbers are already visible, hide them if the clock is clicked again
    hideAllNumbers()
    hideVariantInfoBtn(); //hide the more variant info button
    hideExitVariantBtn(); //hide the exit variant button
  }
});

//NEWSPAPER HOTSPOT - when clicked show the grapheme-color variant example and hide other variants
newspaperonTable.addEventListener('click', function() {  
  if((magUpClose.style.visibility) === 'hidden'){ //check if the newspaper's visibility is hidden, if so
    hide3DCalendar(); //ensure 3D calendar is hidden
    hideAllNumbers() //hide the time-space numbers
    hideExitVariantBtn() //hide the exit variant button
    showMagazineUpClose(); //show the newspaper up close and its controls
    hideMagazineOnTable(); //hide the newspaper on the table
  }else{   //otherwise, if the newspaper's visibility is visible, if so hide it
    hideMagazineUpClose(); //hide the newspaper up close and its controls
    showMagazineOnTable(); //show the newspaper on the table
  }
});

//More information icon - if icon is clicked make the extra information container visible
newspaperMoreInfoBtn.addEventListener('click', function() {  
  showExtraInfo.style.visibility = 'visible';
  assignInfoText(); //set the correct text to info container
  });
//Exit Newspaper View - if exit button is clicked hide the newspaper
exitNewspaperView.addEventListener('click', function(){  
  if(magUpClose.style.visibility === 'visible'){
    hideMagazineUpClose(); //hide the newspaper up close and its controls
    showMagazineOnTable(); //show the newspaper on the table
    hideVariantInfoBtn(); //hide the more variant info button
  }
});
//On toggle colour/monochrome click
newspaperToggleBtn.addEventListener('click', function(){
  if(newspaper.getAttribute('src') == "images/aframe-assets/newspaper_colour.png"){ //check the image src of newspaper, if it's coloured version, show the greyscale
    newspaper.setAttribute('src', 'images/aframe-assets/newspaper_bw.png');
    newspaperToggleBtn.src = 'images/icons/color-newspaper.png'; //set the toggle icon to the coloured wheel
    
    
  }
  else{ //otherwise if the image src is greyscale version, show the coloured version
    newspaper.setAttribute('src', 'images/aframe-assets/newspaper_colour.png');    
    newspaperToggleBtn.src = 'images/icons/greyscale-newspaper.png'; //set the toggle icon to the black and white colour wheel
  }
});

//CALENDAR HOTSPOT
calendar.addEventListener('click', function(){
  if(torus.object3D.visible === false){
    hideAllNumbers() //hide the time-space numbers
    hideMagazineUpClose(); //ensure the newspaper up close and its controls are hidden
    showMagazineOnTable(); //ensure the newspaper on the table is visble
    showExitVariantBtn();  //assign the correct variant info text to the ? button and make it visible

    show3DCalendar(); //show the 3D torus
    showVariantInfoBtn(); //assign the correct variant info text to the ? button and make it visible
    whatsthis.object3D.position.set(0.8, 2.5, 6); //assign the ? button's position and rotation
    // whatsthis.object3D.rotation.set(-0.1, 180, 0);
    whatsthis.object3D.rotation.set(-0.2, 180, 0);
  }
  else{
    hide3DCalendar(); //hide the 3D torus
    hideVariantInfoBtn(); //hide the more variant info button
    hideExitVariantBtn() //hide the exit variant button
  }
});


//SHOW VARIANT INFORMATION ON ICON CLICK
whatsthis.addEventListener('click', function(){
  showExtraInfo.style.visibility = 'visible';
  assignInfoText(); //set the correct text to info container
});

//HIDE VARIANT INFO ON CONTAINER CLICK
showExtraInfo.addEventListener('click', function(){
  showExtraInfo.style.visibility = 'hidden';
});

//EXIT VARIANT VIEW ON EXIT BTN CLICK
exitVariantViewBtn.addEventListener('click', function(){
  hideAllNumbers(); //hide the time-space numbers
  hide3DCalendar(); //hide the 3D torus
  hideVariantInfoBtn(); //hide the more variant info button
  hideExitVariantBtn(); //hide the exit variant button
})

//TOGGLE FULLSCREEN ON ICON CLICK
myEnterVRButton.addEventListener("click", function(e) {
  e.preventDefault();
  toggleFullScreen360();
}, false);


//FUNCTIONS
//Make allNumbers object visible
function showAllNumbers(){
  allNumbers.object3D.visible = true;
}
//Hide allNumbers object
function hideAllNumbers(){
  allNumbers.object3D.visible = false;
}
//Make newspaperonTable object visible and add the rayobjs class so that it is clickable
function showMagazineOnTable(){
  newspaperonTable.object3D.visible = true;
  newspaperonTable.classList.add('rayobjs');
}
//Hide newspaperonTable and remove the rayobjs class so that it is not clickable
function hideMagazineOnTable(){
  newspaperonTable.object3D.visible = false;
  newspaperonTable.classList.remove('rayobjs'); 
}
//Show newspaper up close
function showMagazineUpClose(){
  magUpClose.style.visibility = 'visible';
}
//Hide newspaper up close
function hideMagazineUpClose(){
  magUpClose.style.visibility = 'hidden';
}
//Show torus object/circular calendar
function show3DCalendar(){
  torus.object3D.visible = true;
}
//Hide torus object/circular calendar
function hide3DCalendar(){
  torus.object3D.visible = false;
}
//Show the icon for variant information and add rayobjs class so that it is clickable
function showVariantInfoBtn(){
  whatsthis.object3D.visible = true;
  whatsthis.classList.add('rayobjs');
}
//Hide the icon for variant information and add rayobjs class so that it is not clickable
function hideVariantInfoBtn(){
  whatsthis.object3D.visible = false;
  whatsthis.classList.remove('rayobjs');
}
//Show the exit icon for variant views
function showExitVariantBtn(){
  exitVariantViewBtn.style.visibility = "visible";
}
//Hide the exit icon for variant views
function hideExitVariantBtn(){
  exitVariantViewBtn.style.visibility = "hidden";
}
//set the tooltip inner html to the content of the current object's data-tooltip. Make the tooltip visible
function displayTooltip(e, obj){
  tooltip = obj.dataset.tooltip;
  tooltipDiv.innerHTML = tooltip;
  tooltipDiv.style.visibility = "visible";
}
//attach the appropriate innerHTML to the variant info container based on which variant is currently visible
function assignInfoText(){
  let variantH2 = document.getElementById('variantH2');
  let variantP = document.getElementById('variantP');
  if(magUpClose.style.visibility === 'visible'){
    variantH2.innerHTML = "Grapheme-colour Synaesthesia";
    variantP.innerHTML = "The most common type of Synaesthesia in which letters, numbers, symbols, etc. are experienced as having a consistent colour. Hover over the newspaper to get a glimpse of this phenomenon or toggle the colour wheel to see the variant in all its glory.";
  }else if(torus.object3D.visible === true){
    variantH2.innerHTML = "Time-Space Synaesthesia";
    variantP.innerHTML = "Time-space synaesthetes have conscious awareness of mappings between time and space (e.g., they may see months arranged in an ellipse, or years as columns or spirals). In this example, months are experienced as a circular calendar. The length of each month is dependent on how the synesthete percieves it and each also has a distinct colour association.";
  }else if(allNumbers.object3D.visible === true){
    variantH2.innerHTML = "Sequence-Space Synaesthesia";
    variantP.innerHTML = "Sequence-space synaesthesia can cause any type of ordered sequence (days, months, playing cards, etc.) to be experienced visually, in the mind's eye or in the physical space around them. In this example, each numbers are represented by distinct colours and appear physically in space.";
  }
}
//toggle full screen mode 
function toggleFullScreen360(){
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)) {  //check that fullscreen mode is not already in effect
        if (immersiveSection.requestFullScreen) {
          immersiveSection.requestFullScreen(); //enter fullscreen
        } else if (document.documentElement.mozRequestFullScreen) {
          immersiveSection.mozRequestFullScreen(); //enter fullscreen - Firefox
        } else if (document.documentElement.webkitRequestFullScreen) {
          immersiveSection.webkitRequestFullScreen(); //enter fullscreen - Safari
        }
    } else { //if fullscreen is active, exit it
        if (document.cancelFullScreen) {
            document.exitFullscreen();    //exit fullscreen        
        } else if (document.mozCancelFullScreen) {
            document.mozancelFullScreen(); //exit fullscreen - Firefox
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen(); //exit fullscreen - Safari
        }
    }
}

//jQuery

//FUNCTION WHICH CHECKS IF USER IS IN PARTICULAR PAGE SECTION
$.fn.isInViewport = function() {
  let elementTop = $(this).offset().top;
  let elementBottom = elementTop + $(this).outerHeight();

  let viewportTop = $(window).scrollTop();
  let viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

//Magnify Library
let windowsize = $(window).width();
//When DOM is loaded, make magnify function available
$(document).ready(function() { 
  if(windowsize > 1920){ //check if the user's window width is greater than 1920, if so set the magnify image to a larger version of the newspaper
    $('.zoom').magnify({
      speed: 100,
      src: 'images/aframe-assets/newspaper_colour.png'
      });

  }
  else{ //otherwise if the window width is less than than 1920, set the magnify image to a smaller version of the newspaper
    $('.zoom').magnify({
      speed: 100,
      src: 'images/aframe-assets/newspaper-colour-smaller.png'
      });
  } 
});
