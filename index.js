const whatsappBtn = document.getElementById("whatsappBtn");

whatsappBtn.addEventListener("click", function () {
  const phoneNumber = "919366100346"; // country code + number
  window.open(`https://wa.me/${phoneNumber}`, "_blank");
});