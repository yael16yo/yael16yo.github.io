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
        <h1><span class="behind-text"></span>- POLITIQUE DE CONFIDENTIALITE -</h1>

        <br><br>
        <p style="text-align:center;width:90%;display:block;margin:auto;">
        Dernière mise à jour : 19 août 2023 <br><br>

Nous accordons une grande importance à la protection de vos informations personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos données. En utilisant notre site, vous consentez aux pratiques décrites dans cette politique. <br><br>


 		Collecte d'Informations <br>
 		Nous ne collectons pas les informations personnelles que vous nous fournissez volontairement, telles que votre nom, votre adresse e-mail, etc., lorsque vous vous inscrivez sur notre site, remplissez des formulaires ou interagissez avec nos services. <br><br>
 		Utilisation des Informations <br>
 		Nous n’utilisons pas les informations collectées pour fournir et améliorer nos services, personnaliser votre expérience, répondre à vos demandes et vous envoyer des informations pertinentes. Nous pouvons cependant utiliser des informations agrégées et anonymisées à des fins statistiques. <br><br>
 		Partage d'Informations <br>
 		Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers, sauf dans le cadre des partenaires de confiance qui nous aident à exploiter notre site et à fournir nos services. Nous pouvons divulguer des informations dans le respect de la loi ou pour protéger nos droits, notre confidentialité, notre sécurité ou notre propriété. <br><br>
 		Cookies et Technologies de Suivi <br>
 		Notre site peut utiliser des cookies et d'autres technologies de suivi pour collecter des informations sur votre navigation. Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela pourrait limiter certaines fonctionnalités du site. <br><br>
 		Sécurité <br>
 		Nous mettons en place des mesures de sécurité pour protéger vos informations personnelles contre l'accès non autorisé, la divulgation, l'altération ou la destruction. Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sécurisée. <br><br>
 		Vos Droits <br>
 		Vous avez le droit d'accéder, de corriger, de mettre à jour ou de supprimer vos informations personnelles. Vous pouvez également vous désinscrire de nos communications marketing en suivant les instructions fournies dans nos e-mails. <br><br>
 		Modifications de la Politique <br>
 		Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour. <br><br>
 		Contact <br>
 		Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à l'adresse suivante : taborentraideetsolidarite@gmail.com. <br><br>
        </p>
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