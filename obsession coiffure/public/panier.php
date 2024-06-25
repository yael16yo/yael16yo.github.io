<?php

session_start();

include_once "config/con_dbb.php";

$DATABASE_HOST = 'localhost:8889';
$DATABASE_USER = 'root';
$DATABASE_PASS = '';
$DATABASE_NAME = 'obs-coiffure';
$ddb = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
if (mysqli_connect_errno()) {
	exit('Failed to connect to MySQL: ' . mysqli_connect_error());
}
// We don't have the password or email info stored in sessions so instead we can get the results from the database.
$stmt = $ddb->prepare('SELECT id, username, password, email, avatar FROM users WHERE id = ?');
// In this case we can use the account ID to get the account info.
$stmt->bind_param('i', $_SESSION['id']);
$stmt->execute();
$stmt->bind_result($id_user, $username, $password, $email, $avatarLogo);
$stmt->fetch();
$stmt->close();
if(!isset($_SESSION['loggedin'])){
		$avatar = array('first' => 'content/perso1.png', 'second' => 'content/perso2.png', 'third' => 'content/perso3.png', 'forth' => 'content/perso4.png', 'fifth' => 'content/perso5.png', 'sixth' => 'content/perso6.png');
		$session_name = 'Invité';
	  }
    else 
    {
		
		$avatar = array($avatarLogo);
		$session_name = $username;
	  }


   if(isset($_GET['del'])){
    $id_del = $_GET['del'];
    unset($_SESSION['panier'][$id_del]);
   }
?>
<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="main.css">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
  <script src="js/custom.js" type="text/javascript"></script>
  <!-- Fontawesome -->
  <script src="https://kit.fontawesome.com/41340b7633.js" crossorigin="anonymous"></script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css%22%3E" />

  <!-- javascript responsive -->
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
  <title>Obsession Coiffure</title>
  <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous">
  </script>


