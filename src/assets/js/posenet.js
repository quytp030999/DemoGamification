let video;
let poseNet;
let poses = [];

let isStartGame = false;
let isRequest = false;
let countCheck = 0;

function setup() {
  const sizeCamera = document.getElementById("camera");
  const widthCamera = sizeCamera.offsetWidth;
  const heightCamera = sizeCamera.offsetHeight;
  console.log(
    `widthCamera::: ${widthCamera} --- heightCamera::: ${heightCamera}`
  );
  const canvas = createCanvas(widthCamera, heightCamera);
  canvas.parent("camera");

  video = createCapture(VIDEO);
  video.size(width, height);

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This set up an event that fills the global variable "poseNet"
  // with an array time new poses are detected
  poseNet.on("pose", function (results) {
    poses = results;
  });

  // Hide the video element and just show the canvas
  video.hide();
}

function draw() {
  image(video, 0, 0, width, height);
  drawKeyPoints();
}

function modelReady() {
  Selection("status").html("model loaded");
}

function drawKeyPoints() {
  if (poses.length > 0) {
    for (let index = 0; index < poses.length; index++) {
      let pose = poses[index].pose;
      for (let j = 0; j < pose.keypoints.length; j++) {
        let keypoint = pose.keypoints[j];
        fill(255, 0, 0);
        noStroke();
        ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
      }
    }
  }
}

function startGame() {
  console.log("click start game");
  const btnStartGame = document.getElementById("mask");
  btnStartGame.style.display = "none";
}
