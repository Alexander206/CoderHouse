(function () {
  const formMessage = document.getElementById("form-message");
  const inputMessage = document.getElementById("input-message");
  const inputFullname = document.getElementById("input-fullname");
  const listMessage = document.getElementById("list-message");
  let messages = [];

  const socket = io();

  function showMessage(data) {
    const li = document.createElement("li");

    li.innerHTML = `<p> <strong> ${data.fullname} </strong> : ${data.message}</p>`;
    listMessage.appendChild(li);
  }

  formMessage.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = {
      fullname: inputFullname.value,
      message: inputMessage.value,
    };

    socket.emit("new-message", data);
  });

  socket.on("connect", () => {
    console.log("Conectados al servidor");
  });

  socket.on("history-message", (data) => {
    messages = data;
    listMessage.innerText = "";
    messages.forEach((message) => {
      showMessage(message);
    });
  });

  socket.on("notification", (data) => {
    messages.push(data);
    showMessage(data);
  });
})();
