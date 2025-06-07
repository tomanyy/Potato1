// wm.js

window.launchApp = function(appId) {
  const appWindow = document.createElement("div");
  appWindow.className = "window";
  appWindow.innerHTML = `
    <div class="window-header">
      <span class="title">${appId.charAt(0).toUpperCase() + appId.slice(1)}</span>
      <div class="window-controls">
        <button onclick="this.closest('.window').remove()">✖</button>
        <button onclick="minimizeWindow(this)">🗕</button>
        <button onclick="maximizeWindow(this)">🗖</button>
      </div>
    </div>
    <iframe src="apps/${appId}.html" class="window-content"></iframe>
  `;

  appWindow.style.top = `${Math.random() * 200 + 50}px`;
  appWindow.style.left = `${Math.random() * 200 + 50}px`;

  document.getElementById("window-container").appendChild(appWindow);
  makeDraggable(appWindow);
};

function makeDraggable(el) {
  const header = el.querySelector(".window-header");
  let offsetX = 0, offsetY = 0, isDragging = false;

  header.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - el.offsetLeft;
    offsetY = e.clientY - el.offsetTop;
    el.style.zIndex = Date.now();
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      el.style.left = `${e.clientX - offsetX}px`;
      el.style.top = `${e.clientY - offsetY}px`;
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });
}

function minimizeWindow(btn) {
  const win = btn.closest(".window");
  win.style.display = "none";
  // Optionally add to taskbar state
}

function maximizeWindow(btn) {
  const win = btn.closest(".window");
  win.classList.toggle("maximized");
}
