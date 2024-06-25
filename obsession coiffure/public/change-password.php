<?php 
require('config/connexion.php');

$username = $_POST['username'];
$old_password = $_POST['password'];
$new_password = $_POST['password-conf1'];
$confirm_password = $_POST['password-conf2'];

$req = $access->prepare("SELECT * FROM users WHERE username = ?");
$req->execute([$username]);
$user = $req->fetch();
$req->closeCursor();

if ($user && password_verify($old_password, $user['password'])) {
	// vérification du nouveau mot de passe
	if($new_password === $confirm_password) {
	  // hachage du nouveau mot de passe
	  $hashed_password = password_hash($new_password, PASSWORD_DEFAULT);
  
	  // mise à jour du mot de passe dans la base de données
	  $req = $access->prepare("UPDATE users SET password = ? WHERE username = ?");
	  $req->execute(array($hashed_password, $username));
      $req->closeCursor();
  
	  // affichage d'un message de confirmation
	  echo "Le mot de passe a été mis à jour avec succès. <a href='profile.php'>Retour au profil</a>";
      var_dump($hashed_password);
	} else {
	  // affichage d'un message d'erreur si les mots de passe ne correspondent pas
	  echo "Les champs du nouveau mot de passe ne correspondent pas. <a href='profile.php'>Retour au profil</a>";
      var_dump($hashed_password);
	}
  } else {
	// affichage d'un message d'erreur si les informations d'identification actuelles sont incorrectes
	echo "Nom d'utilisateur ou mot de passe actuel incorrect. <a href='profile.php'>Retour au profil</a>";
    var_dump($old_password, $new_password, $confirm_password, $user['password']);
  }
?>