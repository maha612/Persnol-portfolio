// Update year automatically
document.getElementById("year").textContent = new Date().getFullYear();

// Copy email button
document.getElementById("copyEmail").addEventListener("click", () => {
  const email = document.getElementById("email").textContent;
  navigator.clipboard.writeText(email);
  alert("Email copied: " + email);
});
