let loader = document.getElementById('preloader');
window.onload = (event) => {
  loader.style.visibility = "hidden";
};

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


let showOnComplete = document.getElementById('showOnComplete');
let audioOne = document.getElementById("audioOne");
audioOne.onended = function() {
  showOnComplete.style.visibility = "visible";
};

let changeOnHover = document.querySelector('#changeOnHover');
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
    // end: "+=2500"
    
  }
  });



let scolldown = document.querySelector("#scroll-down");
let scollbtn = document.querySelector(".scroll");
let sections = document.querySelectorAll('section');
let arrowtochange = document.querySelector(".arrowtochange");
let neuralGenetic = document.getElementById('neural-and-genetic');

scolldown.addEventListener("click", () => {
  gsap.to(window, {duration: 1, scrollTo:".whatis" });
});


neuralGenetic.addEventListener("click", () => {
  gsap.to(window, {duration: 2, scrollTo:".causesOfSyn" });
})


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
  else if ($('.sachsNumbers').isInViewport()) {
    window.scrollBy({
      top: window.innerHeight/4,
      left: 0,
      behavior: 'smooth'
    });
  }
  else if ($('.historyVideo').isInViewport()) {
    //   window.scrollBy({
    //   top: window.innerHeight,
    //   left: 0,
    //   behavior: 'smooth'
    // });
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

function checkIfInLastSection(){
  if($('.footer').isInViewport()){
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

changeOnHover.addEventListener('mouseenter', function(){
  changeOnHover.src =  "images/five-senses-animated.gif";
});
changeOnHover.onmouseout = function(){
  changeOnHover.src =  "images/five-senses.png";
}


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



//Function which checks if element is in the viewport - used for the scroll down button to make sure it goes to the next section
$.fn.isInViewport = function() {
  let elementTop = $(this).offset().top;
  let elementBottom = elementTop + $(this).outerHeight();

  let viewportTop = $(window).scrollTop();
  let viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

