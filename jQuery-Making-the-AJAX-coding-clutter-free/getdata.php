<?php	 
if(isset($_GET['name'])){
	echo 'We received name as : ' . $_GET['name'] . ' by GET';
}

if(isset($POST['name'])){
	echo 'We received name as : ' . $_POST['name'] . ' by POST';
}

/*

You can replace the above two if blocks with the following if block

if(isset($_REQUEST['name'])){
	echo 'We received name as : '. $_REQUEST['name'];
}

*/

?>