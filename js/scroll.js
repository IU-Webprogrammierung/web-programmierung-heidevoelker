// scroll.js
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Event Listener für sanftes Scrollen – verhindert den Standard-Anker-Link-Sprung
document.querySelector('.back-to-top').addEventListener('click', function (event) {
  event.preventDefault();
  scrollToTop();
});
