<?php 

    $mysqli = new mysqli("localhost", "root", "", "obs-coiffure");
    $date = $_GET['date'];
    $room_id = $_GET['room'];
    $stmt = $mysqli->prepare("SELECT * FROM bookings WHERE date = ? AND room_id = ?");
    $stmt->bind_param('si', $date, $room_id);
    $bookings = array();
    if($stmt->execute()) {
        $result = $stmt->get_result();
        if($result->num_rows>0) {
            while($row = $result->fetch_assoc()) {
                $bookings[] = $row['timeslot'];
            }

            $stmt->close();
        }
    }


if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $timeslot = $_POST['timeslot'];
    $room_id = $_GET['room'];
    $stmt = $mysqli->prepare("SELECT * FROM bookings WHERE date = ? AND timeslot = ? AND room_id = ?");
    $stmt->bind_param('ssi', $date, $timeslot, $room_id);
    if($stmt->execute()) {
        $result = $stmt->get_result();
        if($result->num_rows>0) {
            
            $msg = "<div class='alert alert-danger'>La réservation a échouchée, ce créneau est déjà réservé.</div>";
    }else{
        $stmt = $mysqli->prepare("INSERT INTO bookings (name, email, timeslot, date, room_id) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param('ssssi', $name, $email, $timeslot, $date, $room_id);
        $stmt->execute();
        $msg = "<div class='alert alert-success'>Réservation réussie!</div>";
        $bookings[] = $timeslot;

        if($room_id === 1) {
            $room_id = "Joy";
        }elseif($room_id === 2) {
            $room_id = "Elodie";
        }elseif($room_id === 3) {
            $room_id = "La Nouvelle";
        }

        $to = ''.$email.'';
        $subject = 'Votre réservation pour le '.$date.'';
        $message = 'Bonjour, nous avons bien pris en compte votre réservation pour le '.$date.' de '.$timeslot.'. Le rendez-vous a été pris avec '.$room_id.', vous pourrez régler sur place par carte bancaire ou en espèce (les chèques ne sont plus possible).<br><br>Nous vous remercions de votre confiance - Obsession Coiffure Eschentzwiller<br><br><img src="content/logo-v2.png" style="width:50px;height:50px;">';
        $headers = 'From: yael.brinkert@gmail.com' . "\r\n" .
     'Reply-To: yael.brinkert@gmail.com' . "\r\n" .
     'X-Mailer: PHP/' . phpversion();

     mail($to, $subject, $message, $headers);

        $stmt->close();
        $mysqli->close();
        }
    } 
}/*else {
    //$msg = "<div class='alert alert-danger'>La réservation a échouchée, veuillez réessayer.</div>";
}*/

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
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
      <title>Obsession Coiffure</title>
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

      .b-example-divider {
        height: 3rem;
        background-color: rgba(0, 0, 0, .1);
        border: solid rgba(0, 0, 0, .15);
        border-width: 1px 0;
        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
      }

      .b-example-vr {
        flex-shrink: 0;
        width: 1.5rem;
        height: 100vh;
      }

      .bi {
        vertical-align: -.125em;
        fill: currentColor;
      }

      .nav-scroller {
        position: relative;
        z-index: 2;
        height: 2.75rem;
        overflow-y: hidden;
      }

      .nav-scroller .nav {
        display: flex;
        flex-wrap: nowrap;
        padding-bottom: 1rem;
        margin-top: -1px;
        overflow-x: auto;
        text-align: center;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
      }
    </style>
   </head>
   <body><div>
    <div style="display:block;">
    <?php if(isset($_GET['room'])) {
                            $room = $_GET['room'];
                            if($_GET['room']==1) {
                                $room = 'Joy';
                            }elseif($_GET['room']== 2) {
                                $room = 'Elodie';
                            }elseif($_GET['room']== 3) {
                                $room = 'La Nouvelle';
                            }
                        } else {
                            $room = 1;
                        }
                        ?>
                        
                            <h1 class="text-center">Réservation pour la date du : <?php echo date('d/m/Y', strtotime($date));?> avec <?php echo $room;?></h1><hr>
                        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <?php echo isset($msg)?$msg:'';?>
                </div>
                <?php $timeslots = timeslots($duration, $cleanup, $start, $end); 
                
                    foreach($timeslots as $ts) {
                ?>
                    <div class="col-md-2">
                        <div class="form-group">
                            <?php if(in_array($ts, $bookings)) { ?>
                                <button style="margin-top: 15px;" class="btn btn-danger"><?php echo $ts;?><br><i>(Déjà réservé)</i></button>
                            <?php }else{ ?>
                                <button style="margin-top: 15px;" class="btn btn-primary book" data-timeslot="<?php echo $ts;?>"><?php echo $ts;?></button>
                            <?php } ?>
                    </div>
                </div>
                <?php
                    }
                ?>
            </div>
        </div>
        <!-- Modal -->
        <div id="myModal" class="modal fade" role="dialog">
            <div class="modal-dialog">

                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Réservation : <span id="slot"></span></h4>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-12">
                                <form action="" method="POST">
                                    <div class="form-group">
                                        <label for="">Horaire de réservation</label>
                                        <input required type="text" readonly name="timeslot" id="timeslot" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label for="">Nom</label>
                                        <input required type="text" name="name" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label for="">E-mail</label>
                                        <input required type="email" name="email" class="form-control">
                                    </div>
                                <div class="form-group pull-right">
                                    <button style="margin-top:15px;" class="btn btn-primary" type="submit" name="submit">Réserver</button>
                                </div>
                                </form>
                                
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
        <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
        <!--<script type="text/javascript" src="js/bootstrap.js"></script>-->
        <script>
            $(".book").click(function() {
                var timeslot = $(this).attr('data-timeslot');
                $("#slot").html(timeslot);
                $("#timeslot").val(timeslot);
                $("#myModal").modal("show");
            })
        </script>
        <script src="https://kit.fontawesome.com/c18eac90ea.js" crossorigin="anonymous"></script>
    </body>
</html>