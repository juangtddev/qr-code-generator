const apiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

const qrText = document.getElementById("qrText");
const imgBox = document.getElementById("imgBox");
const generateBtn = document.getElementById("generateBtn");

// Function to generate the QR code
function generateQR() {
    const text = qrText.value.trim(); // Clean the input text
    if (!text) {
        alert("Please enter some text or URL to generate a QR code.");
        imgBox.innerHTML = ""; // Clear the imgBox if input is empty
    } else {
        // Create a new img element
        const qrCode = document.createElement("img");
        qrCode.src = apiUrl + encodeURIComponent(text); // Set the src attribute with the encoded URL
        qrCode.alt = "QR Code"; // Add an alt attribute for accessibility

        // Clear previous QR codes from imgBox
        imgBox.innerHTML = ""; // Clear existing QR code(s) before appending the new one
        imgBox.appendChild(qrCode); // Append the new img element to imgBox
    }
}

// Event listener for the generate button
generateBtn.addEventListener("click", generateQR);

// Event listener for input changes to clear the QR code image
qrText.addEventListener("input", () => {
    imgBox.innerHTML = ""; // Clear the imgBox when the input changes
});