<script src="https://www.paypal.com/sdk/js?client-id=AQUtLQLlyVVYZxUmMsU4e0U6IlpRynRwDybf6pGvR50OaP3XjwBqo2yqfxVOtqCqnrQK8jYwzG4ve6Gx&currency=EUR"></script>


  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>      
    <style>
      .panier { 
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1001%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(148%2c 193%2c 32%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c427.308C89.117%2c443.384%2c185.132%2c454.733%2c265.809%2c413.607C349.319%2c371.036%2c424.838%2c294.044%2c442.142%2c201.92C458.97%2c112.331%2c378.405%2c36.796%2c353.032%2c-50.758C332.208%2c-122.612%2c343.465%2c-200.581%2c306.627%2c-265.694C264.606%2c-339.969%2c214.474%2c-429.388%2c130.434%2c-444.217C45.612%2c-459.184%2c-18.127%2c-366.82%2c-99.033%2c-337.274C-172.678%2c-310.38%2c-266.985%2c-334.876%2c-321.984%2c-279.001C-377.232%2c-222.872%2c-369.9%2c-132.671%2c-377.58%2c-54.288C-384.932%2c20.75%2c-395.889%2c97.92%2c-365.685%2c167.003C-335.248%2c236.618%2c-272.478%2c283.608%2c-210.58%2c327.669C-146.009%2c373.633%2c-78.001%2c413.237%2c0%2c427.308' fill='%23769a1a'%3e%3c/path%3e%3cpath d='M1440 1040.343C1553.53 1034.366 1662.777 1107.845 1772.155 1076.8429999999998 1898.503 1041.031 2041.626 978.871 2089.004 856.39 2136.503 733.597 2044.9279999999999 603.937 2003.4160000000002 478.993 1969.117 375.76 1931.316 277.671 1867.465 189.60000000000002 1798.476 94.44200000000001 1735.026-30.011999999999944 1619.339-50.77099999999996 1503.17-71.61599999999999 1415.427 57.511000000000024 1301.416 88.02699999999999 1183.077 119.702 1043.305 58.579999999999984 943.8050000000001 130.04399999999998 840.483 204.253 785.368 337.74 777.003 464.675 768.872 588.064 846.195 695.254 899.196 806.977 951.376 916.97 972.804 1064.804 1084.583 1113.039 1197.907 1161.94 1316.746 1046.8310000000001 1440 1040.343' fill='%23addd31'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1001'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 100vh;
        margin: 0;
        }

    .bd-placeholder-img {
      font-size: 1.125rem;
      text-anchor: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }

    @media (min-width: 768px) {
      .bd-placeholder-img-lg {
        font-size: 3.5rem;
      }
    }

    .b-example-divider {
      height: 3rem;
      background-color: rgba(0, 0, 0, .1);
      border: solid rgba(0, 0, 0, .15);
      border-width: 1px 0;
      box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
    }

    .b-example-vr {
      flex-shrink: 0;
      width: 1.5rem;
      height: 100vh;
    }

    .bi {
      vertical-align: -.125em;
      fill: currentColor;
    }

    .nav-scroller {
      position: relative;
      z-index: 2;
      height: 2.75rem;
      overflow-y: hidden;
    }

    .nav-scroller .nav {
      display: flex;
      flex-wrap: nowrap;
      padding-bottom: 1rem;
      margin-top: -1px;
      overflow-x: auto;
      text-align: center;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
    }
  </style>
</head>

<body id="top">
  <nav class="navbar navbar-expand-xl bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="content/logo-v2.png" alt="" height="40" width="40"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
        aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#"><i class="fa fa-house"></i> Accueil</a>
          </li>
          <li class="nav-item">
            <a href="index.php#obsession-coiffure" class="nav-link underline"><i class="fa fa-location-dot"></i> Obsession
              coiffure</a>
          </li>
          <li class="nav-item">
            <a class="nav-link underline" href="index.php#nouveauté"><i class="fa fa-circle-plus"></i> Nouveautés</a>
          </li>
          <li class="nav-item">
            <a class="nav-link underline" href="clickandcollect.php"><i class="fa fa-shop"></i> Boutique</a>
          </li>
          <li class="nav-item">
            <a href="reservation.php" class="nav-link underline"><i class="fa fa-calendar"></i> Prendre RDV</a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link underline"><i class="fa fa-address-card"></i> Contact</a>
          </li>
        </ul>
        <a href="#" class="nav-link dropdown-toggle float-right" style="padding-bottom:5px;" role="button"
          data-bs-toggle="dropdown" aria-expanded="false">
          <img class="avatar" src="<?php echo $avatar[array_rand($avatar)];?>"><span><?php echo $session_name;?></span>
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item active-drop" href="profile.php"><i class="fa fa-user"></i> Profil</a></li>
          <li><a class="dropdown-item" href="#"><i class="fa fa-panier-shopping"></i> Panier</a></li>
          <?php 
            if(!isset($_SESSION['loggedin'])) {
              echo '';
            } else {
              echo '<li><a class="dropdown-item" href="mes-commandes.php"><i class="fa fa-credit-card"></i> Mes commandes</a></li>';
              echo '<li><a class="dropdown-item" href="mes-rdv.php"><i class="fa fa-calendar"></i> Mes rendez-vous</a></li>';
            }
          ?>
          <li>
            <hr class="dropdown-divider">
          </li>
          <?php
            if(!isset($_SESSION['loggedin'])) {
                echo '<li><a class="dropdown-item" href="login.php"><i class="fa fa-right-to-bracket"></i> Se connecter</a></li>';
                echo '<li><a class="dropdown-item" href="signup.php"><i class="fa fa-pencil"></i> S\'inscrire</a></li>';
              } else {
                echo '<li><a class="dropdown-item" href="logout.php"><i class="fa fa-arrow-right-from-bracket"></i> Se déconnecter</a></li>';
              }
            ?>
        </ul>
      </div>
    </div>
  </nav>
  <main>
    
  <body class="panier">
  <a href="clickandcollect.php" class="link2">Boutique</a>
    <section>
        <table>
            <tr>
                <th></th>
                <th>Nom</th>
                <th>Prix</th>
                <th>Quantité</th>
                <th>Action</th>
            </tr>
            <?php
              $total = 0 ;

              $ids = array_keys($_SESSION['panier']);
              
              if(empty($ids)){
                echo "<p style='color:white;font-family:'Poppins';'>Votre panier est vide</p>";
              }else {
                
                $products = mysqli_query($con, "SELECT * FROM produits WHERE id IN (".implode(',', $ids).")");

                foreach($products as $product):
                    $total = $total + $product['prix'] * $_SESSION['panier'][$product['id']];
                ?>
                <tr>
                    <td><img src="<?php echo $product['image'];?>"></td>
                    <td><?php echo $product['nom'];?></td>
                    <td><?php echo $product['prix'];?>€</td>
                    <td><?php echo $_SESSION['panier'][$product['id']];?></td>
                    <td><a href="panier.php?del=<?php echo(strval($product['id']))?>"><img src="content/delete.png"></a></td>
                </tr>

            <?php /*endforeach;
            }*/ ?>

            <tr class="total">
                <th>Total : <?php echo $total;?>€</th>
                
            </tr>
            

 
        </table>
        
        <?php 
        
        // if($_SESSION['panier][$product['id]] > 0) {
          if($total > 0) {
            $sku = $product['id'];
            $quantity = $_SESSION["panier"][$product["id"]];

            $message = '
            <div id="paypal-button-container"></div>
              <script>
                paypal.Buttons({
                  createOrder() {
                    return fetch("/my-server/create-paypal-order", {
                      method: "POST",
                      headers: {
                          "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        cart: [
                          {
                            sku: "<?php echo json_encode($sku);?>",
                            quantity: "<?php echo json_encode($quantity);?>",
                          },
                        ]
                      })
                    })
                    .then((response) => response.json())
                    .then((order) => order.id);
                  }
                })
                paypal.Buttons({
                  style: {
                  layout: "vertical",
                  color:  "silver",
                  shape:  "pill",
                  label:  "paypal"
                },
                
                onApprove(data) {
                  return fetch("/my-server/capture-paypal-order", {
                    method: "POST",
                    body: JSON.stringify({
                      orderID: data.orderID
                    })
                  })
                  .then((response) => response.json())
                  .then((details) => {
                    alert("Transaction completed by " + details.payer.name.given_name);
                  });
                }
              
              })
              .render("#paypal-button-container");
              </script>';
          } else {
            $message = "";
          }

        ?>
        
        <?php echo $message;?>
        <!-- <a class="Commander-btn" href="payCommande.php">Commander</a> -->
    </section><?php endforeach;
            } ?>
   </main>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
  </body>
</html>

