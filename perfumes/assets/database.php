<?php

	$access = new PDO("mysql:host=localhost:8889;dbname=elay;charset=utf8", "root", "");
	$access->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);


mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
try {
	$accessAdmin = new mysqli("localhost:8889", "root", "", "elay");
	$accessAdmin->set_charset("utf8mb4");
} catch(Exception $e) {
	error_log($e->getMessage());
	exit('Erreur de connexion a la base de donnée');
}

?>

<?php 

$DATABASE_HOST = 'localhost:8889';
$DATABASE_USER = 'root';
$DATABASE_PASS = '';
$DATABASE_NAME = 'elay';
 
?>

