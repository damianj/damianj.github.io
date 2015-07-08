<?php
$emailTo = 'jimenez.dmn@gmail.com';
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name    = stripslashes(trim($_POST['form_name']));
    $email   = stripslashes(trim($_POST['form_email']));
    $message = stripslashes(trim($_POST['form_message']));
    $pattern  = '/[\r\n]|Content-Type:|Bcc:|Cc:/i';
    if (preg_match($pattern, $name) || preg_match($pattern, $email)) {
        die("Header injection detected");
    }
    if($name && $email && $message){
        $subject = '[E-mail from github.io contact form]';
        $body = "Name: $name <br /> Email: $email <br /> Mensagem: $message";
        $headers  = 'MIME-Version: 1.1' . PHP_EOL;
        $headers .= 'Content-type: text/html; charset=utf-8' . PHP_EOL;
        $headers .= "From: $name <$email>" . PHP_EOL;
        $headers .= "Return-Path: $emailTo" . PHP_EOL;
        $headers .= "Reply-To: $email" . PHP_EOL;
        $headers .= "X-Mailer: PHP/". phpversion() . PHP_EOL;
        mail($emailTo, $subject, $body, $headers);
        $emailSent = true;
    } else {
        $hasError = true;
    }
}
?>