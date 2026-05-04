const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const charLeftBox = document.getElementById("charLeft");
const maxLength = message.getAttribute("maxlength");

message.addEventListener("input", () => {
    const charRemaining = maxLength - message.value.length;
    charLeftBox.textContent = `${charRemaining} Characters Remaining`;

    if (charRemaining <= 50) {
        charLeftBox.style.color = "red";
        charLeftBox.style.fontWeight = "bold";
    } else {
        charLeftBox.style.color = "#606060";
        charLeftBox.style.color = "normal";
    }
});
