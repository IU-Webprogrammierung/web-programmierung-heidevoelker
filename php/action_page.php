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
        echo "<h2 style='color: red; font-family: Arial, sans-serif;'>Fehler: Bitte alle felder ausfüllen.</h2>";
    }
} else {
    echo "<div style='padding: 30px;'>";
    echo "<h2 style='color: black; font-family: Arial, sans-serif;'>Danke für Deine Nachricht! Leider wird sie bei mir nicht ankommen, weil ich noch dabei bin, das Mysterium der funktionierenden Formulare zu entschlüsseln. Schick mir einfach eine Mail – die weiß, wo sie hin muss!</h2>";
}
?>
