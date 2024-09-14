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
        <h1><span class="behind-text"></span>- MENTIONS LEGALES -</h1>

        <br><br>
        <p style="text-align:center;width:90%;display:block;margin:auto;">
        Propriété Intellectuelle :<br>

Le contenu de ce site, y compris mais sans s'y limiter, les textes, les images, les vidéos, les logos et les graphiques, est protégé par les lois sur la propriété intellectuelle et est la propriété de Tabor Entraide et Solidarité ou de ses fournisseurs de contenu. Toute utilisation non autorisée du contenu de ce site est interdite.
<br><br>
Collecte de Données :<br>

Nous collectons certaines données personnelles dans le respect de notre politique de confidentialité. Pour en savoir plus sur la manière dont nous collectons, utilisons et protégeons vos données, veuillez consulter notre politique de confidentialité.
<br><br>
Responsabilité :<br>

Nous nous efforçons de fournir des informations exactes sur ce site, mais nous ne pouvons garantir l'exactitude, l'exhaustivité ou la pertinence des informations fournies. En conséquence, nous déclinons toute responsabilité quant aux dommages ou préjudices directs ou indirects résultant de l'utilisation de ce site.
<br><br>
Liens Externes :<br>

Ce site peut contenir des liens vers des sites externes. Nous ne sommes pas responsables du contenu de ces sites externes et déclinons toute responsabilité quant à leur contenu et à leur utilisation.
<br><br>
Droit Applicable :<br>

Ce site et son contenu sont régis par les lois en vigueur en France. Tout litige relatif à l'utilisation de ce site sera soumis à la compétence exclusive des tribunaux de Mulhouse.
       
<br><br>
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