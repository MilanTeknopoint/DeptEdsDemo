// scripts/sidekick/theme-plugin-handler.js

export function handleThemePlugin({ detail }) {
    console.log('Theme plugin clicked → opening theme menu');

    detail.menu = {
        text: 'Choose Theme',
        items: [
            {
                text: 'Light Theme',
                value: 'light',
                callback: () => applyTheme('light')
            },
            {
                text: 'Dark Theme',
                value: 'dark',
                callback: () => applyTheme('dark')
            },
            {
                text: 'Black Theme',
                value: 'black',
                callback: () => applyTheme('black')
            }
        ]
    };
}

function applyTheme(selected) {
    console.log('Theme Selected:', selected);

    document.body.style.background =
        selected === 'light' ? 'white' :
            selected === 'dark' ? '#222' :
                'black';

    document.body.style.color =
        selected === 'light' ? 'black' : 'white';
}
