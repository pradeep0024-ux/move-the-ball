var ball = document.getElementById("ball");
var left = 0;
var top = 0;
//right
function move(p) {
  if (p.keyCode == 39) {
    left = left + 2;
    ball.style.left = left + "px";
    if (left >= 400) {
      left = left - 2;
    }
  }
  //left
  if (p.keyCode == 37) {
    left = left - 2;
    ball.style.left = left + "px";
    if (left <= 0) {
      left = left + 2;
    }
  }
  //down
  if (p.keyCode == 40) {
    top = top + 2;
    ball.style.top = top + "px";
    if (top >= 400) {
      top = top - 2;
    }
  }
  //up
  if (p.keyCode == 38) {
    top = top - 2;
    ball.style.top = top + "px";
    if (top <= 0) {
      top = top + 2;
    }
  }
}
document.onkeydown = move;

