if (window.location.protocol === "https:") {
  var ws_scheme = "wss://";
} else {
  var ws_scheme = "ws://";
}
var socket = new WebSocket(ws_scheme + location.host + "/ws");

socket.onopen = function (e) {
  console.log("Connection established!");
};

socket.onmessage = function (e) {
  console.log("Message received: " + e.data);

  var messages = document.getElementById("messages");
  messages.innerHTML += e.data + "<br>";
};

socket.onclose = function (e) {
  console.log("Connection closed!");
};

function sendMessage() {
  var message = document.getElementById("message").value;
  if (message === "") {
    return;
  }
  socket.send(message);

  document.getElementById("message").value = "";
}
