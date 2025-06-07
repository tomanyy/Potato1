// wm.js
window.WindowManager = {
  windows: [],
  launch(appId, url) {
    const win = document.createElement("div");
    win.className = "window";
    win.style.top = Math.random() * 200 + "px";
    win.style.left = Math.random() * 200 + "px";
    win.innerHTML = `
      <div class="window-header">${appId}</div>
      <iframe src="${url}" class="window-content"></iframe>
    `;
    document.getElementById("window-container").appendChild(win);
    this.windows.push(win);
  }
};
