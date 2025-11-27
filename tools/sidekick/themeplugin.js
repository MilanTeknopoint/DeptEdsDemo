export default function decorate(config, context) {
  return {
    actions: [
      {
        id: 'theme-selector',
        type: 'menu',
        text: 'Theme Plugin',
        items: [
          { text: 'Light Theme', value: 'light' },
          { text: 'Dark Theme', value: 'dark' }
        ],
        callback: (value) => console.log('Selected theme:', value)
      }
    ]
  };
}
