<html>
<head>
   <link rel="stylesheet" href="./styles.css">
</head
<body>
<h1>Update contact information

<img src="https://play-lh.googleusercontent.com/D-haUsSx771Pt4brCyFEJUNKZaC8NUsD2bMB-ZL_yE2LnYdmt3YbgfZwDDM9B-wBHw=w240-h480-rw" height=100 width=100 align=right><br>
</h1>
<?php

	echo "<form action='update.php?ID={$_GET['ID']}' method='post'>";
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

		$sql ="SELECT * FROM `telephone_directory` WHERE ID='$_GET[ID]'";
		
		if ( @mysql_query ( $sql ) )
			{
				$query = mysql_query ( $sql );

			$row = mysql_fetch_assoc ( $query );
				echo "
				Contact Name: <input type='text' name='contact_name' value='{$row['contact_name']}'/><br>
				Contact Profession: <input type='text' name='contact_profession' value='{$row['contact_profession']}'/><br>
				Contact Telephone Number: <input type='text' name='contact_Tel_number' value='{$row['contact_Tel_number']}'/><br>
				Contact Mobile Number: <input type='text' name='contact_mobile_number' value='{$row['contact_mobile_number']}'/><br>
				";
			}
			else {
				die ( mysql_error() );
			}	
	        
	}
	else {
		trigger_error ( mysql_error(), E_USER_ERROR );
	}

	

			
?>
<input type="submit" value='Update' />
<input type="reset">
</form>

</body>
</html> 