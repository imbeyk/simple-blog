
const toggleBtn = document.getElementById("toggle-dark");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  console.log("Button clicked!");
  body.classList.toggle("dark");
});
