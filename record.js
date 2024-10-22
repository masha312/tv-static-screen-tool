// the frame rate
const fps = 24;
const captureLength = 50;
let recordFrame = 0;

// the canvas capturer instance
const capturer = new CCapture({
  format: "webm",
  framerate: fps,
  name: "movie",
  verbose: true,
  quality: "1920, 1080",
});

function startRecording() {
  rec = true;
}

function manageRecording() {
  if (rec) {
    recordFrame++;

    if (recordFrame == 1) {
      capturer.start();
    }

    if (recordFrame < captureLength) {
      capturer.capture(canvas);
    } else if (recordFrame == captureLength) {
      capturer.save();
      capturer.stop();
    }
  }
}
