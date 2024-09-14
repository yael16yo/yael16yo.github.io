<?php 

    if(isset($_POST['envoyer'])) {
        if(isset($_POST['nom'])) {
            if(isset($_POST['prenom'])) {
                if(isset($_POST['email'])) {
                    if(isset($_POST['description'])) {
                        $nom = $_POST['nom'];
                        $prenom = $_POST['prenom'];
                        $email = $_POST['email'];
                        $prestation = $_POST['prestation'];
                        $surface = $_POST['surface'];
                        $description = $_POST['description'];
                        // Le message
$message = "".$nom.", ".$prenom.", ".$prestation.", ".$surface." - ".$description."";

// Dans le cas où nos lignes comportent plus de 70 caractères, nous les coupons en utilisant wordwrap()
$message = wordwrap($message, 70, "\r\n");

// Envoi du mail
mail('yael.brinkert2@gmail.com', ''.$nom.' - '.$prestation.'', $message);
//var_dump($message);
                    }
                }
            }
        }
    }

?>