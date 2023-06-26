<?php
/*Localhost to 127.0.0.1:33065. Por el cambio en el puerto para XAMPP*/
$conexion = mysqli_connect("127.0.0.1:33065","root","","bbcc_db");

/*Comprobar la conexión
if($conexion){
    echo 'Conectado exitosamente a la base de datos';
} else {
    echo 'No se ha podido conectar a la base de datos';
}
*/
?>