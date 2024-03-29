/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primaryColor: '#d6ac95',
                secondaryColor: '#787878',
            },
        },
    },
    plugins: [],
};
