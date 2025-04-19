<?php

$to = "contact@newcrea.fr";
$subject = "Nouveau message depuis le site NewCrea";

$email = $_POST['email'] ?? '';
$projet = $_POST['projet'] ?? '';
$delai = $_POST['delai'] ?? '';
$budget = $_POST['budget'] ?? '';
$message = $_POST['message'] ?? '';

// Nettoyage
$email = filter_var(trim($email), FILTER_SANITIZE_EMAIL);
$projet = strip_tags(trim($projet));
$delai = strip_tags(trim($delai));
$budget = strip_tags(trim($budget));
$message = strip_tags(trim($message));

if (filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($projet)) {
    $body = "<html><body style='font-family: Arial, sans-serif; font-size: 16px; color: #333;'>";
    $body .= "<h2>Message via le formulaire de contact</h2>";
    $body .= "<p><strong>Email :</strong> $email</p>";
    $body .= "<p><strong>Projet :</strong> $projet</p>";
    $body .= "<p><strong>Délai souhaité :</strong> $delai</p>";
    $body .= "<p><strong>Budget estimé :</strong> $budget</p>";

    if (!empty($message)) {
        $body .= "<p><strong>Message :</strong><br>" . nl2br($message) . "</p>";
    }

    $body .= "<hr><p style='font-size: 13px; color: #777;'>Ce message a été envoyé via le formulaire du site <a href='https://newcrea.fr'>newcrea.fr</a>.</p>";
    $body .= "</body></html>";

    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: contact@newcrea.fr\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Merci pour votre message, nous vous répondrons dans les plus brefs délais.";
    } else {
        echo "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer.";
    }
} else {
    echo "Veuillez remplir tous les champs correctement.";
}
