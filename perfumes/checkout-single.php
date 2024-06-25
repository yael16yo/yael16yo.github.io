<?php 
    require_once('vendor/autoload.php');
    require_once('cko/secrets.php');
    //require_once('cko/single_item_payment.php');
    require_once('cko/checkout.js');
    require_once('assets/database.php');

    $id_product = $_POST['id_product'];
    $quantity = $_POST['quantity_modal'];
    $bd_bis = $access->prepare("SELECT * FROM products WHERE id = :id_product");
    $bd_bis->execute([':id_product' => $id_product]);
    $fetchProducts = $bd_bis->fetch(PDO::FETCH_ASSOC);

    $priceItem = $fetchProducts['article_price'];
    $description = strip_tags($fetchProducts['article_description']);
    $image = $fetchProducts['article_image'];
    $name = $fetchProducts['article_name'];
    
    $totalPrice = $priceItem * 100;

    \Stripe\Stripe::setApiKey($stripeSecretKey);

    $checkout_session = \Stripe\Checkout\Session::create([
        //"payment_method_types" => ['card', 'sepa_debit'],
        "mode" => "payment",
        /*"appareance" => [
            'theme' => 'night', 
            'labels' => 'floating'
        ],*/
        "success_url" => "http://localhost/cko/success.php",
        "cancel_url" => "http://localhost/cko/cancel.php",
        'consent_collection' => ['terms_of_service' => 'required'],
            'custom_text' => [
                'terms_of_service_acceptance' => [
                    'message' => 'J\'accepte les [Conditions d\'utilisation du service](https://example.com/terms)',
                ],
            ],
        "line_items" => [
            [
                "quantity" => $quantity,
                "price_data" => [
                    "currency" => "eur",
                    "unit_amount" => $totalPrice,
                    "product_data" => [
                        "name" => $name,
                        "images" => $image
                    ]
                ]
            ]
        ],
        "payment_intent_data" => [
                        "setup_future_usage" => "on_session"
                    ]
    ]);
    
    http_response_code(303);
    header("Location: " . $checkout_session->url);

?>