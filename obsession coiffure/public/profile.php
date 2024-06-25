<?php
// We need to use sessions, so you should always start sessions using the below code.
session_start();

// If the user is not logged in redirect to the login page...
if (!isset($_SESSION['loggedin'])) {
	header('Location: login.php');
	exit;
}
$DATABASE_HOST = 'localhost:8889';
$DATABASE_USER = 'root';
$DATABASE_PASS = '';
$DATABASE_NAME = 'obs-coiffure';
$con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
if (mysqli_connect_errno()) {
	exit('Failed to connect to MySQL: ' . mysqli_connect_error());
}
// We don't have the password or email info stored in sessions so instead we can get the results from the database.
$stmt = $con->prepare('SELECT id, username, password, email, avatar FROM users WHERE id = ?');
// In this case we can use the account ID to get the account info.
$stmt->bind_param('i', $_SESSION['id']);
$stmt->execute();
$stmt->bind_result($id, $username, $password, $email, $avatarLogo);
$stmt->fetch();
$stmt->close();
if(!isset($_SESSION['loggedin'])){
		$avatar = array('first' => 'content/perso1.png', 'second' => 'content/perso2.png', 'third' => 'content/perso3.png', 'forth' => 'content/perso4.png', 'fifth' => 'content/perso5.png', 'sixth' => 'content/perso6.png');
		$session_name = 'Invité';
	  } /*elseif($stmt = $con->prepare('SELECT id, avatar FROM users WHERE avatar = NULL')) {
		$stmt->execute();
		$avatar = array('first' => 'content/avatar-1.png', 'second' => 'content/avatar-2.png', 'third' => 'content/avatar-3.png', 'forth' => 'content/avatar-4.png');
		$session_name = $username;
	  }*/ else {
		//$session_name = $_SESSION['avatar'];
		$avatar = array($avatarLogo);
		$session_name = $username;
	  }
?>
<?php
$message = '';
	
	function changeUsername($username) 
	{
		if(require('config/connexion.php')) 
		{
			if($req = $accessAdmin->prepare("SELECT id FROM users WHERE username = ?")) 
			{
				$req->bind_param('s', $_POST['username']);
				$req->execute();
				$req->store_result();

			if ($req->num_rows > 0) {
				$message = 'Ce nom d\'utilisateur existe déjà, veuillez en choisir un autre.';

			}
			elseif(require('config/connexion.php')) 
			{
				
				$username = $_POST['username'];
				$id = $_POST['id'];
				$req = $access->prepare("UPDATE users SET `id` = '$id', `username` = '$username' WHERE id = '$id'");
				$req->execute();
				$req->closeCursor();
				echo "<meta http-equiv='refresh' content='0'>";
			}
		}
	}
}

function changeEmail($email) 
	{
		if(require('config/connexion.php')) 
		{
			if($req = $accessAdmin->prepare("SELECT id FROM users WHERE email = ?")) 
			{
				$req->bind_param('s', $_POST['email']);
				$req->execute();
				$req->store_result();

			if ($req->num_rows > 0) {
				$message = 'Ce nom d\'utilisateur existe déjà, veuillez en choisir un autre.';

			}
			elseif(require('config/connexion.php')) 
			{
				
				$email = $_POST['email'];
				$id = $_POST['id'];
				$req = $access->prepare("UPDATE users SET `id` = '$id', `email` = '$email' WHERE id = '$id'");
				$req->execute();
				$req->closeCursor();
				echo "<meta http-equiv='refresh' content='0'>";
			}
		}
	}
}

/*function changePassword($password) 
{
require('config/connexion.php');
if($req = $accessAdmin->prepare('SELECT id, password FROM users WHERE password = ?')) {
	$req->bind_param('s', $_POST['password']);
	$req->execute();
	$req->store_result();

}

elseif(strlen($_POST['password']) > 20 || strlen($_POST['password']) < 5) {
	$message = 'Votre mot-de-passe doit compter 5 à 20 caractères.';
}

elseif($_POST['password-conf1'] != $_POST['password-conf2'])
{
	$message = "Les mot-de-passes ne sont pas les mêmes.";
}
elseif(require('config/connexion.php') AND $req->num_rows > 0) {
				$password = password_hash($_POST['password'], PASSWORD_DEFAULT);
				$id = $_POST['id'];
				$req = $access->prepare("UPDATE users SET `id` = '$id', `password` = '$password' WHERE id = '$id'");
				$req->execute();
				$req->closeCursor();
				echo "<meta http-equiv='refresh' content='0'>";
			}
		}*/
	?>

