/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'Service-bg': "url('./src/assets/ServiceBG.png')",
        'Testimonial-bg': "url('./src/assets/13-3.png')",
      },
      colors: {
        primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#1ca9cc", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a", "950": "#172554" },
        gray:{
          '100': '#f9f9f9',
          '200': '#f3f3f3',
          '300': '#e9e9e9',
          '400': '#d4d4d4',
          '500': '#7f7f7f',
          '600': '#717171',
          '700': '#4a4a4a',
          '800': '#212121',
          '900': '#171717'
        }
      }
    },
    fontFamily: {
      'body': [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ],
      'sans': [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ]
    }
  },
  plugins: [],
}

