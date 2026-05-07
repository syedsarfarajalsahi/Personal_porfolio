const whatsappBtn = document.getElementById("whatsappBtn");
const phoneNumber = "919366100346";

whatsappBtn.addEventListener("click", () => {
  const whatsappURL = `https://wa.me/${phoneNumber}`;
  // Added window feature flags for additional security on redirect
  window.open(whatsappURL, "_blank", "noopener,noreferrer");
});