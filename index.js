const whatsappBtn = document.getElementById("whatsappBtn");
const phoneNumber = "919366100346";

whatsappBtn.addEventListener("click", function () {
  const whatsappURL = `https://wa.me/${phoneNumber}`;
  window.open(whatsappURL, "_blank");
});