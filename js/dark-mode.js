// Prüfen, ob der Benutzer bereits eine Präferenz gespeichert hat
let currentTheme = localStorage.getItem('theme') || 'light'; // Standard ist "light"
document.body.setAttribute('data-theme', currentTheme);

// Funktion zum Umschalten des Dark Modes
function toggleDarkMode() {
  if (document.body.getAttribute('data-theme') === 'dark') {
    document.body.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light'); // Speichern der Wahl
  } else {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark'); // Speichern der Wahl
  }
}

// Event Listener für den Button zum Umschalten
document.getElementById('darkmode-toggle').addEventListener('click', toggleDarkMode);
