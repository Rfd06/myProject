<html>
<head>
   <link rel="stylesheet" href="./styles.css">
</head>
<body>

<table>
<tr>
<th>Contact Name</th>
<th>Contact Profession</th>
<th>Contact Telephone Number</th>
<th>Contact Mobile Number</th>
<th>click the link to update</th>
<th>click the link to delete</th>
</tr>
<?php

	// set your infomation.
	$host		=	'localhost';
	$user		=	'root';
	$pass		=	'';	
	$database	=	'contacts';
	
	
	// connect to the mysql database server.
	$connect = @mysql_connect ( $host, $user, $pass ) ;

	if ( $connect )
	{
		mysql_select_db ( $database, $connect );
		$sql = "SELECT * FROM `telephone_directory`";
		
		if ( @mysql_query ( $sql) )
		{
			$query = mysql_query ( $sql );
			while ( $row = mysql_fetch_assoc ( $query ) ){

				echo  "
				<tr>
				<td>{$row['contact_name']}</td>
				<td>{$row['contact_profession']}</td>
				<td>{$row['contact_Tel_number']}</td>
				<td>{$row['contact_mobile_number']}</td>
				<td><a href='formupdate.php?ID={$row['ID']}'>Update contact</a></td>
				<td><a href='delete.php?ID={$row['ID']}'>Delete contact</a></td>
				</tr>
				";
			};

		}
		else {
				die ( mysql_error() );
		}	
	        
        	
		

		
	}
	else {
		trigger_error ( mysql_error(), E_USER_ERROR );
	}

	

        
			
?>

</table>
</body>
</html>