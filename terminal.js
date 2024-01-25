const terminal = document.getElementById("terminal");
const commandBox = document.getElementById('command');
commandBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const input = event.target.value.toLowerCase().trim();
        if (commands.hasOwnProperty(input)) {
            event.target.value = "";
            terminal.innerHTML += `<p class="uncentered">root@chromebook/${path} =&gt; ${input}</p>`;
            commands[input]();
        } else {
            terminal.innerHTML += `<p class="uncentered">root@chromebook/${path} =&gt; ${input}</p>`;
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