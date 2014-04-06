<?php
if (empty($_POST['name']))
	return;
$name = $_POST['name'];
if (!preg_match("/^[a-zA-Z0-9\ ]+\.hxtl$/", $name))
    return;
$dirname = '../hxtl/';
$namePath = $dirname . $name;
$file = fopen($namePath, 'r');
$size = filesize($namePath);
if ($size <= 0)
	$size = 1;
$content = fread($file, $size);
print $content;
fclose($file);
?>