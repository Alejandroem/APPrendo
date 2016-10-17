<?php
$usuario = strval($_POST['usuario']);

$conn = new mysqli("192.168.1.15", "root", "marielozo", "tesisdb");
// Check connection
if ($conn->connect_error) {
    die("Connection fallida: " . $conn->connect_error);
}else
{
	$query = "SELECT * FROM tesisdb.usuario where tesisdb.usuario.carnet ='$usuario';";
	$resultado = $conn->query($query);
	$row = $resultado->fetch_array(MYSQLI_ASSOC);
	
	echo(json_encode($row));
	
	
	$resultado->close();
}
$conn->close();
?>