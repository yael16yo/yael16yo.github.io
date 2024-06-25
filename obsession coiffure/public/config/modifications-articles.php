<?php
    
    require('connexion.php');
    
    session_start();
    if(!isset($_SESSION["identifiant"])){
        header("Location: admin.php");
        exit(); 
      }
    ?>
<?php 
   require("commandes.php");
   function supprimer($id)
   {
       if(require("connexion.php"))
       {
           $req = $access->prepare("DELETE FROM produits WHERE id=?");
           $req->execute(array($id));
           $req->closeCursor();
           echo "<meta http-equiv='refresh' content='0'>";
       }
       else {
           $e = "Une erreur est survenue";
       }
   }
   $Produits = afficher();
?>

<?php 

function ajouter($image, $nom, $prix, $description)
{
    if(require("connexion.php"))
    {
        $req = $access->prepare("INSERT INTO produits (image, nom, prix, description) VALUES (?, ?, ?, ?)");
        $req->execute(array($_POST['image'],$_POST['nom'],$_POST['prix'],$_POST['description'],));
        $req->closeCursor();
        echo "<meta http-equiv='refresh' content='0'>";
        
    }
    else {
        $e = "Une erreur est survenue";
    }
}

?>
<?php
    function editArticle($image, $nom, $prix, $description)
    {
        if(require("connexion.php"))
        {
            $image = $_POST['image'];
            $nom = $_POST['nom'];
            $prix = $_POST['prix'];
            $description = $_POST['description'];
            $id = $_POST['id'];
            $req = $access->prepare("UPDATE produits SET `id` = '$id', `image` = '$image', `nom` =' $nom', `prix` = '$prix', `description` = '$description' WHERE id= '$id'");
            $req->execute();
            $req->closeCursor();
            echo "<meta http-equiv='refresh' content='0'>";
            
        }
        else {
            $e = "Une erreur est survenue";
        }
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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <title>Espace administrateur</title>
</head>
<body>
<div>
        <ul>
            <li class="bar-nav-admin"><a href="index.php">Accueil</a></li>
        </ul>
    </div>
    <p class="msg-bvn-admin">Hello <span><?php echo $_SESSION['identifiant'];?></span> <a href="logout.php"><i class="fa fa-power-off"></i></a></p>
    
    <details class="liste-article">
    
        <summary class="msg-bvn-admin2">Liste de vos articles</summary>

        <form action="search.php" method="GET">
            <input type="text" name="query" id="query">
            <input type="submit" value="Search">
        </form>

        <div class="album py-5">
            
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <?php    
                foreach ($Produits as $produit):
                
            ?>
            
                <div class="col">
                <div class="card shadow-sm">
                    <img src="<?php echo $produit['image'];?>" alt="" editable>
                    <div class="card-body">
                    <p class="card-text" style="margin-top: 10px;font-size: 18px;"><b><?php echo $produit['nom'];?></b></p>
                    <p class="card-text" style="font-size: 14px;"><?php echo $produit['description'];?></p>

                    <form method="POST" action="">
                    <input type="hidden" name="id" value="<?php echo(strval($produit['id']));?>">
                    <input type="text" name="image" id="image" required value="<?php echo $produit['image'];?>">
                    <input type="text" name="nom" id="nom" required value="<?php echo $produit['nom'];?>">
                    <input type="number" name="prix" id="prix" required min="1" value="<?php echo $produit['prix'];?>">
                    <textarea name="description" id="description" cols="30" rows="10" required><?php echo $produit['description'];?></textarea>
                   
                    <div class="d-flex justify-content-between align-items-center">
                    
                        <div class="btn-group">
                           
                            <button class="btn btn-sm btn-outline-primary" type="submit" name="modifier" value="<?php echo(strval($produit['id']));?>">Enregistrer</button>
                            <?php 
                                if(isset($_POST['modifier'])) {
                                    try {
                                        editArticle($_POST['id'], $_POST['image'],$_POST['nom'],$_POST['prix'],$_POST['description']);
                                    }
                                    catch (Exception $e) {
                                        $e->getMessage();
                                    }
                                } else {
                                    $e = "La modification a échoué, veuillez réessayer.";
                                }
                            ?> </form>
                            <!--<input type="submit" class="btn btn-sm btn-outline-danger" value="Supprimer">-->
                            <button type="submit" name="supprimer" class="btn btn-sm btn-outline-danger" value="<?php echo(strval($produit['id']));?>">Supprimer</button>
                            <?php
                                if(isset($_POST['supprimer'])) {
                                    try {
                                        supprimer($_POST['supprimer']);
                                    }
                                    catch (Exception $e) {
                                        $e->getMessage();
                                    }
                                } else {
                                    $e = "La suppression a échoué, veuillez réessayer.";
                                }

                            ?>
                        </div>
                    
                        <small class="text-muted"><?php echo $produit['prix'];?>€</small>
                    </div>
                    </div>
                </div>
                </div>
            <?php
        endforeach;
        ?>
                </div>
            </div>
        </div>
            </div>
        </details>


        <details class="liste-article">
    
            <summary class="msg-bvn-admin2">Créer un nouvel article</summary>

            <form class="addArticle" action="" method="POST">
                <input type="text" name="nom" required placeholder="Titre de l'article">
                <input type="text" name="image" required placeholder="Lien de l'image">
                <input type="number" name="prix" required min="1" placeholder="Prix de l'article">
                <textarea name="description" id="" cols="30" rows="10" required placeholder="Description..."></textarea>
                <button type="submit" name="addArticle">Ajouter un article</button>

                <?php 

                    if(isset($_POST['addArticle'])) {
                        try {
                            ajouter($_POST['image'],$_POST['nom'],$_POST['prix'],$_POST['description']);
                        }
                        catch (Exception $e) {
                            $e->getMessage();
                        }
                    } else {
                        $e = "La création de l'article a échoué, veuillez réessayer.";
                    }

                ?>
            </form>
                
            
        </details>
        <div class="margin">

        </div>
        <script type="text/javascript">
             $(document).ready(function() {
                $("#PopUp").on("click", function() {
                    $(".modifierArticle").toggleClass("showing");
                });
        });
        </script>
</body>
</html>