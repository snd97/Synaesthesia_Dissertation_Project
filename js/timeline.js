//PRELOADER - show gif while page is loading. Show page content only when content is finished loading
let loader = document.getElementById('preloader');
window.onload = (event) => {
  loader.style.visibility = "hidden";
};
//When DOM is loaded, make magnify functions available
$(document).ready(function() {
  $('.zoom').magnify({
    speed: 200   
  });
  $('.zoomlehmann').magnify({
    speed: 200   
  });

  //initiate Slick.js carousel  
  $('.slider').slick({
    centerMode: true, //put current slide at center
    dots: true, //add the dots at bottom of carousel
    infinite: true, //infinite scroll through each slide
    slidesToShow: 1, //show one at a time
    slidesToScroll: 1 //scroll one slide at a time
  });
});

//CAROUSEL 
let slider = document.querySelector('.slider');
//when the mouse is down over the slider, change the cursor to "grabbing"
slider.addEventListener('mousedown', function(){
  slider.style.cursor = "grabbing";
});
//when the mouse lifted over the slider, change the cursor to "grab"
slider.addEventListener('mouseup', function(){
  slider.style.cursor = "grab";
})

//Synaesthesia Is... section
let description = document.getElementById('addDescription');
let descriptors = document.querySelectorAll('.words');
//For each descriptive word, on mouseover, change the innerHTML of the descriptive paragraph to appropriate information
descriptors.forEach( (word) => {
  word.addEventListener('mouseover', function() {
    if(word.id === 'involuntary'){
    description.innerHTML = "Sensory experiences happen automatically.";
    }else if(word.id === 'additive'){
    description.innerHTML = "Experiences happen in addition to initial sensory input.";
    }else if(word.id === 'idiosyncratic'){
    description.innerHTML = "Experiences are unique to the individual - it's unlikely two people share the exact same perceptions.";
    }else if(word.id === 'consistent'){
    description.innerHTML = "Experiences are consistent over time - they won't change from childhood into adulthood.";
  }
//when the mouse is not hovering over any of the words, change the descriptive paragraph content
    word.addEventListener('mouseout', function() {
      description.innerHTML = "Hover to find out more.";
    })
  });
});

//CHANGE SACHS THESIS TO COLOURED DOCUMENT ON HOVER
let firstdoc = document.getElementById('hoverchange');
//When mouse is hovering over the thesis, change the image src to coloured doc
firstdoc.addEventListener('mouseenter', function(){
  firstdoc.src =  "images/history/sachs-coloured.png";
  //Onmouseout, change the image src to original doc
  firstdoc.onmouseout = function(){
    firstdoc.src = "images/history/sachs-normal.png";
  };
});

//CHANGE SENSES IMAGE ON HOVER
let changeOnHover = document.querySelector('#changeOnHover');
//When mouse is hovering over the senses image, change the image src to senses gif
changeOnHover.addEventListener('mouseenter', function(){
  changeOnHover.src =  "images/history/five-senses-animated.gif";
});
//onmouseout, change the image src to original senses
changeOnHover.onmouseout = function(){
  changeOnHover.src =  "images/history/five-senses.png";
}

//Show "continue to next section" link when audio clip has finished
let showOnComplete = document.getElementById('showOnComplete');
let audioOne = document.getElementById("audioOne");
audioOne.onended = function() {
  showOnComplete.style.visibility = "visible";
};

//REGISTER GSAP PLUGINS
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Draggable);

//SACHS HORIZONTAL NUMBER LINE
let sachssections = gsap.utils.toArray(".sachsNumbers"); //each element with '.sachNumbers' added to array called sachssections

//using ScrollTrigger plugin, create a horizontal scroll section
gsap.to(sachssections, {
  xPercent: -100 * (sachssections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".sachsnumberContainer", // the container which triggers a horizontal scroll
    pin: true, // pin the trigger element while active
    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    snap: 1 / (sachssections.length - 1)    // snap to the next section
  }
  });

//When the scroll down icon is clicked, scroll to "What is Synaesthesia?" section
let scrolldown = document.querySelector("#scroll-down");

scrolldown.addEventListener("click", () => {
  gsap.to(window, {duration: 1, scrollTo:".whatis" });
});

//When "continue to next section" link is clicked, scroll to next section
showOnComplete.addEventListener('click', function(){
  gsap.to(window, {duration: 1, scrollTo:".sixTypes"});
});

//CHANGE TEXT WHEN DRAGGING DIAL
let typesSection = document.querySelector('.sixTypes');
//create paragraph
let type = document.createElement('p');
//add the class "mainpara" to the new paragraph for styling
type.classList.add('mainpara');
//create initial text content to the new paragraph
type.textContent = "Rotate the dial clockwise";
//append new paragraph to the 6 types section
typesSection.appendChild(type);

