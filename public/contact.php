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

// Vérification de base (message requis dans tous les cas car déjà enrichi côté React)
if (filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($objet) && !empty($message)) {

    // Préparation du contenu du mail
    $body = "Objet : $objet\n";
    $body .= "Email : $email\n\n";

    if ($objet === "Je suis intéressé(e) par vos services" && !empty($service)) {
        $body .= "Service concerné : $service\n\n";
    }

    $body .= "Message :\n$message\n";

    // En-têtes
    $headers = "From: contact@newcrea.fr\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Envoi
    if (mail($to, $subject, $body, $headers)) {
        echo "Merci pour votre message, nous vous répondrons dans les plus brefs délais.";
    } else {
        echo "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer.";
    }

} else {
    echo "Veuillez remplir tous les champs correctement.";
}
