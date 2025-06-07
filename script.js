document.getElementById('start-button').onclick = () => {
  const menu = document.getElementById('start-menu');
  menu.classList.toggle('hidden');
};

function launchApp(appName) {
  const appUrl = `apps/${appName}.html`;
  WindowManager.launch(appName, appUrl);
  document.getElementById('start-menu').classList.add('hidden');
}
