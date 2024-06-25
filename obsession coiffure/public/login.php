<?php
session_start();
// Change this to your connection info.
$DATABASE_HOST = 'localhost:8889';
$DATABASE_USER = 'root';
$DATABASE_PASS = '';
$DATABASE_NAME = 'obs-coiffure';
// Try and connect using the info above.
$con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
if ( mysqli_connect_errno() ) {
	// If there is an error with the connection, stop the script and display the error.
	$message = 'Failed to connect to MySQL: ' . mysqli_connect_error();
}

// Now we check if the data from the login form was submitted, isset() will check if the data exists.
elseif ( !isset($_POST['email'], $_POST['password']) ) {
	// Could not get the data that should have been sent.
	$message = 'Merci de remplir tous les champs!';
}

// Prepare our SQL, preparing the SQL statement will prevent SQL injection.
elseif ($stmt = $con->prepare('SELECT id, username, email, password FROM users WHERE email = ?')) {
	// Bind parameters (s = string, i = int, b = blob, etc), in our case the username is a string so we use "s"
	$stmt->bind_param('s', $_POST['email']);
	$stmt->execute();
	// Store the result so we can check if the account exists in the database.
	$stmt->store_result();

	if ($stmt->num_rows > 0) {
	$stmt->bind_result($id, $username, $email, $password);
	$stmt->fetch();
	// Account exists, now we verify the password.
	// Note: remember to use password_hash in your registration file to store the hashed passwords.
	if (password_verify($_POST['password'], $password)) {
		// Verification success! User has loggedin!
		// Create sessions so we know the user is logged in, they basically act like cookies but remember the data on the server.
		session_regenerate_id();
		$_SESSION['loggedin'] = TRUE;
		$_SESSION['name'] = $username;
		//$_SESSION['name'] = ;
		$_SESSION['avatar'] = $_POST['avatar'];
		$_SESSION['id'] = $id;
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
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Login - Obsession Coiffure</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css">
		<link rel="stylesheet" href="css2/style.css" type="text/css">
	</head>
	<body>
		<div class="login">
			<h1>Se connecter</h1>
			<form action="" method="post">
				<label for="username">
					<i class="fas fa-user"></i>
				</label>
				<input type="text" name="email" placeholder="Email" id="username" required>
				<label for="password">
					<i class="fas fa-lock"></i>
				</label>
				<input type="password" name="password" placeholder="Mot-de-passe" id="password" required>
				<?php 
					echo $message;
				?>
				<input type="submit" value="Login">
			</form>
		 </div>
		<div class="contain_notyet">
			<a class="text_notyet" href="signup.php">Vous n'êtes pas inscrit ? Inscrivez-vous</a>
		</div>
	</body>
</html>