<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
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
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <style>
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
          <li><a class="dropdown-item" href="panier.php"><i class="fa fa-basket-shopping"></i> Panier</a></li>
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
	<body class="loggedin">
		<div class="content">
			<h2>Profil</h2>
			<div>
				<p>Voici les détails concernant votre compte:</p>
				<table class="table-profil">
					<tr>
						<td>Nom d'utilisateur:</td>
						<td>
							<?=$username?></td>
							<td><button class="float-right-button" type="submit" data-bs-toggle="modal" id="buttonUsername" data-bs-target="#changeUsername">Changer</a></td>
								
							
															
							
						</td><div class="modal fade" id="changeUsername" tabindex="1" aria-labelledby="exampleModalLabel" aria-hidden="true">
									<div class="modal-dialog">
										<div class="modal-content">
										<div class="modal-header">
											<h1 class="modal-title fs-5" id="exampleModalLabel">Changer votre nom d'utilisateur</h1>
											<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
										</div>
										<div class="modal-body">
													<form action="" method="POST">
													<input type="hidden" name="id" value="<?php echo(strval($id));?>">
													<input type="text" name="username" value="<?=$username?>">
													
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
											<button type="submit" name="changeUsername" class="btn btn-primary" value="<?php echo(strval($id));?>">Sauvegarder</button>
														<?php
															if(isset($_POST['changeUsername'])) {
																try {
																	changeUsername($_POST['id'], $_POST['username']);
																}
																catch (Exception $message) {
																	$message->getMessage();
																}
															}
														?>
													</form>
												</div>
											</div>
										</div>
									</div>
						
					</tr>
					<tr>
						<td>Email:</td>
						<td>
						<?=$email?></td>
							<td><button class="float-right-button" type="submit" data-bs-toggle="modal" id="buttonEmail" data-bs-target="#changeEmail">Changer</a></td>
						<div class="modal fade" id="changeEmail" tabindex="1" aria-labelledby="exampleModalLabel" aria-hidden="true">
									<div class="modal-dialog">
										<div class="modal-content">
										<div class="modal-header">
											<h1 class="modal-title fs-5" id="exampleModalLabel">Changer votre e-mail</h1>
											<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
										</div>
										<div class="modal-body">
													<form action="" method="POST">
													<input type="hidden" name="id" value="<?php echo(strval($id));?>">
													<input type="email" name="email" value="<?=$email?>">
													
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
											<button type="submit" name="changeEmail" class="btn btn-primary" value="<?php echo(strval($id));?>">Sauvegarder</button>
														<?php
															if(isset($_POST['changeEmail'])) {
																try {
																	changeEmail($_POST['id'], $_POST['username']);
																}
																catch (Exception $message) {
																	$message->getMessage();
																}
															}
														?>
													</form>
												</div>
											</div>
										</div>
									</div>
					</tr>
					<tr>
						<td>Mot-de-passe:</td>
						<td>*****</td>
						<td><button class="float-right-button" type="submit" data-bs-toggle="modal" id="buttonPassword" data-bs-target="#changePassword">Changer</a></td>
						<div class="modal fade" id="changePassword" tabindex="1" aria-labelledby="exampleModalLabel" aria-hidden="true">
									<div class="modal-dialog">
										<div class="modal-content">
										<div class="modal-header">
											<h1 class="modal-title fs-5" id="exampleModalLabel">Changer votre mot-de-passe</h1>
											<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
										</div>
										<div class="modal-body">
													<form action="change-password.php" method="POST">
													
														<label for="username">Votre nom d'utilisateur</label><br>
														<input type="text" name="username" placeholder="Nom d'utilisateur"><br><br>

														<label for="password">Votre mot-de-passe actuel</label><br>
														<input type="password" name="password" placeholder="Mot-de-passe actuel"><br><br>

														<label for="password-conf1">Nouveau mot-de-passe</label><br>
														<input type="password" name="password-conf1" placeholder="Nouveau mot-de-passe"><br><br>
														<input type="password" name="password-conf2" placeholder="Confirmation Nouveau mot-de-passe">
													
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
											<button type="submit" name="submit" class="btn btn-primary">Sauvegarder</button>
														<?php /*
															if(isset($_POST['changePassword'])) {
																try {
																	changePassword($_POST['id'], $_POST['password']);
																}
																catch (Exception $message) {
																	$message->getMessage();
																}
															}*/
														?>
													</form>
												</div>
											</div>
										</div>
									</div>
					</tr>
					<tr>
						<td>Votre photo de profil:</td>
						<td>
							<div class="logo-profile-table" style="background-image: url('<?php echo $avatarLogo;?>');"></div></td>
							<td><button class="float-right-button" type="submit" data-bs-toggle="modal" id="buttonAvatar" data-bs-target="#changeAvatar">Changer</a></td>
						<div class="modal fade" id="changeAvatar" tabindex="1" aria-labelledby="exampleModalLabel" aria-hidden="true">
									<div class="modal-dialog">
										<div class="modal-content">
										<div class="modal-header">
											<h1 class="modal-title fs-5" id="exampleModalLabel">Changer votre avatar</h1>
											<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
										</div>
										<div class="modal-body">
													<form action="upload.php" method="POST" enctype="multipart/form-data">
														<!--<div class="avatar-in-box" style="background-image: url('<?php echo $avatarLogo;?>');"></div>-->
														<input type="hidden" name="id" value="<?php echo(strval($id));?>">
													
														
														<input type="file" name="file">
													
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
											
											<button type="submit" name="changeAvatar" class="btn btn-primary" value="Upload">Sauvegarder</button>
													</form>
												</div>
											</div>
										</div>
									</div>
						</td>
					</tr>
				</table><?php echo $message;?>
				<?php //echo $statusMsg;?>
			</div>
		</div>
		<script src="https://kit.fontawesome.com/c18eac90ea.js" crossorigin="anonymous"></script>
		<script type="text/javascript">
			const changeUsername = document.getElementById('changeUsername')
			const buttonUsername = document.getElementById('buttonUsername')

			myModal.addEventListener('shown.bs.modal', () => {
			myInput.focus()
			})
		</script>
	</body>
</html>