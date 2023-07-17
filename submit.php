<?php
$host = "localhost";
$username = "root";
$password = "";

try 
{
    $conn = new PDO("mysql:host=$host;dbname=phptest", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e)
{
    echo "Connection failed: " . $e->getMessage();
}

$response = array('success' => false);

if(isset($_POST['name']) && $_POST['name']!='' 
&& isset($_POST['email']) && $_POST['email']!='' 
&& isset($_POST['phone']) && $_POST['phone']!='' )
{
	$sql = "INSERT INTO form_data(name, email, phone) VALUES('".addslashes($_POST['name'])."', 
	'".addslashes($_POST['email'])."',
	'".addslashes($_POST['phone'])."' 
	)";
	
	if($conn->query($sql))
	{
		$response['success'] = true;
	}
}

echo json_encode($response);






