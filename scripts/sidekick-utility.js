export function registerSidekickEvent(eventName, callback) {
  const attach = () => {
    const sk = document.querySelector('aem-sidekick');
    if (!sk) return;

    sk.addEventListener(`custom:${eventName}`, callback);
    console.log(`[Sidekick] Registered → custom:${eventName}`);
  };

  // If Sidekick already exists
  const sk = document.querySelector('aem-sidekick');
  if (sk) {
    attach();
  } else {
    // Wait for Sidekick to load
    document.addEventListener('sidekick-ready', attach, { once: true });
  }
}
