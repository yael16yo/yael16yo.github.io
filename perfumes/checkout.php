<?php 
    session_start();
    require_once('vendor/autoload.php');
    require_once('cko/secrets.php');
    require_once('cko/items_for_payment.php');
    require_once('cko/checkout.js');

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
        "line_items" => $lineItems,
        "payment_intent_data" => [
            "setup_future_usage" => "on_session"
        ]
    ]);
    
    http_response_code(303);
    header("Location: " . $checkout_session->url);
?>
