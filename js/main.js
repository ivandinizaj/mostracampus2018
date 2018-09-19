var target = document.getElementById("target");

function r(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

setInterval(function() {
  target.style.left = r(49,51) + "%";
  target.style.top = r(49,51) + "%";
  target.style.color = "hsl("+r(0,360)+",100%, 70%)";
}, 80);


function disableselect(e){ 
	return false;
}

function reEnable(){ 
	return true;
} 

//if IE4+ 
document.onselectstart=new Function ("return false");
document.oncontextmenu=new Function ("return false") ;
//if NS6 
if (window.sidebar){ 
	document.onmousedown=disableselect;
	document.onclick=reEnable;
}

if(Reveal.getQueryHash().s){

	var timer = new Timer();
	var chrono = document.getElementById('chronoExample');
	chrono.style.zIndex = 9999;
	chrono.style.display = 'block';

	document.querySelector('#chronoExample .startButton').addEventListener('click', function () {
	    timer.start();
	});
	document.querySelector('#chronoExample .pauseButton').addEventListener('click', function () {
	    timer.pause();
	});
	document.querySelector('#chronoExample .stopButton').addEventListener('click', function () {
	    timer.reset();
			timer.pause();
	});

	timer.addEventListener('secondsUpdated', function (e) {
	    document.querySelector('#chronoExample .values').innerHTML = (timer.getTimeValues().toString());
	});
	timer.addEventListener('started', function (e) {
	    document.querySelector('#chronoExample .values').innerHTML = (timer.getTimeValues().toString());
	});
	timer.addEventListener('reset', function (e) {
	    document.querySelector('#chronoExample .values').innerHTML = (timer.getTimeValues().toString());
	}); 
}