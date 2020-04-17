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
    for($i=0;$i<count($data);$i++){
        $endrew = array_sum(unserialize($data[$i]["reviews"]));
        $count1 = count(unserialize($data[$i]["reviews"]));
        if($count1 == 0){
            $data[$i]["reviews"] = 0;
        }
        else{
            $data[$i]["reviews"] = $endrew/$count1;
        }
    }
    exit(json_encode($data));
}
else if($_SERVER['REQUEST_METHOD'] == 'PUT'){
    if(TRUE){
        $rewdata = ($input['reviews1'] + $input['reviews2'] + $input['reviews3'] + $input['reviews4'] + $input['reviews5'])/5;
        $data = array();
        $sql = $conect->query("SELECT `reviews` FROM `teachers` WHERE `id`=$input[id]");
        $data = unserialize($sql->fetch_assoc()['reviews']);
        $data[] = $rewdata;
        $encodedata = serialize($data);
        $conect->query("UPDATE `teachers` SET `reviews` = '$encodedata'  WHERE `id` = $input[id]");
        $sql = $conect->query("SELECT `reviews` FROM `teachers` WHERE `id`=$input[id]");
        $newrew = unserialize($sql->fetch_assoc()['reviews']);
        $get_rew = array_sum($newrew)/count($newrew);
    exit(json_encode($get_rew));
        
    } else exit(json_encode( array("status" => 'Error')));

    
    
}