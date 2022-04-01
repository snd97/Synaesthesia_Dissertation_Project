//PIANO SECTION

const elem = document.querySelector('.buttonFull');
let pianosect = document.querySelector('.piano');

elem.addEventListener("click", function(e) {
  e.preventDefault();
  toggleFullScreen()
}, false);

let yOffset;

function toggleFullScreen(){

  if ((document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)) {
          yOffset = window.pageYOffset;
          console.log(yOffset);
          elem.src = "../images/exit-full-screen.png";
        if (pianosect.requestFullScreen) {
          pianosect.requestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (document.documentElement.mozRequestFullScreen) {
          pianosect.mozRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (document.documentElement.webkitRequestFullScreen) {
          pianosect.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
      elem.src = "../images/full-screen.png";
        if (document.cancelFullScreen) {
            document.exitFullscreen();
            setTimeout(() => window.scrollTo(0, yOffset), 100);
            
        } else if (document.mozCancelFullScreen) {
            document.mozancelFullScreen();
            setTimeout(() => window.scrollTo(0, yOffset), 100);
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
            setTimeout(() => window.scrollTo(0, yOffset), 100);
        }
    }
}


//TOGGLE KEYBOARD HINTS
let hintsbtn = document.querySelector('#togglehint');
let hints = document.querySelectorAll('.hint');

hintsbtn.addEventListener('click', function(){
  hints.forEach((hint) => {
    if(hint.style.visibility === 'hidden'){
      hint.style.visibility = 'visible';
    }else{
      hint.style.visibility = 'hidden';   
    }
  })  
});


let dataKey;
//SHAPE REFERENCES:
let C = document.getElementById('C'); 
let Csharp = document.getElementById('Csharp');
let D = document.getElementById('D');
let Eflat = document.getElementById('Eflat');
let E = document.getElementById('E');
let F = document.getElementById('F');
let Fsharp = document.getElementById('Fsharp');
let G = document.getElementById('G');
let Aflat = document.getElementById('Aflat');
let A = document.getElementById('A');
let Bflat = document.getElementById('Bflat');
let B = document.getElementById('B');
let highC = document.getElementById('highC');
let highCsharp = document.getElementById('highCsharp');
let highD = document.getElementById('highD');
let highEflat = document.getElementById('highEflat');
let highE = document.getElementById('highE');


//MOUSE EVENTS
//select all the elements with the class "key"
let allKeys = document.querySelectorAll('.key');
//use forEach method to iterate over all the keys
  allKeys.forEach((key) => {

  //let the audio equal the src attribute of the key's first child (i.e. audio)
    let audio = key.firstChild.src;
  //use Howler for smooth audio playback which also allows multiple audio to play at once
    let mouseSounds = new Howl({
      src: [audio]
    });
  //use Hammer.js to detect gestures on the piano keys
    let mc = new Hammer(key);   
  //when it detects a 'tap' or 'press' set some style to the key and play the audio associated with that key        
    mc.on("press tap", function(ev) { 
      key.setAttribute('style', 'transform: scale(.95); border-color: #f5f242; box-shadow: 0 0 1rem #028ae9;');
      mouseSounds.play();
      // circle.setAttribute('style', 'visibility:visible');     
      dataKey = key.getAttribute('data-key');
      setCircleColour();

  //set a timeout and reset the original style
      setTimeout(function(){
        key.style.transform = 'scale(1)';
        key.style.borderColor = 'black';
        key.style.boxShadow = 'none';
    }, 60);

    setShapeTimeout();
    });
  })



//KEYBOARD EVENTS- keyCode is deprecated - use event.key which will correspond to letters/symbols of keyboard itself

window.addEventListener('keydown', event => {
    //select the audio element which has a data key equal to the key of the keyboard event 
    let audio = document.querySelector(`audio[data-key="${event.key}"]`); 
    //select the div which has a data key equal to the key of the keyboard event
    let pianoKey = document.querySelector(`div[data-key="${event.key}"]`);
    
    //check whether an audio file exists on the key which has been pressed - if not, break out of function
    if(!audio) return;
    //use Howler for smooth audio playback which also allows multiple audio to play at once
    //the source of the audio to play is audio.src
    let keyboardSounds = new Howl({
    src: [audio.src]
    });
  //so, when the event's key equals one of the audio's data-key values, play the corresponding audio   
    keyboardSounds.play();
  //when the audio is played, add some style to the key div
    pianoKey.setAttribute('style', 'transform: scale(.95); border-color: #f5f242; box-shadow: 0 0 1rem #028ae9;');

    dataKey = event.key;
    setCircleColour();
    setShapeTimeout();

  //set a timeout and reset the original style
    setTimeout(function(){
      pianoKey.style.transform = 'scale(1)';
      pianoKey.style.borderColor = 'black';
      pianoKey.style.boxShadow = 'none';
    }, 60); 
});


let canvas = document.getElementById('canvas');

let ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

let party = SmokeMachine(ctx, [227, 39, 164]);

function setCircleColour(e){
  if(dataKey === 'a'){
    C.style.background = '#04d400'; // green circle shape
    C.style.visibility = 'visible';
  }else if(dataKey === 'w'){
    Csharp.style.visibility = 'visible';
  }else if(dataKey === 's'){
    D.style.visibility = 'visible'; // pink cloud
  }else if(dataKey === 'e'){
    Eflat.style.visibility = 'visible'; //yellow circle
  }else if(dataKey === 'd'){
    E.style.visibility = 'visible'; // large turqoise circle shape
    E.style.background = '#09b5b5';
  }else if(dataKey === 'f'){
    F.style.visibility = 'visible'; // white/blue circle
  }else if(dataKey === 't'){
    Fsharp.style.visibility = 'visible'; // purple-y blob
  }else if(dataKey === 'g'){
    G.style.visibility = 'visible'; // red splatter
  }else if(dataKey === 'y'){
    Aflat.style.visibility = 'visible'; // blue/red/pink blob
  }else if(dataKey === 'h'){
    A.style.visibility = 'visible'; // blue/white/purple rec. circle
  }else if(dataKey === 'u'){
    Bflat.style.visibility = 'visible';  // pink/yellow/blue blob
   }else if(dataKey === 'j'){
    B.style.visibility = 'visible'; // pink circle
  }else if(dataKey === 'k'){
    highC.style.visibility = 'visible'; //orange circle outline
  }else if(dataKey === 'o'){
    highCsharp.style.visibility = 'visible'; //orange planet-like shape
  }else if(dataKey === 'l'){
    highD.style.visibility = 'visible'; //black lined circle
  }else if(dataKey === 'p'){
    highEflat.style.visibility = 'visible'; //texture circle
  }else if(dataKey === ';'){
    highE.style.visibility = 'visible'; //white shell-like circle
  }else{
    C.style.background = '#' + randomColor;
  }
}
function setShapeTimeout(){
  setTimeout(function(){
    C.style.visibility = 'hidden';
    Csharp.style.visibility = 'hidden';
    D.style.visibility = 'hidden';
    Eflat.style.visibility = 'hidden';
    E.style.visibility = 'hidden';
    F.style.visibility = 'hidden';
    Fsharp.style.visibility = 'hidden';
    G.style.visibility = 'hidden';
    Aflat.style.visibility = 'hidden';
    A.style.visibility = 'hidden';    
    Bflat.style.visibility = 'hidden';  
    B.style.visibility = 'hidden'; 
    highC.style.visibility = 'hidden'; 
    highCsharp.style.visibility = 'hidden'; 
    highD.style.visibility = 'hidden';
    highEflat.style.visibility = 'hidden'; 
    highE.style.visibility = 'hidden';      
    }, 550);
}