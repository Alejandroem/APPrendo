<?php
$usuario = strval($_POST['usuario']);

$conn = new mysqli("localhost", "id496900_root", "marielozo", "id496900_tesisdb");
// Check connection
if ($conn->connect_error) {
    die("Connection fallida: " . $conn->connect_error);
}else
{
	$query = "SELECT * FROM id496900_tesisdb.usuario where id496900_tesisdb.usuario.carnet ='$usuario';";
	$resultado = $conn->query($query);
	$row = $resultado->fetch_array(MYSQLI_ASSOC);
	
	echo(json_encode($row));
	
	
	$resultado->close();
}
$conn->close();
?>