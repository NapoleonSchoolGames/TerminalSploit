const terminal = document.getElementById("terminal");
const input = document.getElementById("input");

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const command = input.value.trim();
    input.value = "";

    if (command.toLowerCase() === "hello") {
      window.location.href = "./hello.html";
    } else {
      terminal.innerHTML += `root@chromebook => ${command}\ncommand not found\n`;
      terminal.scrollTop = terminal.scrollHeight;
    }
  }
});
