<?php 
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $post_data = file_get_contents("php://input");
    $json_data = json_decode($post_data);

    $response = array();

    // Validation for the "type" field.
    if (empty($json_data->type)) {
        $response['type_message'] = 'The "type" field is required.';
    } elseif (!preg_match('/^[a-zA-Z\-]+$/', $json_data->type)) {
        $response['type_message'] = 'The "type" field allows only alphabetical characters and "-".';
    } elseif (strlen($json_data->type) < 3 || strlen($json_data->type) > 10) {
        $response['type_message'] = 'The "type" field must be between 3 and 10 characters.';
    }

    // Validation for the "brand" field.
    if (empty($json_data->brand)) {
        $response['brand_message'] = 'The "brand" field is required.';
    } elseif (!preg_match('/^[a-zA-Z0-9&\-]+$/', $json_data->brand)) {
        $response['brand_message'] = 'The "brand" field allows only alphanumeric characters, "-", and "&".';
    } elseif (strlen($json_data->brand) < 2 || strlen($json_data->brand) > 20) {
        $response['brand_message'] = 'The "brand" field must be between 2 and 20 characters.';
    }

    echo json_encode($response);
}
?>