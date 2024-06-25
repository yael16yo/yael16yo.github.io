<?php
    
    require('connexion.php');
    
    session_start();
    if(!isset($_SESSION["identifiant"])){
        header("Location: admin.php");
        exit(); 
      }
    ?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Espace administrateur</title>
</head>
<body>
    <p class="msg-bvn-admin">Hello <span><?php echo $_SESSION['identifiant'];?></span> <a href="logout.php"><i class="fa fa-power-off"></i></a></p>
    <div class="container">
        <div class="grid-container">
            <div class="child">
                <i class="fa fa-user fa-2x i"></i>
                <h5>Enregistrer un nouvel administrateur</h5>
                <!--<fieldset>
                    <details>
                        <summary>Attention</summary>
                        <p>Les utilisateurs créés via l'espace administrateur bénificient de tous les droits (modifications d'articles, de planning ou de création/suppression d'utilisateurs).</p>
                    </details>
                </fieldset>-->
                <a href="settings-admin.php" class="button-child">
                    Continuer <i class="fa fa-arrow-right"></i>
                </a>
            </div>

            <div class="child">
                <i class="fa fa-shopping-cart fa-2x i"></i>
                <h5>Modification / création / suppression d'articles</h5>
                <a href="modifications-articles.php" class="button-child">
                    Continuer <i class="fa fa-arrow-right"></i>
                </a>
            </div>

            <div class="child">
                <i class="fa fa-calendar fa-2x i"></i>
                <h5>Planning RDV et Jours fériés</h5>
                <a href="planning.php" class="button-child">
                    Continuer <i class="fa fa-arrow-right"></i>
                </a>
            </div>

            <div class="child">
                <i class="fa fa-credit-card fa-2x i"></i>
                <h5>Les commandes de vos clients</h5>
                <a href="#" class="button-child">
                    Continuer <i class="fa fa-arrow-right"></i>
                </a>
            </div>
        </div>
    </div>
</body>
</html>