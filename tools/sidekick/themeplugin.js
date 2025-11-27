export default function decorate(config, context) {
  return {
    actions: [
      {
        id: 'theme-selector',
        type: 'menu',
        text: 'Theme',
        items: [
          { text: 'Light Theme', value: 'light' },
          { text: 'Dark Theme', value: 'dark' },
          { text: 'Black Theme', value: 'black' }
        ],
        callback: (value) => {
          console.log('Theme selected:', value);

          document.body.style.background =
            value === 'light' ? 'white' :
            value === 'dark'  ? '#222'  :
                                'black';

          document.body.style.color =
            value === 'light' ? 'black' : 'white';
        }
      }
    ]
  };
}
