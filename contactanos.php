<?php
require 'class.phpmailer.php';
include("class.smtp.php");
if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest'){
//Si Existe Accion
$Nombre     = $_POST["Nombre"];
$Email      = $_POST["Email"];
$Comentario  = $_POST["Comentario"];
$fecha      = date("d/m/Y");


/*SEND EMAIL*/
/*TempalteRecover*/
$message = '<table width="600" border="0" cellpadding="0" cellspacing="0" align="center" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="full">';
$message .= '<tbody>';
$message .= '<tr>';
$message .= '<td width="100%" height="10"></td>';
$message .= '</tr>';
$message .= '<tr>';
$message .= '<td width="100%" style="font-size: 22px; align="center" text-align: align="center" center; vertical-align: top; ">';
$message .= '<h3 style="color:#f06700; font-family: Arial, Helvetica, sans-serif; line-height: 24px; text-align: center;">¡¡Tenemos un nuevo mensaje!!</h3>';
$message .= '</tr>';
$message .= '<tr>';
$message .= '<td width="100%" height="15"></td>';
$message .= '</tr>';
$message .= '<tr>';
$message .= '<td width="100%" style="font-size: 13px; color: rgb(119, 119, 119); text-align:justify; font-family: Arial, Helvetica, sans-serif; line-height: 24px; vertical-align: top; ">';
$message .= '<table width="100%" border="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; color: #111111; font-family: Arial, Myriad Pro, Helvetica, sans-serif; font-size: 12px;">';
$message .= '<tr><th scope="row">Visita:</th><td>'.$fecha.'</td></tr>';
$message .= '<tr><th scope="row">Nombre:</th><td>'.$Nombre.'</td></tr>';
$message .= '<tr><th scope="row">Email:</th><td>'.$Email.'</td></tr>';
$message .= '<tr><th scope="row">Comentario:</th><td>'.$Comentario.'</td></tr>';

$message .= '</table>';
$message .= '</td>';
$message .= '</tr>';
$message .= '<tr>';
$message .= '<td width="100%" height="30"></td>';
$message .= '</tr>';
$message .= '<tr>';
$message .= '<td width="100%" height="40"></td>';
$message .= '</tr>';
$message .= '<tr>';
$message .= '<td width="100%" valign="middle" align="center" style="text-align: center; color: #f06700; font-family: Arial, Myriad Pro, Helvetica, sans-serif; font-size: 12px;">
Cannes - '.$fecha.'';
$message .= '</td>';
$message .= '</tr>';
$message .= '<tr>';
$message .= '<td width="100%" height="30"></td>';
$message .= '</tr>';
$message .= '</tbody>';
$message .= '</table>';
$body = "<html>\n";
$body .= "<body>\n";
$body = $message;
$body .= "</body>\n";
$body .= "</html>\n";
$mail = new PHPMailer();
$mail->IsSMTP(); // telling the class to use SMTP
$mail->Host       = "smtp.gmail.com"; // SMTP server "smtp.gmail.com"
$mail->SMTPDebug  = 1;                     // enables SMTP debug information (for testing)
$mail->SMTPAuth   = true;                  // enable SMTP authentication
$mail->Host       = "smtp.gmail.com"; // sets the SMTP server "smtp.gmail.com"
$mail->Port       = 587;                    // set the SMTP port for the GMAIL server 587/465
$mail->SMTPSecure = "tls";
$mail->Username   = "media@agenciaout.cl"; // SMTP account username
$mail->Password   = "Ma135790*";        // SMTP account password
$mail->SetFrom('asistente@agenciaout.cl', 'sads');

$mail->AddAddress('asistente@agenciaout.cl');
/*$mail->AddAddress("iruiz@ivitalia.cl", "I. Ruiz");
$mail->AddAddress('rsalas@lagunacentro.cl');
$mail->AddAddress('psantibanez@ivitalia.cl', "P. Santibañez");*/
$mail->Subject = 'Cannes';
$mail->Body = $body;
$mail->CharSet = 'UTF-8';
$mail->isHTML(true);
$mail->WordWrap = 150;
if(!$mail->Send()) {




      $log = "Fecha: ".$fecha." Nombre: ".$Nombre." Correo:".$Email." Tipo Contacto: ".$Cel."  Comentario ".$Comentario."\n";
         $myFile = "../errorlog.txt";
        $fh = fopen($myFile, 'a') or die("can't open file");
        fwrite($fh, $log);
        fclose($fh);
die ("NO FUNCIONA!");
}else{
    $log = "Fecha: ".$fecha." Nombre: ".$Nombre." Correo:".$Email." Tipo Contacto: ".$Cel."  Comentario ".$Comentario."\n";
        $myFile = "../log.txt";
        $fh = fopen($myFile, 'a') or die("can't open file");
        fwrite($fh, $log);
        fclose($fh);
die ("SI FUNCIONA!");

}
}
else{

      $log = "Fecha: ".$fecha." Nombre: ".$Nombre." Correo:".$Email." Tipo Contacto: ".$Cel."  Comentario ".$Comentario."\n";
        $myFile = "../error_log.txt";
        $fh = fopen($myFile, 'a') or die("can't open file");
        fwrite($fh, $log);
        fclose($fh);
echo"ERROR";
}
?>
