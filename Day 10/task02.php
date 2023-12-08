<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (isset($_POST["email"])) {
        $email = $_POST["email"];
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(200);
            echo json_encode(["message" => "Email address is valid"]);
        } else {
            http_response_code(400);
            echo json_encode(["message" => "Email address is not valid"]);
        }
    } else {
        http_response_code(400);
        echo json_encode(["message" => "Email parameter missing"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["message" => "Method not allowed"]);
}
?>
