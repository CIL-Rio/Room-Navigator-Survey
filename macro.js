import xapi from "xapi";

let callStartTime = null;
let deviceID = null;
let roomName = null;

// Get the device ID
xapi.status
  .get("SystemUnit Hardware Module SerialNumber")
  .then((serialNumber) => {
    deviceID = serialNumber;
    console.log("SN: " + deviceID);
  })
  .catch((error) => {
    console.error(error);
  });

// Get the room name
xapi.status
  .get("UserInterface ContactInfo Name")
  .then((name) => {
    roomName = name;
    console.log("Room Name: " + roomName);
  })
  .catch((error) => {
    console.error(error);
  });

// Handle call disconnect event
xapi.event.on("CallDisconnect", (event) => {
  console.log("Call Disconnected");
  console.log(event.Duration);
  console.log(deviceID);
  if (event.Duration > 0 && deviceID) {
    const encodedRoomName = encodeURIComponent(roomName);
    const encodedDeviceID = encodeURIComponent(deviceID);
    const url = `https://<domain>?roomName=${encodedRoomName}&deviceId=${encodedDeviceID}`;
    

    xapi.command("Presentation Stop").catch((error) => {
      console.error(error);
    });

    // Clear any existing web views to ensure the new one is displayed correctly
    xapi.command("UserInterface WebView Clear").catch((error) => {
      console.error(error);
    });

    // Delay of 3 seconds before opening the web page
    setTimeout(() => {
      console.log("URL: " + url);

      xapi
        .command("UserInterface WebView Display", {
          Url: url,
          //Target: 'Controller',
          Title: "Pesquisa de Satisfação",
          Mode: "Fullscreen",
        })
        .catch((error) => {
          console.error(error);
        });
    }, 2000);
  }
});
