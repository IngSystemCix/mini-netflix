const btnSwitch = document.getElementById("dark-mode");
// Button toggles between dark mode and light mode
btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  } else {
    localStorage.setItem("dark-mode", "false");
  }
});

// Save localStorage darkMode
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.toggle("dark");
  btnSwitch.classList.add("active");
} else {
  document.body.classList.remove("dark");
  btnSwitch.classList.remove("active");
}
