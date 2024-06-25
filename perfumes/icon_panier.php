<?php 
    //session_start();
$erreur = "";
    if(isset($_SESSION['loggedin'])) {
        $id_user_connected = $_SESSION['id'];
        $bd = $access->prepare("SELECT SUM(quantity) as total_quantity FROM shopping_basket WHERE id_user_basket = ?");
        $bd->execute([$id_user_connected]);
        $fetchNumber = $bd->fetch();
    
        if ($fetchNumber && $fetchNumber['total_quantity'] !== null) {
            $totalQuantity = $fetchNumber['total_quantity'];
        } else {
            $totalQuantity = 0; 
        }

        ?>

            <a class="icon_panier" href="basket.php">
                <!--<i class="fa fa-shopping-basket"></i>-->
                <img src="assets/img/icon-cart.png" alt="" width="20" height="20">
                <span class="number_panier"><?php echo $totalQuantity;?></span>
            </a>

        <?php

    } else {

        echo "";
    }
    
if(isset($_SESSION['loggedin'])) {
    if (isset($_POST['ajouter_panier'])) {
            $id_produit = $_POST['id_produit'];
            $id_user_connected = $_SESSION['loggedin'];
    
            // Vérifier si le produit existe déjà dans le panier de l'utilisateur
            $check_query = $access->prepare("SELECT * FROM shopping_basket WHERE id_products = :id_products AND id_user_basket = :id_user_basket");
            $check_query->bindParam(':id_products', $id_produit, PDO::PARAM_INT);
            $check_query->bindParam(':id_user_basket', $id_user_connected, PDO::PARAM_INT);
            $check_query->execute();
            $product_exists = $check_query->fetch(PDO::FETCH_ASSOC);
    
            if ($product_exists) {
                // Le produit existe déjà, augmentez la quantité de +1
                $update_query = $access->prepare("UPDATE shopping_basket SET quantity = quantity + 1 WHERE id_products = :id_products AND id_user_basket = :id_user_basket");
                $update_query->bindParam(':id_products', $id_produit, PDO::PARAM_INT);
                $update_query->bindParam(':id_user_basket', $id_user_connected, PDO::PARAM_INT);
                $update_query->execute();
            } else {
                // Le produit n'existe pas encore, insérez-le dans le panier
                $insert_query = $access->prepare("INSERT INTO shopping_basket (id_products, id_user_basket, quantity) VALUES (:id_products, :id_user_basket, 1)");
                $insert_query->bindParam(':id_products', $id_produit, PDO::PARAM_INT);
                $insert_query->bindParam(':id_user_basket', $id_user_connected, PDO::PARAM_INT);
                $insert_query->execute();
            }
            
            echo '<meta http-equiv="refresh" content="0">';
        }
    } else {
        if(isset($_POST['ajouter_panier'])) {
            $erreur = "Vous n'êtes pas connecté, connectez-vous pour ajouter un produit dans votre panier : <a href='login.php'>se connecter</a>";
        }
    }

?>
