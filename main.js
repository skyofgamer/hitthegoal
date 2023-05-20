
// Create canvas variable
var canvas = new fabric.Canvas('myCanvas')
//Set initial positions for ball and hole images.
ball_x = 0;
ball_y =0;
hole_y = 400 ;
hole_x = 800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("golf-h.png",function(IMG){
		blockIMG_object = IMG;
		blockIMG_object.scaleToWidth(50);
		blockIMG_object.scaleToHeight(50);
		blockIMG_object.set({
			top:hole_y,
			left:hole_x
		});
	canvas.add(blockIMG_object);
	})
	new_image();
	
}

function new_image(){
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("ball.png",function(IMG){
		blockIMG_object1 = IMG;
		blockIMG_object1.scaleToWidth(50);
		blockIMG_object1.scaleToHeight(50);
		blockIMG_object1.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(blockIMG_object1); 
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((ball_x==hole_x)&&(ball_y)==hole_y){
		canvas.remove(blockIMG_object1);
		document.getElementById("hd3").innerHTML = "you have hit the goal!"
		document.getElementById("myCanvas").style.borderColor = "red"
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
		if(ball_y >= 0){
			ball_y = ball_y - block_image_height;
			canvas.remove(blockIMG_object1);
			new_image();
			
		}
	}

	function down()
	{
		 // Write a code to move ball downward.
		 if(ball_y <= 450){
			ball_y = ball_y + block_image_height;
			canvas.remove(blockIMG_object1);
			new_image();
			
	}
	}
	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
			ball_x = ball_x - block_image_height;
			canvas.remove(blockIMG_object1);
			new_image();
			
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
			ball_x = ball_x + block_image_height;
			canvas.remove(blockIMG_object1);
			new_image();
		}
	}
	
}

