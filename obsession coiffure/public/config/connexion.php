<?php

	$access = new PDO("mysql:host=localhost:8889;dbname=obs-coiffure;charset=utf8", "root", "");
	$access->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

?>
<?php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
try {
	$accessAdmin = new mysqli("localhost:8889", "root", "", "obs-coiffure");
	$accessAdmin->set_charset("utf8mb4");
} catch(Exception $e) {
	error_log($e->getMessage());
	exit('Erreur de connexion a la base de donnée');
}
?>
