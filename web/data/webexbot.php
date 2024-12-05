<?php

// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Log errors to a file
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/error.log');

$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['roomName']) && isset($data['deviceId']) && isset($data['surveyData'])) {
    $roomName = $data['roomName'];
    $deviceId = $data['deviceId'];
    $surveyData = $data['surveyData'];

    $message = "## Survey Results for Room: **$roomName**\n";
    $message .= "### Device ID: **$deviceId**\n\n";
    foreach ($surveyData as $question => $response) {
        $message .= "#### $question\n";
        if (is_array($response)) {
            $message .= "- " . implode("\n- ", $response) . "\n";
        } else {
            $message .= "$response\n";
        }
        $message .= "\n";
    }

    // Send the message to Webex group
    $webexToken = '<token>';
    $webexRoomId = '<roomId>';

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://webexapis.com/v1/messages');
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
        'roomId' => $webexRoomId,
        'markdown' => $message
    ]));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Bearer ' . $webexToken,
        'Content-Type: application/json'
    ]);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // Disable SSL verification
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false); // Disable SSL verification

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    if ($httpCode != 200) {
        $curlError = curl_error($ch);
        error_log('Failed to send message to Webex: ' . $response . ' | cURL error: ' . $curlError);
        echo json_encode(['status' => 'error', 'message' => 'Failed to send message to Webex', 'response' => $response, 'curlError' => $curlError]);
    } else {
        echo json_encode(['status' => 'success', 'response' => $response]);
    }
    curl_close($ch);
} else {
    error_log('Invalid data received: ' . json_encode($data));
    echo json_encode(['status' => 'error', 'message' => 'Invalid data']);
}

?>