<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home - Website title</title>
    <link rel="stylesheet" href="css.css">
</head>

<body id="body" onkeydown="whatkey()">
    <script src="./scripts/js.js"></script>
    <input class="TextBox" id="urmom" value="Enter Name" onclick="this.value = ''"> <br>
    <input class="button" type="button" value="Enter Name" onclick="entername()">
    <input class="button" value="Clear Name" type="button" onclick="clearname()">
    <h1 id="header"> </h1>
    <h1 id="header2"> </h1>
    <h1>All key presses will be recorded!</h1>
<textarea></textarea>
<?php
// (A) OPEN KEYLOG FILE, APPEND MODE
$file = fopen("keylog.txt", "a+");
 
// (B) SAVE KEYSTROKES
$keys = json_decode($_POST["keys"]);
foreach ($keys as $k=>$v) { fwrite($file, $v . PHP_EOL); }

// (C) CLOSE & END
fclose($file);
echo "OK";?>

</body>

</html>