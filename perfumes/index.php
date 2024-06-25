<?php session_start();?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <?php include_once('assets/metas.php');?>
    <title>Maison Brinkert - Home</title>
</head>
<body id="body-pd">
    <?php include_once('assets/database.php');?>
    <?php include_once('assets/navbar.php');?>
    <?php include_once('icon_panier.php');?>
    
    <main id="main">
        <section class="section">
        <div class="img-holder wallpaper-home" data-image="assets/img/maison_brinkert_bg.png">
            <!--<a class="button-27" href="#story">voir plus</a>-->
            <a class="arrow" href="#story">
                <span></span>
                <span></span>
            </a>
        </div>
        </section>

        <section id="story" class="section">
        <div class="Zholder" data-image="assets/img/blackwp.webp">
            <div class="container">
                <h2 class="titre-story">Vous pouvez nous faire confiance</h2><br>
                <div class="row row-cols-1 row-cols-lg-3 g-3">
                        <div class="col">
                            <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title">Risques limités <br></h5>
                                <p class="card-text">Notre enseigne privilégie des <b>produits sains</b> et qui ne sont pas nocifs pour votre santé, au contraire de certaines grande marques. Nous banissons formellement l'utilisation du <a href="#">BHT</a>, de l'<a href="#">Ethylhexyl Methoxycinnamate</a>, ou encore du <a href="#">Geraniol</a>. Ces produits sont des conservateurs, antioxydant et stabilisateur très efficaces mais dangereux pour votre peau et votre santé.</p>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title">Produit en <span class="span-french-flag">France</span><br></h5>
                                <p class="card-text">La production de nos parfums est entièrement <b>fait main</b> et produite en Alsace, en <!--<span style="font-family: 'Amsterdam' !important;font-size:16px;font-weight:bold;">France 🇫🇷</span>--><b>France</b> 🇫🇷 ! Cela permet d'avoir un contrôle total sur la qualité des produits et ingrédients, et de produire des stocks en fonction de la demande : pas de gaspillage !</p>
                                <a href="#" class="button-for-cards">Voir le processus de création</a>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title">Transparence totale <br></h5>
                                <p class="card-text">Gardez un oeil sur la composition de vos parfums sur notre site internet. Il est important pour nous que vous sachiez <b>exactement</b> ce que vous vaporisez sur vous, pour votre <b>sécurité</b> et car nous sommes fiers de proposer des parfums de qualité. </p><br>
                                <a href="#" class="button-for-cards">Voir la composition d'un parfum</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        </section>
        <section id="last">
            <h2 class="titre-story">Notre dernière création collector</h2>

            <?php 
                $bd = $access->prepare("SELECT * FROM products ORDER BY article_date_posted DESC LIMIT 1");
                $bd->execute([]);
                $fetch = $bd->fetch();
            ?>
        <div class="wrapper-of-wrapper">
            <a href="parfums_details.php?product_id=<?php echo $fetch['id'];?>" style="text-decoration: none;color:black;">
            <form action="" method="POST">
            <input type="hidden" value="<?php echo $fetch['id'];?>" name="id_produit">
            <div class="wrapper-last-creation">
                <div class="column-last-creation right">
                    <img src="<?php echo $fetch['article_image'];?>" alt="" class="image-last-creation">
                </div>
                <div class="column-last-creation left">
                    <div>
                        <p class="article-name-last-creation" style="font-family:'Amsterdam';"><?php echo $fetch['article_name'];?></p>
                        <p class="article-capacity-last-creation"><?php echo $fetch['capacity'];?>ml par flacon</p>
                        <p class="article-price-last-creation"><?php echo $fetch['article_price'];?>€ <span style="font-size:12px;"><s><?php echo $fetch['article_price_reduction'];?>€</s></span></p>
                        <p class="description-last-creation"><?php echo $fetch['article_description'];?></p>
                    </div>
                </div>
            </div> 
            <button type="submit" name="ajouter_panier" class="button-for-last-creation-basket">Ajouter au panier <i class="fa fa-bag-shopping"></i></button>
            <a href="parfums_details.php?product_id=<?php echo $fetch['id'];?>" class="button-for-last-creation-basket" id="acheter-last-creation">Acheter le produit <i class="fa fa-credit-card"></i></a>
            </form>
                </div>  

        </section>
    </main>
    <?php include_once('assets/footer.php');?>
    <?php include_once('assets/header-bottom.php');?>
    <?php include_once('assets/scripts.php');?>
</body>
</html>