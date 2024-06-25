<?php

include_once('assets/database.php');

$message = '';

if(isset($_POST['register'])) {
$con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
if (mysqli_connect_errno()) {

	$message = '<i class="fa fa-triangle-exclamation" style="color:red;"></i> Failed to connect to MySQL: ' . mysqli_connect_error();
	
}


elseif (!isset($_POST['name'], $_POST['password'], $_POST['email'])) {

	$message = '<i class="fa fa-triangle-exclamation" style="color:red;"></i> Merci de bien remplir le formulaire!';
	
}

elseif (empty($_POST['name']) || empty($_POST['password']) || empty($_POST['email'])) {

	$message = '<i class="fa fa-triangle-exclamation" style="color:red;"></i> Veuillez compléter le formulaire';
	
}

elseif (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
	$message = '<i class="fa fa-triangle-exclamation" style="color:red;"></i> Cet email n\'est pas valide.';
	
}

elseif (preg_match('/[A-Za-z0-9]+/', $_POST['name']) == 0) {
    $message = '<i class="fa fa-triangle-exclamation" style="color:red;"></i> Ce nom d\'utilisateur n\'est pas valide.';
	
}

elseif (strlen($_POST['password']) > 20 || strlen($_POST['password']) < 5) {
	$message = '<i class="fa fa-triangle-exclamation" style="color:red;"></i> Votre mot-de-passe doit compter 5 à 20 caractères.';
	
}

elseif($_POST['password'] != $_POST['password-verification']) {
    $message = '<i class="fa fa-triangle-exclamation" style="color:red;"></i> Vos mot-de-passe de sont pas les mêmes, vérifier les.';
}
// We need to check if the account with that username exists.
elseif ($stmt = $con->prepare('SELECT id, password FROM users WHERE name = ?')) {
	// Bind parameters (s = string, i = int, b = blob, etc), hash the password using the PHP password_hash function.
	$stmt->bind_param('s', $_POST['name']);
	$stmt->execute();
	$stmt->store_result();
	
	if ($stmt->num_rows > 0) {
		
		$message = '<i class="fa fa-triangle-exclamation" style="color:red;"></i> Ce nom d\'utilisateur existe déjà, veuillez en choisir un autre.';
	} elseif($stmt = $con->prepare('SELECT id, email FROM users WHERE email = ?')) {
			
			$stmt->bind_param('s', $_POST['email']);
			$stmt->execute();
			$stmt->store_result();
			
			if ($stmt->num_rows > 0) {
				
				$message = '<i class="fa fa-triangle-exclamation" style="color:red;"></i> Cet email existe déjà, veuillez en choisir une autre.';
	} else {
		


if ($stmt = $con->prepare('INSERT INTO users (name, password, email, avatar) VALUES (?, ?, ?, "assets/img/avatar/default.png")')) {

	$password = password_hash($_POST['password'], PASSWORD_DEFAULT);
	$stmt->bind_param('sss', $_POST['name'], $password, $_POST['email']);
	$stmt->execute();
	header('Location: login.php');
} else {
	
	$message = 'Could not prepare statement!';
}
	}
	$stmt->close();
} else {
	
	$message = 'Could not prepare statement!';
}
}

$con->close();
}
?>
<!DOCTYPE html>
<html lang="fr">

<head>
    
    <?php include_once('assets/metas.php');?>
    <title>S'inscrire à Manafood</title>
    
</head>

<body>
    <?php include_once('assets/navbar.php');?>

    <main>
        <div class="container">
            <div class="login_admin">
                <h2>S'inscrire</h2>
                <form action="" method="POST">
                <div class="login_input">
                    
                    <input type="text" name="name" id="name" placeholder="Nom d'utilisateur" required>
                </div>
                <div class="login_input">
                    
                    <input type="email" name="email" id="email" placeholder="E-mail" required>
                </div>
                <div class="login_input">
                    <hr>
                </div>
                <div class="login_input">
                    
                    <input type="password" name="password" id="password" placeholder="Mot-de-passe" required>
                </div>
                <div class="login_input">
                    
                    <input type="password" name="password-verification" id="password-verification" placeholder="Confirmer votre mot-de-passe" required>
                </div>
                <div class="login_input">
                    <button value="register" name="register" type="submit">S'inscrire</button>
                </div>
                <div class="login_input">
                    <p style="max-width:350px;text-align:center;"><?=$message?></p>
                </div>
                <div>
                    <p class="already_created">Vous avez déjà un compte? <a href="login.php">Je me connecte</a></p>
                </div>
                </form>
            </div>
        </div>
    </main>

    <?php include_once('assets/header-bottom.php');?>
    <?php include_once('assets/footer.php');?>
    <?php include_once('assets/scripts.php');?>
</body>

</html>