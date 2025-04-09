<?php

$to = "contact@newcrea.fr";
$subject = "Nouveau message depuis le site NewCrea";

// Récupération des données du formulaire
$email = $_POST['email'] ?? '';
$objet = $_POST['objet'] ?? '';
$message = $_POST['message'] ?? '';
$service = $_POST['service'] ?? '';

// Nettoyage
$email = filter_var(trim($email), FILTER_SANITIZE_EMAIL);
$objet = strip_tags(trim($objet));
$message = strip_tags(trim($message));
$service = strip_tags(trim($service));

if (filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($objet) && !empty($message)) {

    // Construction du corps du message HTML
    $body = "<html><body style='font-family: Arial, sans-serif; font-size: 16px; color: #333;'>";

    $body .= "<h2 style='color: #6338e4;'>$objet</h2>";
    $body .= "<p><strong>Adresse e-mail :</strong> $email</p>";

    if (!empty($service)) {
        $body .= "<p><strong>Service choisi :</strong> " . htmlspecialchars($service) . "</p>";
    }

    $body .= "<p><strong>Message :</strong><br>" . nl2br($message) . "</p>";
    $body .= "<br><hr style='border: none; border-top: 1px solid #ccc;'>";
    $body .= "<p style='font-size: 13px; color: #777;'>Ce message a été envoyé via le formulaire du site <a href='https://newcrea.fr'>newcrea.fr</a>.</p>";
    $body .= "</body></html>";

    // En-têtes HTML
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: contact@newcrea.fr\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Envoi
    if (mail($to, $subject, $body, $headers)) {
        echo "Merci pour votre message, nous vous répondrons dans les plus brefs délais.";
    } else {
        echo "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer.";
    }

} else {
    echo "Veuillez remplir tous les champs correctement.";
}
