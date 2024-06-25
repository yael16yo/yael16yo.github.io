<?php

require('connexion.php');
require('commandes.php');

session_start();

    if(isset($_POST['submit'])) {
        $identifiant = htmlspecialchars(strip_tags($_POST['identifiant']));
        $motdepasse = htmlspecialchars($_POST['motdepasse']);
        $motdepasse_hash = crypt($motdepasse, 'abc');
        $query = "SELECT * FROM admin WHERE identifiant='$identifiant' and motdepasse='$motdepasse_hash'";
        $result = mysqli_query($accessAdmin,$query);
        $rows = mysqli_num_rows($result);
        if($rows==1){
            $_SESSION['identifiant'] = $identifiant;
            header("Location: index.php");
            }
                else
            {
                $message = "Le nom d'utilisateur ou le mot de passe est incorrect.";
            }
        } 

?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>connexion admin</title>
</head>
<body>
<div class="register">
			<h1>Espace Administrateur</h1>
			<form action="admin.php" method="POST" name="login" autocomplete="off">
				<label for="username">
					<i class="fa fa-user"></i>
				</label>
				<input type="text" name="identifiant" placeholder="Identifiant" id="username" required>
				<label for="password">
					<i class="fa fa-lock"></i>
				</label>
				<input type="password" name="motdepasse" placeholder="Mot-de-passe" id="password" required>
                <?php 
                        if (!empty($message)) { 
                        ?>
                    <p class="errorMessage"><?php echo $message; ?></p>
                <?php } ?>
				<!--<label for="email">
					<i class="fas fa-envelope"></i>
				</label>
				<input type="email" name="email" placeholder="email" id="email" required>-->
				<input type="submit" value="Connexion" name="submit">
                
			</form>
		</div>
    </div>
</body>
</html>