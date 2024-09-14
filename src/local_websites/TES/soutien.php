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
    if(isset($_POST['envoyer_eleve'])) {
      if(!empty($_POST['nom']) && !empty($_POST['prenom']) && !empty($_POST['email']) && !empty($_POST['age']) && !empty($_POST['niveau'])) {
          $nom = $_POST['nom'];
          $prenom = $_POST['prenom'];
          $email = $_POST['email'];
          $age = $_POST['age'];
          $niveau = $_POST['niveau'];

          $message = "<br>" . $nom . "<br>" . $prenom . "<br>" . $email ."<br>" . $age . " ans<br>" . $niveau . "";
 
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
            $mail->Subject = "Inscription de l'enfant " . $nom . " au soutien";

            // Contenu du message
            $messageComplete = 'Mail provenant de ' . $email . ', pour une inscription au soutien scolaire :<br><br> ' . $message . '';
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


    if(isset($_POST['envoyer_benevole'])) {
      if(!empty($_POST['nom_b']) && !empty($_POST['prenom_b']) && !empty($_POST['email_b']) && !empty($_POST['motivation_b']) && !empty($_POST['temoignage_b'])) {
          $nom = $_POST['nom_b'];
          $prenom = $_POST['prenom_b'];
          $email = $_POST['email_b'];
          $motivation = $_POST['motivation_b'];
          $temoignage = $_POST['temoignage_b'];

          $message = "<br>" . $nom . "<br>" . $prenom . "<br>" . $email ."<br><br>Motivations :<br>" . $motivation . "<br><br>Temoignage :<br>" . $temoignage . "";
 
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

    <main id="soutien">
        <h1 data-aos="fade-right"><span class="behind-text"></span>- SOUTIEN SCOLAIRE -</h1>

<div class="container_soutien">
    <div class="column3">
    <p data-aos="zoom-in-up" style="font-size:18px;margin-top:50px;">L’association propose depuis ses débuts du soutien scolaire gratuit, de l’école primaire jusqu’à la seconde.
Les bénévoles, de tous âges, sont pour une partie enseignants du premier et du second degré.
L’activité se déroule dans les locaux que l’église Tabor prête gracieusement à l’association TES.
Nous accueillons les enfants les samedis de 10h30 à midi, avec un petit goûter vers 11H30.
<br>Nous proposons soit un soutien soit une aide aux devoirs, selon les demandes des enfants.
Pour pouvoir fonctionner efficacement, le nombre de places est limité.
<br><br>
<a href="#" class="red-text" style="text-decoration:none;"><i class="fa fa-calendar"></i> Accéder au planning</a>
</p>
</div>
<div class="column4">
    <img src="assets/img/soutien2.jpeg" alt="" style="width:100%;height:280px;object-fit:cover;border-radius:20px;" data-aos="fade-left">
</div>
</div>

<div class="container d-flex justify-content-center" style="padding-bottom:30px;">

<button type="button" class="btn-custom btn-light" data-toggle="modal" data-target="#exampleModal" data-aos="zoom-in-up">
  <span class="behind-text"></span>
  <i class="fa fa-child"></i> Inscrire mon enfant
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Inscrire mon enfant</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
                <form action="" method="POST" class="form-soutien">
                        <label for="">Nom de l'enfant:</label>
                        <input type="text" name="nom" placeholder="Doe" required>
                        <label for="">Prénom de l'enfant:</label>
                        <input type="text" name="prenom" placeholder="John" required>
                        <label for="">E-mail du tuteur légal</label>
                        <input type="email" name="email" placeholder="john.doe@example.com" required>
                        <label for="">Âge de l'enfant:</label>
                        <input type="number" name="age" min="0" placeholder="13" required>
                        <label for="">Niveau de l'enfant:</label>
                        <select name="niveau" id="niveau" required>
                            <option value="Petite section">Petite section</option>
                            <option value="Moyenne section">Moyenne section</option>
                            <option value="Grande section">Grande section</option>
                            <option value="CP">CP</option>
                            <option value="CE1">CE1</option>
                            <option value="CE2">CE2</option>
                            <option value="CM1">CM1</option>
                            <option value="CM2">CM2</option>
                            <option value="6e">6e</option>
                            <option value="5e">5e</option>
                            <option value="4e">4e</option>
                            <option value="3e">3e</option>
                            <option value="2nde">2nde</option>
                        </select>
                    
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
        <button type="submit" class="btn btn-danger" name="envoyer_eleve">Envoyer</button>
      </div></form>
    </div>
  </div>
</div>


<button type="button" class="btn-custom btn-light" data-toggle="modal" data-target="#benevole" data-aos="zoom-in-up">
  <span class="behind-text"></span>
<i class="fa fa-hands-holding-child"></i> M'inscrire en bénévole
</button>

<!-- Modal -->
<div class="modal fade" id="benevole" tabindex="-1" role="dialog" aria-labelledby="benevoleLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="benevoleLabel">M'inscrire en bénévole</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
                <form action="" method="POST" class="form-soutien">
                        <label for="">Nom de famille:</label>
                        <input type="text" name="nom_b" placeholder="Doe" required>
                        <label for="">Prénom:</label>
                        <input type="text" name="prenom_b" placeholder="John" required>
                        <label for="">E-mail</label>
                        <input type="email" name="email_b" placeholder="john.doe@example.com" required>
                        <label for="">Motivations:</label>
                        <textarea name="motivation_b" placeholder="Mes motivations ici..." required></textarea>
                        <label for="">Témoignage personnel:</label>
                        <textarea name="temoignage_b" id="temoignage_b" placeholder="Mon témoignage ici..." required></textarea>
                    
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
        <button type="submit" class="btn btn-danger" name="envoyer_benevole">Envoyer</button>
      </div></form>
    </div>
  </div>
</div>
                
</div>

<p style="text-align:center;"><?php echo $erreur;?></p>

    </main>
    <?php require_once('assets/footer.php');?>

    <!--       _
       .__(.)< (MEOW) This website was created by yaelou - @yael_brkt
        \___)   

        (inspired by Amazon.fr)
 ~~~~~~~~~~~~~~~~~~-->

    <script>
        document.addEventListener("DOMContentLoaded", function() {
        const toggleCheckbox = document.querySelector(".mobileToggle");
        const page1 = document.getElementById("page1");
        const page2 = document.getElementById("page2");

        toggleCheckbox.addEventListener("change", function() {
            if (this.checked) {
                // Utilisez smooth scroll pour faire défiler en douceur vers l'élément avec l'id "page2"
                page2.scrollIntoView({ behavior: "smooth" });
            } else {
                // Faites défiler en douceur vers l'élément avec l'id "page1" lorsque la case à cocher n'est plus cochée
                page1.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
    </script>
    <script>
    AOS.init();
    </script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>