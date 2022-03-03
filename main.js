
function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    posenet=ml5.poseNet(video,modelloaded)
    posenet.on('pose',gotposes)
}
function modelloaded(){
    console.log("posenetisinitialized")
    }

function preload(){
    clown_nose=loadImage("iu-removebg-preview.png")
}
noseX=0
noseY=0

function gotposes(results){
if (results.length >0) {
console.log(results)
noseX=results[0].pose.nose.x-15
noseY=results[0].pose.nose.y+15
}
}

function draw(){
    image(video,0,0,300,300)
image(clown_nose,noseX,noseY,30,30)
}
function takesnapshot(){
    save("myimage.png")
}