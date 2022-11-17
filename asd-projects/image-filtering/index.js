// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilter(decreaseBlue);
  applyFilterNoBackground(increaseGreenByBlue);
  applyFilterNoBackground(reddify)

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction){
  for (var i = 0; i < image.length; i++){
    var row = image[i];
    for (var k = 0; k < row.length; k++){
      var rgbString = row[k];
      var rgbNumbers = rgbStringToArray(rgbString);
      filterFunction(rgbNumbers);
      rgbString = rgbArrayToString(rgbNumbers);
      row[k]= rgbString;
    }
  }
}


// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction){
  var backgroundColor = image[0][0];
  for (var i = 0; i < image.length; i++){
    var row = image[i];
    for (var k = 0; k < row.length; k++){
      var rgbString = row[k];
      if (rgbString !== backgroundColor){
        var rgbNumbers = rgbStringToArray(rgbString);
        filterFunction(rgbNumbers);
        rgbString = rgbArrayToString(rgbNumbers);
      }
      row[k]= rgbString;
    }
  }
}

// TODO 5: Create the keepInBounds function
function keepInBounds(num){
  var initialNum = Math.max(num, 0);
  var finalNum = Math.min(initialNum, 255);
  return finalNum;
}

// TODO 3: Create reddify function
function reddify(arr){
  arr[RED] = 200;
}

// TODO 6: Create more filter functions
function decreaseBlue(arr){
  var newBlue = arr[BLUE] -50;
  arr[BLUE] = keepInBounds(newBlue);
}

function increaseGreenByBlue(arr){
  var newGreen = arr[BLUE] + arr[GREEN];
  arr[GREEN] = keepInBounds(newGreen);
}

// CHALLENGE code goes below here
