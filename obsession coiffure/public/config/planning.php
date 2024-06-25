<?php 
 require('connexion.php');
require('commandes.php');

$Plannings = afficherPlanning();


 
$duration = 30;
$cleanup = 0;
$start = "09:00";
$end = "19:00";



function timeslots($duration, $cleanup, $start, $end) {
    $start = new DateTime($start);
    $end = new DateTime($end);
    $interval = new DateInterval("PT".$duration."M");
    $cleanupInterval = new DateInterval("PT".$cleanup."M");
    $slots = array();

    for($intStart = $start; $intStart<$end; $intStart->add($interval)->add($cleanupInterval)) {
        $endPeriod = clone $intStart;
        $endPeriod->add($interval);
        if($endPeriod>$end) {
            break;
        }
        
        $slots[] = $intStart->format("H:i")." - ".$endPeriod->format("H:i");
    }

    return $slots;
}
    
session_start();

 if(!isset($_SESSION["identifiant"])){
     header("Location: admin.php");
     exit(); 
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
    <title>Espace administrateur</title>
    <style>
        td, th {
            border: 1px solid #E7E7E7 !important;
            padding: 10px !important;
        }
        table {
            table-layout: fixed;
            border-radius: 25px !important;
            border-collapse: collapse;
        }
    </style>
</head>
<body>
<div>
        <ul>
            <li class="bar-nav-admin"><a href="index.php">Accueil</a></li>
        </ul>
    </div>
    <p class="msg-bvn-admin">Hello <span><?php echo $_SESSION['identifiant'];?></span> <a href="logout.php"><i class="fa fa-power-off"></i></a></p>
        
        <div style="margin: 50px;">
           <p>Ajouter un nouveau jour férié / vacances</p>
           <form action="" method="POST">
            <label for="Jour">Choissez le jour</label>
            <input type="date" id="Jour" name="date_day">
            <button type="submit" name="jourFerie" style="background-color:white;color:#94c120;border-radius:25px;padding:8px;display:block;border:none;">Ajouter</button>
            <?php
                $msgErr = ""; 
                $today = new DateTime('today', new DateTimeZone('Europe/Paris'));
                $jourFerie = $_POST['date_day'];
                $is_holiday = 1;
                if(isset($_POST['jourFerie'])) {
                        $req = $access->prepare("INSERT INTO `is_blocked` (`date_day`, `is_holiday`) VALUES ('$jourFerie', '$is_holiday')");
                        $req->execute(array());
                        $req->closeCursor();
                        $msgErr = "Le jour férié a été ajouté. Bon repos :D";
                    } else {
                        $msgErr = "";
                    }
            ?>
            <br>
            <?php echo $msgErr;?>
           </form>
        </div>
<br>
    <div>
        <?php 
            $bdd = $access->prepare("SELECT * FROM is_blocked ORDER BY date_day ASC");
            $bdd->execute([]);
            $data = $bdd->fetchAll();
        ?>
        <div class="container" style="margin-top:0px;">
            <div class="row">
                <div class="col-md-12">
                    <table class="table table-bordered width-max">
            <tr>
                <th>Jour férié/congé</th>
            </tr>
            <?php 
                foreach($data as $row) {
            ?> 
         <tr>
            <td>
                <span><?php echo $row['date_day'];?></span>
            </td>    
        </tr>
        
            <?php 
                }
            ?>
        </table>
<br>
    <p style="text-align:center;color:white;">Voici votre planning des rendez-vous :</p>
    
    <!--<p style="text-align:center;color:white;">Rappel :<br> Coiffeur 1 = Joy <br> Coiffeur 2 = Elodie <br> Coiffeur 3 = La Nouvelle</p>-->
    <div class="container" style="margin-top:0px;">
        <div class="row">
            <div class="col-md-12">
                
                <table class="table table-bordered width-max">
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Heure</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Email</th>
                            <th scope="col">Coiffeur</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach($Plannings as $pn) {

setlocale(LC_TIME, "fr_FR");
date_default_timezone_set( 'Europe/Paris' );
$today = new DateTime('today', new DateTimeZone('Europe/Paris'));
                            $date_booking = new DateTime($pn['date']);
                            $color = $today > $date_booking ? '#d9534f' : '#5cb85c';
            ?>
                        <tr style="background-color:<?php echo $color;?>;">
                            <td><?php echo $pn['date'];?></td>
                            <td><?php echo $pn['timeslot'];?></td>
                            <td><?php echo $pn['name'];?></td>
                            <td><?php echo $pn['email'];?></td>
                            <?php 
                                if($pn['room_id'] === 1) {
                                    $pn['room_id'] = "Joy";
                                }elseif($pn['room_id'] === 2) {
                                    $pn['room_id'] = "Elodie";
                                }elseif($pn['room_id'] === 3) {
                                    $pn['room_id'] = "La Nouvelle";
                                }
                            ?>
                            <td><?php echo $pn['room_id'];?></td>
                        </tr>
                    <?php } ?>
                    </tbody>
                </table>
                

            </div>
        </div>
    </div>
    </div>
    </body>
</html>