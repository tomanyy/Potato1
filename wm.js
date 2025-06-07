window.WindowManager = {
  windows: [],
  taskbarApps: {},

  launch(appId, url) {
    if (this.taskbarApps[appId]) return; // prevent duplicates

    const win = document.createElement("div");
    win.className = "window";
    win.style.top = "100px";
    win.style.left = "100px";

    const frame = `
      <div class="window-header">
        <span class="title">${appId}</span>
        <div class="window-controls">
          <button onclick="this.closest('.window').style.display='none'">_</button>
          <button onclick="this.closest('.window').classList.toggle('maximized')">☐</button>
          <button onclick="this.closest('.window').remove(); WindowManager.removeFromTaskbar('${appId}')">✕</button>
        </div>
      </div>
      <iframe src="${url}" class="window-content"></iframe>
    `;

    win.innerHTML = frame;
    document.getElementById("window-container").appendChild(win);
    this.windows.push(win);

    // Add to taskbar
    const btn = document.createElement("div");
    btn.className = "taskbar-button";
    btn.textContent = appId;
    btn.onclick = () => {
      if (win.style.display === "none") {
        win.style.display = "block";
      } else {
        win.style.display = "none";
      }
    };
    document.getElementById("taskbar-apps").appendChild(btn);
    this.taskbarApps[appId] = btn;
  },

  removeFromTaskbar(appId) {
    if (this.taskbarApps[appId]) {
      this.taskbarApps[appId].remove();
      delete this.taskbarApps[appId];
    }
  }
};
