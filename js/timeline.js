let loader = document.getElementById('preloader');
window.onload = (event) => {
  loader.style.visibility = "hidden";
};



let showOnComplete = document.getElementById('showOnComplete');
let audioOne = document.getElementById("audioOne");
audioOne.onended = function() {
  showOnComplete.style.visibility = "visible";
};


//CHANGE TEXT on drag
let typesSection = document.querySelector('.sixTypes');
let type = document.createElement('p');
type.classList.add('mainpara');
type.textContent = "Rotate the dial clockwise";
typesSection.appendChild(type);

let ball = document.querySelectorAll('.ball');

const draggable = Draggable.create(".ball", {
    type: "rotation",
    bounds:{maxRotation:360, minRotation:0},
    inertia: true,
    onDrag: function(e) {
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
          type.textContent = "(Rotate the dial anti-clockwise)";
        }
      }
  });

//TOGGLE FUNCTION
// function myFunction(x) {
//   x.classList.toggle("fa-hourglass-end");
// }

//ADD SCROLLS
gsap.registerPlugin(ScrollToPlugin);

showOnComplete.addEventListener('click', function(){
  gsap.to(window, {duration: 1, scrollTo:".sixTypes"});

});

//ADD SCROLL TRIGGERS FOR TIMELEINE
gsap.registerPlugin(ScrollTrigger);



  //SACHS NUMBER LINE
let sachssections = gsap.utils.toArray(".sachsNumbers");

gsap.to(sachssections, {
  xPercent: -100 * (sachssections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".sachsnumberContainer",
    pin: true,
    scrub: 1,
    snap: 1 / (sachssections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=2500"
    
  }
  });



let scolldown = document.querySelector("#scroll-down");
let scollbtn = document.querySelector(".scroll");
let sections = document.querySelectorAll('section');
let arrowtochange = document.querySelector(".arrowtochange");

scolldown.addEventListener("click", () => {
  gsap.to(window, {duration: 1, scrollTo:".whatis" });
});


  scollbtn.addEventListener("click", () => {
    
    if(ScrollTrigger.isInViewport('.hero')){
      gsap.to(window, {duration: 1, scrollTo:".whatis" });
    }
    else if(ScrollTrigger.isInViewport('.whatis')){
      gsap.to(window, {duration: 1, scrollTo:".definitions" });
    }
    else if(ScrollTrigger.isInViewport('.definitions')){
      gsap.to(window, {duration: 1, scrollTo:".seventytypes" });
    }
    else if(ScrollTrigger.isInViewport('.seventytypes')){
      gsap.to(window, {duration: 1, scrollTo:".percent" });
    }
    else if(ScrollTrigger.isInViewport('.percent')){
      gsap.to(window, {duration: 1, scrollTo:".synIs" });
    }
    else if(ScrollTrigger.isInViewport('.synIs')){
      gsap.to(window, {duration: 1, scrollTo:".causesOfSyn" });
    }
    else if(ScrollTrigger.isInViewport('.causesOfSyn')){
      gsap.to(window, {duration: 1, scrollTo:".briefHistory" });
    }
    else if(ScrollTrigger.isInViewport('.briefHistory')){
      gsap.to(window, {duration: 1, scrollTo:".firstDoc" });
    }
    else if(ScrollTrigger.isInViewport('.firstDoc')){
      gsap.to(window, {duration: 1, scrollTo:".sachsThesis" });
    }
    else if(ScrollTrigger.isInViewport('.sachsThesis')){
      gsap.to(window, {duration: 1, scrollTo:".sachsNumbers" });
    }
    else if(ScrollTrigger.isInViewport('.sachsNumbers')){
      window.scrollBy({
        top: window.innerHeight/2,
        left: 0,
        behavior: 'smooth'
      });
    }
    else if(ScrollTrigger.isInViewport('.historyVideo')){
        window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
      });
    }
    else if(ScrollTrigger.isInViewport('.bleulerlehmann')){
      window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
      });
    }
    else if(ScrollTrigger.isInViewport('.sixTypes')){
      window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
      });
    }
    else if(ScrollTrigger.isInViewport('.colourHearing')){
      window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
      });
    }
    else if(ScrollTrigger.isInViewport('.millet')){
      gsap.to(window, {duration: 2, scrollTo:".hero" });
    }
  });

function checkIfInLastSection(){
  if(ScrollTrigger.isInViewport('.footer')){
    arrowtochange.setAttribute('src', 'images/icons/scroll-to-top.png');
  }
  else{
    arrowtochange.setAttribute('src', 'images/icons/scroll-arrows.png');
  }
  
}    

$(window).on('resize scroll', function() {
  checkIfInLastSection();
});


let firstdoc = document.getElementById('hoverchange');
let doctext = document.getElementById('caption');

firstdoc.addEventListener('mouseenter', function(){
  firstdoc.src =  "images/sachs-coloured.png"
  doctext.innerHTML = "Sachs had Grapheme-Colour Synaesthesia. He perceived distinct colours for many letters of the alphabet."


  firstdoc.onmouseout = function(){
    firstdoc.src = "images/sachs-normal.png"
    doctext.innerHTML = "Georg Tobias Ludwich Sachs wrote about his Synaesthetic-experience in his doctural thesis"
  };
})



let description = document.getElementById('addDescription');

let descriptors = document.querySelectorAll('.words');

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
  word.addEventListener('mouseout', function() {
    description.innerHTML = "Hover to find out more.";
  })
  })

});


$(document).ready(function() {
  $('.zoom').magnify({
    speed: 200,
   
  });
  $('.zoomlehmann').magnify({
    speed: 200,
   
  });

  
  $('.slider').slick({
    centerMode: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  

});


let slider = document.querySelector('.slider');

slider.addEventListener('mousedown', function(){
  slider.style.cursor = "grabbing";
});
slider.addEventListener('mouseup', function(){
  slider.style.cursor = "grab";
})



// gsap.registerPlugin(MotionPathPlugin);

// gsap.to("#rect", {
//   duration: 8, 
//   repeat: 12,
//   repeatDelay: 0,
//   yoyo: true,
//   ease: "power1.inOut",
//   motionPath:{
//     path: "#path",
//     align: "#path",
//     autoRotate: true,
//     alignOrigin: [0.5, 0.5]
//   }
// });