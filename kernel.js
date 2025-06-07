// kernel.js
window.WebOS = {
  kernelVersion: "1.0",
  apps: {},
  settings: {
    theme: "light",
    wallpaper: "default.jpg"
  },
  init() {
    this.loadSettings();
    console.log("WebOS Kernel Loaded");
  },
  loadSettings() {
    const saved = localStorage.getItem("webos-settings");
    if (saved) {
      this.settings = JSON.parse(saved);
    }
  },
  saveSettings() {
    localStorage.setItem("webos-settings", JSON.stringify(this.settings));
  },
};
