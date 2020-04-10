<?php
 $inputJSON = file_get_contents('php://input');
 $input = json_decode($inputJSON, TRUE);

 $conect = new mysqli('127.0.0.1','root','','owlleng');
 if($_SERVER['REQUEST_METHOD'] == 'GET'){
        $data = array();
        $sql = $conect->query("SELECT * FROM `teachers`");
        while ($d = $sql->fetch_assoc()) {
            $data[] = $d;   
    }
    exit(json_encode($data));
}
else if($_SERVER['REQUEST_METHOD'] == 'PUT'){
    if(TRUE){
        $data = array();
        $sql = $conect->query("SELECT `reviews` FROM `teachers` WHERE `id`=1");
        $data = unserialize($sql->fetch_assoc()['reviews']);
        $data[] = 4;
        
    exit(json_encode(serialize($data)));
        
    } else exit(json_encode( array("status" => 'Error')));

    
    
}