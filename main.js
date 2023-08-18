function setup(){
canvas=createCanvas(700,400);
video=createCapture(VIDEO);
canvas.center();
video.hide();
}

function draw(){

    fill("yellow")
   rect(50, 50, 20, 320) 
   rect(50, 50, 600, 20) 
   rect(650, 50, 20, 320) 
   rect(50, 350, 600, 20) 
   fill("cyan");
    stroke("green");
    circle(50, 50, 70);
    circle(50, 350, 70);
    circle(660, 350, 70);
    circle(660, 50, 70);

    image(video,110,80,500,250)
}

function clickpic(){
    save("selfie.jpg")
}

