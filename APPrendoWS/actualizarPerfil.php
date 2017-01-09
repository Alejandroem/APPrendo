<?php
$carnet = strval($_POST['carnet']);
$nombre = strval($_POST['nombre']);
$apellido = strval($_POST['apellido']);
$email = strval($_POST['email']);



$conn = new mysqli("localhost", "id496900_root", "marielozo", "id496900_tesisdb");
// Check connection
if ($conn->connect_error) {
    die("Connection fallida: " . $conn->connect_error);
}else
{
	$query="";
	if(isset($_POST['password'])){
		$password = strval($_POST['password']);
		$query = "UPDATE id496900_tesisdb.usuario SET nombre='$nombre' , apellido='$apellido', correo='$email', password='$password' WHERE carnet='$carnet';";
	}else{
		$query = "UPDATE id496900_tesisdb.usuario SET nombre='$nombre' , apellido='$apellido', correo='$email' WHERE carnet='$carnet';";
	}
	echo($query);
	$conn->query($query);
	echo($resultado);
	$resultado->close();
}


$conn->close();
?>