nose_x=0;
nose_y=0;
wrist_lx=0;
wrist_rx=0;
function preload(){

}
function setup(){
video=createCapture(VIDEO);
video.size(350,350);
canvas=createCanvas(400,400);
canvas.center();
posenet=ml5.poseNet(video,modelLoaded);
//on() function is a predefined function of ml5.js which is used to execute the pose net
//it takes two parameters,first parametr is 'pose' which gives x and y cordinates of 17 body parts, second is gotPoses which gives us the result.
posenet.on('pose',gotPoses);
}
function draw(){
background("grey");
difference=floor(wrist_lx-wrist_rx);
fill(nose_x,nose_y,difference);
stroke("purple");
//rect(20,20,100,100);
square(nose_x,nose_y,difference);
document.getElementById("area").innerHTML=difference;
}
function modelLoaded(){
    console.log(" Pose-net Model is loaded.");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        wrist_rx=results[0].pose.rightWrist.x;
        wrist_lx=results[0].pose.leftWrist.x;
    }
else{
    console.log("ERROR! Model not loaded");
}
}
