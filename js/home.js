let loader = document.getElementById('preloader');
window.onload = (event) => {
  loader.style.visibility = "hidden";
};

//References to HTML elements
let typedglow = document.querySelector('.element');
let firstbutton = document.querySelector('.firstbutton');
let secondbutton = document.querySelector('.secondbutton');

//Function which is triggered when Typed.js has completed - this will add the "animated" class to both links which prompts a CSS animation
function animateLinks(){
    firstbutton.classList.add("animated");
    secondbutton.classList.add("animated");
}


let options = {
strings: ['How would you like to begin?'],  //text to type
typeSpeed: 60,                              //speed of animated type
startDelay: 2500,                           //delay start of typing by 2500ms
loop: false,                                //do not repeat
showCursor: false,                          //do not show the typing cursor
onComplete: (self) => {                     //on completion, call animateLinks function
    animateLinks();
}        

};
//Typed.js initialisation - assign the declared options to the paragraph with "element" class
let typed = new Typed('.element', options);


//SMOKE.JS
let canvas = document.getElementById('canvas');     //create a canvas for smoke to be rendered on

let ctx = canvas.getContext('2d');
canvas.width = innerWidth;                          //set canvas width and height to the screen's width and height
canvas.height = innerHeight;

let party = SmokeMachine(ctx, [41, 171, 226]);      //create the smoke machine with blue coloured smoke
party.start();                                      // start animating the smoke

onmousemove = function (e) {                        //function to detect mouse moves
let x = e.clientX;
let y = e.clientY;
let n = 0.5;
let t = Math.floor(Math.random() * 200) + 3800;
party.addsmoke(x, y, n, t);                         //render the smoke from the current mouse positions
}


let experienceText = document.querySelector('#experienceText');
let discoverText = document.querySelector('#discoverText');

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