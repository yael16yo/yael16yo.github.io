<?php 
session_start();

require_once('assets/database.php');

$statusMsg = "";
$id = $_SESSION['id'];

if(isset($_POST['save_profil'])) {

    $name = $_POST['name'];
    $email = $_POST['email'];


    if(!empty($_FILES["avatar"]["name"])){
    $targetDir = "assets/img/avatar/";
    $fileName = $id . "_" . basename($_FILES["avatar"]["name"]);
    $targetFilePath = $targetDir . $fileName;
    $fileType = pathinfo($targetFilePath,PATHINFO_EXTENSION);

        $allowTypes = array('jpg','png','jpeg','gif', 'JPG', 'PNG');
        if(in_array($fileType, $allowTypes)){
            // Upload file to server
            if(move_uploaded_file($_FILES["avatar"]["tmp_name"], $targetFilePath)){
                // Insert image file name into database
                $insert = $accessAdmin->query("UPDATE `users` SET `avatar` = 'assets/img/avatar/".$fileName."' WHERE id = '$id'");
            }
        } else {
            $statusMsg = "<p class='status-red'>Ces fichiers ne sont pas autorisés, nous ne prenons que les jpg, png, jpeg, gif!</p>";
        }
    }

    $req = $access->prepare("UPDATE `users` SET `name` = :name, `email` = :email WHERE id = $id");
    $req->bindParam(':name', $name, PDO::PARAM_STR);
    $req->bindParam(':email', $email, PDO::PARAM_STR);
    $req->execute();
    $statusMsg = "<p class='status-green'>Les modifications ont été prises en compte!</p>";
}



if(isset($_POST['save_password'])) {
    $bd = $access->prepare("SELECT password FROM users WHERE id = $id");
    $bd->execute([]);
    $fetchPassword = $bd->fetch();

    if(!empty($_POST['password']) && !empty($_POST['password_new']) && !empty($_POST['password_new_confirm'])) {
        $password_now = $_POST['password'];
        $password_new = $_POST['password_new'];
        $password_new_confirm = $_POST['password_new_confirm'];

        if(password_verify($password_now, $fetchPassword['password'])) { 
            if($password_new === $password_new_confirm) {
                $hashed_password = password_hash($password_new, PASSWORD_DEFAULT);

                $req = $access->prepare("UPDATE `users` SET `password` = :password WHERE id = $id");
                $req->bindParam(':password', $hashed_password, PDO::PARAM_STR);
                $req->execute();
                $statusMsg = "<p class='status-green'>Votre mot-de-passe a bien été modifié.</p>";

            } else {
             $statusMsg = "<p class='status-red'>Les nouveaux mots-de-passe ne correspondent pas.</p>";
            }
        } else {
            $statusMsg = "<p class='status-red'>Votre mot-de-passe actuel ne correspond pas.</p>";
        }
    } else {
        $statusMsg = "<p class='status-red'>Veuillez remplir tout les champs.</p>";
    }
}

?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <?php include_once('assets/metas.php');?>
    <title>E-commerce - Profile</title>
</head>
<body style="background-color:white !important;">

    <style>
        .class {
            padding-top: 100px;
        }
        .class h1, .class p {
            text-align:center !important;
        }
    </style>

    <?php include_once('assets/database.php');?>
    <?php include_once('assets/navbar.php');?>
    <?php include_once('icon_panier.php');?>

    <main>
    <?php 
        $id = $_SESSION['id'];
        $bdd = $access->prepare("SELECT * FROM users WHERE id = $id");
        $bdd->execute([]);
        $fetch = $bdd->fetch();
    ?>
    <div class="class">
        <h1><?php echo $fetch['name'];?></h1>
        <br>
        <img src="<?php echo $fetch['avatar'];?>" width="100" height="100" alt="" style="object-fit:cover;object-position:center;border-radius:50%;margin:auto;display:block;">
        <br><br>
        <p>Votre adresse email : <?php echo $fetch['email'];?></p>
        <p>Votre nom d'utilisateur : <?php echo $fetch['name'];?></p>
        <br>
    </div>
    <br>

    <div class="centered-buttons">
    <button type="button" class="btn btn-dark centered" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Modifier mon profil
    </button>


    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modifier le profil de <?php echo $fetch['name'];?></h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form action="" method="POST" enctype="multipart/form-data">
                <div class="mb-3">
                    <label for="name">Nom:</label>
                    <input class="form-control" type="text" name="name" value="<?php echo $fetch['name'];?>" placeholder="<?php echo $fetch['name'];?>">
                </div>
                <div class="mb-3">
                    <label for="email">Email:</label>
                    <input class="form-control" type="email" name="email" value="<?php echo $fetch['email'];?>" placeholder="<?php echo $fetch['email'];?>">
                </div>
                <div class="mb-3">
                    <label for="avatar">Avatar:</label>
                    <input class="form-control" type="file" name="avatar" value="<?php echo $fetch['avatar'];?>"><br><img src="<?php echo $fetch['avatar'];?>" height="40" style="float:left !important;margin-right:6px;" alt=""><p style="text-align:left !important;margin-bottom: 0;"> Actuellement : <?php echo $fetch['avatar'];?></p><br>
                </div>
            
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" name="save_profil" class="btn btn-dark">Sauvegarder profil</button>
        </form>
        </div>
        </div>
    </div>
    </div>




    <button type="button" class="btn btn-dark centered" data-bs-toggle="modal" data-bs-target="#exampleModalPw">
    Modifier mon mot-de-passe
    </button>


    <div class="modal fade" id="exampleModalPw" tabindex="-1" aria-labelledby="exampleModalLabelPw" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabelPw">Modifier le mot-de-passe de <?php echo $fetch['name'];?></h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form action="" method="POST" enctype="multipart/form-data">
                <div class="mb-3">
                    <input class="form-control" type="password" name="password" placeholder="Mot-de-passe actuel">
                </div>
                <hr style="width:50%;display:block;margin: 20px auto;">
                <div class="mb-3">
                    <input class="form-control" type="password" name="password_new" placeholder="Votre nouveau mot-de-passe">
                </div>
                <div class="mb-3">
                    <input class="form-control" type="password" name="password_new_confirm" placeholder="Répétez votre nouveau mot-de-passe">
                </div>
            
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" name="save_password" class="btn btn-dark">Sauvegarder mot-de-passe</button>
        </form>
        </div>
        </div>
    </div>
    </div>

    <p><?php echo $statusMsg;?></p>
    </div>
    </main>

    <?php include_once('assets/footer.php');?>
    <?php include_once('assets/header-bottom.php');?>
    <?php include_once('assets/scripts.php');?>


</body>
</html>