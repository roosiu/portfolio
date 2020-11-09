<?php

        $tresc = $_REQUEST['tresc'];
        $temat = $_REQUEST['temat'];
        $mail = $_REQUEST['mail'];
        if($tresc && $temat){
      // Set your email address where you want to receive emails.
       $to = 'roosiu@gmail.com';
       $temat_wstep = 'Kontakt ze strony - piotrrosiak.pl: ';
       $headers = "Od: ".$mail." <".$mail."> \r\n";
       $send_email = mail($to,$temat_wstep." ".$temat,$tresc,$headers);

       echo ($send_email) ? 'success' : 'error';
    }
  ?>