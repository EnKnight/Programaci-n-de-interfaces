<html>
	<body>
		<h1>Hola mundo!</h1>
		<?php
			$fecha = $_GET['fecha'];
			//$msg = $_GET['msg'];
			//$fecha = $_GET['fecha'];
			$enlace = mysql_connect('localhost','root','holis1234') or die(mysql_error());
			mysql_select_db('uaago',$enlace);
			if($enlace){
				echo "Conexión establecida exitosamente :D\n";
			} else{
				echo "Conexión no establecida :(";
			}
			
			$sql = "select * from fecha where fechaa = '".$fecha."'";
			$result = mysql_query($sql, $enlace);

			if(!$result){
				echo "Error enla consulta: ".mysql_error();
				exit();
			} else{
				while($row = mysql_fetch_row($result)){
					echo "[".$row[0]."]    [".$row[1]."]";
					
				}
				mysql_free_result($result);
			}
			

			
			//$query_exec = mysql_query("insert into fecha (id,fechaa,msg) values (default,'".$fecha."','".$msg."')"); 

			//appat,apmat,nombres,nomusr,fechanac,correo,edificio,turno, passwd1,passwd2
			/*$appat = $_POST['appat'];
			$apmat = $_POST['apmat'];
			$nombres = $_POST['nombres'];
			$nomusr = $_POST['nomusr'];
			$fechanac = $_POST['fechanac'];
			$correo = $_POST['correo'];
			$appat = $_POST['edificio'];
			$turno = $_POST['turno'];
			$passwd = $_POST['passwd2'];

			$query_exec = mysql_query("insert into cliente values (idcliente,nom_cliente,appat_cliente,nom_usuario
				edificio,fecha_nac_cliente,turno,apmat_cliente,passwd) values(default,'".$nombres."', '".$appat."','"
				.$nomusr."','".$edificio."','".$fechanac."',".$turno.",'".$apmat."','".$passwd."'')") or die (mysql_error());
			mysql_close($enlace);*/
				
		?>
	</body>
</html>