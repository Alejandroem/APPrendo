<?php
$usuario = $_GET['usuario'];
$leccion = strval($_GET['leccion']);
$notaObtenida = strval($_GET['notaObtenida']);
$notaFinal = $notaObtenida * 20;
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
        
        $query = "UPDATE id496900_tesisdb.avance SET avance=$notaFinal WHERE Usuario_idUsuario='$id' AND Contenido_Curso_idCurso=1 AND Contenido_Tema_idContenido='$idLeccion';";
	    echo($query);
	
        $conn->query($query);
	
	
}


$conn->close();
?>