<?php 
session_start();

/*
$DATABASE_HOST = 'localhost:8889';
$DATABASE_USER = 'root';
$DATABASE_PASS = '';
$DATABASE_NAME = 'tes';
*/


$DATABASE_HOST = '185.98.131.176';
$DATABASE_USER = 'yaelo2126428';
$DATABASE_PASS = 'Pauline1406*';
$DATABASE_NAME = 'yaelo2126428_2rtl8l';


// Try and connect using the info above.

require_once("assets/database.php");

$con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
$message = "";
if(isset($_POST['submit'])){ 
if ( mysqli_connect_errno() ) {
	// If there is an error with the connection, stop the script and display the error.
	$message = 'Failed to connect to MySQL: ' . mysqli_connect_error();
}

// Now we check if the data from the login form was submitted, isset() will check if the data exists.
elseif ( !isset($_POST['admin_name'], $_POST['admin_password']) ) {
	// Could not get the data that should have been sent.
	$message = 'Merci de remplir tous les champs!';
}

// Prepare our SQL, preparing the SQL statement will prevent SQL injection.
elseif ($stmt = $con->prepare('SELECT id, nom, password, avatar FROM admin WHERE nom = ?')) {
	// Bind parameters (s = string, i = int, b = blob, etc), in our case the username is a string so we use "s"
    $stmt->bind_param('s', $_POST['admin_name']);
	$stmt->execute();
	// Store the result so we can check if the account exists in the database.
	$stmt->store_result();

	if ($stmt->num_rows > 0) {
	$stmt->bind_result($id, $admin_name, $admin_password, $avatar);
	$stmt->fetch();
	// Account exists, now we verify the password.
	// Note: remember to use password_hash in your registration file to store the hashed passwords.
	if (password_verify($_POST['admin_password'], $admin_password)) {
		// Verification success! User has loggedin!
		// Create sessions so we know the user is logged in, they basically act like cookies but remember the data on the server.
		session_regenerate_id();
		$_SESSION['loggedin_admin'] = TRUE;
		$_SESSION['name'] = $admin_name;
		$_SESSION['id'] = $id;
        $_SESSION['avatar'] = $avatar;

		header('Location: index.php');
	} else {
		// Incorrect password
		$message = 'Mot-de-passe incorrect.';
	}
} else {
	// Incorrect username
	$message = 'Nom d\'utilisateur incorrect.';
}


	$stmt->close();
}
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="assets/style.css">
    <title>Admin Coeur de Vaurien</title>
</head>
<body style="background-color:white !important;" class="max-height">
<div class="container-login">
    <form action="" method="POST">
		<div class="login_admin">
		<h2>- CONNEXION -</h2>
		<label for="id">Identifiant</label>
        <input type="text" name="admin_name" id="id" placeholder="John">
		<label for="mdp">Mot-de-passe</label>
        <input type="password" name="admin_password" id="mdp" placeholder="mot-de-passe">
        <button type="submit" name="submit">Se connecter</button>
		<p style="color:white;"><?php echo $message;?></p>
		</div>
    </form>
</div>
</body>
</html>