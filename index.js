const whatsappBtn = document.getElementById("whatsappBtn");

whatsappBtn.addEventListener("click", function () {
  const phoneNumber = "919366100346";
  window.location.href = `https://wa.me/${phoneNumber}`;
});