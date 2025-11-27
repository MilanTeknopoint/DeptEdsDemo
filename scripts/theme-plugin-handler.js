// scripts/sidekick/theme-plugin-handler.js

export function handleThemePlugin({ detail }) {
  console.log('Theme plugin clicked → opening theme menu');

  detail.menu = {
    text: 'Choose Theme',
    items: [
      { text: 'Light Theme', value: 'light' },
      { text: 'Dark Theme',  value: 'dark'  },
      { text: 'Black Theme', value: 'black' }
    ],
    callback: (selected) => {
      console.log('Theme Selected:', selected);

      // Apply theme to DOM
      document.body.style.background =
        selected === 'light' ? 'white' :
        selected === 'dark'  ? '#222'   :
                               'black';

      document.body.style.color =
        selected === 'light' ? 'black' : 'white';
    }
  };
}
