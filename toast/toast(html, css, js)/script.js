const toast = document.getElementById("toast");

function showToast(message) {
  toast.querySelector(".toast-body").innerHTML = message;
  toast.classList.add("show");
}

function hideToast() {
  toast.classList.remove("show");
}
