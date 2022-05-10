let loader = document.getElementById('preloader');
window.onload = (event) => {
  console.log('page is fully loaded');
  loader.style.visibility = "hidden";
};

let images = new Array()
function preload() {
  
  for (i = 0; i < preload.arguments.length; i++) {
    images[i] = new Image()
    images[i].src = preload.arguments[i]
  }
  // console.log(images[0]);
  // console.log(images[1]);
}
preload(
  "images/sachs-coloured.png",
  "images/sachs-normal.png"
)
let showOnComplete = document.getElementById('showOnComplete');
let audioOne = document.getElementById("audioOne");
audioOne.onended = function() {
  showOnComplete.style.visibility = "visible";
};

// $('.scroll').click(function () {

//   console.log('it was clicked')
//   let fuller = $(this).closest('.sections').next(),
//       section = $(this).closest('.sectionsContainer');

//   section.animate({
//       scrollTop: section.scrollTop() + fuller.offset()
//   }, 700);

// });




//CHANGE TEXT ON HOVER
let type = document.createElement('p');
type.classList.add('mainpara');
type.textContent = "Rotate the dial clockwise";
let div = document.getElementById('sixtypes');
div.appendChild(type);

let ball = document.querySelectorAll('.ball');
// ball.forEach(ball => {
//   ball.addEventListener('mouseover', function (event){
//     if(ball.id === "ball1"){
//       type.textContent = "Sound Photisms"
//     }else if(ball.id === "ball2"){
//       type.textContent = "Light Photisms"
//     }else if(ball.id === "ball3"){
//       type.textContent ="Gustation Photisms"
//     }else if(ball.id === "ball4"){
//       type.textContent = "Olfactory Photisms"
//     }else if(ball.id === "ball5"){
//       type.textContent = "Colour and shape sensations for pain, heat and tactile sensations"
//     }else if(ball.id === "ball6"){
//       type.textContent = "Colour Sensations for Shapes"
//     } 
//   });
//   ball.onmouseout = function(){
//     type.textContent = ""
//   };
// });
let typesSection = document.querySelector('.types');
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
          // typesSection.style.backgroundImage = "url('../images/burn.jpg')";        }
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
  gsap.to(window, {duration: 1, scrollTo:".types"});

});

// let whatis = document.getElementById('whatisSyn');
// whatis.addEventListener('click', function(){
//   gsap.to(window, {duration: 1, scrollTo:".whatis"});

// });

// let whatis = document.getElementById('whatisSyn');
// whatis.addEventListener('click', function(){
//   gsap.to(window, {duration: 1, scrollTo:".whatis"});

// });

// let historyOf = document.getElementById('historyof');
// historyOf.addEventListener('click', function(){
//   gsap.to(window, {duration: 1, scrollTo:".brief"});

// })

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


  // $(() => {
  //   let sections = $('.sections'),
  //     btn = $(".scroll"),
  //     idx = 1;
  //   // adding the click listener to the "a" element //
  //   btn.on('click', e => {
  //     e.preventDefault(); // preventing the jump to top (and adding "#" to the URL) //
  //     idx >= sections.length && (idx = 0); // if the counter reaches the number of the section in the page we must decrement it to 0 //
  //     if(idx === sections.length -1){
  //       console.log('idx is 0');
  //       arrowtochange.setAttribute('src', 'images/icons/scroll-to-top.png')
  //     }
  //     else{
  //       arrowtochange.setAttribute('src', 'images/icons/scroll-arrows.png')
  //     }
  //     // scroll effect: the "body" and the "html" elements should scroll not a section but the scroll destination is based on the section with the index "idx" offset from the top of the page (all the page not only the viewport) //
  //       $("html, body").animate({
  //         scrollTop: $(sections[idx++]).offset().top
  //       }, 700);
  //   });
  // });


  // scollbtn.addEventListener("click", () => {
  //   if(ScrollTrigger.isInViewport('.sachsnumberContainer')){

  //     gsap.to(window, {duration: 1.5, scrollTo:".whatis" });      
      
  //   }

  //   else if(ScrollTrigger.isInViewport('.prevalence ')){

  //     gsap.to(window, {duration: 1.5, scrollTo:".whatis" });      
      
  //   }
  // });
    
    // if(ScrollTrigger.isInViewport('.hero')){
    //   gsap.to(window, {duration: 1, scrollTo:".brief" });
    // }
    // else if(ScrollTrigger.isInViewport('.brief')){
    //   gsap.to(window, {duration: 1, scrollTo:".whatis" });
    // }
    // else if(ScrollTrigger.isInViewport('.prevalance')){
    //   gsap.to(window, {duration: 1.5, scrollTo:".whatis" });
    // }


    scolldown.addEventListener("click", () => {
      gsap.to(window, {duration: 1, scrollTo:".whatis" });
    });
  
    scollbtn.addEventListener("click", () => {
      // if(ScrollTrigger.isInViewport('.hero')){
      //   gsap.to(window, {duration: 1, scrollTo:".brief" });
      // }
      // else if(ScrollTrigger.isInViewport('.brief')){
      //   gsap.to(window, {duration: 1, scrollTo:".whatis" });
      // }
      // else if(ScrollTrigger.isInViewport('.prevalance')){
      //   gsap.to(window, {duration: 1.5, scrollTo:".whatis" });
      // }
      window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
      });
      if(ScrollTrigger.isInViewport('.prevalence')){
        gsap.to(window, {duration: 1.5, scrollTo:".whatis" });      
        
      }
     
    // });
    });



let firstdoc = document.getElementById('hoverchange');
let doctext = document.getElementById('caption');

firstdoc.addEventListener('mouseenter', function(){
  firstdoc.src = images[0].src;
  doctext.innerHTML = "Sachs had Grapheme-Colour Synaesthesia. He perceived distinct colours for many letters of the alphabet."


  firstdoc.onmouseout = function(){
    firstdoc.src = images[1].src;
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


// const draggable = Draggable.create(".knob", {
//   type: "rotation",
//   bounds:{maxRotation:360, minRotation:0},
//   inertia: true,
//   onDrag: function(e) {
//     // console.log(e.target.id); //show the target's id in the console
//     // console.log(this.rotation);
//     // let randomColor = Math.floor(Math.random()*16777215).toString(16);
//     let otherSachsContainer = document.getElementById('OtherSachs');

//     if(e.target.id === 'days'){
//       if((this.rotation <= 360/7) && (this.rotation > 0)){
//         otherSachsContainer.style.backgroundColor = '#44d1fc';
//         // otherSachsContainer.style.backgroundImage = "url('../images/days/FRIDAY.png')"; //light blue
//         // otherSachsContainer.style.backgroundSize = "cover";
//         // otherSachsContainer.style.backgroundRepeat = "no-repeat";
//       else{
//         otherSachsContainer.style.backgroundColor = '#ffeaea'; //original pale pink
//         // otherSachsContainer.style.backgroundImage = "url('../images/days/pink-bg.png')";
//       }
//     }



preload();


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



gsap.registerPlugin(MotionPathPlugin);

gsap.to("#rect", {
  duration: 5, 
  repeat: 12,
  repeatDelay: 3,
  yoyo: true,
  ease: "power1.inOut",
  motionPath:{
    path: "#path",
    align: "#path",
    autoRotate: true,
    alignOrigin: [0.5, 0.5]
  }
});