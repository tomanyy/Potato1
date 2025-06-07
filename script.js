document.addEventListener("contextmenu", e => {
  e.preventDefault();
  const menu = document.getElementById("context-menu");
  menu.style.top = e.pageY + "px";
  menu.style.left = e.pageX + "px";
  menu.classList.remove("hidden");
});

document.addEventListener("click", () => {
  document.getElementById("context-menu").classList.add("hidden");
});
