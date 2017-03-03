var clearButton = document.getElementById("clear");
var circleButton = document.getElementById("circle");
var dvdButton = document.getElementById("dvd");
var svg = document.getElementById("svg");
var requestID;
var xcor=250;
var ycor=250;

var clear = function(){
    window.cancelAnimationFrame( requestID );
    while(svg.hasChildNodes()){
    	svg.removeChild(svg.lastChild);
    }
}


var anime = function() {
    window.cancelAnimationFrame( requestID );
    var radius = 1;
    var growing = true;

    var drawCircle = function(){
    	clear();
		var newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		newCircle.setAttribute("cx", xcor);
		newCircle.setAttribute("cy", ycor);
		newCircle.setAttribute("r", radius);
		newCircle.setAttribute("fill", "navy");
		svg.appendChild(newCircle);
		if (radius>=250){ growing = false;}
		if (radius<=0){ growing = true;}
		console.log(growing)
		if (growing) { radius++;}
		else { radius--;};
		requestID = window.requestAnimationFrame(drawCircle);
	};
	drawCircle(xcor,ycor,radius);
};

var animateDVD = function(){
  	window.cancelAnimationFrame( requestID );
    var x = Math.random() * 300 + 100;
    var y = Math.random() * 300 + 100;
    var right = true;
    var down = true;

  	var drawDVD = function(){
    	clear();
	    var dvd = document.createElementNS("http://www.w3.org/2000/svg","image");
		dvd.setAttribute("href","dvd.jpg");
		dvd.setAttribute("x",x);
		dvd.setAttribute("y", y);
		dvd.setAttribute("height", 140);
		dvd.setAttribute("width", 220);
		svg.appendChild(dvd);

	    if (x >= 300) { right = false; }
	    else if (x <= 0) { right = true; }
	    if (y <= 0) { down = true; }
	    else if (y >= 400) { down = false; }

	    if (right) { x++; }
	    else  { x--; }
	    if (down) { y++; }
	    else { y--; }

	    requestID = window.requestAnimationFrame(drawDVD);
	  }
	  drawDVD();
	}

circleButton.addEventListener( "click", anime );
clearButton.addEventListener( "click", clear);
dvdButton.addEventListener("click",animateDVD);
