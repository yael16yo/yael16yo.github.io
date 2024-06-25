<?php
include_once('assets/database.php');

$sexe = isset($_GET['sexe']) ? $_GET['sexe'] : '';
$priceRange = isset($_GET['priceRange']) ? $_GET['priceRange'] : 200;
$sale = isset($_GET['sale']) ? $_GET['sale'] : 0;

$sql = "SELECT * FROM products WHERE 1=1";

if (!empty($sexe)) {
    $sql .= " AND sexe = :sexe";
}
if($priceRange <= 200) {
    $sql .= " AND article_price <= :priceRange";
}
if($sale == 1) {
        $sql .= " AND reduc = :reduc";
}

$query = $access->prepare($sql);

if (!empty($sexe)) {
$query->bindParam(':sexe', $sexe);
}
$query->bindParam(':priceRange', $priceRange, PDO::PARAM_INT);
if (!empty($sale)) {
$query->bindParam(':reduc', $sale, PDO::PARAM_INT);
}
$query->execute();
$fetchArticles = $query->fetchAll(PDO::FETCH_ASSOC);

if ($fetchArticles) {
    foreach ($fetchArticles as $fa) {
        $date_piece = explode(' ', $fa['article_date_posted']);
        $date = explode('-', $date_piece[0]);
        $time = explode(':', $date_piece[1]);
        $finalDate = "Sortie le " . $date[2] . "/" . $date[1] . "/" . $date[0] . "";    
?>
        <a href="parfums_details.php?product_id=<?php echo $fa['id']; ?>" class="item_parfum_card">
            <form action="" method="POST">
                <input type="hidden" name="id_produit" value="<?php echo $fa['id']; ?>">
                <img class="item_parfum_card_img" src="<?php echo $fa['article_image']; ?>" alt="<?php echo $fa['article_image']; ?>">

                <p class="title_item_card">
                    <?php echo $fa['article_name']; ?> <span><?php echo $fa['sexe']; ?></span>
                </p>
                <p class="description_item_card">
                    <?php echo substr($fa['article_description'], 0, 80); ?>...
                </p>
                <p class="price_item_card">
                    <?php echo $fa['article_price']; ?>€
                    <?php
                    if($fa['article_price_reduction'] != NULL) {
                        ?>
                    <span><s><?php echo $fa['article_price_reduction']; ?>€</s></span>
                    <?php
                        } else {
                            echo "";
                        }
                    ?>
                </p>
                <div class="buttons_item_bottom">
                    <button type="submit" name="ajouter_panier" class="button_basket_card_parfum">Ajouter au panier <i class="fa fa-bag-shopping"></i></button>
                    <button type="button" class="button_basket_card_parfum" id="acheter-last-creation-<?php echo $fa['id']; ?>">Acheter le produit <i class="fa fa-credit-card"></i></button>
                </div>
                <script>
                    let button_basket_<?php echo $fa['id']; ?> = document.getElementById("acheter-last-creation-<?php echo $fa['id']; ?>");
                    button_basket_<?php echo $fa['id']; ?>.addEventListener("click", function() {
                        window.location.href = "parfums_details.php?product_id=<?php echo $fa['id']; ?>";
                    });
                </script>
            </form>
        </a>
<?php 
    }
} else {
    echo "<p>Aucun produit ne correspond aux critères sélectionnés.</p>";
}
?>