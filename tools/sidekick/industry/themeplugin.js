export default function decorate(config, context) {
  return {
    actions: [
      {
        id: 'themePluginAction',
        condition: () => true,
        button: {
          text: 'Theme Plugin',
          class: 'themeplugin'
        },
        callback: () => {
          alert('Theme Plugin button executed!');
        }
      }
    ]
  };
}
