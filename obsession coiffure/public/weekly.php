<?php 

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
        
        $slots[] = $intStart->format("H:iA")." - ".$endPeriod->format("H:iA");
    }

    return $slots;
}

?>

<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="css/style.css">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
      <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
      <script src="js/custom.js" type="text/javascript"></script>
      <!-- Fontawesome -->
      <script src="https://kit.fontawesome.com/41340b7633.js" crossorigin="anonymous"></script>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css%22%3E" />

      <!-- javascript responsive -->
      
      <title>Obsession Coiffure</title>
      
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>
<body>
    
    <h1></h1>

    <?php
$dt = new DateTime;
if (isset($_GET['year']) && isset($_GET['week'])) {
    $dt->setISODate($_GET['year'], $_GET['week']);
} else {
    $dt->setISODate($dt->format('o'), $dt->format('W'));
}
$year = $dt->format('o');
$week = $dt->format('W');
$month = $dt->format('F');
$year = $dt->format('Y');
?>
<div class="container">
    <center>
        <h2><?php echo "$month $year";?></h2><br>
        <a class="btn btn-primary" href="<?php echo $_SERVER['PHP_SELF'].'?week='.($week-1).'&year='.$year; ?>">Semaine précédente</a> <!--Previous week-->
        <a class="btn btn-primary" href="weekly.php">Mois actuel</a> <!--Next week-->
        <a class="btn btn-primary" href="<?php echo $_SERVER['PHP_SELF'].'?week='.($week+1).'&year='.$year; ?>">Semaine prochaine</a> <!--Next week-->
    </center>
<br><br>

    <div class="row">
        <div class="col-md-12">
        <table class="table table-bordered">
            
                
                <?php
    do {
        if($dt->format('d M Y') == date('d M Y')) {
            echo "<td style='background:yellow;border-radius:25px 0 0 0;'>" . $dt->format('l') . "<br>" . $dt->format('d M Y') . "</td>\n";
        } else {
            echo "<td>" . $dt->format('l') . "<br>" . $dt->format('d M Y') . "</td>\n";
        }
        
        $dt->modify('+1 day');
    } while ($week == $dt->format('W'));
    ?>
            </tr>
            <?php $timeslots = timeslots($duration, $cleanup, $start, $end); 
                
                    foreach($timeslots as $ts) {
                ?>
            <tr>
                <td><button class="btn btn-success btn-xs"><?php echo $ts;?></button></td>
                <td><button class="btn btn-success btn-xs"><?php echo $ts;?></button></td>
                <td><button class="btn btn-success btn-xs"><?php echo $ts;?></button></td>
                <td><button class="btn btn-success btn-xs"><?php echo $ts;?></button></td>
                <td><button class="btn btn-success btn-xs"><?php echo $ts;?></button></td>
                <td><button class="btn btn-success btn-xs"><?php echo $ts;?></button></td>
                <td><button class="btn btn-success btn-xs"><?php echo $ts;?></button></td>
            </tr>
            <?php 
                    }
            ?>
        </table>
        </div>
    </div>
</div>





        <script src="https://kit.fontawesome.com/c18eac90ea.js" crossorigin="anonymous"></script>
        <script>
            $("#room_select").change(function() {
                $("#room_select_form").submit();
            });

            $("#room_select option[value='<?php echo $room;?>']").attr('selected', 'selected');
        </script>
</body>
</html>