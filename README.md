# Room Navigator Survey Demo

This project is a Room Navigator Demo that uses SurveyJS to collect feedback from users after a meeting. The feedback is sent to a Webex bot via a PHP backend.

## Project Structure

```
.gitignore
docker-compose.yml
macro.js
README.md
Screenshots/
web/
  data/
    CiscoSans/
    error.log
    images/
    index.html
    script.js
    style.css
    webexbot.php
  nginx/
    default.conf
```

## Prerequisites

- Docker
- Docker Compose
- Webex device with Room Navigator on controller mode

## Getting Started

1. **Clone the repository:**

   ```sh
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Start the Docker containers:**

   ```sh
   docker-compose up -d
   ```

3. **Access the application:**

   Open your browser and navigate to `http://localhost:8080`.

4. **Upload macro to webex device**
   
To upload the macro.js file to a Webex device, follow these steps:

1. **Access the Webex Device:**
   - Open a web browser and navigate to the IP address of your Webex device that is connected with Room navigator, you can access via Webex admin hub.
   - Log in with the appropriate credentials.

Note: The Room navigator should be on controller mode and not persistent WbeApp or Room Booking mode.

- **Navigate to the Macro Editor:**
   - Go to the `Customization` menu.
   - Select `Macro editor` from the list.

- **Upload the Macro:**
   - Click on the `+` button to create a new macro.
   - Copy the contents of macro.js and paste it into the macro editor.
   - Save the macro with an appropriate name.

- **Activate the Macro:**
   - Ensure the macro is enabled by toggling the switch next to the macro name.
   - Click `Save` to apply the changes.

## Webex Bot Configuration

To send messages to a Webex room, you need a Webex bot token and the room ID where the messages will be sent.

1. **Create a Webex Bot:**
   - Go to the [Webex Developer Portal](https://developer.webex.com/) and log in.
   - Navigate to `My Apps` and click `Create a New App`.
   - Select `Create a Bot` and fill in the required details.
   - After creating the bot, you will receive a bot token. Save this token for later use.

2. **Get the Room ID:**
   - Use the [Webex API](https://developer.webex.com/docs/api/v1/rooms/list-rooms) to list the rooms and get the room ID where you want to send the survey results.
   - You can use tools like Postman or cURL to make the API request.

3. **Configure the Bot Token and Room ID:**
   - Open webexbot.php and replace `<token>` with your Webex bot token.
   - Replace `<roomId>` with the ID of the room where you want to send the survey results.


## File Descriptions

- **docker-compose.yml:** Defines the Docker services for the project.
- **macro.js:** Contains the macro logic for handling call disconnect events and displaying the survey.
- **web/data/index.html:** The main HTML file that includes SurveyJS and renders the survey.
- **web/data/script.js:** Contains the SurveyJS configuration and logic for sending survey results to the backend.
- **web/data/style.css:** Custom styles for the survey.
- **web/data/webexbot.php:** PHP backend that handles the survey results and sends them to the Webex bot.
- **web/nginx/default.conf:** Nginx configuration file.

## Survey Configuration

The survey is configured in script.js using SurveyJS. The survey consists of three pages:

1. **Page 1:** A rating question about the meeting experience.
2. **Page 2:** A checkbox question about specific issues faced during the meeting (visible if the rating is 4 or below).
3. **Page 3:** An optional comment question for additional feedback.

## Sending Survey Results

The survey results are sent to webexbot.php via a POST request. The PHP script processes the data and sends a message to a Webex room.



## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- [SurveyJS](https://surveyjs.io/)
- [Docker](https://www.docker.com/)
- [Webex](https://www.webex.com/)

---
