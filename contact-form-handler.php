<?php

  if (isset($_POST['submit'])) {
    $name = $_Post['name'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];
    $subject = "New Message from Radion Northenden Website";

    $mailTo = "radionorthenden@outlook.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an email from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);

    header("Location: index.php?mailsend");
  }

  ?>