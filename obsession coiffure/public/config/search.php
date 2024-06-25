<?php
 require('connexion.php');

   function supprimer($id)
   {
       if(require("connexion.php"))
       {
           $req = $access->prepare("DELETE FROM produits WHERE id=?");
           $req->execute(array($id));
           $req->closeCursor();
           echo "<meta http-equiv='refresh' content='0'>";
       }
       else {
           $e = "Une erreur est survenue";
       }
   }

	$query = $_GET['query']; 
	// gets value sent over search form
	
	$min_length = 3;
	// you can set minimum length of the query if you want
	
	if(strlen($query) >= $min_length){ // if query length is more or equal minimum length then
		
		$query = htmlspecialchars($query); 
		// changes characters used in html to their equivalents, for example: < to &gt;
		
		$query = mysqli_real_escape_string($accessAdmin, $query);
		// makes sure nobody uses SQL injection
		
		$raw_results = $accessAdmin->query("SELECT * FROM produits
			WHERE (`nom` LIKE '%".$query."%') OR (`description` LIKE '%".$query."%')") or die(mysql_error());

		
		if(mysqli_num_rows($raw_results) > 0){ 
			
			while($results = mysqli_fetch_array($raw_results)){
			
		
				echo "<p><h3>".$results['nom']."</h3>".$results['description']."</p></br><button type='submit' name='supprimer' class='btn btn-sm btn-outline-danger' value='".(strval($results['id']))."'>Supprimer</button>";
					if(isset($_POST['supprimer'])) {
						try {
							supprimer($_POST['supprimer']);
						}
						catch (Exception $e) {
							$e->getMessage();
						}
					} else {
						$e = 'La suppression a échoué, veuillez réessayer.';
					}
					
				
			
			}
			
		}
		else{ // if there is no matching rows do following
			echo "No results";
		}
		
	}
	else{ // if query length is less than minimum
		echo "Minimum length is ".$min_length;
	}
?>