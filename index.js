// Your code here
var dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.left;
dodger.style.right;
dodger.style.bottom; //may have to remove this line...
dodger.style.bottom = "100px";

// document.addEventListener("keydown", function(e){
//   if (e.key === "ArrowLeft") {
//     var leftNumbers = dodger.style.left.replace("px", "");
//     var left = parseInt(leftNumbers, 10);
//
//     dodger.style.left = `${left - 7}px`;
//   }
// });

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});



// function moveDodgerRight() {
//   var rightNumbers = dodger.style.right.replace("px", "");
//   var right = parseInt(rightNumbers, 10);
//
//   if (right < 180) {
//     dodger.style.right = `${right - 1}px`;
//   }
// }

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
