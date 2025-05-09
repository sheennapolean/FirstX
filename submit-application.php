<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $position = $_POST['position'];
    $additional_info = $_POST['additional-info'];

    // Email recipient
    $to = "sheennapolean@gmail.com";
    $subject = "Job Application - " . $position;

    // Prepare the email body
    $message = "
    <html>
    <head>
        <title>Job Application</title>
    </head>
    <body>
        <h3>Application Details</h3>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Position Applying For:</strong> $position</p>
        <p><strong>Additional Information:</strong> $additional_info</p>
    </body>
    </html>
    ";

    // Header for HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";

    // Email From
    $headers .= "From: $email" . "\r\n";

    // Handle file upload (CV)
    if (isset($_FILES['cv']) && $_FILES['cv']['error'] == 0) {
        $file_tmp_name = $_FILES['cv']['tmp_name'];
        $file_name = $_FILES['cv']['name'];
        $file_type = $_FILES['cv']['type'];
        $file_content = file_get_contents($file_tmp_name);
        $encoded_file = chunk_split(base64_encode($file_content));

        // Boundaries for multi-part email
        $boundary = md5(time());

        // Add the attachment to the email body
        $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"" . "\r\n";
        $message = "--$boundary\r\n";
        $message .= "Content-Type: text/html; charset=UTF-8\r\n";
        $message .= "Content-Transfer-Encoding: 7bit\r\n";
        $message .= $message . "\r\n";
        
        $message .= "--$boundary\r\n";
        $message .= "Content-Type: $file_type; name=\"$file_name\"\r\n";
        $message .= "Content-Transfer-Encoding: base64\r\n";
        $message .= "Content-Disposition: attachment; filename=\"$file_name\"\r\n";
        $message .= "\r\n";
        $message .= $encoded_file . "\r\n";
        $message .= "--$boundary--";
    }

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Application submitted successfully!";
    } else {
        echo "There was an error submitting your application. Please try again later.";
    }
}
?>
