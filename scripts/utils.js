/*
	Function Name: requestAnimFrame(callbackFunction)
	Author: Web - various sources
	Return Value: nothing we'll need
	Description: shim for requestAnimationFrame() 
	with setTimeout fallback 
*/
window.requestAnimFrame = (function(){ 
  return  window.requestAnimationFrame       ||  
          window.webkitRequestAnimationFrame ||  
          window.mozRequestAnimationFrame    ||  
          window.oRequestAnimationFrame      ||  
          window.msRequestAnimationFrame     ||  
          function( callback ){ 
            window.setTimeout(callback, 1000 / 60); 
          }; 
})(); 


/*
	Function Name: clamp(val, min, max)
	Author: Web - various sources
	Return Value: the constrained value
	Description: returns a value that is
	constrained between min and max (inclusive) 
*/
function clamp(val, min, max){
    return Math.max(min, Math.min(max, val));
}

/* 
	Function: isClamped
*/
function isClamped (val, min, max) {
	if (val >= max)
	{
		return "max";
	}
	else if (val <= min)
	{
		return "min";
	}
	else
	{
		return false;
	}
}


/*
	Function Name: getRandom(min, max)
	Author: https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/random
	Return Value: a floating point random number between min and max
*/
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}


/*
	Function Name: getRandomInt(min, max)
	Author: https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/random
	Return Value: a random integer between min and max
*/
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
	Function Name: calculateDeltaTime()
	Return Value: calculated time difference in between frames
*/
function calculateDeltaTime()
{
	var now,fps;
	now = (+new Date);
	fps = 1000 / (now - lastTime);
	fps = clamp(fps, 12, 60);
	lastTime = now;
	return 1/fps;
}

function collides(a, b){
		return a.x < b.x + b.width &&
		a.x + a.width > b.x &&
		a.y < b.y + b.height &&
		a.y + a.height > b.y;
}