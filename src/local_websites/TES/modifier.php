<?php 

    session_start();
    $id = $_GET['id'];

    require_once 'assets/database.php';
    $bdd = $access->prepare("SELECT * FROM actualites WHERE id = $id");
    $bdd->execute([]);
    $fetch = $bdd->fetch(PDO::FETCH_ASSOC);

    $erreur_modifier = "";

    if(isset($_POST['modifier'])) {

        $titre = $_POST['titre'];
        $description = $_POST['description'];
        $date = date('Y-m-d H:i:s');

                $targetDir = "assets/img/actualites/";
                $fileName = basename($_FILES["image"]["name"]);
                $targetFilePath = $targetDir . $titre . "_" .$fileName;
                $fileType = pathinfo($targetFilePath,PATHINFO_EXTENSION);          

                if(!empty($_FILES["image"]["name"])){
                    // Allow certain file formats
                    $allowTypes = array('jpg','png','jpeg','gif','pdf', 'webp', 'avif', 'JPG', 'PNG');
                    if(in_array($fileType, $allowTypes)){
                        // Upload file to server
                        if(move_uploaded_file($_FILES["image"]["tmp_name"], $targetFilePath)){
                            
                            $fileCompleted = "".$targetDir."".$titre."_".$fileName."";
                        }
                    }
                } else {
                    $fileCompleted = $fetch['image'];
                }
        

        $db = $access->prepare("UPDATE actualites SET `titre` = :titre, `description` = :description, `image` = :image, `date` = '$date' WHERE id = :id");
        $db->bindParam(':id', $id, PDO::PARAM_INT);
        $db->bindParam(':titre', $titre, PDO::PARAM_STR);
        $db->bindParam(':description', $description, PDO::PARAM_STR);
        $db->bindParam(':image', $fileCompleted, PDO::PARAM_STR);
        //$db->bindParam(':date', $date, PDO::PARAM_STR);
        $db->execute();
        $db->closeCursor();
        $erreur_modifier = "La modification a bien été effectué";
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
    <?php require_once('assets/navbar.php');?>

    <main>

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

    <?php 
        if(!isset($_SESSION['loggedin_admin'])) {
            echo "<div style='padding-top:100px !important;'></div>Vous n'êtes pas administrateur";
        } else {
    ?>
        <section class="modifier_container">
            <h1 data-aos="fade-right"><span class="behind-text"></span>- MODIFIER ARTICLE -</h1>

            <div class="form-modifier">
                <form action="" method="POST" enctype="multipart/form-data">
                    <input type="hidden" name="id" value="<?php echo(strval($fetch['id']));?>">
                    <div>
                        <input type="text" name="titre" value="<?php echo $fetch['titre'];?>">
                    </div>
                    <div>
                        <textarea name="description" id="description" cols="30" rows="10"><?php echo $fetch['description'];?></textarea>
                    </div>
                    <div>
                        <img src="<?php echo $fetch['image'];?>" alt="" width="150">
                        <input type="file" name="image" value="<?php echo $fetch['image'];?>">
                    </div>
                    <div>
                        <button type="submit" name="modifier" class="btn btn-primary">Modifier</button>
                    </div>
                </form>
            </div>
            <div>
                <?php echo $erreur_modifier;?>
            </div>
        </section>

        <?php } ?>
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