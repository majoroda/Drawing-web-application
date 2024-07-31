//global variables that will store the toolbox colour palette
//amnd the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;

var editMode = false;
var currentShape = [];


var slider = null;


var c;


// EllipseTool Variables
let shapes = [];
let presentShape = null;
let offsetX, offsetY;
let initialMouseX, initialMouseY;
let isDragging = false;
let initialSize = 0;
let isShapeDrawn = false;


// TextTool Variables
let inputText = "";
let textSizeVal = 32;
let textPosX ;
let textPosY;

// polygonTool variable
let radiusSlider;
let rotationSlider;
let currentPolygon = [];


//StampTool variables
var star;
var starSizeSlider;
var nStarSlider;

//For preloading stamptool image
function preload(){
    star = loadImage('./assets/star.png');
    
}



function setup() {

	//create a canvas to fill the content div from index.html
	canvasContainer = select('#content');
	c = createCanvas(canvasContainer.size().width, canvasContainer.size().height - 20);
	c.parent("content");

	

	//create helper functions and the colour palette
	helpers = new HelperFunctions();
	colourP = new ColourPalette();

	//create a toolbox for storing the tools
	toolbox = new Toolbox();

	//add the tools to the toolbox.
	toolbox.addTool(new FreehandTool());
	toolbox.addTool(new paintBrushTool());
	toolbox.addTool(new kaleidoscopeTool());
    toolbox.addTool(new textTool());
	toolbox.addTool(new verticesTool());
	toolbox.addTool(new LineToTool());
	toolbox.addTool(new mirrorDrawTool());
	toolbox.addTool(new SprayCanTool());
	toolbox.addTool(new EraserTool());
    toolbox.addTool(new StampTool());
	toolbox.addTool(new ellipseTool());
    toolbox.addTool(new polygonTool());





    
// //    Slider controls for stamptool
    starSizeSlider = createSlider(5, 50, 20);    
    starSizeSlider.parent("#sizeOfStampsControl");
    nStarSlider = createSlider(1 , 20, 5);
    nStarSlider.parent("#numberOfStampsControl");


	// Adding a button switching between creating new vertices and editing
	select("#finishbutton").mouseClicked(function(){
		loadPixels();
		currentShape = [];
	})
	select("#editbutton").mouseClicked(function(){
		var editbutton = select("#" + this.elt.id);
		if(editMode){
			editMode = false;
			editbutton.html("Edit Shape");
		}
		else{
			editMode = true;
			editbutton.html("Add Vertices");
		}
	})




	



	background(255);

}

function draw() {
	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user
	if (toolbox.selectedTool.hasOwnProperty("draw")) {
		toolbox.selectedTool.draw();
	} else {
		alert("it doesn't look like your tool has a draw method!");
	}
    
    
}