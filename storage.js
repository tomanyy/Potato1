// storage.js
window.WebStorage = {
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get(key, defaultValue = null) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  },
  remove(key) {
    localStorage.removeItem(key);
  }
};
