const form = document.querySelector("#loginForm");
const password = document.querySelector("#password");
const togglePassword = document.querySelector("#togglePassword");

togglePassword?.addEventListener("click", () => {
  password.type = password.type === "password" ? "text" : "password";
});

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  alert("Login berhasil!");
  window.location.href = "home.html";
});
