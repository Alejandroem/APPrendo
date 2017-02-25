<?php
$email = strval($_GET['email']);
$password = strval($_GET['password']);

$conn = new mysqli("localhost", "id496900_root", "marielozo", "id496900_tesisdb");
// Check connection
if ($conn->connect_error) {
    die("Connection fallida: " . $conn->connect_error);
}else
{
	$query = "SELECT * FROM usuario WHERE carnet='$email' AND password='$password';";
	$resultado = $conn->query($query);
	$row = $resultado->fetch_array(MYSQLI_ASSOC);
	
	if(!empty($row['carnet'])){
        echo "exito";
    }else{
        echo "fallo";
    }
	
	
	$resultado->close();
}
$conn->close();

?>