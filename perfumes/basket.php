<?php 
session_start();
include_once('assets/database.php');
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <?php include_once('assets/metas.php');?>
    <title>Maison Brinkert - panier</title>
</head>
<body>
    <?php include_once('assets/navbar.php');?>
    <?php include_once('icon_panier.php');?>

    <main id="basket-wall">
        
            <?php 
                if(isset($_SESSION['loggedin'])) {
                    $id_user_connected = $_SESSION['loggedin'];
                        $bd_panier = $access->prepare("SELECT * FROM shopping_basket WHERE id_user_basket = $id_user_connected");
                        $bd_panier->execute([]);
                        $nbrProd = $bd_panier->rowCount();
                        if($nbrProd != 0) {
                    
            ?>

            <h1 class="panier-h4">Votre panier</h1>

            <div class="wrapper-of-container-panier">
            <div class="container-panier">
            <table>
                <!--<thead>
                    <tr>
                    <th scope="col">Nom du produit</th>
                    <th scope="col">Nombre de produit(s)</th>
                    <th scope="col"></th>
                    <th scope="col">Prix</th>
                    </tr>
                </thead>-->
                <tbody>
                    <?php 
                        
                        $fetchPanier = $bd_panier->fetchAll(PDO::FETCH_ASSOC);
                        $prixTotalPanier = 0;
                        foreach($fetchPanier as $fp) {
                            $id_produit = $fp['id_products'];
                            $bd_products = $access->prepare("SELECT * FROM products WHERE id = $id_produit");
                            $bd_products->execute([]);
                            $fetchProducts = $bd_products->fetchAll(PDO::FETCH_ASSOC);
                            foreach($fetchProducts as $fpr) {
                                $fprId = $fpr['id'];
                                $bd_panier2 = $access->prepare("SELECT * FROM shopping_basket WHERE id_products = $fprId");
                                $bd_panier2->execute();
                    ?>
                    <tr>
                    <th scope="row" class="article_name_panier"><?php echo $fpr['article_name'];?> (<?php echo $fpr['capacity'];?>ml, <?php echo $fpr['sexe'];?>)</th>
                    <td>
                    <form action="" method="POST">
                        <input type="number" name="quantity" id="product_<?php echo $fprId; ?>" value="<?php echo $fp['quantity']; ?>" placeholder="<?php echo $fp['quantity']; ?>" readonly>
                        <button type="button" onclick="updateQuantity(<?php echo $fprId; ?>, -1)"><i class="fa fa-minus"></i></button>
                        <button type="button" onclick="updateQuantity(<?php echo $fprId; ?>, 1)"><i class="fa fa-plus"></i></button>
                        <button type="button" onclick="removeProduct(<?php echo $fprId; ?>)"><i style="color:#940a0a;" class="fa fa-trash"></i></button>
                    </form>
                    </td>
                    <td><img width="60" src="<?php echo $fpr['article_image'];?>" alt=""></td>
                    <td>
                        <p class="total-produit-prix"><?php 
                        
                        $prixTotalProduit = $fp['quantity'] * $fpr['article_price'];
                        $prixTotalPanier += $prixTotalProduit;

                        echo "".$prixTotalProduit."€";
                        
                        ?></p>
                    </td>
                    </tr>
                    <?php 
                        }
                    }
                    ?>
                </tbody>
                </tr>
                <!--<tfoot>
                    <th></th>
                    <?php 
                        $sql = "SELECT SUM(quantity) as total_quantity FROM shopping_basket";
                        $resultat = $accessAdmin->query($sql);
                        
                        if ($resultat->num_rows > 0) {
                            // Récupérer la ligne de résultat
                            $row = $resultat->fetch_assoc();
                        
                            // Afficher la quantité totale
                            $quantiteTotale = $row['total_quantity'];
                        } else {
                            $quantiteTotale = "Aucun résultat trouvé.";
                        }
                    ?>
                    <th>Total : <?php 
                    echo $quantiteTotale;
                    if($quantiteTotale <= 1) {
                        echo " produit";
                    } else {
                        echo " produits";
                    }
                    ?></th>
                    <th></th>
                    <th>Prix total : <?php echo $prixTotalPanier;?>€</th>
                </tfoot>-->
                </table>
                
                <div class="paypal_paiement">
                    <h6>Procéder au paiement</h6>
                    <h5>
                    <?php 
                        echo "".$prixTotalPanier."<span>€ TTC</span>";
                    ?>
                    </h4>
                    <form action="checkout.php" method="POST">
                        <button id="checkout-button" class="button-for-last-creation-basket" type="submit" name="checkout-button">Acheter <i class="fa fa-credit-card"></i></button>
                    </form>
                    </div>        
                </div>
            </div>
            <?php 
                        } else {
                            echo "<p class='container-panier-p'>Aucun produit dans votre panier, visitez notre <a href='parfums.php'>boutique</a>.</p>";
                        }
                } else {
                    echo "<p class='container-panier-p'>Vous n'êtes pas connecté, connectez-vous <a href='login.php'>ici</a>.</p>";
                }
            ?>
        
    </main>

    <script>
function updateQuantity(productId, change) {
    const input = document.getElementById(`product_${productId}`);
    let quantity = parseInt(input.value) + change;

    if (quantity < 0) {
        quantity = 0;
    }

    input.value = quantity;

    // Utilisation d'AJAX pour mettre à jour la quantité dans la base de données
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'update_quantity.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Traitement des données de réponse (si nécessaire)
        }
    };
    xhr.send(`product_id=${productId}&quantity=${quantity}`);
    window.location.reload();
}

function removeProduct(productId) {
    const input = document.getElementById(`product_${productId}`);
    input.value = 0;

    // Utilisation d'AJAX pour supprimer le produit du panier dans la base de données
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'remove_product.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Traitement des données de réponse (si nécessaire)
        }
    };
    xhr.send(`product_id=${productId}`);
    window.location.reload();
}
</script>





    <?php include_once('assets/footer.php');?>
    <?php include('assets/header-bottom.php');?>
    <?php include_once('assets/scripts.php');?>
</body>
</html>