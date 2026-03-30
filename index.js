const whatsappBtn = document.getElementById("whatsappBtn");

whatsappBtn.addEventListener("click", function () {
  const phoneNumber = "919366100346"; // Replace with your number
  const whatsappURL = `https://wa.me/${phoneNumber}`;

  window.open(whatsappURL, "_blank");
});