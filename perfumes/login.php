<?php 
session_start();
include_once('assets/database.php');

$message = "";
// Try and connect using the info above.
$con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
if(isset($_POST['submit'])){ 
if ( mysqli_connect_errno() ) {
	// If there is an error with the connection, stop the script and display the error.
	$message = 'Failed to connect to MySQL: ' . mysqli_connect_error();
}

// Now we check if the data from the login form was submitted, isset() will check if the data exists.
elseif ( !isset($_POST['name'], $_POST['password']) ) {
	// Could not get the data that should have been sent.
	$message = 'Merci de remplir tous les champs!';
}

$input = $_POST['name']; // Supposons que la valeur provienne d'un formulaire POST

if(filter_var($input, FILTER_VALIDATE_EMAIL)) {
 $stmt = $con->prepare("SELECT id, email, password FROM users WHERE email = ?");
 $stmt->bind_param('s', $input);
 $stmt->execute();
 $stmt->store_result();

	if($stmt->num_rows > 0) {
	$stmt->bind_result($id, $email, $password);
	$stmt->fetch();
	// Account exists, now we verify the password.
	// Note: remember to use password_hash in your registration file to store the hashed passwords.
	if(password_verify($_POST['password'], $password)) {
		// Verification success! User has loggedin!
		// Create sessions so we know the user is logged in, they basically act like cookies but remember the data on the server.
		session_regenerate_id();
		$_SESSION['loggedin'] = TRUE;
		$_SESSION['name'] = $name;
		$_SESSION['id'] = $id;
		/*if (isset($_SESSION['previous_page'])) {
            $previous_page = $_SESSION['previous_page'];
            unset($_SESSION['previous_page']); // Supprimez l'URL stockée
            header('Location: ' . $previous_page);
            exit();
        } else {
            // Redirigez l'utilisateur vers une page par défaut si $_SESSION['previous_page'] n'est pas défini
            header('Location: index.php');
            exit();
        }*/
        header("Location: index.php");
    }
	 else {
		// Incorrect password
		$message = 'Mot-de-passe incorrect.';
	}

} else {
   $message = 'Adresse email incorrect.';
}
} elseif(!filter_var($input, FILTER_VALIDATE_EMAIL)) {
 $name = $input;
 $stmt = $con->prepare("SELECT id, name, password FROM users WHERE name = ?");
 $stmt->bind_param('s', $name);
 $stmt->execute();
 $stmt->store_result();

	if ($stmt->num_rows > 0) {
	$stmt->bind_result($id, $name, $password);
	$stmt->fetch();
	// Account exists, now we verify the password.
	// Note: remember to use password_hash in your registration file to store the hashed passwords.
	if (password_verify($_POST['password'], $password)) {
		// Verification success! User has loggedin!
		// Create sessions so we know the user is logged in, they basically act like cookies but remember the data on the server.
		session_regenerate_id();
		$_SESSION['loggedin'] = TRUE;
		$_SESSION['name'] = $name;
		$_SESSION['id'] = $id;
		/*if (isset($_SESSION['previous_page'])) {
            $previous_page = $_SESSION['previous_page'];
            unset($_SESSION['previous_page']); // Supprimez l'URL stockée
            header('Location: ' . $previous_page);
            exit();
        } else {
            // Redirigez l'utilisateur vers une page par défaut si $_SESSION['previous_page'] n'est pas défini
            header('Location: index.php');
            exit();
        }*/
        header("Location: index.php");
    }
	 else {
		// Incorrect password
		$message = 'Mot-de-passe incorrect.';
	}

} else {
   $message = 'Identifiant incorrect.';
}
}
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <?php include_once('assets/metas.php');?>
    <title>Connectez-vous à votre compte</title>
</head>
<body>
<?php include_once('assets/navbar.php');?>
<div class="container">
		<div class="login_admin">
			<h2>Connexion</h2>
			<form action="" method="POST">
				<div class="login_input">
					
					<input type="text" name="name" id="id" placeholder="Nom d'utilisateur">
				</div>
				<div class="login_input">
					
					<input type="password" name="password" id="mdp" placeholder="Mot-de-passe">
				</div>
				<div class="login_input">
					<button type="submit" name="submit">Se connecter</button>
				</div>
			</form>
				<?php echo $message;?>
		</div>
    
</div>
<?php include_once('assets/header-bottom.php');?>
<?php include_once('assets/footer.php');?>
<?php include_once('assets/scripts.php');?>
</body>
</html>