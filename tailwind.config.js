/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'], // Adds Poppins as the primary sans-serif font
                custom: ['CustomFont', 'sans-serif'], // Use your custom font
                Caveat: ['Caveat', 'cursive'], // Properly configured Caveat font
                Allura: ['Allura', 'cursive'], // Properly configured Allura font
            },
            colors: {
                myCustomGreen: '#6ee7b7',
                myCustomBG: '#20242c',
                myCustomGray: {
                    light: '#f5f5f5',
                    DEFAULT: '#cccccc',
                    dark: '#333333',
                },
            },
        },
    },
    plugins: [],
};
