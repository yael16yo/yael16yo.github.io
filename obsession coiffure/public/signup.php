<?php
// Change this to your connection info.
$DATABASE_HOST = 'localhost:8889';
$DATABASE_USER = 'root';
$DATABASE_PASS = '';
$DATABASE_NAME = 'obs-coiffure';

$message = '';

// Try and connect using the info above.
$con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
if (mysqli_connect_errno()) {
	// If there is an error with the connection, stop the script and display the error.
	$message = 'Failed to connect to MySQL: ' . mysqli_connect_error();
	
}

// Now we check if the data was submitted, isset() function will check if the data exists.
elseif (!isset($_POST['username'], $_POST['password'], $_POST['email'])) {
	// Could not get the data that should have been sent.
	$message = 'Merci de bien remplir le formulaire!';
	
}
// Make sure the submitted registration values are not empty.
elseif (empty($_POST['username']) || empty($_POST['password']) || empty($_POST['email'])) {
	// One or more values are empty.
	$message = 'Veuillez compléter le formulaire';
	
}

elseif (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
	$message = 'Cet email n\'est pas valide.';
	
}

elseif (preg_match('/[A-Za-z0-9]+/', $_POST['username']) == 0) {
    $message = 'Ce nom d\'utilisateur n\'est pas valide.';
	
}

elseif (strlen($_POST['password']) > 20 || strlen($_POST['password']) < 5) {
	$message = 'Votre mot-de-passe doit compter 5 à 20 caractères.';
	
}

// We need to check if the account with that username exists.
elseif ($stmt = $con->prepare('SELECT id, password FROM users WHERE username = ?')) {
	// Bind parameters (s = string, i = int, b = blob, etc), hash the password using the PHP password_hash function.
	$stmt->bind_param('s', $_POST['username']);
	$stmt->execute();
	$stmt->store_result();
	// Store the result so we can check if the account exists in the database.
	if ($stmt->num_rows > 0) {
		// Username already exists
		$message = 'Ce nom d\'utilisateur existe déjà, veuillez en choisir un autre.';
	} elseif($stmt = $con->prepare('SELECT id, email FROM users WHERE email = ?')) {
			// Bind parameters (s = string, i = int, b = blob, etc), hash the password using the PHP password_hash function.
			$stmt->bind_param('s', $_POST['email']);
			$stmt->execute();
			$stmt->store_result();
			// Store the result so we can check if the account exists in the database.
			if ($stmt->num_rows > 0) {
				// Username already exists
				$message = 'Cet email existe déjà, veuillez en choisir une autre.';
	} else {
		

// Username doesnt exists, insert new account
if ($stmt = $con->prepare('INSERT INTO users (username, password, email, avatar) VALUES (?, ?, ?, "content/avatar-default.png")')) {
	// We do not want to expose passwords in our database, so hash the password and use password_verify when a user logs in.
	$password = password_hash($_POST['password'], PASSWORD_DEFAULT);
	$stmt->bind_param('sss', $_POST['username'], $password, $_POST['email']);
	$stmt->execute();
	$message = 'Bravo, vous pouvez maintenant vous connecter <a href="login.php" style="margin-left:4.5px;">ici</a>!';
} else {
	// Something is wrong with the sql statement, check to make sure accounts table exists with all 3 fields.
	$message = 'Could not prepare statement!';
}
	}
	$stmt->close();
} else {
	// Something is wrong with the sql statement, check to make sure accounts table exists with all 3 fields.
	$message = 'Could not prepare statement!';
}
}

$con->close();

?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Register - Obsession Coiffure</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css">
		<link rel="stylesheet" href="css2/style.css" type="text/css">	
	</head>
	<body>
		<div class="register">
			<h1>S'inscrire</h1>
			<form action="" method="post" autocomplete="on">
				<label for="username">
					<i class="fas fa-user"></i>
				</label>
				<input type="text" name="username" placeholder="Nom d'utilisateur" id="username" required>
				<label for="password">
					<i class="fas fa-lock"></i>
				</label>
				<input type="password" name="password" placeholder="Mot-de-passe" id="password" required>
				<label for="email">
					<i class="fas fa-envelope"></i>
				</label>
				<input type="email" name="email" placeholder="E-mail" id="email" required>
				<?php
					echo $message;
				?>
				<input type="submit" value="Register">
				
			</form>
		</div>
		<div class="contain_notyet">
			<a class="text_notyet" href="login.php">Déjà inscrit ? Connectez-vous !</a>
		</div>
	</body>
</html>