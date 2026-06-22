const formElement = document.querySelector("#contactForm");
const messageBox = document.querySelector("#successMsg");

function displayMessage(text) {
    messageBox.textContent = text;
}

function clearForm() {
    formElement.reset();
}

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    displayMessage("Thank you! Your details have been received.");

    clearForm();
});
