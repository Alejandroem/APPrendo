<?php
echo(count($_GET));
$nombre = $_GET['n'];
$apellido = strval($_GET['a']);
$correo = strval($_GET['co']);
$carnet = $_GET['ca'];
$contrasenia = strval($_GET['con']);
$conn = new mysqli("localhost", "id496900_root", "marielozo", "id496900_tesisdb");
// Check connection
if ($conn->connect_error) {
    die("Connection fallida: " . $conn->connect_error);
}else
{
   $query = "INSERT INTO id496900_tesisdb.usuario (nombre,apellido,correo,password,carnet,imagen) VALUES('$nombre','$apellido','$correo','$contrasenia','$carnet','https://apprendo.000webhostapp.com/perfil.png');";
	    echo($query);
	
        $conn->query($query);
	
	
}


$conn->close();
?>