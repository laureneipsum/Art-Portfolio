<?php
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'To: lecumedescouleurs@gmail.com' . "\r\n";
$headers .= 'From: lecumedescouleurs@gmail.com' . "\r\n";
$headers .= 'Content-Type: text/plain; charset=UTF-8' . "\r\n";
$headers .= 'Content-Transfer-Encoding: 8bit' . "\r\n";
$subject .= 'objet';
$nom .= 'Nom';
$prenom .= 'Prenom';
$message = "";
while (list($key, $val) = each($HTTP_POST_VARS)) {if(!empty($val)) {$message .= "$key : $val\n";}}
mail($TO, $subject, $nom, $prenom,  $message, $headers);
Header("Location: http://www.index.html");
?>