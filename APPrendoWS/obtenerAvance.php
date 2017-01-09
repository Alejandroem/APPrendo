<?php
$usuario = strval($_POST['user']);


$conn = new mysqli("localhost", "id496900_root", "marielozo", "id496900_tesisdb");
// Check connection
if ($conn->connect_error) {
    die("Connection fallida: " . $conn->connect_error);
}else
{
	$query = "SELECT idUsuario FROM usuario WHERE carnet='$usuario';";
	$resultado = $conn->query($query);
	$row = $resultado->fetch_array(MYSQLI_ASSOC);
	$carnet = $row['idUsuario'];
	$query = "SELECT avance FROM avance WHERE Usuario_idUsuario=$carnet AND Contenido_Curso_idCurso=1;";
	$resultado = $conn->query($query);
	$resultadoDevolver = "{\"avances\":[";
	while($row = $resultado->fetch_array(MYSQLI_ASSOC)){	$resultadoDevolver= $resultadoDevolver.json_encode($row).",";}
	$resultadoDevolver = substr($resultadoDevolver,0,strlen($resultadoDevolver)-1);
	$resultadoDevolver = $resultadoDevolver. "]}";
    echo ($resultadoDevolver);
       
	   
	
	$resultado->close();
}
$conn->close();

?>