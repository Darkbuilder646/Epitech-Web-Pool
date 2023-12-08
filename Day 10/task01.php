<?php 

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $post_data = file_get_contents("php://input");
    $json_data = json_decode($post_data);

    if ($json_data === null) {
        echo json_encode(array("error" => "Les données ne sont pas au format JSON"));
    } else {
        if (isset($json_data->name)) {
            $nameValue = $json_data->name;
            $response = array("name" => $nameValue);
            echo json_encode($response);
        } else {
            echo json_encode(array("error" => "La clé 'name' est manquante dans les données JSON"));
        }
    }
} else {
    echo json_encode(array("error" => "Cette page ne traite que les requêtes POST"));
}

?>