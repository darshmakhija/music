song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;

function preload(){
	song = loadSound("song2.mp3");
}

function setup() {
	canvas = createCanvas(600,500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video,ModelLoaded);
	poseNet.on('poses', gotPoses);
}

function draw() {
	image(video, 0, 0, 600, 500);
	
	if(scoreLeftWrist > 0.2)
	{
		circle(leftWristX, leftWristY, 20);
		InNumberleftWristY = Number(leftWristY);
		remove_decimals = floor(InNumberleftWristY);
		song.stop();
		song='loadSound("song.mp3");
		song.play();
	}
	else{
	song.play();
	}
}

function Play(){
	song.play();
	song.setVolume(1);
	song.rate(1);
}

function ModelLoaded()
{
	console.log('poseNet is initiated');
}

function gotPoses(results)
{
	if(results.length > 0)
	{
		cosole.log(results);
		scoreLeftWrist = results[0].pose.keypoints[9].score;
		rightWristX = results[0].poses.rightWrist.x;
		rightWristY = results[0].poses.rightWrist.y;
		leftWristX = results[0].poses.lefttWrist.x;
		leftWristY = results[0].poses.lefttWrist.y;
	}
}
