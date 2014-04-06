<?php
if (empty($_POST['name']))
	return "1";
$name = $_POST['name'];
$dirname = '../hxtl/';
$dir = opendir($dirname);
while($file = readdir($dir)) {
	if($file == $name) {
		echo '1';
		closedir($dir);
		return;
	}
}
$name = $dirname . $name;
$file = fopen($name, 'w');
fclose($file);  
echo '0';
closedir($dir);
?>