# Noor 
Noor is  web bot ,resolved questions that you Provide to him in English only. 
through algorithm ,it looking for the answers in the internet .

##DEMO
http://noor.think3r.net

##Documentation
<code>
<?php

require_once dirname(__FILE__) . "/Noor.php"; // Load Noor Class ...
</code>
<br>
<code>
$Noor = new Noor; // Call Noor Class
</code>
<br>
<code>
$Runn = $Noor->Get("Who is the owner of facebook "); // Get Answer  
// Return is array 
</code>
<br>

<code>
var_dump($Runn);
echo "<br />".$Runn['answer']."<br />" // Answer of question 

.$Runn['confidence']."<br />" // confidence of answer

.$Runn['title']; // title of answer

?>
</code>
<br>

## Contribution
Please contribute :) .

## License
**(The MIT License)**

Copyright (c) 2011 IT-Cyp3rs  x.c0d3rz000@gmail.com;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Credits
Noor Bot was created by Xc0d3rZ.
