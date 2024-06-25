<?php 
   require("config/commandes.php");
   $Produits = afficher();

   session_start();
// If the user is not logged in redirect to the login page...
if (!isset($_SESSION['loggedin'])) {
	header('Location: login.php');
	exit;
}
if(!isset($_SESSION['panier'])){
  //s'il nexiste pas une session on créer une et on mets un tableau a l'intérieur 
  $_SESSION['panier'] = array();
}
?>
<?php 
  /*if(!isset($_SESSION["loggedin"])){
      header("Location: login.html");
      exit(); 
    }*/
include_once "config/con_dbb.php";
// We don't have the password or email info stored in sessions so instead we can get the results from the database.
$stmt = $con->prepare('SELECT username, password, email, avatar FROM users WHERE id = ?');
// In this case we can use the account ID to get the account info.
$stmt->bind_param('i', $_SESSION['id']);
$stmt->execute();
$stmt->bind_result($username, $password, $email, $avatarLogo);
$stmt->fetch();
$stmt->close();


if(!isset($_SESSION['loggedin'])){
  $avatar = array('first' => 'content/perso1.png', 'second' => 'content/perso2.png', 'third' => 'content/perso3.png', 'forth' => 'content/perso4.png', 'fifth' => 'content/perso5.png', 'sixth' => 'content/perso6.png');
  $session_name = 'Invité';
} else {
  //$session_name = $_SESSION['avatar'];
  $avatar = array($avatarLogo);
  $session_name = $username;
}

?>

<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css2/style.css">
  <link rel="stylesheet" href="main.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
  <script src="js/custom.js" type="text/javascript"></script>
  <script src="js2/custom.js" type="text/javascript"></script>
  <!-- Fontawesome -->
  <script src="https://kit.fontawesome.com/41340b7633.js" crossorigin="anonymous"></script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css%22%3E" />

  <!-- javascript responsive -->
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
  <title>Obsession Coiffure</title>
  <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous">
  </script>
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <style>
    .bd-placeholder-img {
      font-size: 1.125rem;
      text-anchor: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }

    @media (min-width: 768px) {
      .bd-placeholder-img-lg {
        font-size: 3.5rem;
      }
    }

    .b-example-divider {
      height: 3rem;
      background-color: rgba(0, 0, 0, .1);
      border: solid rgba(0, 0, 0, .15);
      border-width: 1px 0;
      box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
    }

    .b-example-vr {
      flex-shrink: 0;
      width: 1.5rem;
      height: 100vh;
    }

    .bi {
      vertical-align: -.125em;
      fill: currentColor;
    }

    .nav-scroller {
      position: relative;
      z-index: 2;
      height: 2.75rem;
      overflow-y: hidden;
    }

    .nav-scroller .nav {
      display: flex;
      flex-wrap: nowrap;
      padding-bottom: 1rem;
      margin-top: -1px;
      overflow-x: auto;
      text-align: center;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
    }
  </style>
</head>

<body id="top">
  <nav class="navbar navbar-expand-xl bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="content/logo-v2.png" alt="" height="40" width="40"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
        aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#"><i class="fa fa-house"></i> Accueil</a>
          </li>
          <li class="nav-item">
            <a href="index.php#obsession-coiffure" class="nav-link underline"><i class="fa fa-location-dot"></i> Obsession
              coiffure</a>
          </li>
          <li class="nav-item">
            <a class="nav-link underline" href="index.php#nouveauté"><i class="fa fa-circle-plus"></i> Nouveautés</a>
          </li>
          <li class="nav-item">
            <a class="nav-link underline active" href="clickandcollect.php"><i class="fa fa-shop"></i> Boutique</a>
          </li>
          <li class="nav-item">
            <a href="reservation.php" class="nav-link underline"><i class="fa fa-calendar"></i> Prendre RDV</a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link underline"><i class="fa fa-address-card"></i> Contact</a>
          </li>
        </ul>
        <a href="#" class="nav-link dropdown-toggle float-right" style="padding-bottom:5px;" role="button"
          data-bs-toggle="dropdown" aria-expanded="false">
          <img class="avatar" src="<?php echo $avatar[array_rand($avatar)];?>"><span><?php echo $session_name;?></span>
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="profile.php"><i class="fa fa-user"></i> Profil</a></li>
          <li><a class="dropdown-item" href="panier.php" style="padding-right:0px !important;"><i class="fa fa-basket-shopping"></i> Panier<span class="span"><?=array_sum($_SESSION['panier'])?></span></a></li>
          <?php 
            if(!isset($_SESSION['loggedin'])) {
              echo '';
            } else {
              echo '<li><a class="dropdown-item" href="mes-commandes.php"><i class="fa fa-credit-card"></i> Mes commandes</a></li>';
              echo '<li><a class="dropdown-item" href="mes-rdv.php"><i class="fa fa-calendar"></i> Mes rendez-vous</a></li>';
            }
          ?>
          <li>
            <hr class="dropdown-divider">
          </li>
          <?php
            if(!isset($_SESSION['loggedin'])) {
                echo '<li><a class="dropdown-item" href="login.php"><i class="fa fa-right-to-bracket"></i> Se connecter</a></li>';
                echo '<li><a class="dropdown-item" href="signup.php"><i class="fa fa-pencil"></i> S\'inscrire</a></li>';
              } else {
                echo '<li><a class="dropdown-item" href="logout.php"><i class="fa fa-arrow-right-from-bracket"></i> Se déconnecter</a></li>';
              }
            ?>
        </ul>
      </div>
    </div>
  </nav>

       <main>
        <div class="titre-clickandcollect">
            <h1>BOUTIQUE</h1><br><h2>Bienvenue <?php echo $_SESSION['name'];?></h2><br>
            <h3>Nos articles disponibles en <span style="font-size:calc(1.3rem + .6vw);" class="gradient">Click'N'Collect</span></h3>
            <p>Choisissez, payez en ligne et retirez votre achat en magasin facilement</p>
        </div>
        <div>
        <div class="grid-nouveauté">

        <?php 
        //inclure la page de connexion
        include_once "config/con_dbb.php";
        //afficher la liste des produits
         $req = mysqli_query($con, "SELECT * FROM produits");
         while($row = mysqli_fetch_assoc($req)): 
        ?>
        <div class="container" data-aos="zoom-in-right">
            <div class="card">
              <div class="imgBx">
                <img src="<?php echo $row['image'];?>">
              </div>
              <div class="contentBx">
                <h2><?php echo $row['nom'];?></h2>
                <div class="size">
                  <h3><?php echo $row['description'];?></h3>
                </div>
                <div class="color">
                  <h3><?php echo $row['prix'];?>€</h3>
                </div>
                <a href="ajouter_panier.php?id=<?php echo(strval($row['id']));?>">Ajouter au Panier</a>
                <a href="#">Commander</a>
              </div>
            </div>
          </div>
          <?php endwhile; ?>

          <?php 
