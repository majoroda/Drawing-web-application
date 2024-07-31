function verticesTool(){
	//Set an icon and a name for the object
	this.name = "verticesTool";
	this.icon = "assets/Vertex.jpg";
	

	this.draw = function(){
		updatePixels();
		// Mouse event to draw on the canvas when mouse is pressed
		// Click the canvas to add a vertex

		//Change the cursor to a cross
		 helpers.cross();

		if(mousePressOnCanvas(c) && mouseIsPressed)
		{
			if(!editMode){
				currentShape.push({
					x: mouseX,
					y: mouseY
				});
			}
			else{
				for(i = 0; i < currentShape.length; i++){
					if(dist(currentShape[i].x, currentShape[i].y, mouseX, mouseY)
					< 15 ){
						currentShape[i].x = mouseX;
						currentShape[i].y = mouseY;
					}
				}
			}

		}

		beginShape();

		for(var i = 0; i < currentShape.length; i++){
			vertex(currentShape[i].x, currentShape[i].y);
			// If in editMode make and fill the vertex points of intersection with red to edit
			if(editMode){
				fill('red');
				ellipse(currentShape[i].x, currentShape[i].y, 5);
				noFill();
			}
		}
		noFill();
		endShape();
	}

	this.unselectTool = function() {
        //Finishs the shape 
        editMode = false;
        draw();
        loadPixels();
        currentShape = [];
        
		//clears the options section
		select(".options").html("");
        
        //Change the cursor back to an arrow
        helpers.arrow();
	} 
	
}
// function to keep the mouse event action inside the canvas
function mousePressOnCanvas(canvas){
	if (mouseX > canvas.elt.offsetLeft && mouseX < (canvas.elt.offsetLeft + canvas.width)
	&& mouseY > canvas.elt.offsetTop && mouseY < (canvas.elt.offsetTop + canvas.height) ){
		return true;
	}
	return false;
}