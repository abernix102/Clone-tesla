/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg-home': "url('./src/assets/Homepage-Model-3-Desktop-US (1).avif')",
        'custom-bg-home2': "url('./src/assets/Homepage-Model-Y-Desktop-US-v2.avif')",
        'custom-bg-home3': "url('./src/assets/Homepage-Model-X-Desktop-US.avif')", 
        'custom-bg-home4': "url('./src/assets/Homepage-Model-S-Desktop-US.avif')", 
        'custom-bg-home5': "url('./src/assets/Homepage-Cybertruck-Desktop.avif')", 
        'custom-bg-home6': "url('./src/assets/Homepage-SolarPanels-01-Desktop.avif')", 
        'custom-bg-home7': "url('./src/assets/Homepage-SolarRoof-Desktop-US.avif')", 
      },
    },
  },
  plugins: [],
}
