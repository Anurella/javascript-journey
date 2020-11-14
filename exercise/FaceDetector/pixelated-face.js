console.log('it works');

const faceDetector = new window.FaceDetector({ fastMode: true });
const video = document.querySelector('video.webcam');
const imgT = document.querySelector('img');
const canvas = document.querySelector('canvas.video');
const ctx = canvas.getContext('2d');
const canvasI = document.querySelector('canvas.videoI');
const ctxI = canvasI.getContext('2d');
const faceCanvas = document.querySelector('canvas.face');
const faceCtx = faceCanvas.getContext('2d');
const faceCanvasI = document.querySelector('canvas.faceI');
const faceCtxI = faceCanvas.getContext('2d');
const SCALE = 1.35;
const SIZE = 10;

// write a function that will populate the users video
async function populateVideo() {
  const constraints = {
    video: { width: 500, height: 500, facingMode: 'environment' },
  };
  const stream = await navigator.mediaDevices.getUserMedia(constraints);

  video.srcObject = stream;
  // @await lets a call wait for some minutes before it is run
  await video.play();
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  faceCanvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
}

function drawFace(face) {
  const { width, height, top, left } = face.boundingBox;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50% )`;
  ctx.lineWidth = 3;
  ctx.strokeRect(left, top, width, height);
}

function drawFace2(face) {
  const { width, height, top, left } = face.boundingBox;
  ctxI.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50% )`;
  ctxI.lineWidth = 5;
  ctxI.strokeRect(left, top, width, height);
}

function censor({ boundingBox: face }) {
  faceCtx.imageSmoothingEnabled = false;
  // this will clear the previous face drawn
  faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
  // draw the small face
  faceCtx.drawImage(
    //  5 args used to pull data
    video, // where the sources comes from
    face.x, // where we start the soucre pull from
    face.y,
    face.width,
    face.height,
    // 4 args used to draw data on the canvas
    face.x, // where we start drawing
    face.y,
    SIZE,
    SIZE
  );
  // draw the small piece back on but scale
  faceCtx.drawImage(
    faceCanvas, //source
    face.x,
    face.y,
    SIZE,
    SIZE
  );
  // draw the small face back on, but scale up
  const width = face.width * SCALE;
  const height = face.height * SCALE;
  faceCtx.drawImage(
    faceCanvas, // source
    face.x, // where do we start the source pull from?
    face.y,
    SIZE,
    SIZE,
    // Drawing args
    face.x - (width - face.width) / 2,
    face.y - (height - face.height) / 2,
    width,
    height
  );
}

async function detect() {
  const faces = await faceDetector.detect(video);
  /* ask the browser whnen the next anaimation is and tell it to detect for us  */
  faces.forEach(drawFace);
  faces.forEach(censor);
  requestAnimationFrame(detect);
}

// function censor2({ boundingBox: face }) {
//   faceCtxI.imageSmoothingEnabled = false;
//   // this will clear the previous face drawn
//   faceCtxI.clearRect(0, 0, faceCanvasI.width, faceCanvasI.height);
//   // draw the small face
//   faceCtxI.drawImage(
//     //  5 args used to pull data
//     imgT, // where the sources comes from
//     face.x, // where we start the soucre pull from
//     face.y,
//     face.width,
//     face.height,
//     // 4 args used to draw data on the canvas
//     face.x, // where we start drawing
//     face.y,
//     SIZE,
//     SIZE
//   );
//   // draw the small piece back on but scale
//   faceCtxI.drawImage(
//     faceCanvasI, //source
//     face.x,
//     face.y,
//     SIZE,
//     SIZE
//   );

//   // draw the small face back on, but scale up
//   const width = face.width * SCALE;
//   const height = face.height * SCALE;
//   faceCtxI.drawImage(
//     faceCanvasI, // source
//     face.x, // where do we start the source pull from?
//     face.y,
//     SIZE,
//     SIZE,
//     // Drawing args
//     face.x - (width - face.width) / 2,
//     face.y - (height - face.height) / 2,
//     width,
//     height
//   );
// }

async function detect2() {
  const faces = await faceDetector.detect(imgT);
  canvasI.width = imgT.width;
  canvasI.height = imgT.height;
  faceCanvasI.width = imgT.width;
  faceCanvasI.height = imgT.height;
  /* ask the browser whnen the next anaimation is and tell it to detect for us  */
  faces.forEach(drawFace2);
  requestAnimationFrame(detect2);
}

populateVideo().then(detect);
detect2();
