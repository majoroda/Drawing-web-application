function EraserTool(){
	//set an icon and a name for the object
	this.icon = "assets/EraserTool.jpg";
	this.name = "Eraser";

   

	this.draw = function(){
        //if the mouse is pressed erase specific elements on the canvas
		if(mousePressOnCanvas(c) && mouseIsPressed){
		    ellipse(mouseX, mouseY, 30);
		}
        fill(255);
        noStroke();
	};


	// function to keep the mouse event action inside the canvas
    function mousePressOnCanvas(canvas){
		if (mouseX > canvas.elt.offsetLeft && mouseX < (canvas.elt.offsetLeft + canvas.width)
		&& mouseY > canvas.elt.offsetTop && mouseY < (canvas.elt.offsetTop + canvas.height) ){
			return true;
		}
		return false;
	}
}
