<?php

include 'conexion_be.php';

$user = $_POST['user'];
$mail = $_POST['mail'];
$password = $_POST['password'];

// Conectando, seleccionando la base de datos
$query = "INSERT INTO usuarios(user, mail, password) VALUES ('$user','$mail','$password')";

//Verificar que el correo no se repita
$verificar_correo = mysqli_query($conexion, "SELECT * FROM usuarios WHERE mail = '$mail' ");

if (mysqli_num_rows($verificar_correo) > 0) {
    echo '
        <script>
        alert("Este correo ya está registrado, intenta con otro diferente");
        </script>
        ';
    exit();
}

//Verifgicar que el nombre de usuario no se repita
$verificar_usuario = mysqli_query($conexion, "SELECT * FROM usuarios WHERE user = '$user' ");

if (mysqli_num_rows($verificar_usuario) > 0) {
    echo '
        <script>
        alert("Este usuario ya está registrado, intenta con otro diferente");
        </script>
        ';
    exit();
}

//Ejecutar consulta
$ejecutar = mysqli_query($conexion, $query);

if ($ejecutar) {
    $_SESSION['user'] = $user;
    echo
        '
       <script>
           alert("Usuario almacenado exitosamente");
           window.location = "../main.php";
        </script>
       ';
} else {
    echo
        '
       <script>
       alert("No se pudo almacenar el usuario");
           window.location = "../index.php";
        </script>
       '
    ;
}
?>