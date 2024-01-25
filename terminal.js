const terminal = document.getElementById("terminal");
const commandBox = document.getElementById("command");
const preText = document.getElementById("preText");


let name = localStorage.getItem("name");

while (name === null || name === "") {
    temp = prompt("What is your name?");
    localStorage.setItem("name", temp);
    let name = localStorage.getItem("name")
}

preText.innerHTML = `<p class="uncentered">${name}@chromebook/ =&gt;&nbsp;&nbsp;</p>`

commandBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const input2 = input
        const input = event.target.value.toLowerCase().trim();
        if (commands.hasOwnProperty(input)) {
            event.target.value = "";
            terminal.innerHTML += `<p class="uncentered">${name}@chromebook/${path} =&gt; ${input2}</p>`;
            commands[input]();
        } else {
            terminal.innerHTML += `<p class="uncentered">${name}@chromebook/${path} =&gt; ${input2}</p>`;
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