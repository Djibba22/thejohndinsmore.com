<?php


include("application/models/views.php");
$views = new Views();


if(!empty($_GET['action'])){



}else{
	$views->getViews("application/views/head.php");
	$views->getViews("application/views/nav.php");
	$views->getViews("application/views/home.php");
	$views->getViews("application/views/footer.php");

}
// class project extends controller(){
// 	$views->getViews("application/views/head.php");
// 	$views->getViews("application/views/nav.php");
// 	$views->getViews("application/views/projects.php");
// 	$views->getViews("application/views/footer.php");

// }


?>