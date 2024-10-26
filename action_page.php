<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = !empty($_POST['fname']) ? htmlspecialchars(trim($_POST['fname'])) : null;
    $email = !empty($_POST['email']) ? htmlspecialchars(trim($_POST['email'])) : null;
    $message = !empty($_POST['message']) ? htmlspecialchars(trim($_POST['message'])) : null;

    if ($name && $email && $message) {
        echo "<h2>Vielen Dank für deinen Liebesbrief, $name!</h2>";
        echo "<p><strong>Name:</strong> $name</p>";
        echo "<p><strong>E-Mail-Adresse:</strong> $email</p>";
        echo "<p><strong>Nachricht:</strong> $message</p>";
    } else {
        echo "<h2>Fehler: Bitte füllen Sie alle Felder aus.</h2>";
    }
} else {
    echo "<h2>Danke für Deine Nachricht, die wird leider nicht ankommen, weil ich noch nicht rausgefunden habe, wie man Formulare so programmiert, dass sie funktionieren. Schick mir doch einfach eine Mail!</h2>";
}
?>
