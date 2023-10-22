document.addEventListener("DOMContentLoaded", function () {
  const whiteBg = document.getElementById("white-bg");
  const startButton = document.getElementById("start-button");
  const gif = document.getElementById("gif");
  const audio = document.getElementById("audio");

  let escapeDisabled = false;

  function disableEscapeKey(e) {
      if (escapeDisabled) {
          e.preventDefault();
      }
  }

  startButton.addEventListener("click", function () {
      // Hide all page contents, including the "Start" button
      document.getElementById("content").style.display = "none";
      startButton.style.display = "none";

      // Switch background to GIF
      whiteBg.style.background = "transparent";
      gif.style.display = "block";

      // Enter full screen
      if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
      }

      // Make the GIF cover the entire viewport
      gif.style.position = "fixed";
      gif.style.top = "0";
      gif.style.left = "0";
      gif.style.width = "100vw";  // 100% of the viewport width
      gif.style.height = "100vh"; // 100% of the viewport height
      gif.style.objectFit = "cover"; // Ensures the GIF covers the entire viewport

      // Play the audio
      audio.play();

      // Change mouse cursor
      document.body.style.cursor = "none";

      // Prevent escape key functionality
      escapeDisabled = true;
      document.addEventListener("keydown", disableEscapeKey);
  });

  // Remove the Escape key prevention when exiting full screen
  document.addEventListener("fullscreenchange", function () {
      if (!document.fullscreenElement) {
          escapeDisabled = false;
          document.removeEventListener("keydown", disableEscapeKey);
      }
  });
});
