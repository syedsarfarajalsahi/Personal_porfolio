const whatsappBtn = document.getElementById("whatsappBtn");

whatsappBtn.addEventListener("click", function () {
  const phoneNumber = "919876543210"; // Replace with your number
  const whatsappURL = `https://wa.me/${phoneNumber}`;

  window.open(whatsappURL, "_blank");
});