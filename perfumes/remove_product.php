<?php
session_start();
if(isset($_POST['product_id'])) {
    // Récupérez l'ID du produit posté
    $product_id = $_POST['product_id'];

    // Placez ici votre code de connexion à la base de données
    include_once('assets/database.php');

    // Supprimez le produit du panier de l'utilisateur
    $id_user_connected = $_SESSION['loggedin'];
    $delete_query = $access->prepare("DELETE FROM shopping_basket WHERE id_products = :product_id AND id_user_basket = :id_user_basket");
    $delete_query->bindParam(':product_id', $product_id, PDO::PARAM_INT);
    $delete_query->bindParam(':id_user_basket', $id_user_connected, PDO::PARAM_INT);
    $delete_query->execute();
    echo '<meta http-equiv="refresh" content="0">';
    // Envoyez une réponse (vous pouvez personnaliser la réponse en fonction de votre application)
} else {
    // Gérez l'erreur si l'ID du produit posté n'est pas valide
    echo "Erreur : ID du produit incorrect.";
}
?>