export default function decorate() {
  window.hlx.sidekick.add({
    id: 'themePlugin',
    button: 'Theme Plugin',
    callback: () => {
      alert('Hello from my custom Sidekick plugin!');
    }
  });
}
