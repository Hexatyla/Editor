<?php
if (empty($_POST['name']) && empty($_POST['content']))
	return;
$name = $_POST['name'];
$content = $_POST['content'];
if (!preg_match("/^[a-zA-Z0-9\ ]+\.hxtl$/", $name))
    return;
$dirname = '../hxtl/';
$namePath = $dirname . $name;
$file = fopen($namePath, 'w');
fputs($file, $content);
echo "end:";
fclose($file);
?>