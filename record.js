// the frame rate
const fps = 24;
const captureLength = 50;
let recordFrame = 0;

// the canvas capturer instance
const capturer = new CCapture({
  format: "webm",
  framerate: fps,
  name: "static screen",
  verbose: true,
  quality: "1920, 1080",
});

function startRecording() {
  rec = true;
  const saveButton = document.getElementById("saveVideo");

  // Update the button HTML to include the pulsing red dot
  saveButton.innerHTML = `
    <span id="redDot" class="red-dot pulsing"></span>
    Recording...
  `;

  saveButton.disabled = true;
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
      rec = false;
      recordFrame = 0;
      const saveButton = document.getElementById("saveVideo");

      // Reset the button HTML to remove pulsing effect
      saveButton.innerHTML = `
        <span id="redDot" class="red-dot"></span>
        Export video
      `;

      saveButton.disabled = false; // Enable button
    }
  }
}
