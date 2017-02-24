<?php

$usuario = strval($_GET['usuario']);
$leccion = strval($_GET['leccion']);
$respuesta =strval( $_GET['respuesta']);

$conn = new mysqli("localhost", "id496900_root", "marielozo", "id496900_tesisdb");
// Check connection
if ($conn->connect_error) {
    die("Connection fallida: " . $conn->connect_error);
}else
{
	
	$query = "SELECT idUsuario FROM id496900_tesisdb.usuario where id496900_tesisdb.usuario.carnet ='$usuario';";
	$resultado = $conn->query($query);
	$row = $resultado->fetch_array(MYSQLI_ASSOC);
	$id = $row['idUsuario'];
        
    $query = "SELECT idContenido FROM id496900_tesisdb.tema where id496900_tesisdb.tema.nombre ='$leccion';";
	$resultado = $conn->query($query);
	$row = $resultado->fetch_array(MYSQLI_ASSOC);
	$idLeccion = $row['idContenido'];

	
	$query = "INSERT INTO id496900_tesisdb.CasoPractico (Respuesta,Usuario_idUsuario,Contenido_Curso_idCurso,Contenido_Tema_idContenido) VALUES('$respuesta','$id',1,'$idLeccion');";
	//echo($query);
	$conn->query($query);
	
	//hacer insercion, hacer tabla.
	//$query = "INSERT INTO id496900_tesisdb.usuario (nombre,apellido,correo,password,carnet,imagen) VALUES('$nombre','$apellido','$correo','$contrasenia','$carnet','https://apprendo.000webhostapp.com/perfil.png');";
	//$resultado = $conn->query($query);
	//$row = $resultado->fetch_array(MYSQLI_ASSOC);
	echo ("Guardado");

}


$conn->close();
?>
