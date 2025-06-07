document.getElementById('start-button').onclick = () => {
  const menu = document.getElementById('start-menu');
  menu.classList.toggle('hidden');
};

function launchApp(appName) {
  const win = document.createElement('div');
  win.classList.add('window');
  win.style.top = Math.random() * 300 + 'px';
  win.style.left = Math.random() * 300 + 'px';
  win.innerHTML = `<iframe src="apps/${appName}.html"></iframe>`;
  document.getElementById('window-container').appendChild(win);
  document.getElementById('start-menu').classList.add('hidden');
}
