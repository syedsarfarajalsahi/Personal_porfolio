const whatsappBtn = document.getElementById("whatsappBtn");
const phoneNumber = "919366100346";

whatsappBtn.addEventListener("click", () => {
  const whatsappURL = `https://wa.me/${phoneNumber}`;
  // Added window feature flags for additional security on redirect
  window.open(whatsappURL, "_blank", "noopener,noreferrer");
});

const emailBtn = document.getElementById("emailBtn");

emailBtn.addEventListener("click", (e) => {
  // Prevent the default anchor behavior (which would jump to the top of the page)
  e.preventDefault(); 
  
  // Store the components separately
  const user = "syedsarfarajalsahi";
  const domain = "gmail.com";
  
  // Assemble and execute the OS interrupt Just-In-Time
  window.location.href = `mailto:${user}@${domain}`;
});