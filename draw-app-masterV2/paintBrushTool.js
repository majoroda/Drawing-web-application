function paintBrushTool(){
	//set an icon and a name for the object
	this.icon = "assets/PaintBrushTool.jpg";
	this.name = "paintbrush";

      

	this.draw = function(){
        //if the mouse is pressed paint on the canvas
        
		if(mousePressOnCanvas(c) && mouseIsPressed){
		    ellipse(mouseX, mouseY, 20);
		}
	};

	// function to keep the mouse event action inside the canvas
    function mousePressOnCanvas(canvas){
		if (mouseX > canvas.elt.offsetLeft &&
			 mouseX < (canvas.elt.offsetLeft + canvas.width)
		     && mouseY > canvas.elt.offsetTop &&
			  mouseY < (canvas.elt.offsetTop + canvas.height) 
		){
			return true;
		}
		return false;
	}
}