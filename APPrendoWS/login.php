<?php
echo "hola";
$email = strval($_POST['email']);
$password = strval($_POST['password']);

$conn = new mysqli("localhost", "root", "admin", "prueba");
// Check connection
if ($conn->connect_error) {
    die("Connection fallida: " . $conn->connect_error);
}else
{
	$query = "SELECT * FROM usuarios WHERE email='$email' AND password='$password';";
	$resultado = $conn->query($query);
	$row = $resultado->fetch_array(MYSQLI_ASSOC);
	
	if(!empty($row['email'])){
        echo "exito";
    }else{
        echo "fallo";
    }
	
	
	$resultado->close();
}
$conn->close();
?>