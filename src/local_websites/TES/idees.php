<?php
    session_start();
    require_once("assets/database.php");

    $erreur = "";
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Inclure la bibliothèque PHPMailer
require 'phpmailer/PHPMailer/src/Exception.php';
require 'phpmailer/PHPMailer/src/PHPMailer.php';
require 'phpmailer/PHPMailer/src/SMTP.php';

    if(isset($_POST['envoyer_idee'])) {
        if(!empty($_POST['nom_i']) && !empty($_POST['prenom_i']) && !empty($_POST['email_i']) && !empty($_POST['number_i']) && !empty($_POST['idee_i'])) {
        
      
          $nom = $_POST['nom_i'];
          $prenom = $_POST['prenom_i'];
          $email = $_POST['email_i'];
          $number = $_POST['number_i'];
          $idee = $_POST['idee_i'];

          $message = "<br>" . $nom . "<br>" . $prenom . "<br>" . $email ."<br>" . $number . " <br><br>" . $idee . "";
 
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
            $mail->Subject = utf8_decode("Idée reçu de la part de " . $nom . "");

            // Contenu du message
            $messageComplete = 'Mail provenant de ' . $email . ', pour une idée :<br><br> ' . $message . '';
            $mail->isHTML(true);
            $mail->Body = $messageComplete;

            // Envoyer l'e-mail
            $mail->send();
            $erreur = "<span class='erreur_vert'><i class='fa fa-circle-check'></i> L'idée a bien été envoyée!</span>";
        } catch (Exception $e) {
            echo "<span class='erreur_rouge'>Une erreur s'est produite lors de l'envoi du message : {$mail->ErrorInfo}</span>";
        }
        } else {
            $erreur = "<span class='erreur_rouge'><i class='fa fa-circle-xmark'></i> Vous n'avez pas rempli tous les champs du formulaire!</span>";
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

        <main id="fetevoisin">
            <h1 data-aos="fade-right"><span class="behind-text"></span>- DES IDEES? -</h1>

            <br><br>
            <p style="text-align:center;" data-aos="zoom-in-up">Contactez-nous si vous avez des idées qui vous paraissent en adéquation avec nos valeurs et nos objectifs. <br> Nous les soumettrons à notre CA pour en discuter !</p>
            <br><br>

            <form action="" method="POST">
                <style>
                    .form-control {
                        border-radius: 20px !important;
                    }
                    label {
                        margin-left:10px;
                        margin-top: 20px;
                    }
                </style>
                <div class="container" style="margin-bottom: 70px;">
                    <label for="" data-aos="fade-right" data-aos-duration="400">Nom:</label>
                    <input type="text" name="nom_i" placeholder="Doe" class="form-control" required data-aos="fade-right" data-aos-duration="400">
                    <label for="" data-aos="fade-right" data-aos-duration="600">Prenom:</label>
                    <input type="text" name="prenom_i" placeholder="John" class="form-control" required data-aos="fade-right" data-aos-duration="600">
                    <label for="" data-aos="fade-right" data-aos-duration="800">Email:</label>
                    <input type="email" name="email_i" placeholder="john.doe@example.com" class="form-control" required data-aos="fade-right" data-aos-duration="800">
                    <label for="" data-aos="fade-right" data-aos-duration="1000">Téléphone:</label>
                    <input type="tel" name="number_i" placeholder="+33 7 99 99 99 99" class="form-control" required data-aos="fade-right" data-aos-duration="1000">
                    <label for="" data-aos="fade-right" data-aos-duration="1200">Votre idée:</label>
                    <textarea name="idee_i" placeholder="Bonjour, alors voici mon idée..." class="form-control" required data-aos="fade-right" data-aos-duration="1200"></textarea>
                    <br>
                    <button type="submit" name="envoyer_idee" class="form-control btn btn-danger" data-aos="fade-right" data-aos-duration="1350">Envoyer</button>
                    <br>
                    <?php echo $erreur;?>
                </div>
            </form>
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
    <script>
        $('.carousel').carousel({
  interval: 1500
})
    </script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>