<?php 
    session_start();
    require_once("assets/database.php");
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
        <h1><span class="behind-text"></span>- QUI SOMMES-NOUS? -</h1>

        <div class="qsn-paragraphe">
            <h2 data-aos="fade-right" data-aos-duration="300">Histoire de l'association</h2>
            <p data-aos="fade-left" data-aos-duration="300">L’association TES est déclarée le 24 janvier 2019 au tribunal d’instance de Mulhouse par plusieurs membres de l’église évangélique méthodiste Tabor.
<br>
</p>

<br>

<h2 data-aos="fade-right" data-aos-duration="300">Objectifs de l'association</h2>
<p data-aos="fade-left" data-aos-duration="300">A but non lucratif, sa mission est dès l’origine de servir Dieu en apportant autour d’elle aide et soutien à ceux qui en ont besoin, en particulier dans le voisinage proche.
<br>Elle offre ses services à tous, sans distinction. </p>

<br>

<h2 data-aos="fade-right" data-aos-duration="300">Organisation</h2>
<p data-aos="fade-left" data-aos-duration="300">Bureau de l'association (2023-2024)<br>
<br>• Présidente : Déborah BERNHARD
<br>• Trésorière : Rachel ILTIS
<br>• Secrétaire : Ségolène BRINKERT
</p>

<br>

<h2 data-aos="fade-right" data-aos-duration="300">Besoins</h2>
<p data-aos="fade-left" data-aos-duration="300">Si vous souhaitez nous aider, vous pouvez nous contacter à <a href="mailto:taborentraideetsolidarite@gmail.com">cette adresse</a></p>

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