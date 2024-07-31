function polygonTool(){
	this.icon = "assets/polygon.png";
	this.name = "polygonTool";

    this.draw = function(){
        // this handles the calling of the drawPolygon function with the currentPolygon parameter
        drawPolygon(currentPolygon);
    }

    this.populateOptions = function() {
	    // Polygon slection and sliders position
        radiusSlider = createSlider(10,200,1);
        radiusSlider.position(530,650);
    
        rotationSlider = createSlider(0,TWO_PI,1,0);
        rotationSlider.position(530,680);
        
        // Creating buttons labelled with the names of the polygons and its positions on the canvas.
        // When the button is pressed it updates the 'currentPolygon' variable to represent the selected shape
        const triangleButton = createButton('Triangle');
        triangleButton.position(502,590);
        triangleButton.mousePressed(() => {currentPolygon = 3;});
        
        const squareButton = createButton('Square');
        squareButton.position(560,590);
        squareButton.mousePressed(() => {currentPolygon = 4;});
        
        const pentagonButton = createButton('Pentagon');
        pentagonButton.position(615,590);
        pentagonButton.mousePressed(() => {currentPolygon = 5;});
    
        const hexagonButton = createButton('Hexagon');
        hexagonButton.position(682,590);
        hexagonButton.mousePressed(() => {currentPolygon = 6;});
    
        const heptagonButton = createButton('Heptagon');
        heptagonButton.position(502,610);
        heptagonButton.mousePressed(() => {currentPolygon = 7;});
    
        const octagonButton = createButton('Octagon');
        octagonButton.position(570,610);
        octagonButton.mousePressed(() => {currentPolygon = 8;});
    
        const nonagonButton = createButton('Nonagon');
        nonagonButton.position(630,610);
        nonagonButton.mousePressed(() => {currentPolygon = 9;});
    
        const decagonButton = createButton('Decagon');
        decagonButton.position(698,610);
        decagonButton.mousePressed(() => {currentPolygon = 10;});	
	
	};

    // Click Finish Shape button on the canvas  to add polygons to the canvas
    this.unselectTool = function() {
        //Finish the shape 
        editMode = false;
        draw();
        loadPixels();
        currentShape = [];
    }

}

function drawPolygon(numSides){
    updatePixels();
    const centerX = width/2;
    const centerY = height/2;

    // function that returns the value of a slider contolling the radius and the rotation of the polygon
    const radius = radiusSlider.value();
    const rotation = rotationSlider.value();
    
    beginShape();
    for(let i = 0; i < numSides; i++){
      const angle = i * TWO_PI/ numSides + rotation;
      const x = centerX + cos(angle) * radius;
      const y = centerY + sin(angle) * radius;
      vertex(x,y);
      
    }
    // function that is called to finalize the shape or polygon, indicating that the shape should be closed 
    endShape(CLOSE);
  }