video="";
status="";
objects=[];
function setup()
{
    canvas= createCanvas(550,400);
    canvas.center();

}
function preload(){
    video=createVideo('video.mp4');
    video.hide();
}
function draw(){
    image(video,0,0,550,400);
    if (status!="") {
        object_detector.detect(video,gotResult);
        for(i=0;i<objects.length;i++){
            document.getElementById("objects_detected").innerHTML="Number of objects detected:"+objects.length;
            document.getElementById("status").innerHTML="Objects detected ";
         fill("#ff0000");
         percent=floor(objects[i].confidence*100);
         text(objects[i].label+""+precent+"%",objects[i].x,objects[i].y);
         nofill();
         stroke("#ff0000");
         rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}
function start(){
    object_detector=ml5.objectDetector('cocossd',modelLoaded);
  
}
function modelLoaded(){
console.log("model Loaded");
video.loop();
video.speed(1);
video.volume(0);
}
function gotResult(error,results){
    if (error) {
        console.error(error);
        
    } else {
        console.log(results);
        objects=results;
        
    }
}