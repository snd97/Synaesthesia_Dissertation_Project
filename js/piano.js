//PIANO SECTION
//html references
let pianoInfoBtn = document.querySelector('.pianoInfoIcon');
let pianoInfoBox = document.querySelector('.pianoInfoBox');
let hintsbtn = document.querySelector('#togglehint');
let hints = document.querySelectorAll('.hint');
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

//EVENT LISTENERS
//if icon to toggle more information is clicked, change the info box's visibility to visible
pianoInfoBtn.addEventListener('click', function(){  
  if(pianoInfoBox.style.visibility === 'hidden'){
    pianoInfoBox.style.visibility = 'visible';
  }else{ //otherwsie, hide it
    pianoInfoBox.style.visibility = 'hidden';  
  }
  });
//if the info box itself is clicked, hide it
pianoInfoBox.addEventListener('click', function(){  
pianoInfoBox.style.visibility = 'hidden';
});

//TOGGLE KEYBOARD HINTS - if toggle is off, show all the hints on the keyboard, otherwise hide them
hintsbtn.addEventListener('click', function(){
  hints.forEach((hint) => {
    if(hint.style.visibility === 'hidden'){
      hint.style.visibility = 'visible';
    }else{
      hint.style.visibility = 'hidden';  
    }
  })  
});

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
      dataKey = key.getAttribute('data-key');
      setCircleColour(); //show the correct shape on screen

  //set a timeout for the key style and reset the original style
      setTimeout(function(){
        key.style.transform = 'scale(1)';
        key.style.borderColor = 'black';
        key.style.boxShadow = 'none';
    }, 60);

    setShapeTimeout(); //set timeout for shape on screen
    });
  })



//KEYBOARD EVENTS- keyCode is deprecated - use event.key which will correspond to letters/symbols of keyboard itself

//listen for a keydown event -ONLY IF the document is NOT in fullscreen (i.e. in VR mode from 360 section) AND only if the piano is in the viewport.
//this prevents the piano being heard/played if user presses on keyboard whilst not in the piano section.
window.addEventListener('keydown', event => { 
if((document.fullScreenElement && document.fullScreenElement !== null) ||
  (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if ($('.piano-keys').isInViewport()){
      //select the audio element which has a data key equal to the key of the keyboard event. NB - add toLowerCase() method to ensure it works even is user has CapsLocks on 
      let audio = document.querySelector(`audio[data-key="${event.key.toLowerCase()}"]`); 
      //select the div which has a data key equal to the key of the keyboard event
      let pianoKey = document.querySelector(`div[data-key="${event.key.toLowerCase()}"]`);
      
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

      dataKey = event.key.toLowerCase();
      setCircleColour(); //show the correct shape on screen
      setShapeTimeout(); //set timeout for shape on screen

    //set a timeout for the key style and reset the original style
      setTimeout(function(){
        pianoKey.style.transform = 'scale(1)';
        pianoKey.style.borderColor = 'black';
        pianoKey.style.boxShadow = 'none';
      }, 60); 

    }
  }
});

//set the shape associated with the current dataKey to visible 
function setCircleColour(e){
  if(dataKey === 'a'){
    C.style.background = '#04d400'; // green circle shape
    C.style.visibility = 'visible';
  }else if(dataKey === 'w'){
    Csharp.style.visibility = 'visible'; //black circle
  }else if(dataKey === 's'){
    D.style.visibility = 'visible'; // grey cloud
  }else if(dataKey === 'e'){
    Eflat.style.visibility = 'visible'; //purple
  }else if(dataKey === 'd'){
    E.style.visibility = 'visible'; // turqoise circle shape
    E.style.background = '#09b5b5';
  }else if(dataKey === 'f'){
    F.style.visibility = 'visible'; // blue circle
  }else if(dataKey === 't'){
    Fsharp.style.visibility = 'visible'; // blue/white 
  }else if(dataKey === 'g'){
    G.style.visibility = 'visible'; // yellow
  }else if(dataKey === 'y'){
    Aflat.style.visibility = 'visible'; // orange/pink circles
  }else if(dataKey === 'h'){
    A.style.visibility = 'visible'; // pink
  }else if(dataKey === 'u'){
    Bflat.style.visibility = 'visible';  // purple
   }else if(dataKey === 'j'){
    B.style.visibility = 'visible'; // pale yellow
  }else if(dataKey === 'k'){
    highC.style.visibility = 'visible'; //yellow
  }else if(dataKey === 'o'){
    highCsharp.style.visibility = 'visible'; //orange 
  }else if(dataKey === 'l'){
    highD.style.visibility = 'visible'; //orange outline circle
  }else if(dataKey === 'p'){
    highEflat.style.visibility = 'visible'; //pink fluffy
  }else if(dataKey === ';'){
    highE.style.visibility = 'visible'; //white 
  }else{
    C.style.background = '#' + randomColor;
  }
}
//hide the shape after 550ms
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