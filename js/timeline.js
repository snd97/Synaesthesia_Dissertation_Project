
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

//FIRST VERTICAL SCROLL SECTION
// gsap.utils.toArray(".pushin-layer").forEach((panel, i) => {
//     ScrollTrigger.create({
//       trigger: panel,
//       start: "top top", 
//       pin: true, 
//       pinSpacing: false,
//       scrub:true
//     });
//   });


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


//SECOND VERTICAL SCROLL SECTION
  // gsap.utils.toArray(".verticalScroll").forEach((scroll, i) => {
  //   ScrollTrigger.create({
  //     trigger: scroll,
  //     start: "top top", 
  //     pin: true, 
  //     pinSpacing: false,
  //     scrub:true
  //   });
  // }); 

//SECOND HORIZONTAL SCROLL SECTION
  // let sections = gsap.utils.toArray(".panels");

  // gsap.to(sections, {
  //   xPercent: -100 * (sections.length - 1),
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: ".horizontalscroll",
  //     pin: true,
  //     scrub: 1,
  //     // snap: 1 / (sections.length - 1),
  //     // base vertical scrolling on how wide the container is so it feels more natural.
  //     end: "+=3500",
  //   }
  // });
  
//HORIZONTAL IMAGE SCROLL THROUGH
// gsap.set(".massiveImage", {backgroundImage: 'url(../images/comfy_cafe.jpg)'})

// gsap.to(".massiveImage", {
//   xPercent: -100, 
//   x: () => innerWidth,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".massiveImage",
//     start: "top top",
//     end: () => innerWidth * 5,
//     scrub: true,
//     pin: true,
//     invalidateOnRefresh: true,
//     anticipatePin: 1
//   }
// });

 


let scolldown = document.querySelector("#scroll-down");
  let scollbtn = document.querySelector(".scroll");
  let sections = document.querySelectorAll('section');
  let arrowtochange = document.querySelector(".arrowtochange");

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
    if(ScrollTrigger.isInViewport('.types')){

      gsap.to(window, {duration: 1.5, scrollTo:".whatis" });
      
      
    }
  // });
  });
    
 
  // for(let i=0; i<= sections.length; i++){

  //   gsap.to(window, {duration: 1, scrollTo:{y:"#section" + (i + 1), offsetY:70}});

  // }


    //DOESN'T KNOW WHAT INDEX IS BECAUSE IT'S NOT LOOPING THROUGH ANYTHING RIGHT NOW

// let secs = document.querySelectorAll('section');
// let currentSection = 0;
// let buttonContianer = document.querySelector('#startButton');


// buttonContianer.addEventListener('click', move);

// function move(e) {
//   console.log(secs.length);
//   if (e.target.classList.contains('next') && currentSection < secs.length) {

//     secs[currentSection++].scrollIntoView({ behavior: 'smooth', left: 0 });

//   } else if (currentSection > 0) {
//     secs[--currentSection].scrollIntoView({ behavior: 'smooth' });

//   }
// }

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

// let synIs = document.getElementById('additive');

// let layer = document.querySelector('.add');

// synIs.addEventListener('mouseover', function(){
//   synIs.innerHTML = "INVOLUNTARY";

//   synIs.onmouseout = function(){
//     synIs.innerHTML = "ADDITIVE";
//   };
// })

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
//       }else if((this.rotation <= 360/7*2) && (this.rotation > 360/7)){
//       otherSachsContainer.style.backgroundColor = '#00e034'; //green  
//       // otherSachsContainer.style.backgroundImage = "url('../images/days/THURSDAY.png')"; //green 
      
//       }
//       else if((this.rotation <= 360/7*3) && (this.rotation > 360/7*2)){
//         otherSachsContainer.style.backgroundColor = '#fff700'; //yellow 
//         // otherSachsContainer.style.backgroundImage = "url('../images/days/WEDNESDAY.png')"; 
//       }
//       else if((this.rotation <= 360/7*4) && (this.rotation > 360/7*3)){
//         otherSachsContainer.style.backgroundColor = '#ffbf00'; //orange  
//         // otherSachsContainer.style.backgroundImage = "url('../images/days/TUESDAY.png')";
//       }
//       else if((this.rotation <= 360/7*5) && (this.rotation > 360/7*4)){
//         otherSachsContainer.style.backgroundColor = '#ff0026'; //red
//         // otherSachsContainer.style.backgroundImage = "url('../images/days/MONDAY.png')";
//       }
//       else if((this.rotation <= 360/7*6) && (this.rotation > 360/7*5)){
//         otherSachsContainer.style.backgroundColor = '#6e0099'; //dark purple
//         // otherSachsContainer.style.backgroundImage = "url('../images/days/SUNDAY.png')";
//       }
//       else if((this.rotation < 360) && (this.rotation > 360/7*6)){
//         otherSachsContainer.style.backgroundColor = '#3c22e3'; //dark blue
//         // otherSachsContainer.style.backgroundImage = "url('../images/days/SATURDAY.png')";
//       }
//       else{
//         otherSachsContainer.style.backgroundColor = '#ffeaea'; //original pale pink
//         // otherSachsContainer.style.backgroundImage = "url('../images/days/pink-bg.png')";
//       }
//     }

//     else if(e.target.id === 'musical-scale'){
//       if((this.rotation <= 360/12) && (this.rotation > 0)){
//         scaleC.play();
//       }else if((this.rotation <= 360/12*2) && (this.rotation > 360/12)){
//         scaleD.play();
//       }else if((this.rotation <= 360/12*3) && (this.rotation > 360/12*2)){
//         scaleE.play();
//       }else if((this.rotation <= 360/12*4) && (this.rotation > 360/12*3)){
//         scaleF.play();
//       }else if((this.rotation <= 360/12*5) && (this.rotation > 360/12*4)){
//         scaleG.play();
//       }else if((this.rotation <= 360/12*6) && (this.rotation > 360/12*5)){
//         scaleA.play();
//       }else if((this.rotation <= 360/12*7) && (this.rotation > 360/12*6)){
//         scaleB.play();
//       }else if((this.rotation <= 360/12*8) && (this.rotation > 360/12*7)){
//         scaleCH.play();
//       }else if((this.rotation <= 360/12*9) && (this.rotation > 360/12*8)){
//         scaleDH.play();
//       }else if((this.rotation <= 360/12*10) && (this.rotation > 360/12*9)){
//         scaleEH.play();
//       }else if((this.rotation <= 360/12*11) && (this.rotation > 360/12*10)){
//         scaleDH.play();
//       }else if((this.rotation <= 360) && (this.rotation > 360/12*11)){
//         scaleCH.play();
//       }else{
//         scaleC.pause();
//       }
//   }

// }

// });

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