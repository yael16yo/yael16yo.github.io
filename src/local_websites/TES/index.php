<?php 
    session_start();
    require_once("assets/database.php");
    $db = $access->prepare("SELECT verset_accueil FROM accueil");
    $db->execute([]);
    $fetch = $db->fetch(PDO::FETCH_ASSOC);
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

    <main class="header_accueil">
        <div class="center-both">
            <h1><div data-aos="fade-up" data-aos-duration="600"><span>T</span>ABOR</div> <div data-aos="fade-up" data-aos-duration="900"><span>E</span>NTRAIDE</div> <div data-aos="fade-up" data-aos-duration="1200"><span>S</span>OLIDARITE</div></h1>
            
            <div class="container-button">
                <a href="#decouvrir" class="button" data-aos="fade-up" data-aos-duration="1500">
                    <div class="button__line"></div>
                    <div class="button__line"></div>
                    <span class="button__text">DECOUVRIR</span>
                    <div class="button__drow1"></div>
                    <div class="button__drow2"></div>
                </a>
            </div>
        </div>
    </main>
    
    <section id="decouvrir">

        <h2 data-aos="fade-down"><span class="behind-text"></span>- DECOUVRIR -</h2>

        <div class="content">
            <div class="verset-paragraphe" data-aos="fade-right">
                <?php if(!isset($_SESSION['loggedin_admin'])) {
                    echo $fetch['verset_accueil'];
 } else {?>
    <form action="" method="POST">
    <textarea name="verset_accueil" id="" cols="30" rows="10"><?php echo $fetch['verset_accueil'];?></textarea>
    <button type="submit" name="submit">Enregistrer</button>
    <?php 
        if(isset($_POST['submit'])) {
            if(!empty($_POST['verset_accueil'])) {
                $verset_accueil = $_POST['verset_accueil'];
                $bd = $access->prepare("UPDATE accueil SET `verset_accueil` = :verset_accueil");
                $bd->bindParam(':verset_accueil', $verset_accueil, PDO::PARAM_STR);
                $bd->execute();
                $bd->closeCursor();
                echo "<meta http-equiv='refresh' content='0'>";
            }
        }
    ?>
    </form>
    <?php }?>

    <br><br>
    <p><i>Par amour de Jésus et des hommes qui nous entourent nous souhaitons vivre ces versets au travers de l’association <b>TES</b>.</i></p>
            </div>
            <div class="verset-image">
                <img src="assets/img/verset-image.png" alt="" data-aos="fade-left">
            </div>
        </div>
    </section>

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