foreach ($Produits as $produit):
  ?>
          <!--<div class="container" data-aos="zoom-in-right">
            <div class="card">
              <div class="imgBx">
                <img src="<?php echo $produit['image'];?>">
              </div>
              <div class="contentBx">
                <h2><?php echo $produit['nom'];?></h2>
                <div class="size">
                  <h3><?php echo $produit['description'];?></h3>
                </div>
                <div class="color">
                  <h3><?php echo $produit['prix'];?>€</h3>
                </div>
                <a href="ajouter_panier.php?id=<?=$produit['id']?>">Ajouter au Panier</a>
                <a href="#">Commander</a>
              </div>
            </div>
          </div>
          <?php
endforeach;
?>
        </div>-->
        
      </div>
        </div>
       </main>







<footer class="footer" id="contact">
      <section>
      <div style="width: 100%;margin:auto;" data-aos="fade-up">
         <ul class="useful-links">
            <li><a href="#about"><h6>Home</h6></a></li>
            <li style="color:white;">•</li> 
            <li><a href="#2"><h6>Rendez-vous</h6></a></li>
            <li style="color:white;">•</li>
            <li><a href="#3"><h6>Boutique</h6></a></li>
         </ul>
      </div>
      <div class="colonne-mentions">
         <ul style="text-decoration: none;" data-aos="fade-down-right">
            <li><a href="#1"><h6>Mentions légales</h6></a></li>
            <li><a href="#1"><h6>Carte du site web</h6></a></li> 
            <li><a href="#2"><h6>Informations sur l'identification de l'entreprise</h6></a></li>
            <li><a href="https://www.google.com/maps/place/Obsession+Coiffure/@47.716862,7.396594,16z/data=!4m5!3m4!1s0x0:0x1377836dc2e97850!8m2!3d47.7168624!4d7.3965937?hl=fr" target="_blank"><h6>6 rue de Mulhouse, Eschentzwiller - 68440</h6></a></li>
         </ul>
      </div>
      <div class="colonne-logo">
         <img src="content/logo-v2.png" data-aos="zoom-in-right">
      </div>
      </section>
      <section>
      <div style="width: 100%;margin:auto;">
         <ul class="line-social" data-aos="zoom-in-down">
            <li><a href="https://www.facebook.com/Obsession-coiffure-531701790321470" target="_blank"><i class="fab fa-facebook fa-2x"></i><p>Facebook</p></a></li>
                         
            <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=obsession.coiffure68@gmail.com"><i class="fas fa-envelope fa-2x"></i><p>Courriel</p></a></li>
            
            <li><a href="#contact"><i class="fas fa-phone-square-alt fa-2x"></i><p>03 89 65 00 46</p></a></li>

            <li><a href="https://api.whatsapp.com/send?phone=33389650046&fbclid=IwAR2hvUUIquiSZnaMWgO1_aoqt6i9K2OcFcIZzBemD6yrTprnbcchyT-N_PI" target="_blank"><i class="fab fa-whatsapp fa-2x"></i><p>+33 3 89 65 00 46</p></a></li>
         </ul>
      </div>
      <p style="text-align: center;margin: auto;color:white;font-family:'Poppins';font-size: 12px;">All right reserved - 2023</p>
      <p style="text-align: center;margin: auto;color:white;font-family:'Poppins';font-size: 12px;">Website made with ♥ by <a style="text-decoration:none;color:#94c120;" href="#">Yael</a></p><br>
      </section>
   </footer>

   <script>
  AOS.init();
</script>
   <script src="https://kit.fontawesome.com/c18eac90ea.js" crossorigin="anonymous"></script>
  </body>
</html>