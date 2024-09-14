<?php 
    session_start();
    require_once("assets/database.php");

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    
    // Inclure la bibliothèque PHPMailer
    require 'phpmailer/PHPMailer/src/Exception.php';
    require 'phpmailer/PHPMailer/src/PHPMailer.php';
    require 'phpmailer/PHPMailer/src/SMTP.php';

    $erreur = "";
    if(isset($_POST['envoyer'])) {
        if(!empty($_POST['nom']) && !empty($_POST['prenom']) && !empty($_POST['email']) && !empty($_POST['demande'])) {
            $nom = $_POST['nom'];
          $prenom = $_POST['prenom'];
          $email = $_POST['email'];
          $demande = $_POST['demande'];

          $message = "<br>" . $nom . "<br>" . $prenom . "<br>" . $email ."<br><br>Demande :<br>" . $demande . "";
 
          $mail = new PHPMailer(true);

        try {
            // Paramètres du serveur SMTP de Gmail
            $mail->SMTPDebug = 0;                       // Activer le débogage SMTP
            $mail->isSMTP();                            // Utiliser SMTP
            $mail->Host       = 'smtp.gmail.com';       // Serveur SMTP de Gmail
            $mail->SMTPAuth   = true;                   // Activer l'authentification SMTP
            $mail->Username   = 'taborentraideetsolidarite@gmail.com';    // Votre adresse Gmail
            $mail->Password   = 'zhaulcxdwhjutpte';         // Votre mot de passe Gmail
            $mail->SMTPSecure = 'tls';                  // Chiffrement TLS (TLS recommandé)
            $mail->Port       = 587;                    // Port TCP pour la connexion SMTP

            // Destinataire et sujet
            $mail->setFrom($email, $nom);
            $mail->addAddress('taborentraideetsolidarite@gmail.com'); // Adresse de destination
            $mail->Subject = utf8_decode("Demande pour participer au bénévolat au soutien (" . $nom . ")");

            // Contenu du message
            $messageComplete = 'Mail provenant de ' . $email . ', pour du bénévolat au soutien scolaire :<br><br> ' . $message . '';
            $mail->isHTML(true);
            $mail->Body = $messageComplete;

            // Envoyer l'e-mail
            $mail->send();
            $erreur = "<span class='erreur_vert'><i class='fa fa-circle-check'></i> La demande a bien été envoyé!</span>";
        } catch (Exception $e) {
            echo "Une erreur s'est produite lors de l'envoi du message : {$mail->ErrorInfo}";
        }
    }
      else {
        $erreur = "<span class='erreur_rouge'><i class='fa fa-circle-xmark'></i> Veuillez remplir tout le formulaire</span>";

      }
        
    }
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Tabor Entraide et Solidarité propose un soutien scolaire pour les élèves en difficulté sur Mulhouse">
    <meta name="keywords" content="Tabor, soutien scolaire, TES">
    <meta name="author" content="yaelou, Yael Brinkert">
    <title>Tabor Entraide Solidarité</title>
    <link rel="stylesheet" href="assets/style.css">
    <script src="assets/main.js"></script>
    <link rel="icon" href="assets/img/logo TES.png">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/0433bfbe12.js" crossorigin="anonymous"></script>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
</head>
<body>
    <?php 
        if(!isset($_SESSION['loggedin_admin'])) {
            echo "";
        } else {
            ?> 
             <nav class="nav-admin">
                <p>Connecté :</p>
                <img src="<?php echo $_SESSION['avatar'];?>" alt="" class="admin_avatar">
                <span><?php echo $_SESSION['name'];?></span>
                <div>
                    <a href="logout.php">Se déconnecter</a>
                </div>
            </nav>
            <?php
        } 
    ?>
    <?php require_once('assets/navbar.php');?>

    <main id="quisommesnous">
        <h1><span class="behind-text"></span>- CONTACT -</h1>

        <div class="container">
            <form action="" method="POST" class="form-contact">
                <label for="">Nom :</label>
                <input type="text" name="nom" placeholder="Doe" class="form-control">
                <label for="">Prenom :</label>
                <input type="text" name="prenom" placeholder="John" class="form-control">
                <label for="">Email :</label>
                <input type="email" name="email" placeholder="john.doe@example.com" class="form-control">
                <label for="">Votre message :</label>
                <textarea rows="" cols="" name="demande" placeholder="Bonjour, voici mon message..." class="form-control"></textarea>
                <button type="submit" name="envoyer" class="form-control btn btn-danger">Envoyer</button>
            </form>
            <?php echo $erreur;?>
            <br><br>
        </div>
    </main>
  
    <?php require_once('assets/footer.php');?>

    <!--       _
       .__(.)< (MEOW) This website was created by yaelou - @yael_brkt
        \___)   

        (inspired by Amazon.fr)
 ~~~~~~~~~~~~~~~~~~-->

    <script>
    AOS.init();
    </script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>