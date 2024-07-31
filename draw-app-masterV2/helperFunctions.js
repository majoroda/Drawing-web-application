function HelperFunctions() {

	//Jquery click events. Notice that there is no this. at the
	//start we don't need to do that here because the event will
	//be added to the button and doesn't 'belong' to the object

	//event handler for the clear button event. Clears the screen
	select("#clearButton").mouseClicked(function() {
		background(255, 255, 255);
		//call loadPixels to update the drawing state
		//this is needed for the mirror tool
		loadPixels();
	});

	//event handler for the save image button. saves the canvsa to the
	//local file system.
	select("#saveImageButton").mouseClicked(function() {
		saveCanvas("myPicture", "jpg");
	});
	this.slider = function(){
        select(".options").child(slider);
        
        //Created text above the slider
        var text = createDiv("Tool size");
        text.class("sliderText");
        select(".options").child(text);
    }


	this.cross = function(){
        cursor(CROSS);
    }

	this.arrow = function() {
        cursor(ARROW)
    }

	
}
