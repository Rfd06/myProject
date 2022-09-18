<html>
<body>

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

		$query="UPDATE telephone_directory SET contact_name = '$_POST[contact_name]', contact_profession = '$_POST[contact_profession]' ,
                 contact_Tel_number = '$_POST[contact_Tel_number]', contact_mobile_number = '$_POST[contact_mobile_number]'
                WHERE ID='$_GET[ID]'";

		
		if ( @mysql_query ( $query ) )
			{
				echo 'Record Updated Successfuly';
			}
			else {
				die ( mysql_error() );
			}	
	        
	}
	else {
		trigger_error ( mysql_error(), E_USER_ERROR );
	}

	

        
			
?>


</body>
</html>