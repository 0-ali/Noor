<?php
require_once dirname(__FILE__) . "/Noor.php"; // Load Noor Class ...

$Noor = new Noor; // Call Noor Class

$Runn = $Noor->Get("Who is the owner of facebook "); // Get Answer  
// Return is array 
var_dump($Runn);
echo "<br />".$Runn['answer']."<br />" // Answer of question 
.$Runn['confidence']."<br />" // confidence of answer
.$Runn['title']; // title of answer

?>
