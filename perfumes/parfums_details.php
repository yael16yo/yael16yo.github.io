<?php session_start();?>

<!DOCTYPE html>
<html lang="en">
<head>
    <?php include_once('assets/metas.php');?>
    <title>Perfumes</title>
</head>
<body>
    <?php include_once('assets/database.php');?>
    <?php include_once('assets/navbar.php');?>
    <?php include_once('icon_panier.php');?>
    <main id="details_p_main">
            <div class="all-side">
                <?php
                
                if(isset($_GET['product_id'])) {
                    $product_id = $_GET['product_id'];    

                    $db = $access->prepare("SELECT * FROM products WHERE id = $product_id");
                    $db->execute([]);
                    $fetch = $db->fetch();

                ?>
                <div class="wrapper_details_perfume">
                    <div class="details_perfume_column left_col">
                        <img src="<?php echo $fetch['article_image'];?>" alt="">
                            <form action="" method="POST">
                            <input type="hidden" name="id_produit" value="<?php echo $fetch['id'];?>">
                            <div class="ajouter-panier">
                                    <button type="submit" class="button-for-last-creation-basket" name="ajouter_panier">Ajouter au panier <i class="fa fa-shopping-bag"></i></button>
                            </div>
                            </form>
                            <form action="checkout-single.php" method="POST">
                            <div class="ajouter-panier">
                                    <button name="payment" class="button-for-last-creation-basket" type="submit">Acheter le produit <i class="fa fa-credit-card"></i></button>
                            </div>
                            <div class="quantity_to_buy">
                                    <input type="hidden" name="id_product" value="<?php echo $fetch['id'];?>">
                                    <label for="quantity_product" class="label_last_creation_qty">Quantité:</label>
                                    <input type="number" id="quantity_product" class="quantity_last_creation" name="quantity_modal" value="1" min="1" max="9" step="1" required>
                            </div>
                            </form>
                            <?php
                        /*$priceBeforeReducRight = $fetch['article_price'] * 20 / 100;
                        $reducted = $fetch['article_price'] + $priceBeforeReducRight;
                        $roundedPriceR = round($reducted, 1);*/
                        $priceBeforeReduction = $fetch['article_price'] + 15;
                        ?>
                        <h3 class="price-box-article-right"><s class="other_color" style="font-size:0.9rem;"><?php echo $priceBeforeReduction;?>€</s> <?php echo $fetch['article_price'];?>€ <span style="font-size:0.7rem;"> TTC</span></h3>
                        <p class="capacity-box-article">Capacité : <span><?php echo $fetch['capacity'];?>ml</span></p>
                    </div>
                    <div class="details_perfume_column right_col">
                    <div class="desc_dynamic" onclick="handleClickViewMore(this)">
                        <p><?php echo $fetch['article_description'];?></p>
                        <span class="show_more_or_less_text" id="show_more_or_less_text"></span>
                    </div>
                    <div class="ingredients_and_price">
                        <h6>Ingrédients :</h6>
                        <span>Alcohol, Water, Sweet almond oil,
                            <?php 
                            $id_prd = $fetch['id'];
                            $db_items = $access->prepare("SELECT * FROM items WHERE id_of_products = $id_prd");
                            $db_items->execute([]);
                            $fetchItems = $db_items->fetchAll(PDO::FETCH_ASSOC);
                            foreach($fetchItems as $fi) {
                            ?>
                             <?php echo $fi['name'];?>,
                            <?php 
                            }
                            ?> Tocophérol (Vitamine E), Polysorbate 20, Phénoxyéthanol</span>
                        </div>
                    </div>
                </div>
                <aside class="wrapper_aside_details_perfume">
                            <p>aoviba</p>
                </aside>
                </div>

                <?php 

                } else {
                    echo "";
                }
                ?>
                
            </div>
    </main>
    <?php include_once('assets/footer.php');?>
    <?php include_once('assets/header-bottom.php');?>
    <?php include_once('assets/scripts.php');?>
</body>
</html>