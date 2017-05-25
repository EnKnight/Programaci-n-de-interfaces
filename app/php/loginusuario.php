<?php
	header("Access-Control-Allow-Origin: *");
	// header('Content-type: application/json');
	$nomusr = $_GET['nomusr'];
	$passwd = $_GET['passwd']; 
	$enlace = mysql_connect('localhost','root','holis1234') or die(mysql_error());

	mysql_select_db('escuela_danza',$enlace); 

	$sql = "select * from profesores where usuario='".$nomusr."' and pass='".$passwd."'";
	// $sql = "select * from profesores where usuario='soto,wong' and pass='won'";
	// $sql = "select * from infoedo";
	$result = mysql_query($sql, $enlace);
	// var $i=0;
	if(!$result){
		echo "Error enla consulta: ".mysql_error();
		exit();
	} else{
		// $general = array();
		$datos = array();
		$i=0;		
		while($row = mysql_fetch_array($result)){
			// $datos[] = $row; 
			// echo $row[0]."    ".$row[1]."    ".$row[2]."    ".$row[3]."    ".$row[4]."    ".$row[5]."<br>";
			$datos['usuario'][$i]['id'] = $row[0];
			$datos['usuario'][$i]['nom'] = $row[1];
			$datos['usuario'][$i]['appat'] = $row[2];
			$datos['usuario'][$i]['apmat'] = $row[3];
			$datos['usuario'][$i]['tarifa'] = $row[4];
			$datos['usuario'][$i]['nomusr'] = $row[5];
			$datos['usuario'][$i]['passwd'] = $row[6];

			// $datos['usuario'][$i]['grupo'] = $row[0];
			// $datos['usuario'][$i]['disciplina'] = $row[1];
			// $datos['usuario'][$i]['nombre'] = $row[2];
			// $datos['usuario'][$i]['horario'] = $row[3];
			// $datos['usuario'][$i]['dias'] = $row[4];
			// $datos['usuario'][$i]['fechai'] = $row[5];
			// $datos['usuario'][$i]['fechaf'] = $row[6];
			// $datos['estados'][$i]['id'] = $row[0];
			// $datos['estados'][$i]['img'] = $row[1];
			// $datos['estados'][$i]['nom'] = $row[2];
			// $datos['estado'][$i]['proyectos'] = (int)$row[3];
			// $datos['estado'][$i]['desc'] = $row[4];
			// $datos['estado'][$i]['totaldesc'] = (int)$row[5];
			// $i++;
			//echo $datos[$i];
			// echo $row[0]."    ".$row[1]."    ".$row[2]."    ".$row[3]."    ".$row[4]."    ".$row[5]."<br>";
			$i++;
		}
		// echo "<br><br>";
		echo json_encode($datos);
	}
?>