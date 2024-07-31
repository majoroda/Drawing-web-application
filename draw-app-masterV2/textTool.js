function textTool(){
  // Implementing a textTool to type text on the canvas 
	this.icon = "assets/Text.png";
	this.name = "textTool";

    this.draw = function(){
        text(inputText, textPosX, textPosY);
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
function keyPressed(){
    if(keyCode === BACKSPACE){
      inputText = inputText.substring(0, inputText.length - 1);
    }else if (keyCode === ENTER || keyCode === RETURN){
      //Add line break when Enter/Return key is pressed
      inputText += "\n";
    }else if(keyCode === SHIFT || keyCode === CONTROL || keyCode === ALT){
      //ignore these keys
    }else{
      //Add the pressed key to the input text
      inputText += key;
    }
  }
  
//   Text to be displayed where the mouse in pressed on the canvas
  function mousePressed(){
    textPosX = mouseX;
    textPosY = mouseY;
  }
