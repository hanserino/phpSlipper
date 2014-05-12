<?php
//Set server root path for more specific and dynamic includes
global $path;

$path = array(
	"file" => array(
		"root" => $_SERVER['DOCUMENT_ROOT'] . "/"
	),
	"uri" => array(
		"root" => "/"
	)
);


// FILE PARAMETERS
$path["file"]["partials"] = $path["file"]["root"] . "partials/";


// URI PARAMETERS
$path["uri"]["views"] = $path["uri"]["root"] . "views/";
$path["uri"]["css"] = $path["uri"]["root"] . "style/css/";
$path["uri"]["cssminified"] = $path["uri"]["root"] . "style/css/compressed/";
$path["uri"]["img"] = $path["uri"]["root"] . "images/";
$path["uri"]["js"] = $path["uri"]["root"] . "js/";
$path["uri"]["buildJs"] = $path["uri"]["root"] . "js/build/";
$path["uri"]["cssImg"] = $path["uri"]["root"] . "style/images/";

?>


