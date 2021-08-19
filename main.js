function setup(){
    video = createCapture(VIDEO);
    video.size(550, 600);
    video.position(200, 100);


    canvas = createCanvas(550, 500);
    canvas.position(760, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}   
function draw(){
    background("#969A97");
    circle(nose_x, nose_y, rightWrist_x-leftWrist_x);
}
function modelLoaded(){
    console.log("PoseNet is Initialized!");
}
var nose_x;
var nose_y;
var leftWrist_x;
var leftWrist_y;
var rightWrist_x;
var rightWrist_y;
function gotPoses(results){
    last = results.length-1;
    if(results.length > 0){
    console.log(results);
        nose_x = results[last].pose.nose.x;
        nose_y = results[last].pose.nose.y;
        leftWrist_x = results[last].pose.leftWrist.x;
        leftWrist_y = results[last].pose.leftWrist.y;
        rightWrist_x = results[last].pose.rightWrist.x;
        rightWrist_y = results[last].pose.rightWrist.y;

}
}