$(document).ready(function () {
  const cursorCircle = $('.cursor-circle');
  const headerImage = $('.header-image');
  const activationOffset = 100; // Höhe in Pixeln, ab der die Animation beginnt

  // Mausbewegungen verfolgen
  headerImage.on('mousemove', function (e) {
    const offset = headerImage.offset(); // Position des Header-Images relativ zum Dokument
    const mouseYRelativeToImage = e.pageY - offset.top;

    // Überprüfen, ob die Y-Position die Aktivierungsgrenze überschreitet
    if (mouseYRelativeToImage > activationOffset) {
      cursorCircle.css({
        display: 'block', // Zeigt den Kreis an
        top: e.pageY - offset.top, // Berechnet die Y-Position relativ zum Header
        left: e.pageX - offset.left, // Berechnet die X-Position relativ zum Header
      });
    } else {
      cursorCircle.css('display', 'none'); // Blendet den Kreis aus
    }
  });

  // Kreis ausblenden, wenn der Mauszeiger das Headerbild verlässt
  headerImage.on('mouseleave', function () {
    cursorCircle.css('display', 'none'); // Blendet den Kreis aus
  });
});
