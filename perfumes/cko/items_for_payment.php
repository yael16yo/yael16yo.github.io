<?php 
    require_once('assets/database.php');
    $id_user = $_SESSION['loggedin'];
    $bd = $access->prepare("SELECT * FROM shopping_basket WHERE id_user_basket = :id_user");
    $bd->execute([":id_user" => $id_user]);
    $fetchBasket = $bd->fetchAll(PDO::FETCH_ASSOC);

    $lineItems = [];

    foreach($fetchBasket as $fb) {
        $id_product = $fb['id_products'];
        $quantity = $fb['quantity'];

        $bd_bis = $access->prepare("SELECT * FROM products WHERE id = :id_product");
        $bd_bis->execute([':id_product' => $id_product]);
        $fetchProducts = $bd_bis->fetch(PDO::FETCH_ASSOC);

        $priceItem = $fetchProducts['article_price'] * 100; // Stripe expects the amount in cents
        $name = $fetchProducts['article_name'];
        $description = strip_tags($fetchProducts['article_description']);
        $image = $fetchProducts['article_image'];
        $imageForStripe = explode('/', $image);

        $lineItems[] = [
            "quantity" => $quantity,
            "price_data" => [
                "currency" => "eur",
                "unit_amount" => $priceItem,
                "product_data" => [
                    "name" => $name,
                    "images" => [
                        "https://github.com/yael16yo/bank_image_maison_brinkert/blob/main/".$imageForStripe[2]."?raw=true"
                    ]
                ]
            ]
        ];
    }
?>