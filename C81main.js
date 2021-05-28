canvas = document.getElementById("my_canvas");
color  = "blue";
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown" ,lol);
function lol(e) {
    color = document.getElementById("input_id").value;
    mouse_x = e.clientX - canvas.offsetLeft;
     mouse_y = e.clientY - canvas.offsetTop;
      console.log("X = " + mouse_x + " ,Y = " + mouse_y);
       circle(mouse_x , mouse_y);
}
function circle(mouse_x , mouse_y) {
    ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(mouse_x, mouse_y, 40, 0, 2*Math.PI);
ctx.stroke();
}
function clear_c() { ctx.clearRect(0, 0, canvas.width, canvas.height); }
