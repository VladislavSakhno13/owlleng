<?php
 $inputJSON = file_get_contents('php://input');
 $input = json_decode($inputJSON, TRUE);

 $conect = new mysqli('127.0.0.1','root','','owlleng');
 if($_SERVER['REQUEST_METHOD'] == 'GET'){
    
        $data = array();
        $sql = $conect->query("SELECT * FROM `student`");
        while ($d = $sql->fetch_assoc()) {
            $data[] = $d;   
    }
    exit(json_encode($data));
}

else if($_SERVER['REQUEST_METHOD'] == 'POST'){
   

    if($input['pass'] !=""){
        $sql = $conect->query("SELECT * FROM `student` WHERE `password` = $input[pass]");
        $data = $sql->fetch_assoc();
        if($data != NULL){
            exit(json_encode($data));
        }
        else{
            exit(json_encode("error"));
        }
        //exit(json_encode($data));
    } else exit(json_encode( array("status" => 'Error')));

    
    
}
else if($_SERVER['REQUEST_METHOD'] == 'PUT'){
    if(!isset($_GET['id'])){
        exit(json_encode('error'));
    } else {
        
        $conect->query("UPDATE `a place` SET `place` = '$input[newplace]'  WHERE `id` = $_GET[id]");
        $sql = $conect->query("SELECT * FROM `a place` ORDER BY id DESC LIMIT 1");
        $data = $sql->fetch_assoc();
        exit(json_encode($data));
    }
    
   
}
else if($_SERVER['REQUEST_METHOD'] == 'DELETE'){
        if(isset($_GET['id'])){
        $string = $conect->query("SELECT * FROM `a place` WHERE `id` = $_GET[id]");
        $resault = mysqli_fetch_row($string);
        $data = null;
        $conect->query("DELETE  FROM `a place` WHERE `id` = $_GET[id]");
        exit(json_encode($data));
    } else exit(json_encode('error'));
}
?>