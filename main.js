var current_position_of_x, current_position_of_y;
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    width= screen.width
    width_canvas= width-100
    height=screen.height
    height_canvas=height-300

    if (width<992){
        document.getElementById("myCanvas").width=width_canvas;
        document.getElementById("myCanvas").height=height_canvas;
        document.body.style.overflow="hidden"
    }
    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("text_input_color").value;
        width_of_line = document.getElementById("text_input_width").value;
        //Addictonal Activity ends

      console.log ("touchstart")
      last_position_of_x= e.touches[0].clientX - canvas.offsetLeft
      last_position_of_y= e.touches[0].clientY - canvas.offsetTop
    }
    function cleararea(){
        ctx.clearRect(0,0,canvas.width,canvas.height)
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
    console.log ("touchmove")
         current_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_y = e.touches[0].clientY - canvas.offsetTop;

      
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_x + "y = " + current_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_x; 
        last_position_of_y = current_position_of_y;
    }

