export default function decorate() {
  window.hlx.sidekick.add({
    id: 'hello',
    button: 'Hello',
    callback: () => {
      alert('Hello from my custom Sidekick plugin!');
    }
  });
}
