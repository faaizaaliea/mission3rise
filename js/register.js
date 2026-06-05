const form = document.querySelector("#registerForm");

const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

const togglePassword = document.querySelector("#togglePassword");
const toggleConfirmPassword = document.querySelector("#toggleConfirmPassword");

// Toggle password
togglePassword?.addEventListener("click", () => {
  password.type = password.type === "password" ? "text" : "password";
});

// Toggle konfirmasi password
toggleConfirmPassword?.addEventListener("click", () => {
  confirmPassword.type =
    confirmPassword.type === "password" ? "text" : "password";
});

// Submit form
form?.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  if (password.value !== confirmPassword.value) {
    alert("Konfirmasi kata sandi tidak cocok.");
    return;
  }

  alert("Pendaftaran berhasil!");
  window.location.href = "index.html";
});
