export default function decorate(sidekick) {
  sidekick.add({
    id: 'themePlugin',
    button: 'Theme Plugin',
    callback: () => {
      alert('Hello from my custom Sidekick plugin!');
    }
  });
}
