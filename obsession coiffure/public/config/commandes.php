<?php
	
	function afficherPlanning()
    {
        if(require("connexion.php")) 
        {
            $req = $access->prepare("SELECT * FROM bookings ORDER BY date DESC") or die(print_r($access->errorInfo()));
            $req->execute();
            $data = $req->fetchAll(PDO::FETCH_ASSOC);

            return $data;

            $req->closeCursor();
        }
    }

    function afficher()
    {
        if(require("connexion.php"))
        {
            $req = $access->prepare("SELECT * FROM produits ORDER BY id DESC") or die(print_r($access->errorInfo())) ;
            $req->execute();
            $data = $req->fetchAll(PDO::FETCH_ASSOC);
            
            return $data;

            $req->closeCursor();
        }
        else {
            $e = "Une erreur est survenue";
        }
    }

    function afficher2()
    {
        if(require("connexion.php"))
        {
            $req = $access->prepare("SELECT * FROM produits GROUP BY id DESC LIMIT 3") or die(print_r($access->errorInfo())) ;
            $req->execute();
            $data = $req->fetchAll(PDO::FETCH_ASSOC);
            
            return $data;

            $req->closeCursor();
        }
        else {
            $e = "Une erreur est survenue";
        }
    }
   

    function addAdmin($identifiant, $motdepasse)
    {
        if(require("connexion.php"))
        {
            $req = $access->prepare("INSERT INTO admin (identifiant, motdepasse) VALUES (?,?)");
            $motdepasse = crypt($_POST['motdepasse'], 'abc');
            $req->execute(array($identifiant, $motdepasse));
            $req->closeCursor();
            echo "<meta http-equiv='refresh' content='0'>";
        }
        else {
            $e = "Erreur";
        }
    }
  
    function afficherUser(){
        if(require("config/connexion.php")){
            $req = $access->prepare("SELECT id, username, email, password, avatar FROM users") or die(print_r($access->errorInfo()));
            $req->execute();
			$data = $req->fetchAll(PDO::FETCH_ASSOC);
            
            return $data;
        } else {
            $e = "Une erreur est survenue dans la récupération des données, contactez l'administrateur du site.";
        }
    }
?>
