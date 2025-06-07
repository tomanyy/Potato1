window.WebOS = {
  kernelVersion: "1.0",
  apps: {},
  settings: {
    theme: "light",
    wallpaper: "default.jpg"
  },
  init() {
    this.loadSettings();
    this.applySettings();
    console.log("WebOS Kernel Loaded");
  },
  loadSettings() {
    const saved = localStorage.getItem("webos-settings");
    if (saved) this.settings = JSON.parse(saved);
  },
  saveSettings() {
    localStorage.setItem("webos-settings", JSON.stringify(this.settings));
  },
  applySettings() {
    if (this.settings.wallpaper) {
      document.body.style.backgroundImage = `url('assets/wallpapers/${this.settings.wallpaper}')`;
    }
    document.body.className = this.settings.theme;
  }
};

window.addEventListener("DOMContentLoaded", () => {
  WebOS.init();
});
