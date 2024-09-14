<?php

/*
	$access = new PDO("mysql:host=localhost:8889;dbname=tes;charset=utf8", "root", "");
	$access->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

	mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
	try {
		$accessAdmin = new mysqli("localhost:8889", "root", "", "tes");
		$accessAdmin->set_charset("utf8mb4");
	} catch(Exception $e) {
		error_log($e->getMessage());
		exit('Erreur de connexion a la base de donnée');
	}
*/



	$access = new PDO("mysql:host=185.98.131.176;dbname=yaelo2126428_2rtl8l;charset=utf8", "yaelo2126428", "Pauline1406*");
	$access->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);


	mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
	try {
		$accessAdmin = new mysqli("185.98.131.176", "yaelo2126428", "Pauline1406*", "yaelo2126428_2rtl8l");
		$accessAdmin->set_charset("utf8mb4");
	} catch(Exception $e) {
		error_log($e->getMessage());
		exit('Erreur de connexion a la base de donnée');
	}
	
?>