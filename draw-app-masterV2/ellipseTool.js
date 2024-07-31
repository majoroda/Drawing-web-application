function ellipseTool(){
  // Implementing an ellipse tool where an ellipse can be created, resized and dragged on the canvas 

    this.name = "ellipseTool";
	this.icon = "assets/ellipse.png";


    this.draw = function()
    {
      clear();
      for(let shape of shapes){
        shape.display();
      }
    }
    
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

    
  };
  function mousePressed(){
    let clickedShape = null;
    
    for(let shape of shapes){
      if(shape.isClicked(mouseX, mouseY)){
        clickedShape = shape;
        offsetX = mouseX - shape.x;
        offsetY = mouseY - shape.y;
        initialSize = shape.size;
        break;
      }
    }
    
    if(clickedShape !== null){
      presentShape = clickedShape;
    } else {
      presentShape = new Shape(mouseX, mouseY);
      shapes.push(presentShape);
      isShapeDrawn = true;
    }
    
    initialMouseX = mouseX;
    initialMouseY = mouseY;
    
    isDragging = false;
  }
  
  function mouseDragged(){
    if(presentShape !== null){
      if(isShapeDrawn){
        if(!isDragging){
         offsetX = mouseX - presentShape.x;
          offsetY = mouseY - presentShape.y;
        isDragging = true;
      }
      presentShape.setPosition(mouseX - offsetX, mouseY - offsetY);
        
      }else{
      // Calculating the distance between the initial mouse position and
      // the current mouse position
      const distance = dist(initialMouseX, initialMouseY, mouseX, mouseY);
      
      //Calculating the size based on the initial size and the distance ratio
      const newSize = initialSize + distance;
      
      //Adjusting the size of the presenr shape based on the size ratio
      presentShape.setSize(newSize);
        
      }
    }

  }
  
  function mouseReleased(){
    presentShape = null;
    isDragging = false;
  }
  
  function keyPressed(){
    // KeyPressed event where the UP_ARROW and DOWN_ARROW keys adjust the size of the ellipse 
    // as the shape is clicked to drag 
    if(presentShape !== null){
      if(keyCode === UP_ARROW){
        presentShape.setSize(presentShape.size + 10);
      }else if(keyCode === DOWN_ARROW){
        presentShape.setSize(presentShape.size - 10);
      }
    }

     // KeyPressed event where the BACKSPACE deletes the ellipse as the shape is clicked to drag 
    if(keyCode === DELETE || keyCode === BACKSPACE){
      if(presentShape !== null){
        const index = shapes.indexOf(presentShape);
        shapes.splice(index, 1);
        presentShape = null;
     }
    }
  }

  // Encapsulating the attributes and behaviour of each ellipse 
  class Shape{
    constructor(x,y){
      this.x = x;
      this.y = y;
      this.size = 5;
    }
    
    setPosition(x,y){
    this.x = x;
    this.y = y;
  }
    
    
    setSize(size){
      this.size = max(size, 0);
    }
  
  isClicked(mx, my){
    return dist(mx, my, this.x, this.y) < this.size/2;
  }
  
  display(){
    ellipse(this.x, this.y, this.size);
  }
  }

  
