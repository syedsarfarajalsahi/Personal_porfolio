const whatsappBtn = document.getElementById("whatsappBtn");

whatsappBtn.addEventListener("click", function () {
  const phoneNumber = "919876543210"; // country code + number
  window.open(`https://wa.me/${phoneNumber}`, "_blank");
});