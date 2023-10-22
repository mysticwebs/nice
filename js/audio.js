document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.getElementById("submitBtn");
  const background = document.createElement("div");
  const audio = document.getElementById("audio");

  submitBtn.addEventListener("click", function () {
      // Hide the content
      document.getElementById("content").style.display = "none";

      // Set the background to a GIF
      background.id = "background";
      background.style.backgroundImage = "url('../images/gif.gif')";
      document.body.appendChild(background);

      // Play the audio
      audio.play();

      // Enter full screen
      if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen();
      }

      // Hide the cursor
      document.body.style.cursor = "none";
  });
});
