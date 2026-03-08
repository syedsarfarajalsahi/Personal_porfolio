// Function to generate a random hexadecimal color
function generateRandomColor() {
    // Generate a random number up to 0xFFFFFF (16777215)
    let maxVal = 0xFFFFFF; 
    let randomNumber = Math.floor(Math.random() * maxVal);
    // Convert to a hexadecimal string and pad with leading zeros if necessary
    let randColor = randomNumber.toString(16).padStart(6, '0');
    return `#${randColor.toUpperCase()}`; // Prepend # and convert to uppercase
}

// Function to change the text color
function changeTextColorOnLoad() {
    const textElement = document.getElementById('dynamic-text');
    if (textElement) { // Check if the element exists
        textElement.style.color = generateRandomColor();
    }
}

// Run the function when the page loads
document.addEventListener('DOMContentLoaded', changeTextColorOnLoad);
