export default function decorate(config, context) {
  console.log('Theme Plugin Loaded:', { config, context });

  return {
    actions: [
      {
        id: 'themePluginAction',
        condition: () => true, // always show
        button: {
          text: 'Theme Plugin',
          // icon: '/path/to/icon.svg'  // optional
        },
        callback: () => {
          alert('Hello! Your Theme Plugin is working.');
        }
      }
    ]
  };
}
