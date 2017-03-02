var clearButton = document.getElementById("clear");
var circleButton = document.getElementById("circle");
var svg = document.getElementById("svg");
var requestID;

var clear = function(){
    while(svg.hasChildNodes()){
    	svg.removeChild(svg.lastChild);
    }
}



var anime = function() {
    window.cancelAnimationFrame(requestID);
    var radius = 1;
    var xcor=250;
    var ycor=250;
    var growing = true;

    clear();
    var drawCircle = function(){
	clear()
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

circleButton.addEventListener( "click", anime );
clearButton.addEventListener( "click", clear);
