<?php

  if (isset($_POST['submit'])) {
    $name = $_Post['name'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];
    $subject = "New Message from Radion Northenden Website";

    $mailTo = "stephenkayebarcelona@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an email from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);

    header("Location: index.php?mailsend");
  }

?>






<!-- //  //Store name of users
  // $visitor_email = $_POST['email'];
  // $message = $_POST['message'];

  // $email_from = 'tostephenkaye@gmail.com';

  // $email_subject = "New Form Submission";

  // $email_body = "User Name: $name.\n".
  //               "User Email: $visitor_email.\n".
  //               "User Message: $message./n";

  // $to = 'stephenkayebarcelona@gmail.com';

  // $headers = "From: $email_from \r\n";

  // $headers = "Reply-To: $visitor_email \r\n";

  // mail($to, $email_subject, $email_body, $headers);

  // header("Location: index.html"); -->