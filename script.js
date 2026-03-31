const toast = document.getElementById("toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("visible");
  }, 2400);
}

document.getElementById("statusButton")?.addEventListener("click", () => {
  const roadmap = document.querySelector(".roadmap-section");
  roadmap?.scrollIntoView({ behavior: "smooth", block: "start" });
});
