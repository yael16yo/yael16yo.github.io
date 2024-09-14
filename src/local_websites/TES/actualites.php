<?php 
    session_start();
    require_once("assets/database.php");

    $erreur_ajout = "";
    if(isset($_POST['ajouter_article'])) {
        if(!empty($_POST['titre'])) {
            if(!empty($_POST['description'])) {

                $titre = $_POST['titre'];
                $description = $_POST['description'];
                //$image = $_POST['image'];

                $targetDir = "assets/img/actualites/";
                $fileName = basename($_FILES["image"]["name"]);
                $targetFilePath = $targetDir . $titre . "_" .$fileName;
                $fileType = pathinfo($targetFilePath,PATHINFO_EXTENSION);          

                if(!empty($_FILES["image"]["name"])){
                    // Allow certain file formats
                    $allowTypes = array('jpg','png','jpeg','gif','pdf', 'webp', 'avif', 'JPG');
                    if(in_array($fileType, $allowTypes)){
                        // Upload file to server
                        if(move_uploaded_file($_FILES["image"]["tmp_name"], $targetFilePath)){
                            
                            $fileCompleted = "".$targetDir."".$titre."_".$fileName."";

                            $bdd = $access->prepare("INSERT INTO actualites (`titre`, `description`, `image`) VALUES (:titre, :description, :image)");
                            $bdd->bindParam(':titre', $titre, PDO::PARAM_STR);
                            $bdd->bindParam(':description', $description, PDO::PARAM_STR);
                            $bdd->bindParam(':image', $fileCompleted, PDO::PARAM_STR);
                            $bdd->execute();
                            $bdd->closeCursor();
                            $erreur_ajout = "L'article a été ajouté <a href='#' class='btn btn-light' id='refreshLink'>Rafraîchir la page</a>";
                                            
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        $allOthers = $access->prepare("SELECT * FROM actualites ORDER BY date DESC LIMIT 800 OFFSET 6");
                        $allOthers->execute([]);
                        $fetchAll = $allOthers->fetchAll(PDO::FETCH_ASSOC);

                        $bdd = $access->prepare("SELECT * FROM actualites ORDER BY date DESC LIMIT 5 OFFSET 1");
                        $bdd->execute([]);
                        $fetchActu = $bdd->fetchAll(PDO::FETCH_ASSOC);

                        $first = $access->prepare("SELECT * FROM actualites ORDER BY date DESC LIMIT 1");
                        $first->execute([]);
                        $fetchFirst = $first->fetch(PDO::FETCH_ASSOC);

                        $date_first = $fetchFirst['date'];
                        $date_exploded = explode(" ", $date_first);

                        $date_explode_days = explode("-", $date_exploded[0]);
                        $date_explode_hours = explode(":", $date_exploded[1]);


                        if(isset($_POST['del'])) {
                            $id_delete = $_POST['id'];
                            $database = $access->prepare("DELETE FROM `actualites` WHERE `id` = $id_delete");
                            $database->execute();
                            $database->closeCursor();
                            echo "<meta http-equiv='refresh' content='0'>";
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
    
    <?php require('assets/navbar.php');?>

    <main id="actualites">
        <h1 data-aos="fade-right"><span class="behind-text"></span>- NOS ACTUALITES -</h1>
        
        <?php 
            if(isset($_SESSION['loggedin_admin'])) {
                ?>
                <div class="d-flex justify-content-center">
                    <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#exampleModalNouvel" style="margin-top: 30px;">
                    +
                    </button>
                </div>

                <?php echo $erreur_ajout;?>

                <!-- Modal -->
                <div class="modal fade" id="exampleModalNouvel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabelNouvel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabelNouvel">Créer un nouvel article</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form action="" method="POST" enctype="multipart/form-data">
                            <input type="text" name="titre" placeholder="TES organise la fête des voisins 2024..." required>
                            <textarea name="description" id="description" cols="30" rows="10" placeholder="Nous sommes très content de vous annoncer que la fête des voisins aura bien lieu..." required></textarea>
                            <input type="file" name="image" required>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-dismiss="modal">Fermer</button>
                        <button type="submit" class="btn btn-dark" name="ajouter_article">Ajouter l'article</button>
                        </form>
                    </div>
                    </div>
                </div>
                </div>

                <div class="container_actualites">
                    <div class="column1">
                        <p data-aos="zoom-in-down">Dernière publication</p>
                            <a href="actualites_post.php?id=<?php echo $fetchFirst['id'];?>">
                                <div class="container_first" data-aos="zoom-in-up">
                                    <h5><?php echo $fetchFirst['titre'];?></h5>
                                    <p><?php echo $fetchFirst['description'];?></p>
                                    <img src="<?php echo $fetchFirst['image'];?>" alt="">
                                    <span>Le <?php echo $date_explode_days[2];?>/<?php echo $date_explode_days[1];?>/<?php echo $date_explode_days[0];?> à <?php echo $date_explode_hours[0];?>:<?php echo $date_explode_hours[1];?></span><br>
                                    <div>
                                        <a href="modifier.php?id=<?php echo $fetchFirst['id'];?>" class="btn btn-primary" style="display:inline-block;">Modifier</a>
                                        <form class="delete-form" method="post" action="">
                                        <input type="hidden" name="id" value="<?=$fetchFirst['id']?>">    
                                        <button class="btn btn-danger" style="cursor:pointer;display:inline-block;" type="submit" name="del" id="del" value="<?php echo strval($fetchFirst['id']);?>">
                                            <i class="fa fa-trash fa-lg"></i>
                                        </button>
                                        </form>
                                    </div>
                                </div>
                            </a>
                            
                    </div>
                    
                    <div class="column2">
                        <p data-aos="zoom-in-down" style="text-transform:capitalize;text-align:right;">à voir aussi</p>
                        <?php 
                            foreach($fetchActu as $fa) {

                                $date_first_2 = $fa['date'];
                                $date_exploded_2 = explode(" ", $date_first_2);

                                $date_explode_days_2 = explode("-", $date_exploded_2[0]);
                                $date_explode_hours_2 = explode(":", $date_exploded_2[1]);
                            ?>
                            <a href="actualites_post.php?id=<?php echo $fa['id'];?>">
                                <div class="container_post" data-aos="zoom-in-up">
                                    <h6><?php echo $fa['titre'];?></h6>
                                    <p><?php echo strip_tags(mb_substr($fa['description'], 0, 20, 'UTF-8'));?>...</p>
                                    <!--<img src="<?php echo $fa['image'];?>" alt="">-->
                                    <span>Le <?php echo $date_explode_days_2[2];?>/<?php echo $date_explode_days_2[1];?>/<?php echo $date_explode_days_2[0];?> à <?php echo $date_explode_hours_2[0];?>:<?php echo $date_explode_hours_2[1];?></span><br>
                                    <div>
                                        <a href="modifier.php?id=<?php echo $fa['id'];?>" class="btn btn-primary" style="display:inline-block;">Modifier</a>
                                        <form class="delete-form" method="post" action="">
                                        <input type="hidden" name="id" value="<?=$fa['id']?>">
                                            <button class="btn btn-danger" style="cursor:pointer;" type="submit" name="del" id="del" value="<?php echo strval($fa['id']);?>">
                                                    <i class="fa fa-trash fa-lg"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </a>
                            <?php 
                            }
                        ?>
                    </div>
                </div>

                <hr style="width:30%;margin: 50px auto;display:block;">
                
                <?php 
                foreach($fetchAll as $fao) {
                    $date_first_3 = $fao['date'];
                    $date_exploded_3 = explode(" ", $date_first_3);

                    $date_explode_days_3 = explode("-", $date_exploded_3[0]);
                    $date_explode_hours_3 = explode(":", $date_exploded_3[1]);
                ?>
                
                    <div class="horizontal-actu" data-aos="zoom-in-down">
                    <a href="actualites_post.php?id=<?php echo $fao['id'];?>" style="text-decoration: none;"> 
                        <h5 style="font-weight:bolder;color:black;margin-left:10px;"><?php echo $fao['titre'];?></h5>
                        <div class="container_actualites" style="margin-top: 0 !important;">
                            <div class="column1">
                                <p style="color:black;"><?php echo $fao['description'];?></p>
                            </div>

                            <div class="column2">
                                <img class="horizontal-image" src="<?php echo $fao['image'];?>" alt="">
                            </div>
    
                        </div>
                        <span style="float:right;color:black;">Le <?php echo $date_explode_days_3[2];?>/<?php echo $date_explode_days_3[1];?>/<?php echo $date_explode_days_3[0];?> à <?php echo $date_explode_hours_3[0];?>:<?php echo $date_explode_hours_3[1];?></span><br>
                        <div>
                            <a href="modifier.php?id=<?php echo $fao['id'];?>" class="btn btn-primary" style="display:inline-block;">Modifier</a>
                            <form class="delete-form" method="post" action="">
                            <input type="hidden" name="id" value="<?=$fao['id']?>">
                                <button class="btn btn-danger" style="cursor:pointer;" type="submit" name="del" id="del" value="<?php echo strval($fao['id']);?>">
                                        <i class="fa fa-trash fa-lg"></i>
                                </button>
                            </form>
                        </div>
                    </a>
                </div>
                
                <?php 
            }
                ?>
                

                <?php
            } else {
                ?>


<div class="container_actualites">
                    <div class="column1">
                        <p data-aos="zoom-in-down">Dernière publication</p>
                            <a href="actualites_post.php?id=<?php echo $fetchFirst['id'];?>">
                                <div class="container_first" data-aos="zoom-in-up">
                                    <h5><?php echo $fetchFirst['titre'];?></h5>
                                    <p><?php echo $fetchFirst['description'];?></p>
                                    <img src="<?php echo $fetchFirst['image'];?>" alt="">
                                    <span>Le <?php echo $date_explode_days[2];?>/<?php echo $date_explode_days[1];?>/<?php echo $date_explode_days[0];?> à <?php echo $date_explode_hours[0];?>:<?php echo $date_explode_hours[1];?></span><br>
                                </div>
                            </a>
                            
                    </div>
                    
                    <div class="column2">
                        <p data-aos="zoom-in-down" style="text-transform:capitalize;text-align:right;">à voir aussi</p>
                        <?php 
                            foreach($fetchActu as $fa) {

                                $date_first_2 = $fa['date'];
                                $date_exploded_2 = explode(" ", $date_first_2);

                                $date_explode_days_2 = explode("-", $date_exploded_2[0]);
                                $date_explode_hours_2 = explode(":", $date_exploded_2[1]);
                            ?>
                            <a href="actualites_post.php?id=<?php echo $fa['id'];?>">
                                <div class="container_post" data-aos="zoom-in-up">
                                    <h6><?php echo $fa['titre'];?></h6>
                                    <p><?php echo strip_tags(mb_substr($fa['description'], 0, 20, 'UTF-8'));?>...</p>
                                    <!--<img src="<?php echo $fa['image'];?>" alt="">-->
                                    <span>Le <?php echo $date_explode_days_2[2];?>/<?php echo $date_explode_days_2[1];?>/<?php echo $date_explode_days_2[0];?> à <?php echo $date_explode_hours_2[0];?>:<?php echo $date_explode_hours_2[1];?></span><br>
                                </div>
                            </a>
                            <?php 
                            }
                        ?>
                    </div>
                </div>

                <hr style="width:30%;margin: 50px auto;display:block;">
                
                <?php 
                foreach($fetchAll as $fao) {
                    $date_first_3 = $fao['date'];
                    $date_exploded_3 = explode(" ", $date_first_3);

                    $date_explode_days_3 = explode("-", $date_exploded_3[0]);
                    $date_explode_hours_3 = explode(":", $date_exploded_3[1]);
                ?>
                
                    <div class="horizontal-actu" data-aos="zoom-in-down">
                    <a href="actualites_post.php?id=<?php echo $fao['id'];?>" style="text-decoration: none;"> 
                        <h5 style="font-weight:bolder;color:black;margin-left:10px;"><?php echo $fao['titre'];?></h5>
                        <div class="container_actualites" style="margin-top: 0 !important;">
                            <div class="column1">
                                <p style="color:black;"><?php echo $fao['description'];?></p>
                            </div>

                            <div class="column2">
                                <img class="horizontal-image" src="<?php echo $fao['image'];?>" alt="">
                            </div>
    
                        </div>
                        <span style="float:right;color:black;">Le <?php echo $date_explode_days_3[2];?>/<?php echo $date_explode_days_3[1];?>/<?php echo $date_explode_days_3[0];?> à <?php echo $date_explode_hours_3[0];?>:<?php echo $date_explode_hours_3[1];?></span><br>
                    </a>
                </div>
                
                <?php 
            }
                ?>


                <?php
            }
        ?>

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
        // Ajoutez un gestionnaire d'événement au clic sur le bouton
        document.getElementById('refreshLink').addEventListener('click', function() {
            // Créez dynamiquement une balise <meta> avec l'attribut http-equiv refresh
            var metaTag = document.createElement('meta');
            metaTag.setAttribute('http-equiv', 'refresh');
            metaTag.setAttribute('content', '0'); // La page se rafraîchira après 5 secondes
            
            // Ajoutez la balise <meta> au head de la page
            document.head.appendChild(metaTag);
        });
    </script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>