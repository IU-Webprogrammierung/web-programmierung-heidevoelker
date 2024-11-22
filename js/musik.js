// musik.js
document.getElementById('playAudioButton').addEventListener('click', function() {
  var audio = document.getElementById('audioPlayer');

  // Überprüfen, ob die Musik spielt
  if (audio.paused) {
    // Musik abspielen, wenn sie pausiert ist
    audio.play();
  } else {
    // Musik stoppen, wenn sie schon spielt
    audio.pause();
    audio.currentTime = 0; // Setzt die Musik auf den Anfang zurück
  }
});
