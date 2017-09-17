<?php
require 'phpmailer/PHPMailerAutoload.php';

$mail = newPHPMailer();
$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'ssl';
$mail->Host = 'localhost';
$mail->Port = '25';
$mail->isHTML();
$mail->Username = 'cyanide6033@gmail.com';
$mail->Password = 'The#Morty@empire6033';
$mail->SetFrom('no-reply@commithub.com');
$mail->Subject = 'Hello World';
$mail->Body = 'A test email';
$mail->AddAdress('luis.alvarez6033@outlook.com');

$mail->Send();