/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    "UP": 38,
    "DOWN": 40,
    "LEFT": 37,
    "RIGHT": 38,
    "ENTER": 13,
  };
  // Game Item Objects
  var speedY = 0;
  var speedX = 0;
  var positionY = 0;
  var positionX = 0;



  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeydown);  
  $(document).on("keyup", handleKeyUp); // change 'eventType' to the type of event you want to handle
  console.log(handleKeydown);
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    redrawGameItem()
    repostionGameItem()

  }

  /* 
  Called in response to events.
  */
  function handleKeydown(event) {
    console.log("yo");
    if (event.which === 37) {
      console.log("left");
      speedX = -5;
    }
    else if (event.which === 39) {
    console.log("right");
      speedX = 5;
    }
    else if (event.which === 38) {
      console.log("up");
      speedY = -5;
    }
     else if (event.which === 40) {
     console.log("down");
      speedY = 5;
   }
    else if (event.which === 13){
      console.log("enter");
      speedX = 0;
    }
  }
  
  function handleKeyUp(event){
  if (event.which === 39){
   console.log("right");
   speedX = 0;
  }
  else if (event.which === 38){
    console.log("up")
    speedY = 0;
  }
  else if (event.which === 40){
    console.log("down");
    speedY = 0;
  }
  else if  (event.which === 37){
    console.log("left");
    speedX = 0;
  }
  
  

  };
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////


  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

  function repostionGameItem() {
    positionX += speedX
    positionY += speedY
  }
  function redrawGameItem() {
    $(walker).css("left", positionX)
    $(walker).css("top", positionY)
  }
}