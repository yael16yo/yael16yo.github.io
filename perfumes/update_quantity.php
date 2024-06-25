<?php 
session_start();

if(isset($_POST['product_id']) && isset($_POST['quantity'])) {
    // Récupérez les données postées
    $product_id = $_POST['product_id'];
    $quantity = $_POST['quantity'];

    // Placez ici votre code de connexion à la base de données
    include_once('assets/database.php');

    // Assurez-vous que la quantité est un nombre entier positif
    $quantity = max(0, intval($quantity));

    // Mettez à jour la quantité du produit dans le panier de l'utilisateur
    $id_user_connected = $_SESSION['loggedin'];
    $update_query = $access->prepare("UPDATE shopping_basket SET quantity = :quantity WHERE id_products = :product_id AND id_user_basket = :id_user_basket");
    $update_query->bindParam(':quantity', $quantity, PDO::PARAM_INT);
    $update_query->bindParam(':product_id', $product_id, PDO::PARAM_INT);
    $update_query->bindParam(':id_user_basket', $id_user_connected, PDO::PARAM_INT);
    $update_query->execute();
    
    echo '<meta http-equiv="refresh" content="0">';
} else {
    // Gérez l'erreur si les données postées ne sont pas valides
    echo "Erreur : Données incorrectes.";
}
?>
