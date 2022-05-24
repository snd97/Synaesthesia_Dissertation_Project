//Hide preloader gif when content of page is loaded
let loader = document.getElementById('preloader');
window.onload = (event) => {
  loader.style.visibility = "hidden";
};

//References to HTML elements
let typedglow = document.querySelector('.element');
let firstbutton = document.querySelector('.firstbutton');
let secondbutton = document.querySelector('.secondbutton');
let experienceText = document.getElementById('experienceText');
let discoverText = document.getElementById('discoverText');
let canvas = document.getElementById('canvas');

//Event listeners
firstbutton.addEventListener('mouseover', function(){
    experienceText.style.visibility = "visible";
});
firstbutton.addEventListener('mouseout', function(){
    experienceText.style.visibility = "hidden";
});

secondbutton.addEventListener('mouseover', function(){
    discoverText.style.visibility = "visible";
})
secondbutton.addEventListener('mouseout', function(){
    discoverText.style.visibility = "hidden";
});


//Typed.js set up
let options = {
    strings: ['There are two paths through the website.', 'How would you like to begin?'],  //text to type out
    typeSpeed: 60,   //speed of animated type
    startDelay: 2000, //delay start of typing by 2000ms
    backSpeed: 40,   //speed of animated type                       
    loop: false,     //do not loop the animation
    showCursor: false, //do not show the typing cursor
    onComplete: (self) => {   //on completion, call animateLinks function
        animateLinks();
    } 
};

//FUNCTIONS

//Typed.js - assign the declared options to the paragraph with "element" class
let typed = new Typed('.element', options);

//Function which is triggered when Typed.js has completed - adds the "animated" class to both links which prompts a CSS animation
function animateLinks(){
    firstbutton.classList.add("animated");
    secondbutton.classList.add("animated");
}

//SMOKE.JS
let ctx = canvas.getContext('2d'); //define 2d drawing context
//set canvas width and height to the screen's width and height
canvas.height = innerHeight;
canvas.width = innerWidth;   

let smoke = SmokeMachine(ctx, [41, 171, 226]);      //create the smoke machine with blue coloured smoke
smoke.start();  // start animating the smoke
                                   
//Function to detect mouse movement
onmousemove = function (e) {     
    let x = e.clientX;
    let y = e.clientY;
    let n = 0.5;
    let t = Math.floor(Math.random() * 200) + 3800;
    smoke.addsmoke(x, y, n, t);   //render the smoke from the current mouse positions
}

