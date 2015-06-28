<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$data = json_decode($_REQUEST['message'], true);

function clean_string($string) {

	$bad = array("content-type","bcc:","to:","cc:","href");

	return str_replace($bad,"",$string);

}

if(!$data['first_name']) {
	echo json_encode(array('error' => 'true'));
	exit;
}
else if(!$data['last_name']) {
	echo json_encode(array('error' => 'true'));
	exit;
}
else if(!$data['email']) {
	echo json_encode(array('error' => 'true'));
	exit;
}
else if(!$data['telephone']) {
	echo json_encode(array('error' => 'true'));
	exit;
}
else if(!$data['comments']) {
	echo json_encode(array('error' => 'true'));
	exit;
}
else {
	//Permanent Information
	$email_to = "jth0024@gmail.com";
	$email_subject = "Quote Request";

	//Sender information
	$first_name = $data['first_name'];
	$last_name = $data['last_name'];
	$email_from = $data['email'];
	$telephone = $data['telephone'];
	$comments = $data['comments'];

	$email_message .= "First Name: ".clean_string($first_name)."\n";
	$email_message .= "Last Name: ".clean_string($last_name)."\n";
	$email_message .= "Email: ".clean_string($email_from)."\n";
	$email_message .= "Telephone: ".clean_string($telephone)."\n";
	$email_message .= "Comments: ".clean_string($comments)."\n";


	$headers = 'From: '.$email_from."\r\n".
	'Reply-To: '.$email_from."\r\n" .
	'X-Mailer: PHP/' . phpversion();

	//send email
	@mail($email_to, $email_subject, $email_message, $headers);  
	//mail($admin_email, "$subject", $comment, "From:" . $email);

	//Email response
	echo json_encode(array('error' => 'false'));
}

exit;
?>