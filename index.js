// Your code here
var dodger = document.getElementById('dodger');


function moveDodgerLeft(){
  var leftNums = dodger.style.left.replace('px', '');
    var leftSide = parseInt(leftNums, 10)
    if (leftSide > 0) {
      dodger.style.left = `${leftSide - 1}px`
    }
}

function moveDodgerRight(){
  var leftNums = dodger.style.left.replace('px', '');
  var leftSide = parseInt(leftNums, 10)
  if (leftSide > 0) {
    dodger.style.left = `${leftSide + 1}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft()
  }
})

document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight()
  }
})
