
function StampTool(){
    //set an icon and a name for the object
    this.name = "stampTool";
    this.icon = "assets/StampTool.jpg";
    
    this.draw = function(){
        //if the mouse is pressed stamp images appear on the canvas
        if(mousePressOnCanvas(c) && mouseIsPressed){
            for(var i = 0; i < nStarSlider.value(); i++){
                var starSize = starSizeSlider.value();
                var starX = random((mouseX - starSize/2)-10,
                        ( mouseX - starSize/2)+10);
                 var starY = random((mouseY - starSize/2)-10, (mouseY - starSize/2)+10);
                 image(star, starX, starY, starSize, starSize);
                 }   
     
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
  
}

