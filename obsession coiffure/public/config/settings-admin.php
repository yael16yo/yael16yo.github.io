<?php
    
    function afficherAdmin()
    {
        if(require("connexion.php"))
        {
            $req = $access->prepare("SELECT * FROM admin ORDER BY id DESC") or die(print_r($access->errorInfo())) ;
            $req->execute();
            $data = $req->fetchAll(PDO::FETCH_ASSOC);
            return $data;
        }
        else {
            $e = "Une erreur est survenue";
        }
    }
   $Admins = afficherAdmin();

    
   
   
function supprimerAdmin($id) {
   require("connexion.php");
   if(isset($_POST["supprimerAdmin"]))
        {
            $req = $access->prepare("DELETE FROM admin WHERE id=?");
            $req->execute([$id]);
            $req->closeCursor();
            echo "<meta http-equiv='refresh' content='0'>";
        }
        else {
            $e = "Une erreur est survenue";
        }
   }


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
<div>
        <ul>
            <li class="bar-nav-admin"><a href="index.php">Accueil</a></li>
        </ul>
    </div>
    <p class="msg-bvn-admin">Hello <span><?php echo $_SESSION['identifiant'];?></span> <a href="logout.php"><i class="fa fa-power-off"></i></a></p>
      <div class="admin-register">
        <form method="POST" value="addAdmin">
            <input type="text" name="identifiant" required placeholder="Identifiant">
            <input type="password" name="motdepasse" required placeholder="Mot-de-passe">
            <input type="password" name="motdepasse2" required placeholder="Répéter votre mot-de-passe">
            <input type="submit" name="addAdmin" value="S'inscrire">
            <?php
                require('connexion.php');
                require('commandes.php');

                        if(isset($_POST['addAdmin'])) {
                            if(isset($_POST['identifiant']) AND isset($_POST['motdepasse'])) {
                                if(!empty($_POST['identifiant']) AND !empty($_POST['motdepasse'])) {
                                    if (strlen($_POST['motdepasse']) > 20 || strlen($_POST['motdepasse']) < 5) {
                                        exit('Le mot-de-passe doit faire entre 5 et 20 caractères');
                                    }
                                        if($_POST['motdepasse'] != $_POST['motdepasse2']) {
                                            exit('Les mot-de-passes ne correspondent pas.');
                                        }
                                    
                                    $identifiant = $_POST['identifiant'];
                                    $motdepasse = crypt($_POST['motdepasse'], 'abc');
                                    
                                    try {
                                        addAdmin($identifiant, $motdepasse);
                                    }
                                     catch (Exception $e) {
                                        $e->getMessage();
                                    }
                                    } 
                                }          
                            }
                        
                    
    
            ?>
        </form>
      </div>
      <div class="liste-admin">
        <h4>Liste des administrateurs</h4>
        <?php
            foreach($Admins as $admin):
        ?>
        <div>
            <p style="display:inline-block;"><?php print($admin['identifiant']);?></p>
            <a href=""></a>
            <form style="display: inline-block;" method="POST">
                <button type="submit" name="supprimerAdmin" value="<?php echo(strval($admin['id']));?>">Supprimer</button>
                <?php
                    if(isset($_POST['supprimerAdmin'])) {
                        try {
                            supprimerAdmin($_POST['supprimerAdmin']);
                        }
                        catch (Exception $e) {
                            $e->getMessage();
                        }
                    } else {
                        $e = "La suppression a échoué, veuillez réessayer.";
                    }
                    
                ?>
            </form>
        </div>
        <?php
            endforeach;
        ?>
      </div>
    </body>
</html>