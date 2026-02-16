// Get DOM elements
const container = document.querySelector(".container");
const generateBtn = document.getElementById("generateBtn");
const qrInput = document.getElementById("qrInput");
const qrImg = document.querySelector(".qr-code-container img");
const qrCodeContainer = document.querySelector(".qr-code-container");
let preValue;

// Listen for a click on generate button
generateBtn.addEventListener("click", (e) => {
    // Prevent page from refreshing
    e.preventDefault(); 
    // Gets what the user types and removes spaces form beginning and end
    let qrValue = qrInput.value.trim();
    // prevents generating a qr code when input is empty OR generating the same QR code for the same input
    if (!qrValue || preValue === qrValue) return;

    // Saves the current input for comparison next time the function runs
    preValue = qrValue;

    // Gives visual feedback that the QR Code is being generated
    generateBtn.innerText = "Generating QR Code..."

    // Generate QR code using API and set the image source
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;

    // When the QR image finishes loading ...
    qrImg.addEventListener("load", () => {
        // Remove the hide class
        qrCodeContainer.classList.remove("hide");

        // Reset the button text
        generateBtn.innerText = "Generate QR Code";
    });
})

// Listen for typing in input field
qrInput.addEventListener("keyup", () => {
    // If the input is cleared
    if (!qrInput.value.trim()) {
        // Hide the container
        container.classList.add("hide");
        // Reset the previous value
        preValue = "";
    }
});