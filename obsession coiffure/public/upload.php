<?php
include('config/connexion.php');
$statusMsg = '';

// File upload path
$targetDir = "content/";
$fileName = basename($_FILES["file"]["name"]);
$targetFilePath = $targetDir . $fileName;
$fileType = pathinfo($targetFilePath,PATHINFO_EXTENSION);
$id = $_POST['id'];

if(isset($_POST["changeAvatar"]) && !empty($_FILES["file"]["name"])){
    // Allow certain file formats
    $allowTypes = array('jpg','png','jpeg','gif', 'JPG', 'PNG');
    if(in_array($fileType, $allowTypes)){
        // Upload file to server
        if(move_uploaded_file($_FILES["file"]["tmp_name"], $targetFilePath)){
            // Insert image file name into database
            $insert = $accessAdmin->query("UPDATE users SET `avatar` = 'content/".$fileName."', `uploaded_on` = NOW() WHERE id = '$id'");
            
            if($insert){
                
                $statusMsg = "Le fichier ".$fileName. " a été uploadé correctement! C'est un bel avatar que vous proposez-là! <a href='profile.php'>Retour au profil</a>";
            }else{
                
                $statusMsg = "Le fichier n'a pas pu être correctement uploadé <a href='profile.php'>Retour au profil</a>";
            } 
        }else{
            
            $statusMsg = "Désolé, une erreur est survenue. Veuillez réessayer! <a href='profile.php'>Retour au profil</a>";
        }
    }else{
        
        $statusMsg = "Désolé, uniquement les fichiers de type JPG, JPEG, PNG, & GIF sont autorisés. <a href='profile.php'>Retour au profil</a>";
    }
}else{
    
    $statusMsg = "Selectionnez un fichier a uploader, merci! <a href='profile.php'>Retour au profil</a>";
}

// Display status message
echo $statusMsg;
?>