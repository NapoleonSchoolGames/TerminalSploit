const terminal = document.getElementById("terminal");
const commandBox = document.getElementById("command");
const preText = document.getElementById("preText");
if (localStorage.getItem("name") == null) {
    localStorage.setItem("name", prompt("What is your name?"));
}
const name = localStorage.getItem("name");
preText.innerHTML = `<p class="uncentered">${name}@chromebook/${path} =&gt;&nbsp;&nbsp;</p>`

commandBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const input = event.target.value.trim();
        const input2 = event.target.value.trim().toLowerCase();
        if (commands.hasOwnProperty(input2)) {
            event.target.value = "";
            terminal.innerHTML += `<p class="uncentered">${name}@chromebook/${path} =&gt; ${input}</p>`;
            commands[input2]();
        } else {
            terminal.innerHTML += `<p class="uncentered">${name}@chromebook/${path} =&gt; ${input}</p>`;
            terminal.innerHTML += '<p class="uncentered">Command not found</p><p class="uncentered">Try "help" for some help.<p><br>';
            event.target.value = "";
        }
    }
});
document.addEventListener("click", function () {
    document.getElementById("command").focus();
});
document.addEventListener("keydown", function() {
    document.getElementById("command").focus();
});