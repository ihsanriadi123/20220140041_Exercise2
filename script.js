document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('video');
    const audio = document.querySelector('audio');
  
    // Play video on mouseover and pause on mouseout
    video.addEventListener('mouseover', function() {
      video.play();
    });
  
    video.addEventListener('mouseout', function() {
      video.pause();
    });
  
    // Set audio volume to 50%
    audio.volume = 0.5;
  
    // Keyboard controls for the train
    document.addEventListener('keydown', function(event) {
      const key = event.key;
      if (key === 'ArrowLeft') {
        console.log('Kereta bergerak ke kiri');
        // Logic to move train left
      } else if (key === 'ArrowRight') {
        console.log('Kereta bergerak ke kanan');
        // Logic to move train right
      }
    });
  });
  