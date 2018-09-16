var target = document.getElementById("target");

function r(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

setInterval(function() {
  target.style.left = r(49,51) + "%";
  target.style.top = r(49,51) + "%";
  target.style.color = "hsl("+r(0,360)+",100%, 70%)";
}, 80);