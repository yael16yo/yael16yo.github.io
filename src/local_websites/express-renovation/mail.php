<?php

    $_POST['email_email'] = $email_email;
    $_POST['sujet_email'] = $sujet_email;
    $_POST['name_email'] = $name_email;
    $_POST['message_email'] = $message_email;

     $to      = 'yael.brinkert@gmail.com';
     $subject = ''.$sujet_email.' - '.$name_email.'';
     $message = ''.$message_email.'';
     $headers = 'From: '.$email_email.'' . "\r\n" .
     'Reply-To: '.$email_email.'' . "\r\n" .
     'X-Mailer: PHP/' . phpversion();

     mail($to, $subject, $message, $headers);
 ?>