const terminal = document.getElementById("terminal");
const commandBox = document.getElementById("command");
const preText = document.getElementById("preText");


while (localStorage.getItem("name") == null) {
    localStorage.setItem("name", prompt("What is your name?"));
    continue;
}
const name = localStorage.getItem("name");

preText.innerHTML = `<p class="uncentered">${name}@chromebook/ =&gt;&nbsp;&nbsp;</p>`

commandBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const input = event.target.value.trim();
        const input2 = input.toLowerCase().trim();
        if (commands.hasOwnProperty(input2)) {
            event.target.value = "";
            terminal.innerHTML += `<p class="uncentered">${name}@chromebook/${path} =&gt; ${input}</p>`;
            commands[input]();
        } else {
            terminal.innerHTML += `<p class="uncentered">${name}@chromebook/${path} =&gt; ${input}</p>`;
            terminal.innerHTML += '<p class="uncentered">Command not found\nTry "help" for some help.<p><br>';
            event.target.value = "";
        }
    }
});
document.addEventListener("click", function () {
    document.getElementById("command").focus();
});
document.addEventListener('keydown', function() {
    document.getElementById("command").focus();
});