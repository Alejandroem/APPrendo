<?php
$carnet = strval($_GET['carnet']);
$imagen = strval($_GET['imagen']);

$conn = new mysqli("localhost", "id496900_root", "marielozo", "id496900_tesisdb");
// Check connection
if ($conn->connect_error) {
    die("Connection fallida: " . $conn->connect_error);
}else
{
	
	$query = "UPDATE id496900_tesisdb.usuario SET imagen='$imagen' WHERE carnet='$carnet';";
	
	echo($query);
	$resultado = $conn->query($query);
	
}


$conn->close();
?>