//Using GSAP plugin Draggable, create a draggable element which rotates from 0degrees to 360degrees
const draggable = Draggable.create(".knob", {
  type: "rotation",
  bounds:{maxRotation:360, minRotation:0},
  inertia: true,
  onDrag: function(e) { //when the dial is being dragged, change the text content based on the degree which dial has been rotated
    if(this.rotation <= 0){
      type.textContent = "(Rotate the dial clockwise)";
    }else if((this.rotation <= 360/6) && (this.rotation > 0)){
      type.textContent = "Sound Photisms:  Sounds which elicit color and light perceptions";
      }else if((this.rotation <= 360/6*2) && (this.rotation > 360/6)){
        type.textContent = "Light Photisms: Visual elements which trigger sound sensations";
      }
      else if((this.rotation <= 360/6*3) && (this.rotation > 360/6*2)){
        type.textContent ="Gustation Photisms: Tastes which elicit colour sensations";
      }
      else if((this.rotation <= 360/6*4) && (this.rotation > 360/6*3)){
        type.textContent = "Olfactory Photisms: Smells which elicit colour sensations";
      }
      else if((this.rotation <= 360/6*5) && (this.rotation > 360/6*4)){
        type.textContent = "Pain, heat and tactile sensations which elicit colour and shape sensations";
      }
      else if((this.rotation < 360/6*6) && (this.rotation > 360/6*5)){
        type.textContent = "Shapes which elicit color perceptions";
      }else{
        type.textContent = "(Rotate the dial anti-clockwise)"; //text which shows at end of rotation
      }
    }
});

//NAV BAR- SCROLL DOWN BUTTON 
let scollbtn = document.querySelector(".scroll");
//When scroll down button is clicked, check if a specific section is in the viewport, if it is, scroll to the next section with behaviour:smooth
scollbtn.addEventListener("click", () => {
  if ($('.hero').isInViewport()) {
    document.querySelector('.whatis').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
  else if ($('.whatis').isInViewport()) {
    document.querySelector('.definitions').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
  else if ($('.definitions').isInViewport()) {
    document.querySelector('.seventytypes').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
  else if ($('.seventytypes').isInViewport()) {
    document.querySelector('.percent').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
  else if ($('.percent').isInViewport()) {
    document.querySelector('.synIs').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
  else if ($('.synIs').isInViewport()) {
    document.querySelector('.causesOfSyn').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
  else if ($('.causesOfSyn').isInViewport()) {
    document.querySelector('.briefHistory').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
  else if ($('.briefHistory').isInViewport()) {
    document.querySelector('.firstDoc').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
  else if ($('.firstDoc').isInViewport()) {
    document.querySelector('.sachsThesis').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
  else if ($('.sachsThesis').isInViewport()) {
    document.querySelector('.sachsNumbers').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
  else if ($('.sachsNumbers').isInViewport()) { //when the number line is in the viewport, scroll more slowly through it
    window.scrollBy({
      top: window.innerHeight/4,
      left: 0,
      behavior: 'smooth'
    });
  }
  else if ($('.historyVideo').isInViewport()) {
    document.querySelector('.bleulerlehmann').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
  else if ($('.bleulerlehmann').isInViewport()) {
    document.querySelector('.sixTypes').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
  else if ($('.sixTypes').isInViewport()) {
    document.querySelector('.colourHearing').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
  else if ($('.colourHearing').isInViewport()) {
    document.querySelector('.millet').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
  else if ($('.millet').isInViewport()) {
    document.querySelector('.conclusion').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
  else if ($('.conclusion').isInViewport()) {
    document.querySelector('.hero').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
});

let arrowtochange = document.querySelector(".arrowtochange");
//Check whehter the footer is in viewport. If it is, change scroll down icon to scroll-to-top
function checkPosition(){
  if($('.footer').isInViewport()){
    arrowtochange.setAttribute('src', 'images/icons/scroll-to-top.svg');
  }
  else{
    arrowtochange.setAttribute('src', 'images/icons/scroll-down-arrows.svg');
  }  
}    
//call the checkPosition() function when there is a scroll or resize event
$(window).on('resize scroll', function() {
  checkPosition();
});


//Function which checks if element is in the viewport - used for the scroll down button to make sure it goes to the next section
$.fn.isInViewport = function() {
  let elementTop = $(this).offset().top;
  let elementBottom = elementTop + $(this).outerHeight();

  let viewportTop = $(window).scrollTop();
  let viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

