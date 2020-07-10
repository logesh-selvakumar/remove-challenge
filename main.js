// ARRAY VISUALIZER

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let myArray = [400, 200, 200, 400, 200, 200, 200, 400, 200, 200, 200, 200, 400];

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Logic
    let barWidth = cnv.width / myArray.length;

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw Bar Graph
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "grey";
    for (let i = 0; i < myArray.length; i++) {
        ctx.fillRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
        ctx.strokeRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);        
    }
    

    // Request another Animation Frame
    requestAnimationFrame(draw);
}

document.addEventListener('keydown', keycode);

function keycode(event)
{
    let removeValue = [0, 3, 7, 12]; 
    let removeVal = [0,1,2,3,4,5,6,7,8]; 
    for (i=removeValue.length -1; i >= 0; i--)
    {
        if (event.code == 'Digit1')
        {
            myArray.splice(removeValue[i], 1);
        }
        
    }
    for (i=removeVal.length -1; i >= 0; i--)
    {
        if (event.code == 'Digit2')
        {
            myArray.splice(removeVal[i], 1);
        }
        
    }
    
}